"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
const websockets_1 = require("@nestjs/websockets");
const ws_1 = require("ws");
const common_1 = require("@nestjs/common");
const ws_exceptions_filter_1 = require("src/filters/exceptions/ws/ws-exceptions.filter");
let UserChatGateway = class UserChatGateway {
    onDirectChatTyping(client, data) {
        console.log(data);
        if (data !== 'h')
            throw new websockets_1.WsException('error');
        return {
            event: 'showDirectTyping', data: {
                message: 'Single person Typing'
            }
        };
    }
    onGroupChatTyping(client, data) {
        console.log(client);
        return {
            event: 'showGroupTyping', data: {
                message: 'All Group'
            }
        };
    }
};
__decorate([
    websockets_1.WebSocketServer(),
    __metadata("design:type", typeof (_a = typeof ws_1.Server !== "undefined" && ws_1.Server) === "function" ? _a : Object)
], UserChatGateway.prototype, "server", void 0);
__decorate([
    common_1.UseFilters(ws_exceptions_filter_1.WsExceptionFilter),
    websockets_1.SubscribeMessage('directChatTyping'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], UserChatGateway.prototype, "onDirectChatTyping", null);
__decorate([
    websockets_1.SubscribeMessage('groupChatTyping'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], UserChatGateway.prototype, "onGroupChatTyping", null);
UserChatGateway = __decorate([
    websockets_1.WebSocketGateway(80)
], UserChatGateway);
exports.UserChatGateway = UserChatGateway;
//# sourceMappingURL=user-chat.gateway.js.map