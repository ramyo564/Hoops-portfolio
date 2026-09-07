import { diagrams } from './diagrams.js';

/**
 * Hoops Portfolio Configuration (DTO)
 * Awwwards-Standard Swiss Minimalist Specification
 */
export const portfolioConfig = {
    brand: 'YOHAN · BACKEND ARCHITECT',
    navLinks: [
        { label: 'Case Studies', href: '#cases' },
        { label: 'Architecture Docs ↗', href: 'https://ramyo564.github.io/Hoops/', target: '_blank' },
        { label: 'GitHub ↗', href: 'https://github.com/ramyo564/Hoops', target: '_blank' },
        { label: 'Contact', href: 'mailto:yohan032yohan@gmail.com' }
    ],
    hero: {
        kicker: 'Notion Portfolio Verification Funnel',
        headline: 'REAL-TIME RELIABILITY.<br>DEVOPS AUTOMATION.<br>ZERO EXCEPTION LEAK.',
        description: '실시간 소셜 플랫폼(Hoops)의 운영 효율 및 배포 안정성을 극대화한 백엔드 아키텍처 포트폴리오입니다. Docker Multi-stage 및 GitHub Actions 자동 배포, Redis 기반 블랙리스트 실시간 제재, JPA Specification 동적 쿼리 표준화, WebSocket 라우팅 정합성을 기계적으로 검증합니다.',
        killerMetrics: [
            { number: '80% UP', label: 'Deploy Speed', desc: '배포 리드타임 15m → 3m 단축' },
            { number: '58% CUT', label: 'Image Size', desc: '도커 이미지 600MB → 250MB 경량화' },
            { number: 'Real-Time', label: 'Ban Governance', desc: '신고 즉시 Redis 블랙리스트 격리' },
            { number: '90% Reuse', label: 'Query Standardization', desc: 'JPA Specification 동적 필터 통일' }
        ]
    },
    sectionIntro: {
        tag: 'Evidence Showcase',
        headline: '핵심 트러블슈팅 및 아키텍처 다이어그램',
        hint: '다이어그램을 클릭하면 고해상도 벡터 원본으로 확대 검증할 수 있습니다.'
    },
    cases: [
        {
            number: '01',
            category: 'REALTIME & MESSAGING',
            period: '2024.06',
            shortTitle: '채팅 재입장 중복 전송 제어',
            highlightMetric: '중복 전송 0건 (Destination 분리)',
            title: '실시간 채팅 재입장 시 과거 메시지 중복 전송 제어',
            summary: '초기 단일 채팅방(sessionId 공유) 구조의 공용 토픽 전송 문제를 유저별 식별자 기반 전용 목적지(Destination) 분리 구조로 리팩터링하여 재입장 시 과거 메시지 중복 노출을 원천 제거했습니다.',
            metrics: [
                { label: 'MESSAGE DUPLICATION', value: '발생 → 0건 (완전 차단)', highlight: true },
                { label: 'ROUTING SCOPE', value: '공용 Topic → 유저별 전용 Destination' },
                { label: 'CORE STACK', value: 'Spring WebSocket(STOMP), ChatService, JUnit5' }
            ],
            evidence: [
                {
                    tag: 'ARCHITECTURE',
                    title: '채팅 채널 분리 및 목적지 라우팅 아키텍처',
                    mermaidId: 'case-chat-channel-split'
                }
            ],
            detailLink: 'https://github.com/ramyo564/Hoops/blob/main/src/main/java/com/zerobase/hoops/chat/service/ChatService.java',
            detailLinkLabel: '핵심 구현 코드 확인 (ChatService.java) ↗'
        },
        {
            number: '02',
            category: 'GOVERNANCE & SECURITY',
            period: '2024.05',
            shortTitle: '블랙리스트 실시간 제재 동기화',
            highlightMetric: '신고 즉시 인증 차단 (Zero Latency)',
            title: '신고 처리에서 블랙리스트 라이프사이클 일관화 및 실시간 제재',
            summary: '신고 접수, 관리자 제재, 토큰 인증 차단을 분리된 상태에서 단일 운영 체인으로 연결했습니다. Redis 기반 Blacklist 동기화 및 TokenProvider 가드레일을 통해 제재 즉시 기존 세션을 무효화했습니다.',
            metrics: [
                { label: 'BAN ENFORCEMENT', value: '지연 반영 → 즉시 차단 (Zero-Delay)', highlight: true },
                { label: 'AUTH GATE', value: 'TokenProvider + Redis BlackList' },
                { label: 'LIFECYCLE', value: '신고 접수 → 제재 등록 → 토큰 차단 체인화' }
            ],
            evidence: [
                {
                    tag: 'ARCHITECTURE',
                    title: '신고-블랙리스트-토큰 인증 거버넌스 라이프사이클',
                    mermaidId: 'case-report-blacklist-lifecycle'
                }
            ],
            detailLink: 'https://github.com/ramyo564/Hoops/blob/main/src/main/java/com/zerobase/hoops/reports/service/ReportService.java',
            detailLinkLabel: '핵심 구현 코드 확인 (ReportService.java) ↗'
        },
        {
            number: '03',
            category: 'QUERY STANDARDIZATION',
            period: '2024.05',
            shortTitle: '동적 검색 Specification 표준화',
            highlightMetric: '검색 공수 90% 절감 (단일 DTO)',
            title: '동적 검색 필터 조합을 JPA Specification으로 표준화',
            summary: '경기 검색에서 필터 조건 조합 증가로 인한 API/쿼리 파편화 및 if-else 분기 폭증을 JPA Specification 체인으로 단일화하여 신규 조건 추가 공수를 90% 절감했습니다.',
            metrics: [
                { label: 'DEV EFFORT', value: '신규 필터 공수 90% 절감', highlight: true },
                { label: 'ENDPOINT', value: '파편화 → 단일 findFilteredGames API' },
                { label: 'QUERY PATTERN', value: 'notDeleted + startDate + and Chaining' }
            ],
            evidence: [
                {
                    tag: 'ARCHITECTURE',
                    title: 'JPA Specification 동적 필터 조합 엔진 구조',
                    mermaidId: 'case-dynamic-search-spec'
                }
            ],
            detailLink: 'https://github.com/ramyo564/Hoops/blob/main/src/main/java/com/zerobase/hoops/gameUsers/repository/GameCheckOutSpecifications.java',
            detailLinkLabel: '핵심 구현 코드 확인 (Specifications.java) ↗'
        },
        {
            number: '04',
            category: 'DATA CONSISTENCY',
            period: '2024.05',
            shortTitle: '매너포인트 평가 정합성 가드',
            highlightMetric: '중복/부정 평가 100% 차단',
            title: '매너포인트 평가 데이터 정합성 보호 및 사전 가드 구축',
            summary: '동일 경기 중복 평가, 경기 시작 전 비정상 평가 등 평판 데이터 오염을 차단하기 위해 저장 및 조회 경로 전반에 도메인 검증 가드를 구축하여 지표 신뢰도를 확립했습니다.',
            metrics: [
                { label: 'INVALID SCORES', value: '오염 데이터 유입 100% 원천 차단', highlight: true },
                { label: 'TIME VALIDATION', value: '경기 시작 시간 사전 검증 적용' },
                { label: 'DUPLICATE CHECK', value: 'existsByUser_IdAndReceiver_IdAndGame_Id' }
            ],
            evidence: [
                {
                    tag: 'ARCHITECTURE',
                    title: '매너포인트 저장/조회 사전 검증 파이프라인',
                    mermaidId: 'case-manner-consistency-guard'
                }
            ],
            detailLink: 'https://github.com/ramyo564/Hoops/blob/main/src/main/java/com/zerobase/hoops/gameUsers/service/GameUserService.java',
            detailLinkLabel: '핵심 구현 코드 확인 (GameUserService.java) ↗'
        },
        {
            number: '05',
            category: 'DEVOPS & CI/CD',
            period: '2024.08',
            shortTitle: 'Docker 멀티스테이지 & CI/CD 자동화',
            highlightMetric: '배포 시간 80% 단축 (15m → 3m)',
            title: 'Docker Multi-stage 빌드 최적화 및 GitHub Actions 자동 배포',
            summary: '수동 빌드 및 배포로 인한 긴 리드타임과 환경 격차를 해결하기 위해 Docker Multi-stage 빌드와 GitHub Actions 기반 Self-hosted 배포 파이프라인을 구축했습니다.',
            metrics: [
                { label: 'DEPLOY LEAD TIME', value: '15분+ → 3분 이내 (-80%)', highlight: true },
                { label: 'IMAGE SIZE', value: '600MB → 250MB (-58%)' },
                { label: 'PIPELINE', value: 'Push → Buildx → Self-hosted Pull/Up/Prune' }
            ],
            evidence: [
                {
                    tag: 'ARCHITECTURE',
                    title: 'CI/CD 빌드 및 Self-hosted 배포 자동화 파이프라인',
                    mermaidId: 'case-devops-automation'
                }
            ],
            detailLink: 'https://github.com/ramyo564/Hoops/blob/main/.github/workflows/hoops-backend-build-and-push.yml',
            detailLinkLabel: '핵심 워크플로우 확인 (Actions.yml) ↗'
        }
    ],
    diagrams
};
