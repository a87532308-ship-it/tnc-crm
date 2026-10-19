"use client";
import Link from "next/link";
import { useState } from "react";

export default function ActivityPage() {
  const [saved,setSaved]=useState(false);
  return <main className="app-shell"><header className="screen-header"><div><p className="eyebrow">한빛모빌리티 · 1차 연락 대기</p><h1>← 활동 기록</h1></div></header>{saved?<section className="panel success-panel"><b>✓ 활동 기록 저장 완료</b><h2>다음 행동이 등록되었습니다.</h2><p>고객 응답을 기다리고, 다음 기한에 맞춰 오늘 할 일에 다시 표시됩니다.</p><Link href="/detail" className="wide primary">영업 건 상세로 돌아가기</Link></section>:<form onSubmit={e=>{e.preventDefault();setSaved(true)}}><section className="panel form"><label>고객과 접촉함<select><option>전화 완료</option><option>문자 발송</option><option>이메일 발송</option><option>미접촉</option></select></label><label>결과 요약<textarea required defaultValue="고객과 교육 도입 범위 및 진행 일정을 논의했습니다." /></label></section><section className="panel form"><div className="section-title"><h2>다음 행동</h2><span>필수</span></div><label>다음 행동 유형<select><option>고객 응답 대기</option><option>전화하기</option><option>견적서 발송</option><option>담당자 위임</option></select></label><label>다음 기한<input required type="datetime-local" defaultValue="2026-10-20T15:30" /></label></section><button className="wide primary" type="submit">활동 기록 저장</button></form>}</main>;
}
