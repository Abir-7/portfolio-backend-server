"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const config_1 = require("./app/config/config");
// Connect to MongoDB and start the server
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Connect to the database
        yield mongoose_1.default.connect(config_1.config.mongoDbURI);
        console.log("Connected to MongoDB");
        // Start the server
        app_1.default.listen(config_1.config.port, () => {
            console.log(`Server is running on http://localhost:${config_1.config.port}`);
        });
    }
    catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1); // Exit the process with a failure code
    }
});
startServer();
