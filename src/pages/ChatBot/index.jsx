import { useState, useRef, useEffect } from "react";
import { SendHorizontal } from "lucide-react";
import ReactMarkdown from "react-markdown";
import {
  Container,
  Welcome,
  ChatContainer,
  Messages,
  InputArea,
} from "./styles";

export default function ChatBot() {
  const user = JSON.parse(localStorage.getItem("user") || sessionStorage.getItem("user"));
  const userId = (user?.id);
  const userName = JSON.parse(localStorage.getItem("name") || sessionStorage.getItem("name"));
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);
  const today = new Date();
  const lastMonthDate = new Date(today.setMonth(today.getMonth() - 1));
  const lastMonth = lastMonthDate.toLocaleString("pt-BR", { month: "long" });
  const reportQuestion = `Gere o relatório de ${lastMonth}`;

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (pergunta) => {
    if (!pergunta.trim()) return;

    const userMsg = { sender: "user", text: pergunta };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setMessages((prev) => [...prev, { sender: "bot", text: "", loading: true }]);

    try {
      const response = await fetch(`https://web-site-fluxar.vercel.app/api/session/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pergunta }),
      });

      const data = await response.json();

      const botText = data?.resposta?.trim();

      setMessages((prev) => [
        ...prev.slice(0, -1),
        botText && botText.length > 0
          ? { sender: "bot", text: botText, loading: false }
          : { sender: "bot", text: "🤔 Desculpe, não consegui formular uma reposta." }
      ]);
    } catch (err) {
      console.log(err);
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { sender: "bot", text: "❌ Erro ao conectar com o servidor." },
      ]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    if (!showChat) setShowChat(true);
    sendMessage(input);
  };

  const handleSuggestion = (text) => {
    setShowChat(true);
    sendMessage(text);
  };

  return (
    <Container>
      {!showChat ? (
        <Welcome>
          <h1>Bem-vindo(a) ao Flux.AI, {userName}!</h1>
          <p>Tire dúvidas, insights e busque soluções</p>
          <div className="buttons">
            <button onClick={() => handleSuggestion("Como o Flux.AI pode me ajudar?")}>
            Como o Flux.AI pode me ajudar?
          </button>
          <button onClick={() => handleSuggestion(reportQuestion)}>
            Gere o relatório de {lastMonth}
          </button>
          <button onClick={() => handleSuggestion("Há altas e baixas inconsistentes")}>
            Há altas e baixas inconsistentes
          </button>
          </div>
          <InputArea onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pergunte..."
            />
            <button type="submit">
              <SendHorizontal size={20} />
            </button>
          </InputArea>
        </Welcome>
      ) : (
        <ChatContainer>
          <Messages ref={chatRef}>
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.sender} ${m.loading ? "loading" : ""}`}>
                <ReactMarkdown>{m.text}</ReactMarkdown>
              </div>
            ))}
          </Messages>
          <InputArea onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pergunte..."
            />
            <button type="submit">
              <SendHorizontal size={20} />
            </button>
          </InputArea>
        </ChatContainer>
      )}
    </Container>
  );
}