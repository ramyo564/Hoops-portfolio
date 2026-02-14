export const diagrams = {
    'hoops-problem-overview': `
        graph LR
        Resume[Resume Hoops Section] --> SelectOne[Select One Issue]
        SelectOne --> Trace[Trace Code Path]
        Trace --> Chat[Chat Service]
        Trace --> Gov[Report Manager]
        Trace --> Search[Specification]
        Trace --> Ops[Docker Actions]
        Chat --> Problem[Problem]
        Gov --> Problem
        Search --> Problem
        Ops --> Problem
        Problem --> Cause[Root Cause]
        Cause --> Fix[Fix Process]
        Fix --> Result[Result]

        classDef b fill:#161b22,stroke:#58a6ff,color:#c9d1d9
        classDef o fill:#161b22,stroke:#d29922,color:#c9d1d9
        classDef g fill:#161b22,stroke:#238636,color:#c9d1d9
        class Resume,SelectOne,Trace,Problem,Cause b
        class Fix,Chat,Gov,Search,Ops o
        class Result g
    `,

    'hoops-code-evidence-map': `
        graph LR
        ChatServiceNode[Chat Service File] --> MsgSenderNode[Message Sender File]
        ChatServiceNode --> ChatTestNode[Chat Service Test]

        ReportServiceNode[Report Service File] --> NotificationNode[Notification Service File]
        ReportServiceNode --> ReportRepoNode[Report Repository File]

        ManagerServiceNode[Manager Service File] --> BlackRepoNode[Blacklist Repository File]
        ManagerServiceNode --> ReportRepoNode

        TokenProviderNode[Token Provider File] --> ManagerServiceNode

        GameUserServiceNode[Game User Service File] --> SpecsNode[Specification File]
        GameUserServiceNode --> MannerRepoNode[Manner Repository File]

        DockerfileNode[Dockerfile Multi Stage] --> WorkflowNode[GitHub Actions Workflow]
        WorkflowNode --> ComposeNode[Compose Deploy]

        classDef b fill:#161b22,stroke:#58a6ff,color:#c9d1d9
        classDef o fill:#161b22,stroke:#d29922,color:#c9d1d9
        classDef g fill:#161b22,stroke:#238636,color:#c9d1d9
        class ChatServiceNode,ReportServiceNode,ManagerServiceNode,TokenProviderNode,GameUserServiceNode,DockerfileNode b
        class MsgSenderNode,ReportRepoNode,BlackRepoNode,SpecsNode,MannerRepoNode,WorkflowNode o
        class ChatTestNode,NotificationNode,ComposeNode g
    `,

    'case-chat-channel-split': `
        graph LR
        subgraph BeforeBlock [BEFORE Previous Structure]
            direction TB
            BeforeInput[Client Chat Request] --> BeforeRoom[Single Shared ChatRoom by gameId]
            BeforeRoom --> BeforeSession[Shared Session Id In Room]
            BeforeSession --> BeforeLoad[Load History By Room And Session]
            BeforeLoad --> BeforeRoute{Is New User}
            BeforeRoute -- Rejoin --> BeforeNewRoute["Send To topic gameId newUser"]
            BeforeRoute -- Existing User --> BeforePublic["Send To topic gameId"]
            BeforeNewRoute --> BeforeNew[Rejoined User Receives History]
            BeforePublic --> BeforeExisting[Existing Users Also Receive History]
            BeforeExisting --> BeforeDup[Duplicate History Rendered]
        end

        subgraph AfterBlock [AFTER Improved Structure]
            direction TB
            AfterInput[Client Chat Request] --> AfterRoom[Find Or Create ChatRoom by gameId and userId]
            AfterRoom --> AfterRoute{Request Type}
            AfterRoute -- New User Rejoin --> AfterLoad[Load History by user ChatRoom]
            AfterLoad --> AfterPrivate["Send History to topic gameId nickName"]
            AfterPrivate --> AfterOnlyNew[Only Rejoined User Receives History]
            AfterRoute -- New Live Message --> AfterLoop[Iterate Participant ChatRooms]
            AfterLoop --> AfterPublic["Send Live Message to topic gameId nickName"]
            AfterPublic --> AfterAll[All Participants Receive Live Message Once]
        end

        BeforeBlock --> AfterBlock

        classDef b fill:#161b22,stroke:#58a6ff,color:#c9d1d9
        classDef o fill:#161b22,stroke:#d29922,color:#c9d1d9
        classDef g fill:#161b22,stroke:#238636,color:#c9d1d9
        linkStyle 15 stroke:transparent,fill:none,stroke-width:0px,opacity:0
        class AfterInput,AfterRoute,AfterRoom,AfterLoad,AfterPrivate,AfterLoop,AfterPublic b
        class BeforeInput,BeforeRoom,BeforeSession,BeforeLoad,BeforeRoute,BeforePublic,BeforeNewRoute,BeforeNew,BeforeExisting,BeforeDup o
        class AfterOnlyNew,AfterAll g
    `,

    'case-report-blacklist-lifecycle': `
        graph TB
        Reporter[Reporter] --> ReportApi[Report API Request]
        ReportApi --> ReportServiceNode[ReportService reportUser]
        ReportServiceNode --> DupCheck{Duplicate Report Check}
        DupCheck -- Yes --> Reject[Reject Already Reported]
        DupCheck -- No --> SaveReport[Save Report Entity]
        SaveReport --> Notify[Send Report Notification]

        SaveReport --> ManagerAction[Manager Blacklist Request]
        ManagerAction --> ManagerServiceNode[ManagerService saveBlackList]
        ManagerServiceNode --> MarkReports[Mark blacklistStartDateTime]
        ManagerServiceNode --> SaveBan[Create BlackListUserEntity]

        AuthRequest[JWT Validate Request] --> TokenProviderNode[TokenProvider validateToken]
        TokenProviderNode --> CheckBan[managerService checkBlackList]
        CheckBan --> Active{Ban Active}
        Active -- Yes --> Block[Block Token Request]
        Active -- No --> Pass[Allow Token Request]

        Unlock[Manager Unlock Request] --> UnlockSvc[ManagerService unLockBlackList]
        UnlockSvc --> Release[Save Ban Release]

        classDef b fill:#161b22,stroke:#58a6ff,color:#c9d1d9
        classDef o fill:#161b22,stroke:#d29922,color:#c9d1d9
        classDef g fill:#161b22,stroke:#238636,color:#c9d1d9
        class Reporter,ReportApi,ReportServiceNode,ManagerAction,AuthRequest,TokenProviderNode b
        class DupCheck,Reject,MarkReports,SaveBan,CheckBan,Active,UnlockSvc o
        class SaveReport,Notify,Block,Pass,Release g
    `,

    'case-dynamic-search-spec': `
        graph TB
        Filters[Search Filters Input] --> SearchApi[GameUserController findFilteredGames]
        SearchApi --> ServiceNode[GameUserService getGameEntitySpecification]
        ServiceNode --> Base[Base Spec notDeleted plus startDate]

        Base --> City[Append CityName Spec]
        Base --> Field[Append FieldStatus Spec]
        Base --> Gender[Append Gender Spec]
        Base --> Match[Append MatchFormat Spec]

        City --> Query[gameUserRepository findAll spec]
        Field --> Query
        Gender --> Query
        Match --> Query

        Query --> Page[Map To Page GameSearchResponse]

        classDef b fill:#161b22,stroke:#58a6ff,color:#c9d1d9
        classDef o fill:#161b22,stroke:#d29922,color:#c9d1d9
        classDef g fill:#161b22,stroke:#238636,color:#c9d1d9
        class Filters,SearchApi,ServiceNode,Base b
        class City,Field,Gender,Match,Query o
        class Page g
    `,

    'case-manner-consistency-guard': `
        graph TB
        Request[saveMannerPoint Request] --> Load[Load User Receiver Game]
        Load --> TimeCheck{Game Started Check}
        TimeCheck -- No --> RejectTime[Reject Not Started Game]
        TimeCheck -- Yes --> DupCheck{Duplicate Rate Check}
        DupCheck -- Yes --> RejectDup[Reject EXIST_RATE]
        DupCheck -- No --> ApplyScore[Apply Receiver Manner Score]
        ApplyScore --> SaveRating[Save MannerPoint Entity]

        ListReq[getMannerPoint List Request] --> ParticipantCheck{ACCEPT Participant Check}
        ParticipantCheck -- No --> RejectList[Reject Not Participant]
        ParticipantCheck -- Yes --> ListOk[List Targets Except Self]

        SaveRating --> Result[Consistent Rating Data]
        ListOk --> Result

        classDef b fill:#161b22,stroke:#58a6ff,color:#c9d1d9
        classDef o fill:#161b22,stroke:#d29922,color:#c9d1d9
        classDef g fill:#161b22,stroke:#238636,color:#c9d1d9
        class Request,Load,TimeCheck,DupCheck,ListReq,ParticipantCheck b
        class RejectTime,RejectDup,RejectList,ApplyScore o
        class SaveRating,ListOk,Result g
    `,

    'case-devops-automation': `
        graph TB
        Push[Push Main Or Develop Branch] --> Workflow[GitHub Actions Workflow]
        DockerfileNode[Dockerfile Multi Stage] --> Workflow
        Workflow --> BuildStep[Buildx Build And Push Image]
        BuildStep --> Registry[DockerHub Image Registry]
        Registry --> DeployRunner[Self Hosted Runner Deploy Job]
        DeployRunner --> ComposeStep[docker compose pull and up]
        ComposeStep --> Cleanup[Prune Old Docker Images]
        Cleanup --> Runtime[EC2 Runtime Updated]
        Runtime --> Outcome[Deploy Time And Image Size Improved]

        classDef b fill:#161b22,stroke:#58a6ff,color:#c9d1d9
        classDef o fill:#161b22,stroke:#d29922,color:#c9d1d9
        classDef g fill:#161b22,stroke:#238636,color:#c9d1d9
        class Push,Workflow,BuildStep,DeployRunner,DockerfileNode b
        class Registry,ComposeStep,Runtime o
        class Outcome g
    `
};
