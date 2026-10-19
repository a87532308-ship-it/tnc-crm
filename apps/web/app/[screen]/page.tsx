import { MockScreen } from "../../components/MockScreen";

const screens = new Set(["board", "detail", "new", "billing", "performance", "companies", "admin"]);

export default async function ScreenPage({ params }: { params: Promise<{ screen: string }> }) {
  const { screen } = await params;
  const valid = screens.has(screen) ? screen : "home";
  return <MockScreen screen={valid as "home" | "board" | "detail" | "new" | "billing" | "performance" | "companies" | "admin"} />;
}
