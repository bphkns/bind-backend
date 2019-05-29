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
const logger_interceptor_1 = require("./logger/logger.interceptor");
let InterceptorModule = class InterceptorModule {
};
InterceptorModule = __decorate([
    common_1.Module({
        providers: [
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: logger_interceptor_1.LoggingInterceptor
            }
        ]
    })
], InterceptorModule);
exports.InterceptorModule = InterceptorModule;
//# sourceMappingURL=interceptor.module.js.map