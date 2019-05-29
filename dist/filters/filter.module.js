"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const http_exceptions_filter_1 = require("./exceptions/http/http-exceptions.filter");
const ws_exceptions_filter_1 = require("./exceptions/ws/ws-exceptions.filter");
let FilterModule = class FilterModule {
};
FilterModule = __decorate([
    common_1.Module({
        imports: [],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: http_exceptions_filter_1.HttpExceptionFilter
            },
            {
                provide: core_1.APP_FILTER,
                useClass: ws_exceptions_filter_1.WsExceptionFilter
            }
        ]
    })
], FilterModule);
exports.FilterModule = FilterModule;
//# sourceMappingURL=filter.module.js.map