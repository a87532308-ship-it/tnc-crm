# 굿모닝테라유림부동산 CRM

모바일 중심의 영업 자동화 대시보드입니다. 기존 Emergent 상담 웹사이트에서 신규 상담을 받으며, CRM은 접수 이후의 연락·상태·계약·청구·입금 관리를 담당합니다.

## 프로젝트 구성

- `apps/web`: Next.js 모바일 CRM 화면
- `apps/api`: NestJS 기반 CRM API
- `apps/worker`: 비동기 알림·동기화·재시도 작업
- `docs`: 인터뷰로 확정한 제품·운영·설계 기준

## 시작

```powershell
npm install
npm run dev:web
```

구현과 배포 전 필수 환경 변수, 서비스 분리 원칙, 사용자 흐름은 [시스템 설계](docs/02-system-design.md)를 따릅니다.

6차 프로세스의 MVP 범위와 검수·안정화 순서는 [MVP 구축 계획](docs/04-mvp-build-plan.md)을 따릅니다.

