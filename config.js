import { diagrams } from './diagrams.js';

export const templateConfig = {
    system: {
        documentTitle: 'Yohan | Hoops Problem Solving Portfolio',
        systemName: 'HOOPS_PROBLEM_SOLVING_V.1.0'
    },

    hero: {
        sectionId: 'hoops-system-architecture',
        panelTitle: 'SYSTEM_ARCHITECTURE',
        panelUid: 'ID: HOOPS-SYS-00',
        diagramId: 'hoops-integrated-architecture',
        headline: '실시간 소셜 플랫폼의 운영 효율 및 배포 안정성 극대화',
        metrics: [
            '• [SYSTEM] Platform  | 위치 기반 실시간 농구 매칭 (팀 7인)',
            '• [SYSTEM] Channels  | REST API / WebSocket(STOMP) / SSE',
            '• [SYSTEM] Pipeline  | GitHub Actions CI-CD / Docker Multi-stage',
            '• [SYSTEM] Database  | MariaDB(RDBMS) / Redis(Cache/Session)',
            '----------------------------------------------------------------',
            '• [MY ROLE] DevOps   | 배포 80% 단축 (15m → 3m) / 이미지 58% 경량화',
            '• [MY ROLE] Backend  | 실시간 제재(Blacklist) 및 보안 가드레일 설계',
            '• [MY ROLE] Query    | JPA Specification 표준화로 쿼리 로직 90% 공통화',
            '• [MY ROLE] Arch     | 백엔드 전체 아키텍처 설계 및 핵심 로직 구현'
        ],
        summaryRows: [
            {
                label: '도전 과제',
                value: '수동 배포로 인한 서비스 중단 리스크, 실시간 제재 정책의 지연 반영, 파편화된 검색 쿼리 유지보수 병목'
            },
            {
                label: '해결책',
                value: 'CI/CD 파이프라인 자동화, Redis 기반 블랙리스트 즉시 동기화, Specification 인터페이스 표준화'
            },
            {
                label: '비즈니스 가치',
                value: '운영 비용 절감, 플랫폼 신뢰도 향상 및 변화하는 비즈니스 요구사항에 대한 즉각적인 기술 대응력 확보'
            }
        ],
        kpiCards: [
            { label: 'DEPLOY SPEED', value: '80% UP', delta: '15m -> 3m' },
            { label: 'IMAGE SIZE', value: '58% DOWN', delta: '600MB -> 250MB' },
            { label: 'GOVERNANCE', value: 'REAL-TIME', delta: 'REPORT -> BAN' },
            { label: 'SEARCH API', value: 'STANDARDIZED', delta: 'SPECIFICATION' }
        ],
        quickLinks: [
            { label: 'ARCHITECTURE_DEEP_DIVE', href: 'https://ramyo564.github.io/Hoops/', variant: 'primary' },
            { label: 'GITHUB_REPO', href: 'https://github.com/ramyo564/Hoops', variant: 'secondary' },
            { label: 'PORTFOLIO_HUB', href: 'https://ramyo564.github.io/Portfolio/', variant: 'ghost' }
        ],
        diagramNote: '실시간 통신(WebSocket)과 운영 거버넌스, CI/CD 자동화가 결합된 통합 아키텍처입니다.'
    },

    topPanels: [
        {
            sectionId: 'hoops-code-evidence',
            panelTitle: 'CODE_EVIDENCE_MAP',
            panelUid: 'ID: HOOPS-PS-01',
            diagramId: 'hoops-code-evidence-map',
            navLabel: 'CODE_EVIDENCE',
            metrics: [
                'Chat: chat/service/ChatService.java + chat/service/MessageSender.java',
                'Governance: reports/service/ReportService.java + manager/service/ManagerService.java + security/TokenProvider.java',
                'Search: gameUsers/service/GameUserService.java + gameUsers/repository/GameCheckOutSpecifications.java',
                'DevOps: Dockerfile + .github/workflows/hoops-backend-build-and-push.yml + docker-compose.yml'
            ]
        }
    ],

    navigation: [
        { label: 'SYSTEM_ARCHITECTURE', target: '#hoops-system-architecture' },
        { label: 'CASES', target: '#hoops-cases' },
        { label: 'CODE_EVIDENCE', target: '#hoops-code-evidence' },
        { label: 'SKILL_SET', target: '#hoops-skill-set' },
        { label: 'CONTACT', target: '#contact' }
    ],

    skills: {
        sectionId: 'hoops-skill-set',
        panelTitle: 'SKILL_SET',
        panelUid: 'ID: HOOPS-STACK',
        items: [
            { title: 'REALTIME', stack: 'WebSocket(STOMP), ChatService, Destination Routing' },
            { title: 'GOVERNANCE', stack: 'Report, BlackList, Manager API, Token Gate' },
            { title: 'QUERY DESIGN', stack: 'JPA Specification, Dynamic Filter Composition, Paging DTO' },
            { title: 'AUTH SECURITY', stack: 'JWT Validation, Ban Enforcement, Error Mapping' },
            { title: 'TEST', stack: 'JUnit5, Mockito, Service Layer Behavior Verification' },
            { title: 'DEVOPS', stack: 'Docker Multi-stage, GitHub Actions, Self-hosted Deploy Runner' }
        ]
    },

    serviceSections: [
        {
            id: 'hoops-cases',
            title: 'HOOPS_TROUBLESHOOTING_CASES',
            navLabel: 'CASES',
            sectionLead: '대표 3건을 먼저 보고, 필요할 때 전체 Case 1~5를 확장해 깊게 읽을 수 있도록 구성했습니다.',
            recruiterBrief: {
                kicker: 'RECRUITER_QUICK_BRIEF',
                title: 'Hoops 핵심 문제 해결 요약 (1-Minute Summary)',
                cases: [
                    {
                        id: 'Infrastructure',
                        anchorId: 'hoops-case-5',
                        title: '배포 파이프라인 자동화 (CI/CD)',
                        problem: '수동 빌드/배포로 인한 15분 이상의 리드타임과 인적 오류 리스크',
                        action: 'Docker Multi-stage 빌드 및 GitHub Actions 기반 Self-hosted 배포 구축',
                        impact: '배포 속도 80% 향상 및 이미지 크기 58% 절감으로 운영 효율 극대화'
                    },
                    {
                        id: 'Governance',
                        anchorId: 'hoops-case-2',
                        title: '실시간 제재 강제 (Real-time Ban)',
                        problem: '신고 처리 후에도 기존 JWT 세션이 유지되어 즉각적인 제재 불가능',
                        action: 'Redis 기반 Blacklist 동기화 및 전용 Security Filter 강제 가드레일 구축',
                        impact: '플랫폼 무결성 실시간 확보 및 악성 사용자 즉시 격리'
                    },
                    {
                        id: 'Standardization',
                        anchorId: 'hoops-case-3',
                        title: '동적 검색 로직 표준화',
                        problem: '파편화된 JPA 쿼리 로직으로 인한 코드 중복 및 유지보수 비용 급증',
                        action: 'JPA Specification 인터페이스 표준화 및 동적 필터 조합 엔진 구축',
                        impact: '코드 가독성 향상 및 신규 검색 조건 추가 시 개발 공수 90% 절감'
                    },
                    {
                        id: 'Messaging',
                        anchorId: 'hoops-case-1',
                        title: '실시간 메시징 정합성 확보',
                        problem: '재입장 시 과거 메시지 중복 노출 및 라우팅 혼선 발생',
                        action: '유저별 전용 목적지(Destination) 분리 및 라우팅 로직 리팩토링',
                        impact: '메시지 중복 노출 완벽 제거 및 실시간 채팅 서비스 안정화'
                    },
                    {
                        id: 'Consistency',
                        anchorId: 'hoops-case-4',
                        title: '매너포인트 데이터 정합성 보호',
                        problem: '경기 시간/대상 검증 누락으로 인한 부정 평가 리스크',
                        action: '도메인 핵심 규칙 가드 구축 및 사전/사후 검증 파이프라인 정립',
                        impact: '평판 지표 데이터 신뢰도 확보 및 오염 데이터 유입 차단'
                    }
                ],
                links: [
                    { label: 'ARCHITECTURE_DEEP_DIVE', href: 'https://ramyo564.github.io/Hoops/', variant: 'primary' },
                    { label: 'GITHUB_REPO', href: 'https://github.com/ramyo564/Hoops', variant: 'secondary' }
                ]
            },
            theme: 'blue',
            cardVisualHeight: '270px',
            cardClass: 'problem-case-card',
            groups: [
                {
                    title: 'REALTIME CHAT / GOVERNANCE',
                    desc: '채널 분리, 신고-제재-인증 차단 흐름',
                    cards: [
                        {
                            mermaidId: 'case-chat-channel-split',
                            anchorId: 'hoops-case-1',
                            title: 'Case 1. 채팅 재입장 시 과거 메시지 중복 전송 제어',
                            subtitle: '2024-06 · ChatService 리팩터링',
                            overview: '초기 단일 채팅방(sessionId 공유) 구조에서 발생한 문제를,\n유저별 채팅방/목적지 분리 구조로 정리한 케이스입니다.',
                            businessImpact: '채팅 중복 노출 방지로 실시간 채팅 사용성 개선 및 이용자 불만 인입 감소',
                            role: '메시지 라우팅 구조 개선, 서비스 계층 리팩터링, 테스트 반영',
                            stackSummary: 'Spring WebSocket(STOMP), ChatService, MessageSender, JUnit5',
                            problem: '1) BEFORE 구조는 `gameId` 기준 단일 ChatRoom + 공유 sessionId 기반이었습니다.\n2) 이력 조회 결과가 공용 topic 경로로 전달되는 구간이 있었습니다.\n3) 재입장 사용자 이력을 불러올 때 기존 참여자도 같은 payload를 받아 중복 렌더링이 발생했습니다.',
                            solution: '1) `gameId + userId` 기준으로 ChatRoom을 조회/생성하도록 변경했습니다.\n2) `loadMessagesAndSend`를 사용자 ChatRoom 기준 조회로 바꿨습니다.\n3) 과거 이력 전송 목적지를 재입장 사용자 식별값 경로(현재 코드: `topic/{gameId}/{nickName}`)로 제한했습니다.\n4) 실시간 메시지 브로드캐스트 경로는 유지했습니다.',
                            result: '1) 재입장 사용자의 히스토리 복원 경로와 기존 참여자의 실시간 대화 경로가 분리되었습니다.\n2) 과거 메시지 중복 노출 이슈가 제거되어 채팅 UX가 안정화되었습니다.',
                            skills: ['WebSocket', 'STOMP', 'Message Routing', 'Service Refactoring'],
                            highlights: [
                                'Before: Single shared ChatRoom by gameId + shared sessionId',
                                'Issue: History payload could reach existing participants and re-render old messages',
                                'After: Per-user ChatRoom lookup and targeted history delivery path',
                                'Realtime broadcast path kept, history path isolated'
                            ],
                            links: [
                                { label: 'CODE_CHAT_SERVICE', href: 'https://github.com/ramyo564/Hoops/blob/main/src/main/java/com/zerobase/hoops/chat/service/ChatService.java' },
                                { label: 'CODE_MESSAGE_SENDER', href: 'https://github.com/ramyo564/Hoops/blob/main/src/main/java/com/zerobase/hoops/chat/service/MessageSender.java' },
                                { label: 'TEST_CHAT_SERVICE', href: 'https://github.com/ramyo564/Hoops/blob/main/src/test/java/com/zerobase/hoops/chat/service/ChatServiceTest.java' },
                                { label: 'DOC_CONTEXT', href: 'https://github.com/ramyo564/Hoops/blob/main/README.md' }
                            ]
                        },
                        {
                            mermaidId: 'case-report-blacklist-lifecycle',
                            anchorId: 'hoops-case-2',
                            title: 'Case 2. 신고 처리에서 블랙리스트 라이프사이클 일관화',
                            subtitle: '2024-05 · Report + Manager + TokenProvider',
                            overview: '신고 접수 -> 관리자 제재 -> 인증 차단을\n각 서비스 책임으로 분리하면서 하나의 운영 체인으로 연결한 케이스입니다.',
                            businessImpact: '강력한 제재 라이프사이클 적용으로 어뷰징 유저 즉각 차단 및 커뮤니티 신뢰도 상승',
                            role: '블랙리스트 등록/해제 로직 구현, 인증 경로 제재 연동, 예외 흐름 테스트',
                            stackSummary: 'ReportService, ManagerService, TokenProvider, BlackListUserRepository',
                            problem: '1) 신고 저장과 제재 반영 시점이 분리되면 정책 집행 타이밍이 어긋납니다.\n2) 관리자가 제재를 걸어도 인증 경로에서 즉시 막히지 않을 수 있습니다.\n3) 신고 이력 상태와 실제 차단 상태가 불일치하면 운영 신뢰도가 떨어집니다.',
                            solution: '1) `ReportService.reportUser`에서 중복 신고 검증 후 신고 저장 + 알림 발행을 수행했습니다.\n2) `ManagerService.saveBlackList`에서 신고 이력 blacklist 시작 시점 기록 + BlackListUserEntity(endDate+10일) 생성을 수행했습니다.\n3) `TokenProvider.validateToken`에서 `managerService.checkBlackList`를 강제 호출해 인증 단계 즉시 차단을 적용했습니다.\n4) `unLockBlackList`를 별도 경로로 분리해 해제 라이프사이클을 명확히 했습니다.',
                            result: '1) 신고 접수 -> 관리자 제재 -> 토큰 검증 차단이 단일 체인으로 동작합니다.\n2) 정책 집행 타이밍이 일치하고, 해제까지 포함한 운영 라이프사이클 관리가 가능해졌습니다.',
                            skills: ['Moderation Workflow', 'Ban Lifecycle', 'JWT Gate', 'Domain Service'],
                            highlights: [
                                'ReportService: duplicate report check and report persistence',
                                'ManagerService: mark blacklist start on reports and create ban entity',
                                'TokenProvider: enforce blacklist check during JWT validation',
                                'Unlock path separated for explicit ban release lifecycle'
                            ],
                            links: [
                                { label: 'CODE_REPORT_SERVICE', href: 'https://github.com/ramyo564/Hoops/blob/main/src/main/java/com/zerobase/hoops/reports/service/ReportService.java' },
                                { label: 'CODE_MANAGER_SERVICE', href: 'https://github.com/ramyo564/Hoops/blob/main/src/main/java/com/zerobase/hoops/manager/service/ManagerService.java' },
                                { label: 'CODE_TOKEN_PROVIDER', href: 'https://github.com/ramyo564/Hoops/blob/main/src/main/java/com/zerobase/hoops/security/TokenProvider.java' },
                                { label: 'TEST_MANAGER_SERVICE', href: 'https://github.com/ramyo564/Hoops/blob/main/src/test/java/com/zerobase/hoops/manager/service/ManagerServiceTest.java' }
                            ]
                        }
                    ]
                },
                {
                    title: 'SEARCH / DATA CONSISTENCY',
                    desc: '동적 검색 표준화와 점수 정합성 보호',
                    cards: [
                        {
                            mermaidId: 'case-dynamic-search-spec',
                            anchorId: 'hoops-case-3',
                            title: 'Case 3. 동적 검색 필터 조합을 Specification으로 표준화',
                            subtitle: '2024-05 · GameUserService 검색 API',
                            overview: '경기 검색에서 조건 조합 증가로 생기는 API/쿼리 복잡도를\nSpecification 조합 방식으로 표준화한 케이스입니다.',
                            businessImpact: '검색 기능 유연성 확보 및 관리 비용 절감으로 운영 리소스 낭비 방지',
                            role: '검색 API 설계, Specification 조합 로직 구현, 공통 응답 모델 연결',
                            stackSummary: 'Spring Data JPA Specification, GameCheckOutSpecifications, Paging DTO',
                            problem: '1) 필터 조건이 늘어날 때마다 분기문/별도 API가 늘어나는 구조였습니다.\n2) 백엔드는 쿼리 조합 관리 비용이 증가하고, 프론트는 화면별 호출 규칙이 달라졌습니다.',
                            solution: '1) `GameUserController.findFilteredGames`를 검색 진입점으로 통일했습니다.\n2) `GameUserService.getGameEntitySpecification`에서 `notDeleted + startDate`를 기본 축으로 만들었습니다.\n3) optional 조건(city, fieldStatus, gender, matchFormat)을 `and` 체인으로 결합했습니다.\n4) 조회는 `gameUserRepository.findAll(spec)` 단일 경로로, 응답은 `Page<GameSearchResponse>`로 통일했습니다.',
                            result: '1) 조건 증가 시 Specification 함수 추가/조합으로 확장 가능해졌습니다.\n2) API 계약을 단일 엔드포인트로 유지해 프론트 연동 복잡도를 줄였습니다.',
                            skills: ['API Design', 'Specification', 'Filter Composition', 'Pagination'],
                            highlights: [
                                'Single entry API for search parameters',
                                'Base spec plus optional spec chaining',
                                'Repository access unified to findAll spec path',
                                'Response shape normalized to paged DTO'
                            ],
                            links: [
                                { label: 'CODE_GAME_USER_SERVICE', href: 'https://github.com/ramyo564/Hoops/blob/main/src/main/java/com/zerobase/hoops/gameUsers/service/GameUserService.java' },
                                { label: 'CODE_SPECIFICATIONS', href: 'https://github.com/ramyo564/Hoops/blob/main/src/main/java/com/zerobase/hoops/gameUsers/repository/GameCheckOutSpecifications.java' },
                                { label: 'CODE_CONTROLLER', href: 'https://github.com/ramyo564/Hoops/blob/main/src/main/java/com/zerobase/hoops/gameUsers/controller/GameUserController.java' }
                            ]
                        },
                        {
                            mermaidId: 'case-manner-consistency-guard',
                            anchorId: 'hoops-case-4',
                            title: 'Case 4. 매너포인트 평가 정합성 가드 추가',
                            subtitle: '2024-05 · MannerPoint 평가 흐름',
                            overview: '매너포인트를 운영 지표로 신뢰 가능하게 유지하기 위해,\n저장/조회 경로에 정합성 가드를 구성한 케이스입니다.',
                            businessImpact: '핵심 평판 지표에 대한 데이터 신뢰도 보장으로 유저 간 서비스 매칭 만족도 상승',
                            role: '평가 가드 조건 설계, 중복 방지 로직 구현, 테스트 케이스 정리',
                            stackSummary: 'GameUserService, MannerPointRepository, ParticipantGameStatus',
                            problem: '1) 검증 없는 저장은 동일 경기/동일 대상 중복 평가를 만들 수 있습니다.\n2) 경기 시작 전 평가, 비참가자 대상 노출 같은 비정상 데이터가 섞일 수 있습니다.\n3) 이런 오염 데이터는 운영 제재/신뢰도 판단을 왜곡합니다.',
                            solution: '1) `saveMannerPoint`에서 평가자/피평가자/경기 존재를 먼저 검증했습니다.\n2) 경기 시작 시간 검증(`findByIdAndStartDateTimeBefore`)을 적용했습니다.\n3) 중복 평가 검증(`existsByUser_IdAndReceiver_IdAndGame_Id`) 후 저장하도록 구성했습니다.\n4) `getMannerPoint`는 ACCEPT 참여 여부를 검증하고 본인 제외 목록만 노출했습니다.',
                            result: '1) 저장/조회 경로가 모두 사전 검증을 통과한 데이터만 다루게 되었습니다.\n2) 중복 평점과 비정상 평가 노출이 줄어 매너포인트 지표 신뢰도가 높아졌습니다.',
                            skills: ['Consistency Guard', 'Domain Validation', 'Repository Query', 'Service Test'],
                            highlights: [
                                'Save path validates actor target game and game time',
                                'Duplicate scoring blocked by repository existence check',
                                'List path gated by accepted participation validation',
                                'Service tests cover success and failure branches'
                            ],
                            links: [
                                { label: 'CODE_GAME_USER_SERVICE', href: 'https://github.com/ramyo564/Hoops/blob/main/src/main/java/com/zerobase/hoops/gameUsers/service/GameUserService.java' },
                                { label: 'CODE_MANNER_REPOSITORY', href: 'https://github.com/ramyo564/Hoops/blob/main/src/main/java/com/zerobase/hoops/gameUsers/repository/MannerPointRepository.java' },
                                { label: 'TEST_GAME_USER_SERVICE', href: 'https://github.com/ramyo564/Hoops/blob/main/src/test/java/com/zerobase/hoops/gameUsers/service/GameUserServiceTest.java' }
                            ]
                        }
                    ]
                },
                {
                    title: 'DELIVERY / OPERATIONS',
                    desc: '빌드 경량화와 자동 배포 루프',
                    cards: [
                        {
                            mermaidId: 'case-devops-automation',
                            anchorId: 'hoops-case-5',
                            title: 'Case 5. Docker Multi-stage + GitHub Actions 자동배포',
                            subtitle: '2024-08 · 배포 파이프라인 표준화',
                            overview: '수동 배포로 발생한 리드타임/환경 편차를\n컨테이너 표준화와 CI-CD 자동화로 개선한 케이스입니다.',
                            businessImpact: '배포 자동화 달성으로 릴리즈 리스크 감소 및 운영팀의 신속한 기능 배포 환경 구축',
                            role: 'Dockerfile 최적화, Actions 워크플로우 구축, self-hosted 배포 자동화',
                            stackSummary: 'Docker Multi-stage, docker-compose, GitHub Actions, Self-hosted Runner',
                            problem: '1) 수동 배포는 빌드/푸시/서버 반영 과정이 사람 손에 의존합니다.\n2) 누락/순서 오류 가능성이 있고, 실행자에 따라 절차 편차가 생깁니다.\n3) 결과적으로 릴리즈 품질과 리드타임이 불안정해집니다.',
                            solution: '1) Dockerfile을 멀티스테이지(Gradle build stage -> slim runtime stage)로 분리해 이미지를 경량화했습니다.\n2) GitHub Actions에서 buildx 기반 빌드/푸시를 자동화했습니다.\n3) self-hosted runner가 `docker-compose pull` + `up -d`를 수행하도록 배포 루프를 고정했습니다.\n4) 오래된 이미지 정리 단계까지 포함해 런타임 호스트 상태를 정리했습니다.',
                            result: '1) 배포 과정이 재현 가능한 파이프라인으로 표준화되었습니다.\n2) 수작업 개입이 줄고, 이력서 기준 배포 시간(15분+ -> 3분 이내) 및 이미지 크기(600MB -> 250MB) 개선이 달성되었습니다.',
                            skills: ['CI/CD', 'Container Optimization', 'Release Automation', 'Ops Standardization'],
                            highlights: [
                                'Multi-stage build separates compile and runtime layers',
                                'Push event triggers deterministic build and registry publish',
                                'Self-hosted runner executes compose pull and up deployment',
                                'Old image cleanup included to keep runtime host stable'
                            ],
                            links: [
                                { label: 'CODE_DOCKERFILE', href: 'https://github.com/ramyo564/Hoops/blob/main/Dockerfile' },
                                { label: 'CODE_WORKFLOW', href: 'https://github.com/ramyo564/Hoops/blob/main/.github/workflows/hoops-backend-build-and-push.yml' },
                                { label: 'CODE_COMPOSE', href: 'https://github.com/ramyo564/Hoops/blob/main/docker-compose.yml' }
                            ]
                        }
                    ]
                }
            ]
        }
    ],

    contact: {
        sectionId: 'contact',
        panelTitle: 'CONTACT',
        panelUid: 'ID: HOOPS-COMMS',
        description: 'Hoops 포트폴리오 관련 문의는 아래 채널로 부탁드립니다.',
        actions: [
            { label: 'EMAIL', href: 'mailto:yohan032yohan@gmail.com' },
            { label: 'GITHUB', href: 'https://github.com/ramyo564/Hoops' },
            { label: 'TEAM_REPO', href: 'https://github.com/hoops-project' }
        ]
    },

    mermaid: {
        theme: 'dark',
        securityLevel: 'loose',
        fontFamily: 'Inter',
        flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'linear'
        }
    },

    diagrams
};
