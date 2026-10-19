# CI/CD · Railway 배포 검수

## 고정 흐름

1. 기능 브랜치에서 Pull Request를 만든다.
2. CI가 TypeScript 검사와 전체 빌드를 통과해야 한다.
3. PR 승인 후 `develop`에 병합하면 Railway 스테이징으로 배포한다.
4. 스테이징 검수 승인 후 `main`에 병합하면 Railway 운영으로 배포한다.

## GitHub 설정

Repository secrets에 다음 값을 추가한다.

- `RAILWAY_TOKEN`: Railway 배포 토큰
- `RAILWAY_STAGING_SERVICE`: 스테이징 Web 서비스 이름 또는 ID
- `RAILWAY_PRODUCTION_SERVICE`: 운영 Web 서비스 이름 또는 ID

GitHub Environments에 `staging`, `production`을 만들고, `production`에는 본인 승인 규칙을 설정한다. 운영 배포 작업은 이 승인이 통과된 뒤 시작된다.

## Railway 설정

- 스테이징과 운영은 서로 다른 Railway 서비스·PostgreSQL을 사용한다.
- `apps/web/railway.toml`을 사용한다.
- 각 Web 서비스의 Root Directory는 `apps/web`으로 지정한다.
- `DATABASE_URL`, Google OAuth 값, Gmail·Webhook 키는 GitHub가 아닌 Railway 환경 변수에만 저장한다.
- 운영은 싱가포르 리전, HTTPS 도메인, `GET /` 헬스체크로 설정한다.

## 검수 기준

- PR CI 통과
- `develop` 배포 후 신규 영업 건 등록·조회 확인
- `main` 배포 전 GitHub Environment 승인
- 운영 배포 후 도메인 응답과 헬스체크 확인
