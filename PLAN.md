11# 큐레이터 노트 카드형 리디자인 계획

## 문제
- 레이블(`큐레이터 노트`): 0.68rem + opacity + uppercase → 작고 흐림
- 본문: Nanum Pen Script(손글씨체) + text-muted 색상 → 가독성 낮음
- 서명: text-light → 거의 안 보임

## 변경 방향: A. 카드형 (요일 컬러 상단선 + 흰 카드)

### CSS 변경 (style.css 내 curator-note 관련)

| 속성 | 현재 | 변경 |
|------|------|------|
| `.curator-note` 배경 | `#fdfaf3` | `#fff` |
| `.curator-note` 테두리 | `border-left: 3px solid color-active` | `border: 1px solid var(--border)` + `border-top: 3px solid var(--color-active)` |
| `.curator-note` border-radius | `0 10px 10px 0` | `12px` (전체) |
| `.curator-note::before` 따옴표 | opacity 0.22 | 제거 |
| `.curator-note-reader-label` 크기 | `0.68rem` | `0.78rem` |
| `.curator-note-reader-label` opacity | `0.9` | 제거 (1.0) |
| `.curator-note-reader-label` uppercase | 있음 | 제거 |
| `.curator-note-text` 폰트 | `font-handwriting` | `font-serif` |
| `.curator-note-text` 색상 | `text-muted` | `var(--text)` |
| `.curator-note-sig` 색상 | `text-light` | `text-muted` |

## 변경 파일
- `css/style.css`: `.curator-note` 블록 수정 (약 52줄 → 45줄)

## 변경 범위
CSS만 수정. HTML·JS 변경 없음.
