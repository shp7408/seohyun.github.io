---
layout: post
title: "Turborepo"
subtitle: "Turborepo Core Concepts"
date: 2023-10-23 22:26:23 +0900
categories: [architecture]
tags: [architecture]
background: /img/Turborepo.png
---
# Turborepo

Turborepo is an intelligent build system optimized for JavaScript and TypeScript codebases.

터보레포는 JS, TS 코드베이스에 최적화된 지능형 빌드 시스템이다.

터보레포 공식문서: https://turbo.build/repo/docs

## Caching ( 캐싱 )

Turborepo 의 핵심 컨셉으로 내세우는 개념은 바로 **"Caching"** 이다.

JS, TS 코드 베이스에서는, package.json 의 build, test, lint 등의 스크립트들을 **"Task"** 라고 한다.
터보레포에서는, 이 Task 들의 결과와 로그들을 캐싱할 수 있다.

