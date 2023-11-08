---
layout: post
title: "3 Level Architecture & Database Independence"
date: 2023-11-08 12:53:45 +0900
categories: [database, 3levelarchitecture, 데이터 독립성]
---

# Database Independence ( 데이터 독립성 )

데이터 독립성이란, 데이터베이스의 구조와 데이터의 내용이 서로 영향을 미치지 않는 것을 말한다.

데이터 독립성은 논리적 데이터 독립성과 물리적 데이터 독립성으로 나눌 수 있다.

<br>

### 1. 논리적 데이터 독립성

논리적 데이터 독립성은, 데이터베이스의 논리적 구조가 변경되어도, 응용 프로그램이나 다른 논리적 구조에 영향을 미치지 않는 것을 말한다.

예를 들어, 테이블의 속성이나 관계가 추가되거나 삭제되어도 기존의 쿼리나 트랜잭션은 그대로 유지될 수 있다.

<br>

### 2. 물리적 데이터 독립성

물리적 데이터 독립성은, 데이터베이스의 물리적 구조가 변경되어도, 응용 프로그램이나 다른 물리적 구조에 영향을 미치지 않는 것을 말한다.

예를 들어, 파일의 저장 방식이나 인덱스의 구성이 바뀌어도 데이터베이스의 스키마나 데이터는 그대로 유지될 수 있다.

<br>

### 데이터 독립성의 장점

데이터 독립성은, 데이터베이스의 구조를 변경하거나, 데이터를 이동하는 작업을 쉽게 할 수 있도록 해준다.

예를 들어, 데이터베이스의 논리적 구조를 변경하거나, 데이터베이스를 다른 DBMS 로 이전하는 작업을 쉽게 할 수 있다.

<br>

데이터 독립성을 제공하는 방법에는, 3 Level Architecture 가 있다.

# 3 Level Architecture ( 3단계 구조 )


3 Level Architecture 는, 데이터베이스 시스템을 3가지의 레벨로 나눈 것이다.

- External Level

- Conceptual Level

- Internal Level

<br>

### 1. External Level

External Level 은, 사용자 관점에서 데이터베이스를 정의한 것이다.

즉, 사용자가 데이터베이스를 어떻게 보는지를 정의한 것이다.

<br>

### 2. Conceptual Level

Conceptual Level 은, 전체적인 데이터베이스의 논리적 구조를 정의한 것이다.

즉, 데이터베이스의 전체적인 논리적 구조를 정의한 것이다.

<br>

### 3. Internal Level

Internal Level 은, 데이터베이스를 물리적으로 어떻게 저장할 것인지를 정의한 것이다.

즉, 데이터베이스를 물리적으로 어떻게 저장할 것인지를 정의한 것이다.

<br>

![3-level-architecture](/assets/3levelarchitecture.png)

<br>

### Schema ( 스키마 )

스키마는, 데이터베이스의 구조를 정의한 것이다.

- External Schema

- Conceptual Schema

- Internal Schema

<br>

### 1. External Schema

External Schema 는, 사용자 관점에서 데이터베이스의 구조를 정의한 것이다.

즉, 사용자가 데이터베이스를 어떻게 보는지를 정의한 것이다.

<br>

### 2. Conceptual Schema

Conceptual Schema 는, 전체적인 데이터베이스의 논리적 구조를 정의한 것이다.

즉, 데이터베이스의 전체적인 논리적 구조를 정의한 것이다.

<br>

### 3. Internal Schema

Internal Schema 는, 데이터베이스를 물리적으로 어떻게 저장할 것인지를 정의한 것이다.

즉, 데이터베이스를 물리적으로 어떻게 저장할 것인지를 정의한 것이다.

<br>