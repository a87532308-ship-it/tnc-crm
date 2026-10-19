import Link from "next/link";

const themes = [
  { key: "calm", title: "A · 브랜드 블루", desc: "선택됨 · 전문성과 신뢰를 핵심 행동에만 사용", palette: ["#135ee7", "#edf4ff", "#f8fafc", "#b42318"] },
  { key: "warm", title: "B · 웜 그레이", desc: "상담 기록과 관계 중심의 인상", palette: ["#4b3b34", "#faf3ed", "#fcfaf8", "#b42318"] },
  { key: "fresh", title: "C · 딥 틸", desc: "파이프라인과 성과 흐름을 선명하게", palette: ["#0f4c4a", "#e9f7f4", "#f7fbfa", "#b42318"] }
];

export function ThemeReview() {
  return <main className="theme-page"><header className="decision-header"><div><p>테마 선택 · 시각 검수</p><h1>같은 화면, 다른 분위기</h1></div><Link href="/decision">← UI 의사결정</Link></header><section className="theme-grid">{themes.map(theme => <article className={`theme-card ${theme.key} ${theme.key === "calm" ? "chosen" : ""}`} key={theme.key} style={{ "--brand": theme.palette[0], "--tint": theme.palette[1], "--surface": theme.palette[2], "--danger": theme.palette[3] } as React.CSSProperties}><div className="theme-top"><div><b>{theme.title}</b><p>{theme.desc}</p></div><div className="swatches">{theme.palette.map(color => <i key={color} style={{ background: color }} />)}</div></div><div className="theme-phone"><p className="theme-label">오늘 할 일</p><div className="theme-kpi"><span>이번 달 첫 연락 완료율</span><strong>85%</strong><small>목표 100%</small></div><div className="theme-task"><div><em>1차 연락 대기</em><b>한빛모빌리티</b><span>교육 도입 범위 문의</span></div><time>오늘 2:30</time></div><button>1차 연락 완료</button><div className="theme-danger">기한 초과 · 1일</div></div></article>)}</section></main>;
}
