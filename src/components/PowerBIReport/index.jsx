import {
  Container,
  DashboardContainer,
  Footer,
  FooterText,
  Header,
  Iframe,
  NavbarSpacer,
  Subtitle,
  Title,
} from "./styles";

export default function PowerBIDashboard() {
  const reportUrl =
    "https://app.powerbi.com/view?r=eyJrIjoiYjk3NTg0MGItM2Q5Yi00YTNkLTg3YjAtZTljOWE0M2RjMzE2IiwidCI6ImIxNDhmMTRjLTIzOTctNDAyYy1hYjZhLTFiNDcxMTE3N2FjMCJ9";

  return (
    <Container>
      <NavbarSpacer />

      <Header>
        <Title>Dashboard Analytics</Title>
        <Subtitle>Visualização em tempo real dos dados da empresa</Subtitle>
      </Header>

      <DashboardContainer>
        <Iframe title="Dashboard Power BI" src={reportUrl} allowFullScreen />
      </DashboardContainer>

      <Footer>
        <FooterText>Atualizado em tempo real • Power BI Embedded</FooterText>
      </Footer>
    </Container>
  );
}
