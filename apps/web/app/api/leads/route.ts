import { NextResponse } from "next/server";

type Lead = { id: string; company: string; contact: string; phone: string; service: string; note: string; createdAt: string };
const store = globalThis as unknown as { crmLeads?: Lead[] };
store.crmLeads ??= [];
const leads = store.crmLeads;

export async function GET() { return NextResponse.json(leads); }

export async function POST(request: Request) {
  const input = await request.json() as Omit<Lead, "id" | "createdAt">;
  if (!input.company || !input.contact || !/^01[0-9]-?\d{3,4}-?\d{4}$/.test(input.phone) || !input.note) {
    return NextResponse.json({ message: "입력값을 확인하세요." }, { status: 400 });
  }
  const lead: Lead = { ...input, id: crypto.randomUUID(), createdAt: new Date().toISOString() };
  leads.unshift(lead);
  return NextResponse.json(lead, { status: 201 });
}
