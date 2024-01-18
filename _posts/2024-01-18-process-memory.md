---
layout: post
title: "Process Memory (프로세스 메모리)"
subtitle: "프로세스의 메모리 영역"
date: 2024-01-18 16:59:24 +0900
categories: [OS]
---
### 프로세스 메모리 (Process Memory)

프로세스가 생성되면 커널 영역에 PCB가 생성된다. 그렇다면, 유저 영역에는 프로세스가 어떻게 배치되는지가 궁금할 것 이다.

하나의 프로세스는 사용자 영역에 크게 코드영역, 데이터 영역, 힙 영역, 스택 영역으로 나뉘어 저장된다.

![IMG_A581B62AB62A-1](https://github.com/shp7408/shp7408.github.io/assets/62336151/176232f7-f2fe-40b1-9e38-c554f31846c3)

