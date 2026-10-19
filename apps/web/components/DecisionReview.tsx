import Link from "next/link";
import type React from "react";

export function DecisionReview() {
  return <main className="decision-page">
    <header className="decision-header"><div><p>UI 의사결정 · 시각 검수</p><h1>모바일 CRM 예시</h1></div><Link href="/">← 목업으로</Link></header>
    <section className="comparison-list" aria-label="여섯 가지 UI 의사결정 비교">
      <Compare number="01" title="여유형 영업 카드 / 압축형 목록" left={<div className="airy-card"><span>1차 연락 대기</span><b>한빛모빌리티</b><small>교육 도입 범위 문의</small><em>오늘 2:30</em></div>} right={<div className="dense-list"><b>한빛모빌리티</b><span>1차 연락 대기 · 오늘 2:30</span><small>교육 도입 범위 문의</small></div>} />
      <Compare number="02" title="명시적 계약 저장 / 즉시 자동 저장" left={<div className="save-card"><input value="360,000,000원" readOnly /><button>계약 변경 저장</button></div>} right={<div className="save-card"><input value="360,000,000원" readOnly /><small>✓ 자동 저장 완료 · 오후 2:32</small></div>} />
      <Compare number="03" title="복잡한 입력 전체 화면 / 단일 선택 하단 시트" left={<div className="screen-choice"><b>계산서 수정</b><span>변경 유형</span><span>변경 금액</span><span>변경 발행일</span><span>변경 사유</span></div>} right={<div className="sheet-choice"><i /><b>다음 행동</b><span>견적 발송　›</span></div>} />
      <Compare number="04" title="핵심 행동 1개 / 모든 버튼 동일 강조" left={<div className="save-card"><b>한빛모빌리티</b><button>1차 연락 완료</button><small>전화하기　문자 남기기　이임</small></div>} right={<div className="many-buttons"><button>전화</button><button>문자</button><button>완료</button><button>이임</button></div>} />
      <Compare number="05" title="위험 중심 상태색 / 단계별 다색 배지" left={<div className="color-choice"><span>오늘 연락</span><b className="red">기한 초과 · 1일</b><span>견적 발송</span></div>} right={<div className="color-choice multi"><b>신규</b><b>상담</b><b>견적</b><b>계약</b></div>} />
      <Compare number="06" title="맥락별 금액 단위 / 모든 화면 원 단위" left={<div className="unit-choice"><input value="18,000,000원" readOnly /><b>요약 · 1,800만원</b><strong>전체 · 6.6억</strong></div>} right={<div className="unit-choice"><b>추산 가치 · 18,000,000원</b><b>파이프라인 · 660,000,000원</b><strong>실제 입금 · 43,400,000원</strong></div>} />
    </section>
    <section className="decision-grid">
      <article className="decision-card">
        <span className="number">01</span><h2>여유형 카드</h2>
        <div className="sample mobile-mini"><span className="tag">1차 연락 대기</span><h3>한빛모빌리티</h3><p>박서준 인재개발팀장</p><div className="mini-request">교육 도입 범위와 후속 변화관리 문의</div><div className="mini-footer"><b>오늘 2:30</b><button>상세 보기</button></div></div>
      </article>
      <article className="decision-card">
        <span className="number">02</span><h2>중요 입력은 명시적 저장</h2>
        <div className="sample form-sample"><label>계약 금액<input value="360,000,000" readOnly /><small>원</small></label><div className="autosave"><span>자동 저장 완료</span><time>오후 2:32</time></div><div className="inline-error">△ 입력한 금액이 이미 계약 합계에 반영됨</div></div>
      </article>
      <article className="decision-card wide-example">
        <span className="number">03</span><h2>전체 화면 + 하단 시트</h2>
        <div className="sample sheet-sample"><div className="dimmed-screen"><b>계산서 수정</b><p>4개 이상 입력 항목이면 전체 화면으로 전환</p><button>변경 내용 입력</button></div><div className="bottom-sheet full-flow"><i /><b>계산서 수정</b><div className="choice"><span>변경 유형 · 계산서 수정</span></div><div className="choice"><span>변경 금액 · 10,800,000원</span></div><div className="choice"><span>변경 발행일 · 2026. 8. 25</span></div><div className="choice"><span>변경 사유 · 고객 결제 일정 변경</span></div></div></div>
      </article>
      <article className="decision-card">
        <span className="number">04</span><h2>화면당 핵심 버튼 1개</h2>
        <div className="sample primary-sample"><span className="tag">1차 연락 대기</span><h3>오늘 해야 할 일</h3><p>한빛모빌리티 · 마감 2:30</p><button className="sample-primary big">1차 연락 완료</button><div className="quiet-actions"><span>전화하기</span><span>문자 남기기</span><span>이임</span></div></div>
      </article>
      <article className="decision-card">
        <span className="number">05</span><h2>빨강은 지연·오류·위험</h2>
        <div className="sample status-sample"><div><span className="soft-tag">오늘 연락</span><b>오늘 오후 2:30</b></div><div><span className="danger-tag">기한 초과 · 1일</span><b className="danger-text">즉시 확인</b></div><div><span className="soft-tag">견적 발송</span><b>재연락 D-2</b></div></div>
      </article>
      <article className="decision-card">
        <span className="number">06</span><h2>입력은 원 단위 · 요약은 만/억</h2>
        <div className="sample money-sample"><label>서비스별 추산 가치<input value="18,000,000" readOnly /><small>원</small></label><div className="money-summary"><span>가중 예상 수주</span><strong>1,800만원</strong><em>전체 파이프라인 6.6억</em></div></div>
      </article>
    </section>
  </main>;
}

function Compare({ number, title, left, right }: { number: string; title: string; left: React.ReactNode; right: React.ReactNode }) {
  return <article className="compare-row"><div className="compare-title"><span>{number}</span><h2>{title}</h2></div><div className="compare-options"><div><small>A</small>{left}</div><div><small>B</small>{right}</div></div></article>;
}
