module.exports = {
    codes: {
        CONTINUE: [100, 'CONTINUE'],
        SWITCHING_PROTOCOLS: [101, 'SWITCHING_PROTOCOLS'],
        OK: [200, 'OK'],
        CREATED: [201, 'CREATED'],
        ACCEPTED: [202, 'ACCEPTED'],
        NON_AUTHORITATIVE_INFORMATION: [203, 'NON_AUTHORITATIVE_INFORMATION'],
        NO_CONTENT: [204, 'NO_CONTENT'],
        RESET_CONTENT: [205, 'RESET_CONTENT'],
        PARTIAL_CONTENT: [206, 'PARTIAL_CONTENT'],
        MULTITPLE_CHOICES: [300, 'MULTITPLE_CHOICES'],
        MOVED_PERMAMENTLY: [301, 'MOVED_PERMAMENTLY'],
        FOUND: [302, 'FOUND'],
        SEE_OTHER: [303, 'SEE_OTHER'],
        NOT_MODIFIED: [304, 'NOT_MODIFIED'],
        USE_PROXY: [305, 'USE_PROXY'],
        TEMPORARY_REDIRECT: [307, 'TEMPORARY_REDIRECT'],
        BAD_REQUEST: [400, 'BAD_REQUEST'],
        UNAUTHORIZED: [401, 'UNAUTHORIZED'],
        PAYMENT_REQUIRED: [402, 'PAYMENT_REQUIRED'],
        FORBIDDEN: [403, 'FORBIDDEN'],
        NOT_FOUND: [404, 'NOT_FOUND'],
        METHOD_NOT_ALLOWED: [405, 'METHOD_NOT_ALLOWED'],
        NOT_ACCEPTABLE: [406, 'NOT_ACCEPTABLE'],
        PROXY_AUTHENTICATION_REQUIRED: [407, 'PROXY_AUTHENTICATION_REQUIRED'],
        REQUEST_TIMEOUT: [408, 'REQUEST_TIMEOUT'],
        CONFLICT: [409, 'CONFLICT'],
        GONE: [410, 'GONE'],
        LENGTH_REQUIRED: [411, 'LENGTH_REQUIRED'],
        PRECONDITION_FAILED: [412, 'PRECONDITION_FAILED'],
        REQUEST_ENTITY_TOO_LARGE: [413, 'REQUEST_ENTITY_TOO_LARGE'],
        REQUEST_URI_TOO_LONG: [414, 'REQUEST_URI_TOO_LONG'],
        UNSUPPORTED_MEDIA_TYPE: [415, 'UNSUPPORTED_MEDIA_TYPE'],
        REQUESTED_RANGE_NOT_SATISFIABLE: [416, 'REQUESTED_RANGE_NOT_SATISFIABLE'],
        EXPECTATION_FAILED: [417, 'EXPECTATION_FAILED'],
        ACCOUNT_NOT_ACCESSIBLE: [418, 'Could not connect to peer account'],
        FAILURE: [500, 'Parameter missing / Invalid Operation / Internal Server Error'],
    },
    keyMappings: {
        movie: {
            title: 'title',
            release_date: 'date',
            character: 'character',
        },
        tv: {
            name: 'title',
            first_air_date: 'date',
            episode_count: 'episode_count',
        },
        all: {
            media_type: 'type',
            title: 'title',
            name: 'title',
            release_date: 'date',
            first_air_date: 'date',
        },
    },
    responseBodyMessages: {
        INVALID_PERSON_ID: {
            message: 'Please provide valid person id',
        },
    },
};