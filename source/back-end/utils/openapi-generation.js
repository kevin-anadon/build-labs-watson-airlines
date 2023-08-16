/**
 * For more information see: https://github.com/davibaltar/swagger-autogen#openapi-3x
 */
const swagger_autogen = require("swagger-autogen")({ openapi: "3.0.0" });
const path = require("path");

// Data schemas
const mongo_specs = {
    Flight: {
        type: "object",
        properties: {
            AIRLINE: {
                type: String,
                required: [true, 'Airline Identifier required!']
            },
            FLIGHT_NUMBER: {
                type: Number,
                required: [true, 'Flight Number required!'],
            },
            ORIGIN_AIRPORT: {
                type: String,
                required: [true, 'Starting Airport (IATA) required!'],
            },
            DESTINATION_AIRPORT: {
                type: String,
                required: [true, 'Destination Airport (IATA) required!']
            },
            CANCELLED: {
                type: Boolean,
                default: false
            },
            DEPARTURE_DATE: {
                type: Date,
            },
            ARRIVAL_DATE: {
                type: Date,
            }
        }
    },
    Airport: {
        type: "object",
        properties: {
            IATA_CODE: {
                type: String,
                required: [true, 'Location Identifier required!']
            },
            AIRPORT: {
                type: String,
                required: [true, 'Airport`s name required!'],
            },
            CITY: {
                type: String,
                required: [true, 'Airport`s city required!'],
            },
            STATE: {
                type: String,
                required: [true, 'Airport`s state required!']
            },
            COUNTRY: {
                type: String,
                required: [true, 'Airport`s country required!']
            },
        }
    },
    Airline: {
        type: "object",
        properties: {
            IATA_CODE: {
                type: String,
                required: [true, 'Airline`s identifier required!']
            },
            AIRLINE: {
                type: Number,
                required: [true, 'Airline`s name required!'],
                unique: true
            },
        }
    }
};

// API general specs
const general_specs = {
    info: {
        title: "Watson Airlines Customer Experience",
        description:
            "This is a REST API for the Watson Airlines Customer Experience use case.",
        contact: {
            name: "Kevin Anadon",
            email: "mathewanadon@gmail.com",
        },
        version: "1.0.0",
    },
    servers: [
        {
            url : "https://localhost:3000/api",
            description : "Local Server",
        },
        {
            url: "https://bl-watson-airlines.164312aqh8r6.us-south.codeengine.appdomain.cloud/api",
            description: "IBM Code Engine Deployment",
        },
    ],
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    security: [],
    components: {
        schemas: mongo_specs,
    },
};

// API Routes
// NOTE: if using Express Router, pass only the root file where the route starts.
const api_routes = [
    "./routes/airlines.js",
    "./routes/flights.js",
    "./routes/notFound.js"
];

// Output file path
const output_file_path = path.join(__dirname, '..', 'docs', 'openapi-spec.json');

// Generate OpenAPI spec
swagger_autogen(
    (output_file_path),
    (api_routes),
    (general_specs)
);