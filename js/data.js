/* ============================================================
   통찰·유머·감동 — Content Data
   5 days × stories + website recommendations
   ============================================================ */

/* ──────────────────────────────────────────────────────────
   SVG ILLUSTRATIONS  ·  선 드로잉 스타일
   fill 없음 — 모든 형태를 stroke 선으로, wc1 필터로 손그림 흔들림
   배경: #f8f7f4 (크림 흰색)  선: #1a1a1a~#aaa (명암 변화)
   ────────────────────────────────────────────────────────── */
const ILLUSTRATIONS = {

  /* ══ 월요일 — 사랑 — 감동 → 선 드로잉 ══
     아우슈비츠 새벽: 수평선에 아내의 얼굴이 떠오름
     프랑클은 행렬에서 멈춰 아내를 바라보며 손을 뻗음
     색 없음 — 흰 배경 위 선만으로 장면 전체를 표현 */
  1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 280" translate="no">
  <defs>
    <filter id="wc1" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.04 0.08" numOctaves="3" seed="11" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="8" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>

  <!-- 종이 배경 -->
  <rect width="600" height="280" fill="#f8f7f4"/>

  <!-- 별 (× 표시) -->
  <g stroke="#aaa" stroke-width="0.9" stroke-linecap="round">
    <line x1="27" y1="9"  x2="29" y2="13"/><line x1="29" y1="9"  x2="27" y2="13"/>
    <line x1="68" y1="25" x2="70" y2="29"/><line x1="70" y1="25" x2="68" y2="29"/>
    <line x1="112" y1="7" x2="114" y2="11"/><line x1="114" y1="7" x2="112" y2="11"/>
    <line x1="155" y1="22" x2="157" y2="26"/><line x1="157" y1="22" x2="155" y2="26"/>
    <line x1="354" y1="10" x2="356" y2="14"/><line x1="356" y1="10" x2="354" y2="14"/>
    <line x1="462" y1="13" x2="464" y2="17"/><line x1="464" y1="13" x2="462" y2="17"/>
    <line x1="552" y1="18" x2="554" y2="22"/><line x1="554" y1="18" x2="552" y2="22"/>
    <line x1="248" y1="41" x2="250" y2="45"/><line x1="250" y1="41" x2="248" y2="45"/>
  </g>

  <!-- ══ 아내: 수평선에서 떠오르는 얼굴 + 방사형 빛 선 ══ -->
  <g filter="url(#wc1)" stroke="#2a2a2a" fill="none" stroke-linecap="round">
    <!-- 방사형 빛 -->
    <line x1="189" y1="196" x2="189" y2="150" stroke-width="0.9" opacity="0.38"/>
    <line x1="189" y1="196" x2="162" y2="156" stroke-width="0.8" opacity="0.32"/>
    <line x1="189" y1="196" x2="140" y2="172" stroke-width="0.7" opacity="0.28"/>
    <line x1="189" y1="196" x2="128" y2="192" stroke-width="0.7" opacity="0.24"/>
    <line x1="189" y1="196" x2="216" y2="156" stroke-width="0.8" opacity="0.32"/>
    <line x1="189" y1="196" x2="238" y2="172" stroke-width="0.7" opacity="0.28"/>
    <line x1="189" y1="196" x2="250" y2="192" stroke-width="0.7" opacity="0.24"/>
    <line x1="189" y1="224" x2="150" y2="266" stroke-width="0.6" opacity="0.18"/>
    <line x1="189" y1="224" x2="228" y2="266" stroke-width="0.6" opacity="0.18"/>
    <!-- 얼굴 윤곽 -->
    <ellipse cx="189" cy="211" rx="15" ry="18" stroke-width="1.7"/>
    <!-- 눈 -->
    <path d="M182,207 Q186,204 190,207" stroke-width="1.3"/>
    <path d="M190,207 Q194,204 198,207" stroke-width="1.3"/>
    <!-- 머리카락 -->
    <path d="M177,208 Q182,195 189,193 Q196,195 201,208" stroke-width="1.7"/>
    <path d="M177,205 Q176,195 178,189" stroke-width="1.0" opacity="0.5"/>
    <path d="M201,205 Q202,195 200,189" stroke-width="1.0" opacity="0.5"/>
    <!-- 입 (미소) -->
    <path d="M184,217 Q189,221 194,217" stroke-width="1.2" opacity="0.6"/>
  </g>

  <!-- 수평선 -->
  <line x1="0" y1="224" x2="600" y2="224" stroke="#1a1a1a" stroke-width="1.8" filter="url(#wc1)"/>

  <!-- 땅 해칭 -->
  <g filter="url(#wc1)" stroke="#666" stroke-width="0.65" stroke-linecap="round" opacity="0.45">
    <line x1="0" y1="233" x2="600" y2="234"/>
    <line x1="0" y1="244" x2="600" y2="245"/>
    <line x1="0" y1="255" x2="600" y2="256"/>
    <line x1="0" y1="266" x2="600" y2="267"/>
    <line x1="0" y1="276" x2="600" y2="277"/>
  </g>

  <!-- ── 철조망 ── -->
  <g filter="url(#wc1)">
    <line x1="0" y1="205" x2="600" y2="205" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="0" y1="213" x2="600" y2="213" stroke="#1a1a1a" stroke-width="1.2" stroke-linecap="round"/>
    <g stroke="#1a1a1a" stroke-width="1.2" stroke-linecap="round">
      <line x1="38"  y1="201" x2="33"  y2="210"/><line x1="38"  y1="201" x2="43"  y2="210"/>
      <line x1="80"  y1="201" x2="75"  y2="210"/><line x1="80"  y1="201" x2="85"  y2="210"/>
      <line x1="122" y1="201" x2="117" y2="210"/><line x1="122" y1="201" x2="127" y2="210"/>
      <line x1="246" y1="201" x2="241" y2="210"/><line x1="246" y1="201" x2="251" y2="210"/>
      <line x1="300" y1="201" x2="295" y2="210"/><line x1="300" y1="201" x2="305" y2="210"/>
      <line x1="348" y1="201" x2="343" y2="210"/><line x1="348" y1="201" x2="353" y2="210"/>
      <line x1="395" y1="201" x2="390" y2="210"/><line x1="395" y1="201" x2="400" y2="210"/>
      <line x1="489" y1="201" x2="484" y2="210"/><line x1="489" y1="201" x2="494" y2="210"/>
      <line x1="535" y1="201" x2="530" y2="210"/><line x1="535" y1="201" x2="540" y2="210"/>
      <line x1="572" y1="201" x2="567" y2="210"/><line x1="572" y1="201" x2="577" y2="210"/>
    </g>
    <g stroke="#1a1a1a" stroke-width="3.5" stroke-linecap="round">
      <line x1="25"  y1="174" x2="25"  y2="224"/>
      <line x1="295" y1="174" x2="295" y2="224"/>
      <line x1="405" y1="174" x2="405" y2="224"/>
      <line x1="528" y1="174" x2="528" y2="224"/>
    </g>
  </g>

  <!-- ── 죄수 행렬 (원경, 더 구체적: 머리+몸+다리) ── -->
  <g filter="url(#wc1)" stroke="#444" fill="none" stroke-linecap="round">
    <circle cx="332" cy="211" r="3.2" stroke-width="1.3"/>
    <line x1="332" y1="214" x2="332" y2="222" stroke-width="1.5"/>
    <line x1="332" y1="222" x2="328" y2="228" stroke-width="1.2"/>
    <line x1="332" y1="222" x2="336" y2="228" stroke-width="1.2"/>
    <line x1="329" y1="217" x2="324" y2="220" stroke-width="1.0"/>

    <circle cx="358" cy="211" r="3.2" stroke-width="1.3"/>
    <line x1="358" y1="214" x2="358" y2="222" stroke-width="1.5"/>
    <line x1="358" y1="222" x2="354" y2="228" stroke-width="1.2"/>
    <line x1="358" y1="222" x2="362" y2="228" stroke-width="1.2"/>
    <line x1="361" y1="217" x2="366" y2="220" stroke-width="1.0"/>

    <circle cx="462" cy="213" r="2.5" stroke-width="1.1"/>
    <line x1="462" y1="216" x2="462" y2="222" stroke-width="1.3"/>
    <line x1="462" y1="222" x2="459" y2="228" stroke-width="1.1"/>
    <line x1="462" y1="222" x2="465" y2="228" stroke-width="1.1"/>
    <line x1="459" y1="219" x2="455" y2="221" stroke-width="0.9"/>

    <circle cx="490" cy="213" r="2.5" stroke-width="1.1"/>
    <line x1="490" y1="216" x2="490" y2="222" stroke-width="1.3"/>
    <line x1="490" y1="222" x2="487" y2="228" stroke-width="1.1"/>
    <line x1="490" y1="222" x2="493" y2="228" stroke-width="1.1"/>

    <circle cx="520" cy="214" r="2.0" stroke-width="1.0"/>
    <line x1="520" y1="216" x2="520" y2="221" stroke-width="1.2"/>
    <line x1="520" y1="221" x2="517" y2="226" stroke-width="1.0"/>
    <line x1="520" y1="221" x2="523" y2="226" stroke-width="1.0"/>

    <circle cx="548" cy="215" r="2.0" stroke-width="1.0"/>
    <line x1="548" y1="217" x2="548" y2="221" stroke-width="1.2"/>
    <line x1="548" y1="221" x2="545" y2="226" stroke-width="1.0"/>
    <line x1="548" y1="221" x2="551" y2="226" stroke-width="1.0"/>

    <circle cx="572" cy="215" r="1.8" stroke-width="0.9"/>
    <line x1="572" y1="217" x2="572" y2="221" stroke-width="1.1"/>
    <line x1="572" y1="221" x2="570" y2="225" stroke-width="0.9"/>
    <line x1="572" y1="221" x2="574" y2="225" stroke-width="0.9"/>
  </g>

  <!-- ══ 프랑클 — 더 구체적 선 드로잉 ══ -->
  <g filter="url(#wc1)" stroke="#1a1a1a" fill="none" stroke-linecap="round">
    <!-- 머리 -->
    <circle cx="422" cy="165" r="11" stroke-width="2.0"/>
    <!-- 모자: 챙 + 모자통 -->
    <path d="M407,162 Q421,155 435,162" stroke-width="2.8"/>
    <path d="M411,162 Q413,153 421,150 Q430,153 433,162" stroke-width="1.8"/>
    <!-- 목 -->
    <line x1="422" y1="176" x2="422" y2="182" stroke-width="2.2"/>
    <!-- 몸통 윤곽 + 어깨 -->
    <line x1="411" y1="182" x2="433" y2="182" stroke-width="2.0"/>
    <path d="M411,182 Q408,215 406,240" stroke-width="2.5"/>
    <path d="M433,182 Q436,215 438,240" stroke-width="2.5"/>
    <!-- 수감복 가로 줄무늬 -->
    <line x1="410" y1="193" x2="434" y2="192" stroke-width="1.1" opacity="0.55"/>
    <line x1="409" y1="204" x2="434" y2="203" stroke-width="1.1" opacity="0.55"/>
    <line x1="408" y1="215" x2="433" y2="214" stroke-width="1.1" opacity="0.55"/>
    <line x1="407" y1="226" x2="432" y2="225" stroke-width="1.1" opacity="0.55"/>
    <!-- 왼팔: 아내 방향으로 뻗음 -->
    <path d="M411,190 Q394,205 378,216" stroke-width="2.5"/>
    <!-- 손가락 3개 -->
    <line x1="378" y1="216" x2="370" y2="208" stroke-width="1.8"/>
    <line x1="378" y1="216" x2="365" y2="213" stroke-width="1.8"/>
    <line x1="378" y1="216" x2="372" y2="205" stroke-width="1.8"/>
    <!-- 오른팔: 아래로 내림 (곡괭이 잡음) -->
    <path d="M433,190 Q440,212 444,232" stroke-width="2.5"/>
    <!-- 곡괭이 자루 -->
    <line x1="444" y1="232" x2="448" y2="270" stroke-width="2.0"/>
    <!-- 곡괭이 머리 (T자) -->
    <line x1="430" y1="268" x2="466" y2="268" stroke-width="3.5"/>
    <path d="M430,268 Q428,261 433,257" stroke-width="2.0"/>
    <!-- 왼다리 -->
    <path d="M415,240 Q411,256 407,272" stroke-width="2.8"/>
    <!-- 오른다리 -->
    <path d="M431,240 Q434,256 437,272" stroke-width="2.8"/>
    <!-- 신발 -->
    <path d="M407,272 Q401,274 396,271" stroke-width="2.2"/>
    <path d="M437,272 Q443,274 448,271" stroke-width="2.2"/>
  </g>
</svg>`,

  /* ══ 수요일용 — 알렉산더+디오게네스 — 유머 → 팝아트 스타일 ══
     Ben-Day 하프톤 + 굵은 윤곽선 + 말풍선 = 권력 앞에서 비켜달라 */
  2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 280" translate="no">
  <defs>
    <pattern id="hd2" x="0" y="0" width="9" height="9" patternUnits="userSpaceOnUse">
      <circle cx="4.5" cy="4.5" r="2.0" fill="#f5e010" opacity="0.65"/>
    </pattern>
    <!-- 스케치 강화: scale 10 → 손그림 선 흔들림, 만화·풍자 느낌 -->
    <filter id="sketch2" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.04 0.08" numOctaves="3" seed="11" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>
  <!-- 팝아트 노란 배경 -->
  <rect width="600" height="280" fill="#fffbe0"/>
  <rect width="600" height="280" fill="url(#hd2)" opacity="0.45"/>
  <!-- 바닥 -->
  <rect x="0" y="228" width="600" height="52" fill="#e0c840" opacity="0.55"/>
  <rect x="0" y="228" width="600" height="3" fill="#111"/>
  <!-- 햇살 (오른쪽 위에서 왼쪽으로) -->
  <line x1="430" y1="0" x2="100" y2="280" stroke="#fff5a0" stroke-width="34" opacity="0.26"/>
  <line x1="448" y1="0" x2="148" y2="280" stroke="#fff5a0" stroke-width="18" opacity="0.20"/>
  <line x1="462" y1="0" x2="190" y2="280" stroke="#fff5a0" stroke-width="10" opacity="0.15"/>
  <!-- 태양 (오른쪽 상단) -->
  <circle cx="542" cy="40" r="38" fill="#ffd700" stroke="#111" stroke-width="3"/>
  <circle cx="542" cy="40" r="27" fill="#ffec40" stroke="#111" stroke-width="1"/>
  <line x1="542" y1="0"  x2="542" y2="11"  stroke="#111" stroke-width="3" stroke-linecap="round"/>
  <line x1="576" y1="8"  x2="567" y2="16"  stroke="#111" stroke-width="3" stroke-linecap="round"/>
  <line x1="582" y1="40" x2="570" y2="40"  stroke="#111" stroke-width="3" stroke-linecap="round"/>
  <line x1="576" y1="72" x2="567" y2="63"  stroke="#111" stroke-width="3" stroke-linecap="round"/>
  <line x1="508" y1="8"  x2="518" y2="16"  stroke="#111" stroke-width="3" stroke-linecap="round"/>
  <line x1="502" y1="40" x2="514" y2="40"  stroke="#111" stroke-width="3" stroke-linecap="round"/>
  <line x1="508" y1="72" x2="518" y2="63"  stroke="#111" stroke-width="3" stroke-linecap="round"/>
  <!-- ── 디오게네스 (왼쪽, 술통 안에 누워) ── -->
  <!-- 술통 -->
  <ellipse cx="152" cy="242" rx="90" ry="23" fill="#b06820" stroke="#111" stroke-width="3"/>
  <rect x="62" y="170" width="180" height="74" fill="#cc7828" stroke="#111" stroke-width="3" filter="url(#sketch2)"/>
  <ellipse cx="152" cy="170" rx="90" ry="23" fill="#c07028" stroke="#111" stroke-width="3"/>
  <!-- 나무결 -->
  <line x1="86"  y1="172" x2="86"  y2="240" stroke="#8a4810" stroke-width="1.8" opacity="0.4"/>
  <line x1="112" y1="171" x2="112" y2="241" stroke="#8a4810" stroke-width="1.8" opacity="0.4"/>
  <line x1="138" y1="170" x2="138" y2="242" stroke="#8a4810" stroke-width="1.8" opacity="0.4"/>
  <line x1="166" y1="170" x2="166" y2="242" stroke="#8a4810" stroke-width="1.8" opacity="0.4"/>
  <line x1="192" y1="171" x2="192" y2="241" stroke="#8a4810" stroke-width="1.8" opacity="0.4"/>
  <line x1="218" y1="172" x2="218" y2="240" stroke="#8a4810" stroke-width="1.8" opacity="0.4"/>
  <!-- 테 -->
  <rect x="62" y="188" width="180" height="6" fill="#6a3808" stroke="#111" stroke-width="1.5" opacity="0.8"/>
  <rect x="62" y="220" width="180" height="6" fill="#6a3808" stroke="#111" stroke-width="1.5" opacity="0.8"/>
  <!-- 디오게네스 얼굴 -->
  <circle cx="152" cy="157" r="25" fill="#f5c088" stroke="#111" stroke-width="3.5"/>
  <!-- 덥수룩한 수염 -->
  <path d="M130 165Q136 180 152 186Q168 180 174 165" fill="#7a5030" stroke="#111" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M131 162Q142 169 152 169Q162 169 173 162" fill="none" stroke="#5a3820" stroke-width="3" stroke-linecap="round"/>
  <!-- 눈 (느긋하게 반쯤 감음) -->
  <path d="M141 153Q146 150 151 153" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
  <path d="M153 153Q158 150 163 153" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
  <!-- 손 뻗어 알렉산더를 가리킴 -->
  <path d="M177 160Q204 150 232 144" stroke="#f5c088" stroke-width="10" stroke-linecap="round" fill="none"/>
  <circle cx="237" cy="142" r="9" fill="#f5c088" stroke="#111" stroke-width="2.5"/>
  <!-- 말풍선 (디오게네스) -->
  <path d="M36 72L252 72Q268 72 268 58L268 14Q268 0 252 0L36 0Q20 0 20 14L20 58Q20 72 36 72Z" fill="white" stroke="#111" stroke-width="3.5"/>
  <path d="M138 72L126 92L158 72Z" fill="white" stroke="#111" stroke-width="2.5"/>
  <line x1="129" y1="79" x2="139" y2="72" stroke="white" stroke-width="5"/>
  <text x="144" y="31" text-anchor="middle" font-size="14" fill="#111" font-family="Impact,'Arial Black',sans-serif">햇빛 좀</text>
  <text x="144" y="55" text-anchor="middle" font-size="14" fill="#111" font-family="Impact,'Arial Black',sans-serif">비켜주시오</text>
  <!-- ── 알렉산더 (오른쪽, 갑옷) ── -->
  <!-- 다리 -->
  <rect x="385" y="182" width="82" height="52" rx="4" fill="#d4af37" stroke="#111" stroke-width="3"/>
  <line x1="426" y1="182" x2="426" y2="234" stroke="#111" stroke-width="1.5" opacity="0.35"/>
  <!-- 상체 갑옷 -->
  <rect x="379" y="136" width="94" height="52" rx="5" fill="#d4af37" stroke="#111" stroke-width="3"/>
  <ellipse cx="426" cy="160" rx="22" ry="15" fill="none" stroke="#b8960c" stroke-width="2" opacity="0.6"/>
  <line x1="379" y1="160" x2="473" y2="160" stroke="#b8960c" stroke-width="1.5" opacity="0.4"/>
  <!-- 머리 -->
  <circle cx="426" cy="112" r="27" fill="#f5c088" stroke="#111" stroke-width="3.5"/>
  <!-- 투구 -->
  <path d="M399 112Q399 74 426 74Q453 74 453 112" fill="#d4af37" stroke="#111" stroke-width="3.5"/>
  <path d="M399 112Q389 112 389 104L389 98Q389 92 399 92" fill="#c8a030" stroke="#111" stroke-width="2.5"/>
  <path d="M453 112Q463 112 463 104L463 98Q463 92 453 92" fill="#c8a030" stroke="#111" stroke-width="2.5"/>
  <!-- 투구 깃털 -->
  <path d="M426 74Q412 52 416 36" stroke="#cc1111" stroke-width="6" stroke-linecap="round" fill="none"/>
  <path d="M426 74Q424 50 428 34" stroke="#cc1111" stroke-width="4" stroke-linecap="round" fill="none"/>
  <path d="M426 74Q438 54 435 38" stroke="#aa0a0a" stroke-width="3" stroke-linecap="round" fill="none"/>
  <!-- 눈 (충격) -->
  <ellipse cx="416" cy="109" rx="5.5" ry="7" fill="white" stroke="#111" stroke-width="2"/>
  <ellipse cx="436" cy="109" rx="5.5" ry="7" fill="white" stroke="#111" stroke-width="2"/>
  <circle cx="417" cy="110" r="3.2" fill="#222"/>
  <circle cx="437" cy="110" r="3.2" fill="#222"/>
  <!-- 눈썹 (올라간) -->
  <path d="M411 100Q416 96 421 100" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
  <path d="M431 100Q436 96 441 100" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
  <!-- 땀방울 -->
  <ellipse cx="457" cy="96" rx="4" ry="5.5" fill="#88ccff" stroke="#55aaee" stroke-width="1.5" opacity="0.78"/>
  <!-- 팔 -->
  <line x1="379" y1="154" x2="342" y2="170" stroke="#d4af37" stroke-width="13" stroke-linecap="round"/>
  <line x1="473" y1="154" x2="512" y2="165" stroke="#d4af37" stroke-width="13" stroke-linecap="round"/>
  <!-- 칼 -->
  <line x1="342" y1="170" x2="325" y2="190" stroke="#bbb" stroke-width="5" stroke-linecap="round"/>
  <line x1="334" y1="177" x2="318" y2="177" stroke="#bbb" stroke-width="4" stroke-linecap="round"/>
  <!-- 말풍선 (알렉산더) -->
  <path d="M316 94L566 94Q580 94 580 80L580 24Q580 10 566 10L316 10Q302 10 302 24L302 80Q302 94 316 94Z" fill="white" stroke="#111" stroke-width="3.5"/>
  <path d="M396 94L384 110L416 94Z" fill="white" stroke="#111" stroke-width="2.5"/>
  <line x1="387" y1="100" x2="397" y2="94" stroke="white" stroke-width="5"/>
  <text x="441" y="44" text-anchor="middle" font-size="14" fill="#111" font-family="Impact,sans-serif">무엇이든</text>
  <text x="441" y="66" text-anchor="middle" font-size="14" fill="#111" font-family="Impact,sans-serif">들어주겠다</text>
  <text x="441" y="84" text-anchor="middle" font-size="12" fill="#444" font-family="Georgia,serif" font-style="italic">— 세상을 정복한 황제</text>
  <!-- 스피드라인 -->
  <line x1="300" y1="108" x2="310" y2="115" stroke="#111" stroke-width="2" opacity="0.30"/>
  <line x1="298" y1="122" x2="308" y2="124" stroke="#111" stroke-width="2" opacity="0.30"/>
  <line x1="298" y1="136" x2="308" y2="134" stroke="#111" stroke-width="2" opacity="0.30"/>
  <!-- 팝아트 레이블 -->
  <text x="12" y="22" font-size="13" fill="#e83028" font-family="Impact,sans-serif" letter-spacing="1" opacity="0.85">POP ART</text>
  <!-- 하단 캡션 -->
  <text x="300" y="268" text-anchor="middle" font-size="14" fill="#3a2800" font-family="Georgia,serif" font-style="italic">원하는 것이 없는 사람이 가장 자유롭다</text>
</svg>`,

  /* ══ 화요일용 — 체호프의 총 — 통찰 → 극장 미니멀 스타일 ══
     어두운 무대 + 스포트라이트 + 벽에 걸린 총 + 막1→막3 타임라인 */
  3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 280" translate="no">
  <defs>
    <pattern id="wp3" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M12 0L24 12L12 24L0 12Z" fill="none" stroke="#2a2010" stroke-width="0.6" opacity="0.45"/>
    </pattern>
    <filter id="glow3" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="8"/>
    </filter>
    <filter id="glow3sm" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3"/>
    </filter>
    <linearGradient id="ctnL3" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#4a0a15"/>
      <stop offset="100%" stop-color="#7a1522"/>
    </linearGradient>
    <linearGradient id="ctnR3" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#7a1522"/>
      <stop offset="100%" stop-color="#4a0a15"/>
    </linearGradient>
    <!-- 수묵화: 낮은 주파수 큰 물결 + 먹 번짐 + 채도 제거 -->
    <filter id="sketch3" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.03 0.06" numOctaves="3" seed="7" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="4.5" xChannelSelector="R" yChannelSelector="G" result="warped"/>
      <feGaussianBlur in="warped" stdDeviation="2"/>
      <feColorMatrix type="saturate" values="0.15"/>
    </filter>
    <!-- 페이퍼 텍스처 필터 -->
    <filter id="grain3" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.7 0.8" numOctaves="4" seed="5"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  </defs>
  <!-- 어두운 극장 배경 -->
  <rect width="600" height="280" fill="#090706"/>
  <!-- 무대 벽 (중앙) -->
  <rect x="98" y="30" width="404" height="196" fill="#111009"/>
  <rect x="98" y="30" width="404" height="196" fill="url(#wp3)"/>
  <!-- 벽 질감 노이즈 -->
  <rect x="98" y="30" width="404" height="196" filter="url(#grain3)" opacity="0.06"/>
  <!-- 커튼 왼쪽 -->
  <path d="M0 0 L114 0 Q90 55 94 128 Q90 195 114 280 L0 280Z" fill="url(#ctnL3)" stroke="#2a0808" stroke-width="1"/>
  <path d="M22 0 L98 0 Q78 58 82 128 Q78 192 98 280 L22 280Z" fill="#6a1220" opacity="0.55"/>
  <path d="M18 0Q28 54 20 128Q12 196 18 280" fill="none" stroke="#3a0a14" stroke-width="2" opacity="0.45"/>
  <path d="M48 0Q58 48 50 128Q42 192 48 280" fill="none" stroke="#5a1018" stroke-width="1.5" opacity="0.38"/>
  <!-- 커튼 오른쪽 -->
  <path d="M600 0 L486 0 Q510 55 506 128 Q510 195 486 280 L600 280Z" fill="url(#ctnR3)" stroke="#2a0808" stroke-width="1"/>
  <path d="M578 0 L502 0 Q522 58 518 128 Q522 192 502 280 L578 280Z" fill="#6a1220" opacity="0.55"/>
  <path d="M582 0Q572 54 580 128Q588 196 582 280" fill="none" stroke="#3a0a14" stroke-width="2" opacity="0.45"/>
  <path d="M552 0Q542 48 550 128Q558 192 552 280" fill="none" stroke="#5a1018" stroke-width="1.5" opacity="0.38"/>
  <!-- 상단 발란스 -->
  <rect x="0" y="0" width="600" height="30" fill="#320810"/>
  <path d="M0 30 Q25 42 50 30 Q75 18 100 30 Q125 42 150 30 Q175 18 200 30 Q225 42 250 30 Q275 18 300 30 Q325 42 350 30 Q375 18 400 30 Q425 42 450 30 Q475 18 500 30 Q525 42 550 30 Q575 18 600 30" fill="#5a1018" stroke="#320810" stroke-width="1"/>
  <!-- 스포트라이트 빔 (총 향해) -->
  <path d="M300 30 L228 146 L372 146Z" fill="#fffde0" opacity="0.04"/>
  <ellipse cx="300" cy="142" rx="68" ry="20" fill="#fffde0" opacity="0.05" filter="url(#glow3)"/>
  <!-- 총걸이 판넬 (벽 중앙) -->
  <rect x="240" y="58" width="120" height="94" rx="4" fill="#191410" stroke="#5a4820" stroke-width="2.5" filter="url(#sketch3)"/>
  <rect x="246" y="64" width="108" height="82" rx="2" fill="#0d0b08" stroke="#382e16" stroke-width="1.5"/>
  <!-- 앤틱 권총 -->
  <!-- 총신 -->
  <rect x="254" y="100" width="64" height="9" rx="4.5" fill="#8a7848" stroke="#5a4828" stroke-width="1.3"/>
  <!-- 방아쇠 가드 -->
  <path d="M300 109 Q310 121 304 127 Q298 121 300 109Z" fill="none" stroke="#8a7848" stroke-width="2.3" stroke-linecap="round"/>
  <!-- 손잡이 -->
  <path d="M308 104 Q326 104 328 118 Q326 128 315 128 L300 128 L300 109Z" fill="#6a4830" stroke="#3a2818" stroke-width="1.5" rx="3"/>
  <!-- 총 광택 -->
  <line x1="256" y1="102" x2="314" y2="102" stroke="#c8b870" stroke-width="1.2" opacity="0.35"/>
  <!-- 그림자 -->
  <ellipse cx="300" cy="129" rx="38" ry="4" fill="#000" opacity="0.35"/>
  <!-- 스포트라이트 (총 위) -->
  <ellipse cx="300" cy="104" rx="46" ry="24" fill="#fffde0" opacity="0.06" filter="url(#glow3sm)"/>
  <!-- 명패 -->
  <rect x="272" y="132" width="56" height="12" rx="2" fill="#231e10" stroke="#4a3820" stroke-width="1"/>
  <text x="300" y="141" text-anchor="middle" font-size="11" fill="#c8a848" font-family="Georgia,serif" font-style="italic">막 1</text>
  <!-- 무대 바닥 -->
  <rect x="98" y="226" width="404" height="14" fill="#1c1608" stroke="#282010" stroke-width="1"/>
  <!-- 타임라인 영역 -->
  <rect x="0" y="240" width="600" height="40" fill="#050403"/>
  <!-- 막 1 블록 -->
  <rect x="106" y="248" width="116" height="18" rx="3" fill="#2a2010" stroke="#6a5828" stroke-width="1.2"/>
  <text x="164" y="261" text-anchor="middle" font-size="11" fill="#d4b050" font-family="Georgia,serif" font-style="italic">막 1 · 총이 걸린다</text>
  <!-- 점선 화살표 -->
  <line x1="224" y1="257" x2="258" y2="257" stroke="#8a7040" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.9"/>
  <polygon points="256,253 266,257 256,261" fill="#8a7040" opacity="0.9"/>
  <text x="271" y="262" font-size="12" fill="#a08040" font-family="Arial">···</text>
  <!-- 막 3 블록 -->
  <rect x="284" y="248" width="210" height="18" rx="3" fill="#2a2010" stroke="#6a5828" stroke-width="1.2"/>
  <!-- 발사 섬광 -->
  <circle cx="302" cy="257" r="8" fill="#ff8c00" opacity="0.25" filter="url(#glow3sm)"/>
  <circle cx="302" cy="257" r="4.5" fill="#ffcc00" opacity="0.60"/>
  <line x1="309" y1="251" x2="314" y2="246" stroke="#ffcc00" stroke-width="1.5" stroke-linecap="round" opacity="0.85"/>
  <line x1="311" y1="257" x2="317" y2="257" stroke="#ffcc00" stroke-width="1.5" stroke-linecap="round" opacity="0.85"/>
  <line x1="309" y1="263" x2="314" y2="268" stroke="#ffcc00" stroke-width="1.5" stroke-linecap="round" opacity="0.85"/>
  <text x="402" y="261" text-anchor="middle" font-size="11" fill="#d4b050" font-family="Georgia,serif" font-style="italic">막 3 · 반드시 발사된다</text>
  <!-- 레이블 -->
  <text x="12" y="24" font-size="14" fill="#c8a848" font-family="Georgia,serif" font-style="italic">체호프의 총</text>
</svg>`,

  /* ══ 목요일용 — 창백한 푸른 점 — 감동 → 우주/수채화 스타일 ══
     광활한 암흑 우주 + 보이저 1호 도해 + 60억km 거리 + 창백한 파란 점 */
  4: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 280" translate="no">
  <defs>
    <linearGradient id="space4" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#06091a"/>
      <stop offset="55%"  stop-color="#030710"/>
      <stop offset="100%" stop-color="#020408"/>
    </linearGradient>
    <pattern id="grid4" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
      <path d="M26 0L0 0L0 26" fill="none" stroke="#1a3558" stroke-width="0.28" opacity="0.38"/>
    </pattern>
    <filter id="glow4" x="-80%" y="-80%" width="260%" height="260%">
      <feGaussianBlur stdDeviation="9"/>
    </filter>
    <filter id="glow4sm" x="-200%" y="-200%" width="500%" height="500%">
      <feGaussianBlur stdDeviation="3.5"/>
    </filter>
    <!-- 페이퍼 텍스처 필터 -->
    <filter id="grain4" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.85 0.95" numOctaves="4" seed="8"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
    <!-- 수묵화: 우주 여백·고독 — 먹 번짐 + 채도 제거 -->
    <filter id="sketch4" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.03 0.07" numOctaves="3" seed="13" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" result="warped"/>
      <feGaussianBlur in="warped" stdDeviation="1.8"/>
      <feColorMatrix type="saturate" values="0.15"/>
    </filter>
  </defs>
  <!-- 우주 배경 -->
  <rect width="600" height="280" fill="url(#space4)"/>
  <rect width="600" height="280" fill="url(#grid4)" opacity="0.35"/>
  <!-- 우주 노이즈 오버레이 -->
  <rect width="600" height="280" filter="url(#grain4)" opacity="0.04"/>
  <!-- 별 (왼쪽으로 갈수록 밝고 오른쪽은 점점 희미) -->
  <circle cx="14"  cy="10"  r="0.9" fill="#eef" opacity="0.58"/>
  <circle cx="38"  cy="34"  r="1.1" fill="#ddf" opacity="0.50"/>
  <circle cx="62"  cy="7"   r="0.7" fill="#ccf" opacity="0.44"/>
  <circle cx="90"  cy="52"  r="1.0" fill="#eef" opacity="0.52"/>
  <circle cx="18"  cy="70"  r="0.7" fill="#dde" opacity="0.40"/>
  <circle cx="124" cy="20"  r="1.2" fill="#fff" opacity="0.56"/>
  <circle cx="150" cy="65"  r="0.8" fill="#dde" opacity="0.45"/>
  <circle cx="172" cy="14"  r="0.6" fill="#ccf" opacity="0.38"/>
  <circle cx="200" cy="42"  r="1.0" fill="#eef" opacity="0.46"/>
  <circle cx="235" cy="28"  r="0.7" fill="#dde" opacity="0.34"/>
  <circle cx="255" cy="78"  r="1.0" fill="#eef" opacity="0.38"/>
  <circle cx="284" cy="16"  r="0.8" fill="#ccf" opacity="0.30"/>
  <circle cx="44"  cy="108" r="0.9" fill="#dde" opacity="0.42"/>
  <circle cx="82"  cy="136" r="0.7" fill="#eef" opacity="0.35"/>
  <circle cx="116" cy="102" r="0.6" fill="#ccf" opacity="0.30"/>
  <circle cx="174" cy="118" r="0.8" fill="#dde" opacity="0.26"/>
  <circle cx="216" cy="152" r="0.7" fill="#eef" opacity="0.22"/>
  <circle cx="24"  cy="188" r="0.9" fill="#dde" opacity="0.36"/>
  <circle cx="68"  cy="218" r="0.7" fill="#eef" opacity="0.30"/>
  <circle cx="106" cy="198" r="0.8" fill="#ccf" opacity="0.26"/>
  <circle cx="154" cy="238" r="0.6" fill="#dde" opacity="0.22"/>
  <circle cx="196" cy="172" r="0.7" fill="#eef" opacity="0.20"/>
  <circle cx="246" cy="228" r="0.8" fill="#dde" opacity="0.18"/>
  <circle cx="306" cy="138" r="0.6" fill="#ccf" opacity="0.15"/>
  <circle cx="336" cy="58"  r="0.7" fill="#eef" opacity="0.13"/>
  <circle cx="374" cy="178" r="0.5" fill="#dde" opacity="0.11"/>
  <circle cx="414" cy="98"  r="0.5" fill="#ccf" opacity="0.09"/>
  <!-- ── 보이저 1호 (왼쪽) ── -->
  <!-- 대형 접시 안테나 -->
  <ellipse cx="60" cy="130" rx="44" ry="9" fill="none" stroke="#8ab4d8" stroke-width="2.4" opacity="0.92"/>
  <ellipse cx="60" cy="130" rx="44" ry="9" fill="#0b2a4a" opacity="0.45"/>
  <path d="M16 130 Q60 119 104 130" fill="none" stroke="#6090b8" stroke-width="1.6" opacity="0.68"/>
  <!-- 지지대 -->
  <line x1="60" y1="139" x2="60" y2="158" stroke="#8ab4d8" stroke-width="2.6" stroke-linecap="round" opacity="0.88"/>
  <!-- 본체 -->
  <rect x="48" y="156" width="24" height="17" rx="2" fill="#6a92b8" stroke="#8ab4d8" stroke-width="1.8" opacity="0.92" filter="url(#sketch4)"/>
  <!-- RTG 팔 -->
  <line x1="60" y1="158" x2="28" y2="174" stroke="#8ab4d8" stroke-width="2.2" stroke-linecap="round" opacity="0.82"/>
  <line x1="60" y1="158" x2="92" y2="174" stroke="#8ab4d8" stroke-width="2.2" stroke-linecap="round" opacity="0.82"/>
  <rect x="20" y="170" width="16" height="8" rx="2" fill="#5a7fa0" stroke="#8ab4d8" stroke-width="1.2" opacity="0.88"/>
  <rect x="84" y="170" width="16" height="8" rx="2" fill="#5a7fa0" stroke="#8ab4d8" stroke-width="1.2" opacity="0.88"/>
  <!-- 계측 붐 -->
  <line x1="60" y1="130" x2="60" y2="96" stroke="#6090b8" stroke-width="1.2" stroke-linecap="round" opacity="0.65" stroke-dasharray="3,2"/>
  <circle cx="60" cy="94" r="2.5" fill="#8ab4d8" opacity="0.78"/>
  <!-- Voyager 레이블 -->
  <text x="14" y="18" font-size="13" fill="#7ab8e0" font-family="Arial,sans-serif" letter-spacing="0.8" opacity="0.95">VOYAGER 1  ·  1977</text>
  <!-- ── 카메라 빔 (보이저 → 지구, 매우 가늘고 희미하게) ── -->
  <line x1="104" y1="130" x2="564" y2="140" stroke="#fffde0" stroke-width="0.7" opacity="0.12"/>
  <path d="M104 127 L564 137 L564 143 L104 133Z" fill="#fffde0" opacity="0.03"/>
  <!-- ── 태양 빛 산란 줄기 (창백한 푸른 점 사진 특유의 광선) ── -->
  <line x1="568" y1="0"   x2="424" y2="280" stroke="#ffeebb" stroke-width="24" opacity="0.042"/>
  <line x1="574" y1="0"   x2="466" y2="280" stroke="#ffeebb" stroke-width="14" opacity="0.048"/>
  <line x1="580" y1="0"   x2="508" y2="280" stroke="#ffeebb" stroke-width="8"  opacity="0.038"/>
  <line x1="562" y1="0"   x2="382" y2="280" stroke="#ffeebb" stroke-width="5"  opacity="0.030"/>
  <!-- ── 거리 주석선 ── -->
  <line x1="112" y1="206" x2="554" y2="206" stroke="#1e3c5a" stroke-width="1" stroke-dasharray="3,4" opacity="0.55"/>
  <polygon points="112,202 102,206 112,210" fill="#1e3c5a" opacity="0.55"/>
  <polygon points="554,202 564,206 554,210" fill="#1e3c5a" opacity="0.55"/>
  <text x="333" y="202" text-anchor="middle" font-size="13" fill="#6aaad0" font-family="Arial,sans-serif" opacity="0.92">60억 킬로미터</text>
  <!-- ── 창백한 푸른 점 (지구) ── -->
  <!-- 배경 빛 번짐 -->
  <circle cx="564" cy="140" r="20" fill="#5588cc" opacity="0.07" filter="url(#glow4)"/>
  <circle cx="564" cy="140" r="9"  fill="#7aaaee" opacity="0.10" filter="url(#glow4sm)"/>
  <!-- 점 자체 -->
  <circle cx="564" cy="140" r="3.4" fill="#aacbee" opacity="0.88"/>
  <circle cx="563" cy="139" r="1.9" fill="#cce0ff" opacity="0.92"/>
  <!-- 태양 산란 후광 -->
  <circle cx="564" cy="140" r="5.5" fill="#88aadd" opacity="0.28" filter="url(#glow4sm)"/>
  <!-- Earth 주석 -->
  <line x1="564" y1="132" x2="564" y2="114" stroke="#4a80aa" stroke-width="1" opacity="0.72"/>
  <line x1="564" y1="114" x2="538" y2="114" stroke="#4a80aa" stroke-width="1" opacity="0.72"/>
  <text x="536" y="111" font-size="12" fill="#90c4e4" font-family="Arial,sans-serif" text-anchor="end">Earth</text>
  <text x="536" y="125" font-size="11" fill="#70a8c8" font-family="Arial,sans-serif" text-anchor="end" opacity="0.88">1/12 픽셀</text>
  <!-- 세이건 인용 (하단) -->
  <rect x="0" y="244" width="600" height="36" fill="#020407" opacity="0.85"/>
  <text x="300" y="260" text-anchor="middle" font-size="13" fill="#a0c0d8" font-family="Georgia,serif" font-style="italic">"저것을 보라. 저게 여기다. 저게 집이다. 저게 우리다."</text>
  <text x="300" y="275" text-anchor="middle" font-size="11" fill="#7090a8" font-family="Arial,sans-serif" opacity="0.88">— Carl Sagan, Pale Blue Dot, 1994</text>
</svg>`,

  /* ══ 금요일 — 과학·정치 — 유머 → 선 드로잉 ══
     파인만의 O링 청문회 장면
     왼쪽: NASA 보고서 더미 / 중앙: 얼음물 컵 + C집게 O링 / 오른쪽: 파인만 + 마이크 */
  5: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 280" translate="no">
  <defs>
    <filter id="wc5" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.04 0.08" numOctaves="3" seed="17" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="8" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>

  <!-- 크림 배경 -->
  <rect width="600" height="280" fill="#f8f7f4"/>

  <!-- ── 청문회 테이블 ── -->
  <g filter="url(#wc5)">
    <rect x="0" y="212" width="600" height="12" fill="#e0d8cc" stroke="#2a2a2a" stroke-width="1.8"/>
    <rect x="0" y="224" width="600" height="56" fill="#d8cfc2"/>
  </g>

  <!-- ── 왼쪽: NASA 보고서 더미 ── -->
  <g filter="url(#wc5)" stroke="#2a2a2a" stroke-linecap="round">
    <!-- 두꺼운 바인더 -->
    <rect x="28" y="158" width="78" height="54" rx="2" fill="#c4b49a" stroke-width="2.0"/>
    <rect x="28" y="158" width="10" height="54" rx="1" fill="#8a7860" stroke-width="1.5"/>
    <!-- 바인더 텍스트 줄 -->
    <line x1="44" y1="170" x2="100" y2="170" stroke-width="0.8" opacity="0.45"/>
    <line x1="44" y1="177" x2="97"  y2="177" stroke-width="0.8" opacity="0.45"/>
    <line x1="44" y1="184" x2="99"  y2="184" stroke-width="0.8" opacity="0.45"/>
    <line x1="44" y1="191" x2="95"  y2="191" stroke-width="0.8" opacity="0.45"/>
    <line x1="44" y1="198" x2="98"  y2="198" stroke-width="0.8" opacity="0.45"/>
    <line x1="44" y1="205" x2="94"  y2="205" stroke-width="0.8" opacity="0.45"/>
    <!-- 종이 더미 위로 -->
    <rect x="22" y="147" width="76" height="14" rx="1" fill="#f5f2ec" stroke-width="1.3"/>
    <rect x="18" y="136" width="76" height="14" rx="1" fill="#f8f5ef" stroke-width="1.3"/>
    <rect x="24" y="125" width="74" height="14" rx="1" fill="#f5f2ec" stroke-width="1.3"/>
    <rect x="20" y="114" width="74" height="14" rx="1" fill="#f8f5ef" stroke-width="1.3"/>
    <!-- 종이 내용 선 -->
    <line x1="28" y1="140" x2="90" y2="140" stroke-width="0.6" opacity="0.35"/>
    <line x1="28" y1="129" x2="88" y2="129" stroke-width="0.6" opacity="0.35"/>
    <line x1="28" y1="118" x2="88" y2="118" stroke-width="0.6" opacity="0.35"/>
  </g>

  <!-- ── 중앙: 얼음물 컵 ── -->
  <g filter="url(#wc5)" stroke-linecap="round">
    <!-- 컵 본체 -->
    <path d="M218 118 L208 212 L308 212 L298 118 Z" stroke="#1a1a1a" stroke-width="2.5" fill="#e8f4fb" fill-opacity="0.55"/>
    <!-- 컵 윗테두리 -->
    <line x1="215" y1="118" x2="301" y2="118" stroke="#1a1a1a" stroke-width="2.8"/>
    <!-- 물 표면 -->
    <path d="M210 140 Q240 134 263 140 Q282 145 305 138" stroke="#4a8fb8" stroke-width="1.4" fill="none"/>
    <!-- 물 속 채우기 -->
    <path d="M210 140 Q240 134 263 140 Q282 145 305 138 L308 212 L208 212 Z" fill="#c8e8f8" fill-opacity="0.35" stroke="none"/>
    <!-- 얼음 조각 1 -->
    <rect x="220" y="148" width="22" height="20" rx="2" fill="#dff3fc" stroke="#6ab0d8" stroke-width="1.3" transform="rotate(14,231,158)"/>
    <!-- 얼음 조각 2 -->
    <rect x="250" y="155" width="20" height="18" rx="2" fill="#dff3fc" stroke="#6ab0d8" stroke-width="1.3" transform="rotate(-9,260,164)"/>
    <!-- 얼음 조각 3 -->
    <rect x="276" y="148" width="18" height="17" rx="2" fill="#dff3fc" stroke="#6ab0d8" stroke-width="1.3" transform="rotate(6,285,156)"/>
    <!-- 물 반짝임 -->
    <line x1="224" y1="172" x2="230" y2="169" stroke="#90ccec" stroke-width="1.8" opacity="0.65"/>
    <line x1="292" y1="176" x2="298" y2="173" stroke="#90ccec" stroke-width="1.8" opacity="0.65"/>
  </g>

  <!-- ── C집게 + O링 (컵에 담그는 중) ── -->
  <g filter="url(#wc5)" stroke="#1a1a1a" fill="none" stroke-linecap="round">
    <!-- C집게 몸체 -->
    <path d="M264 55 Q294 55 306 72 Q318 90 306 110 Q294 128 264 128" stroke-width="3.2"/>
    <!-- 집게 양끝 -->
    <line x1="258" y1="55"  x2="264" y2="55"  stroke-width="2.8"/>
    <line x1="258" y1="128" x2="264" y2="128" stroke-width="2.8"/>
    <!-- O링 — 집게 안쪽에 끼워진 고무링 -->
    <ellipse cx="258" cy="91" rx="18" ry="8" stroke="#5a3010" stroke-width="4.5" fill="none"/>
    <!-- 집게 자루 -->
    <line x1="258" y1="91" x2="170" y2="68" stroke-width="3.2"/>
    <!-- 손가락들 -->
    <path d="M170 68 Q158 62 153 57 Q148 52 151 46 Q154 40 161 44" stroke-width="2.2"/>
    <path d="M161 44 Q167 33 175 38 Q182 30 190 36 Q197 29 204 36" stroke-width="2.0"/>
    <path d="M204 36 Q212 38 207 49 Q202 58 197 63" stroke-width="2.0"/>
    <path d="M151 46 Q146 40 148 33 Q151 27 156 30" stroke-width="1.7"/>
  </g>

  <!-- ── 오른쪽: 파인만 (테이블에 앉아 집게를 쥔) ── -->
  <g filter="url(#wc5)" stroke="#1a1a1a" fill="none" stroke-linecap="round">
    <!-- 머리 -->
    <circle cx="450" cy="148" r="20" stroke-width="2.2"/>
    <!-- 머리카락 -->
    <path d="M432 145 Q438 130 450 127 Q462 130 468 145" stroke-width="2.0"/>
    <!-- 안경 -->
    <path d="M438 146 Q444 142 450 146" stroke-width="1.3" opacity="0.75"/>
    <path d="M450 146 Q456 142 462 146" stroke-width="1.3" opacity="0.75"/>
    <line x1="436" y1="146" x2="438" y2="146" stroke-width="1.3" opacity="0.75"/>
    <line x1="462" y1="146" x2="464" y2="146" stroke-width="1.3" opacity="0.75"/>
    <!-- 목 -->
    <line x1="450" y1="168" x2="450" y2="176" stroke-width="2.5"/>
    <!-- 몸통 -->
    <line x1="436" y1="176" x2="464" y2="176" stroke-width="2.0"/>
    <path d="M436 176 Q432 200 430 212" stroke-width="2.8"/>
    <path d="M464 176 Q468 200 470 212" stroke-width="2.8"/>
    <!-- 왼팔: 집게 쥐고 뻗음 -->
    <path d="M436 182 Q380 155 310 128" stroke-width="2.5"/>
    <!-- 오른팔: 테이블 위에 -->
    <path d="M464 182 Q480 196 490 208" stroke-width="2.2"/>
  </g>

  <!-- ── 오른쪽: 마이크 ── -->
  <g filter="url(#wc5)" stroke="#1a1a1a" fill="none" stroke-linecap="round">
    <ellipse cx="540" cy="162" rx="13" ry="19" stroke-width="2.0" fill="#ddd8d0" fill-opacity="0.5"/>
    <line x1="534" y1="150" x2="546" y2="150" stroke-width="0.9" opacity="0.55"/>
    <line x1="532" y1="157" x2="548" y2="157" stroke-width="0.9" opacity="0.55"/>
    <line x1="531" y1="164" x2="549" y2="164" stroke-width="0.9" opacity="0.55"/>
    <line x1="532" y1="171" x2="548" y2="171" stroke-width="0.9" opacity="0.55"/>
    <line x1="534" y1="178" x2="546" y2="178" stroke-width="0.9" opacity="0.55"/>
    <line x1="540" y1="181" x2="540" y2="212" stroke-width="2.2"/>
    <line x1="526" y1="212" x2="554" y2="212" stroke-width="2.0"/>
  </g>
</svg>`,

  /* ══ 월요일용 v3 — 배니스터 4분의 벽 — soft watercolor wash ══
     크림 종이 위 수채화: 하늘·트랙 워시, 러너 실루엣, 시계, 테이프, 황금 빛 파티클 */
  6: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 280" translate="no">
  <defs>
    <!-- 큰 번짐: 배경 워시 -->
    <filter id="wcb" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.022 0.034" numOctaves="4" seed="7" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="22" xChannelSelector="R" yChannelSelector="G" result="d"/>
      <feGaussianBlur in="d" stdDeviation="5.5"/>
    </filter>
    <!-- 중간 번짐: 주요 요소 -->
    <filter id="wc" x="-15%" y="-15%" width="130%" height="130%">
      <feTurbulence type="fractalNoise" baseFrequency="0.032 0.052" numOctaves="4" seed="23" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="14" xChannelSelector="R" yChannelSelector="G" result="d"/>
      <feGaussianBlur in="d" stdDeviation="2.2"/>
    </filter>
    <!-- 작은 번짐: 세부·선 -->
    <filter id="wcs" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency="0.058 0.095" numOctaves="3" seed="41" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="8" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <!-- 순수 블러 -->
    <filter id="bl3"><feGaussianBlur stdDeviation="3"/></filter>
    <filter id="bl6"><feGaussianBlur stdDeviation="6"/></filter>
    <filter id="bl10"><feGaussianBlur stdDeviation="10"/></filter>
  </defs>

  <!-- ── 크림 종이 배경 ── -->
  <rect width="600" height="280" fill="#f7f2e8"/>
  <!-- 종이 미세 워시 -->
  <ellipse cx="300" cy="140" rx="340" ry="165" fill="#ede6d8" opacity="0.30" filter="url(#bl10)"/>

  <!-- ── 하늘 수채 워시 (wet-on-wet 3레이어) ── -->
  <ellipse cx="290" cy="68" rx="335" ry="115" fill="#b4d0ea" opacity="0.34" filter="url(#wcb)"/>
  <ellipse cx="175" cy="52" rx="240" ry="88" fill="#a2c4e0" opacity="0.24" filter="url(#wcb)"/>
  <ellipse cx="430" cy="44" rx="195" ry="78" fill="#c5ddf5" opacity="0.22" filter="url(#wcb)"/>
  <!-- 하늘 위 연한 흰 빛 -->
  <ellipse cx="300" cy="18" rx="270" ry="55" fill="#e8f3fc" opacity="0.28" filter="url(#bl10)"/>

  <!-- ── 트랙·땅 수채 워시 ── -->
  <ellipse cx="300" cy="258" rx="315" ry="72" fill="#ddb855" opacity="0.40" filter="url(#wcb)"/>
  <ellipse cx="285" cy="265" rx="272" ry="52" fill="#cc9f3a" opacity="0.28" filter="url(#wcb)"/>
  <ellipse cx="318" cy="254" rx="225" ry="40" fill="#c49030" opacity="0.22" filter="url(#wcb)"/>
  <!-- 트랙 안쪽 연한 녹색 워시 -->
  <ellipse cx="300" cy="240" rx="195" ry="35" fill="#a8c870" opacity="0.12" filter="url(#bl6)"/>
  <!-- 트랙 타원선 -->
  <ellipse cx="300" cy="234" rx="246" ry="50" fill="none" stroke="#b08830" stroke-width="1.4" opacity="0.32" filter="url(#wcs)"/>
  <ellipse cx="300" cy="234" rx="208" ry="37" fill="none" stroke="#b08830" stroke-width="1.0" opacity="0.22" filter="url(#wcs)"/>

  <!-- ── 관중석 흐릿한 색 매스 ── -->
  <ellipse cx="140" cy="178" rx="108" ry="32" fill="#c8b49c" opacity="0.22" filter="url(#bl10)"/>
  <ellipse cx="460" cy="174" rx="105" ry="30" fill="#bca898" opacity="0.20" filter="url(#bl10)"/>
  <ellipse cx="300" cy="168" rx="82" ry="22" fill="#cbbfa8" opacity="0.14" filter="url(#bl10)"/>

  <!-- ── 왼쪽 속도 워시 (지나온 바람, 운동감) ── -->
  <ellipse cx="118" cy="136" rx="112" ry="34" fill="#e4d9c6" opacity="0.48" filter="url(#wcb)"/>
  <ellipse cx="96" cy="118" rx="88" ry="24" fill="#ddd0ba" opacity="0.34" filter="url(#wcb)"/>
  <ellipse cx="128" cy="160" rx="98" ry="22" fill="#e0d4c0" opacity="0.28" filter="url(#wcb)"/>
  <!-- 속도 잉크 스트로크 -->
  <g filter="url(#wcs)" stroke="#a09080" stroke-linecap="round" opacity="0.30">
    <line x1="172" y1="86"  x2="240" y2="93"  stroke-width="2.8"/>
    <line x1="168" y1="106" x2="238" y2="111" stroke-width="2.4"/>
    <line x1="172" y1="126" x2="238" y2="128" stroke-width="2.2"/>
    <line x1="170" y1="146" x2="238" y2="144" stroke-width="1.9"/>
    <line x1="173" y1="72"  x2="235" y2="78"  stroke-width="2.4"/>
    <line x1="170" y1="164" x2="236" y2="160" stroke-width="1.6"/>
  </g>

  <!-- ── 결승 테이프 수채 워시 ── -->
  <!-- 테이프 빛 번짐 -->
  <rect x="234" y="110" width="132" height="20" rx="8" fill="#e03030" opacity="0.20" filter="url(#bl6)"/>
  <!-- 테이프 왼쪽 -->
  <rect x="238" y="118" width="58" height="6" rx="3" fill="#b82020" opacity="0.65" filter="url(#wcs)"/>
  <!-- 테이프 오른쪽 -->
  <rect x="308" y="117" width="60" height="6" rx="3" fill="#b82020" opacity="0.65" filter="url(#wcs)"/>
  <!-- 끊어진 중앙 조각들 -->
  <path d="M 296 112 Q 301 122 306 111 Q 310 120 316 114" fill="none" stroke="#b82020" stroke-width="2" opacity="0.55" filter="url(#wcs)"/>
  <!-- 테이프 그림자 -->
  <rect x="242" y="126" width="116" height="4" rx="2" fill="#902020" opacity="0.12" filter="url(#bl3)"/>

  <!-- ── 러너 실루엣 (수채화 레이어드) ── -->
  <!-- 발 그림자 -->
  <ellipse cx="296" cy="226" rx="48" ry="11" fill="#7a5020" opacity="0.18" filter="url(#bl6)"/>

  <!-- 다리 — 베이스 워시 (넓고 부드러운) -->
  <path d="M 291 138 Q 266 170 248 204 Q 240 220 236 225"
        fill="none" stroke="#6a4228" stroke-width="26" stroke-linecap="round" opacity="0.52" filter="url(#wc)"/>
  <path d="M 291 138 Q 318 166 340 196 Q 349 212 353 218"
        fill="none" stroke="#6a4228" stroke-width="26" stroke-linecap="round" opacity="0.52" filter="url(#wc)"/>
  <!-- 다리 — 중간 톤 -->
  <path d="M 291 138 Q 266 170 248 204 Q 240 220 236 225"
        fill="none" stroke="#8a5a38" stroke-width="14" stroke-linecap="round" opacity="0.38" filter="url(#wcs)"/>
  <path d="M 291 138 Q 318 166 340 196 Q 349 212 353 218"
        fill="none" stroke="#8a5a38" stroke-width="14" stroke-linecap="round" opacity="0.38" filter="url(#wcs)"/>
  <!-- 다리 — 하이라이트 -->
  <path d="M 291 138 Q 266 170 248 204"
        fill="none" stroke="#d4a870" stroke-width="6" stroke-linecap="round" opacity="0.20" filter="url(#bl3)"/>
  <path d="M 291 138 Q 318 166 340 196"
        fill="none" stroke="#d4a870" stroke-width="6" stroke-linecap="round" opacity="0.20" filter="url(#bl3)"/>

  <!-- 몸통 — 베이스 -->
  <path d="M 297 92 Q 292 116 290 138"
        fill="none" stroke="#582e18" stroke-width="30" stroke-linecap="round" opacity="0.60" filter="url(#wc)"/>
  <!-- 몸통 — 중간 톤 -->
  <path d="M 297 92 Q 292 116 290 138"
        fill="none" stroke="#7a4a28" stroke-width="16" stroke-linecap="round" opacity="0.38" filter="url(#wcs)"/>
  <!-- 몸통 하이라이트 -->
  <path d="M 297 92 Q 292 116 290 138"
        fill="none" stroke="#e0b880" stroke-width="7" stroke-linecap="round" opacity="0.18" filter="url(#bl3)"/>

  <!-- 팔 — 베이스 -->
  <path d="M 294 108 Q 262 97 248 118"
        fill="none" stroke="#6a4228" stroke-width="18" stroke-linecap="round" opacity="0.55" filter="url(#wc)"/>
  <path d="M 294 108 Q 330 95 346 114"
        fill="none" stroke="#6a4228" stroke-width="18" stroke-linecap="round" opacity="0.55" filter="url(#wc)"/>
  <!-- 팔 — 중간 톤 -->
  <path d="M 294 108 Q 262 97 248 118"
        fill="none" stroke="#8a5a38" stroke-width="9" stroke-linecap="round" opacity="0.32" filter="url(#wcs)"/>
  <path d="M 294 108 Q 330 95 346 114"
        fill="none" stroke="#8a5a38" stroke-width="9" stroke-linecap="round" opacity="0.32" filter="url(#wcs)"/>

  <!-- 머리 — 베이스 -->
  <circle cx="299" cy="79" r="17" fill="#582e18" opacity="0.65" filter="url(#wc)"/>
  <!-- 머리 — 하이라이트 워시 -->
  <circle cx="295" cy="74" r="10" fill="#e8c090" opacity="0.22" filter="url(#bl6)"/>

  <!-- ── 운동복 컬러 워시 (파란 유니폼) ── -->
  <path d="M 297 98 Q 292 118 290 134"
        fill="none" stroke="#4060a8" stroke-width="10" stroke-linecap="round" opacity="0.28" filter="url(#bl3)"/>
  <path d="M 294 108 Q 262 97 248 118"
        fill="none" stroke="#4060a8" stroke-width="7" stroke-linecap="round" opacity="0.20" filter="url(#bl3)"/>
  <path d="M 294 108 Q 330 95 346 114"
        fill="none" stroke="#4060a8" stroke-width="7" stroke-linecap="round" opacity="0.20" filter="url(#bl3)"/>

  <!-- ── 시계 (청회색 수채) ── -->
  <!-- 외곽 빛 번짐 -->
  <circle cx="494" cy="57" r="48" fill="#80afd0" opacity="0.22" filter="url(#bl10)"/>
  <!-- 시계 배경 워시 레이어 1 -->
  <circle cx="494" cy="57" r="40" fill="#92bcd8" opacity="0.30" filter="url(#wcb)"/>
  <!-- 시계 배경 워시 레이어 2 -->
  <circle cx="490" cy="53" r="34" fill="#aaccdf" opacity="0.24" filter="url(#wcb)"/>
  <!-- 시계 내부 (흰 종이 느낌) -->
  <circle cx="494" cy="57" r="32" fill="#f0f5fa" opacity="0.50" filter="url(#wcs)"/>
  <!-- 시계 테두리 -->
  <circle cx="494" cy="57" r="36" fill="none" stroke="#4878a0" stroke-width="2.5" opacity="0.58" filter="url(#wcs)"/>
  <!-- 눈금 -->
  <g stroke="#386898" stroke-width="2" stroke-linecap="round" opacity="0.62" filter="url(#wcs)">
    <line x1="494" y1="24" x2="494" y2="32"/>
    <line x1="527" y1="57" x2="519" y2="57"/>
    <line x1="494" y1="90" x2="494" y2="82"/>
    <line x1="461" y1="57" x2="469" y2="57"/>
  </g>
  <!-- 시침 (12시 방향, 3분대) -->
  <line x1="494" y1="57" x2="494" y2="28" stroke="#1e3c60" stroke-width="3.2" stroke-linecap="round" opacity="0.75" filter="url(#wcs)"/>
  <!-- 분침 (59초 — 4시 직전) -->
  <line x1="494" y1="57" x2="518" y2="70" stroke="#1e3c60" stroke-width="2.4" stroke-linecap="round" opacity="0.70" filter="url(#wcs)"/>
  <!-- 중심점 -->
  <circle cx="494" cy="57" r="4" fill="#1e3c60" opacity="0.75"/>
  <!-- 3:59 붉은 워시 힌트 (시계 하단) -->
  <ellipse cx="494" cy="100" rx="24" ry="8" fill="#c03030" opacity="0.22" filter="url(#bl6)"/>

  <!-- ── 황금빛 환호 파티클 ── -->
  <circle cx="125" cy="50" r="9" fill="#e8c030" opacity="0.38" filter="url(#wcb)"/>
  <circle cx="147" cy="33" r="6" fill="#f0d040" opacity="0.30" filter="url(#wcb)"/>
  <circle cx="106" cy="67" r="7" fill="#e8c030" opacity="0.26" filter="url(#wcb)"/>
  <circle cx="144" cy="72" r="5" fill="#f0d848" opacity="0.24" filter="url(#wcb)"/>
  <circle cx="165" cy="44" r="4" fill="#f5d840" opacity="0.22" filter="url(#wcb)"/>
  <circle cx="393" cy="38" r="7" fill="#e8c030" opacity="0.32" filter="url(#wcb)"/>
  <circle cx="414" cy="22" r="5.5" fill="#f0d040" opacity="0.27" filter="url(#wcb)"/>
  <circle cx="432" cy="46" r="6" fill="#e8c030" opacity="0.24" filter="url(#wcb)"/>
  <circle cx="450" cy="30" r="4" fill="#f5d840" opacity="0.22" filter="url(#wcb)"/>

  <!-- 파티클 연결 — 잉크 점선 -->
  <g stroke="#c4a020" stroke-width="0.9" opacity="0.28" stroke-linecap="round" filter="url(#wcs)">
    <line x1="125" y1="50" x2="147" y2="33"/>
    <line x1="147" y1="33" x2="165" y2="44"/>
    <line x1="393" y1="38" x2="414" y2="22"/>
    <line x1="414" y1="22" x2="432" y2="46"/>
  </g>

  <!-- ── 지평선 수채 워시 ── -->
  <rect x="40" y="234" width="520" height="3" rx="1.5" fill="#b09060" opacity="0.22" filter="url(#wcs)"/>
</svg>`
};

/* ── Stories ── */
/* (지난 주 5/18–5/22 — STORY_ARCHIVE 로 이동됨) */
const WEEK_MAY3_STORIES = {

  /* ═══ 월요일 — 역사·감동 (PRIMARY: 감동) — 5·18 광주민주화운동 46주년 ═══ */
  1: {
    title: '안병하의 명령',
    category: '역사·감동',
    primaryType: '감동',
    types: ['감동', '통찰'],
    image: null,
    svgKey: null,
    body: [
      '1980년 5월 19일 오후, 전라남도 광주. 전남도경 국장 안병하 경무관은 무전을 받았다. 시위대가 도청 앞에 모이고 있다는 보고였다. 그는 송수신기를 들었다. 일선 지휘관들에게 짧은 명령을 내렸다. "발포하지 마라. 시민에게 총을 겨눠선 안 된다." 그것은 위로부터 내려온 명령이 아니었다.',
      '그날 오후 이미 위에서 다른 명령이 내려와 있었다. 강경 대응. 발포 허가. 안병하 국장은 그 명령을 듣지 않았다. 자신의 휘하 경찰관들에게 정반대의 명령을 내렸다. 그는 52세였다. 한국전쟁 때부터 30년 경찰이었다.',
      '그는 무기를 모두 거둬들이게 했다. 경찰서 무기고를 봉인했다. 발포는커녕 진압봉도 사용을 자제하라고 했다. 일선 경찰관들에게 그는 한 가지를 더 일러뒀다. "시위대 중 부상자가 있으면 데려와 치료하라." 광주 도경의 의무실이 그날부터 부상자 응급실이 됐다.',
      '5월 21일, 도청 앞에서 발포가 있었다. 그러나 그것은 광주 경찰의 것이 아니었다. 공수부대였다. 그 발포 이후로도 안병하는 입장을 바꾸지 않았다. 그는 마지막까지 자신의 부하들에게 무기를 들지 못하게 했다.',
      '5월 26일, 보안사 요원들이 그를 데려갔다. 그가 끌려간 곳에서 8일이 지났다. 어떤 가족도 면회할 수 없었다. 9일째 되는 날 그는 풀려났다. 등에 손바닥만한 멍이 있었다. 갈비뼈가 부러져 있었다. 그는 말이 없었다.',
      '6월 2일, 그는 사표를 냈다. 정확히는 "건강상 사유로 인한 사임"이었다. 30년 경찰 생활의 끝이었다. 그에게는 연금이 나오지 않았다. 신청도 받아들여지지 않았다. 가족은 강원도 양양으로 내려갔다. 작은 농가였다.',
      '그는 어느 날부터 잠을 자지 못했다. 잠들면 광주의 그날들이 다시 보였다. 1981년 폐결핵 진단을 받았다. 1985년 췌장암 판정을 받았다. 의료보험이 없어 동네 한의원에서 약을 받아 먹었다. 그는 자주 무전기 환청을 들었다.',
      '1988년 10월 10일 새벽, 안병하는 60세로 세상을 떠났다. 강원도의 작은 농가에서였다. 장례식에는 몇 명만 왔다. 광주에서 동료 경찰들이 조용히 찾아왔다. 그러나 화환을 보내올 사람은 그 시절 없었다.',
      '2003년, 광주 5·18 진상조사위원회가 그의 명예 회복을 권고했다. 2006년, 그의 사망이 5·18 관련 순직으로 인정됐다. 25년이 지나서였다. 2017년, 한국 경찰청은 한국 경찰사 최초로 \'경찰영웅 1호\'를 선정했다. 안병하였다. 그가 거부했던 그 명령이, 그를 영웅으로 호명한 가장 큰 이유였다.',
      '2019년, 정부는 그를 치안감으로 추서했다. 사망 31년 뒤였다. 광주에 그의 흉상이 세워졌다. 한 글귀가 새겨졌다. "시민에게 총을 겨눠선 안 된다." 1980년 5월 그가 무전기에 내린 명령이었다. 한 사람이 자신의 자리를 잃으면서 지킨 한 문장이, 마침내 경찰의 가장 큰 자랑이 됐다.'
    ],
    closing: '위로부터 온 명령은 거절했고\n아래로 내린 명령은 한 문장이었다.\n"시민에게 총을 겨눠선 안 된다."\n31년이 지나, 그 한 문장이 영웅을 만들었다.',
    analysis: {
      insight: { icon: '💡', text: '명령은 위에서만 오는 것이 아니다 — 자기 자리에서 거꾸로 내릴 수도 있다.',
                 condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
      humor:   { icon: '😄', text: '\'건강상 사유로 인한 사임\' — 30년 경찰의 마지막 공식 기록이었다.',
                 condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
      emotion: { icon: '❤️', text: '부러진 갈비뼈로 강원도로 내려간 그가, 사망 18년 뒤에야 순직으로 인정됐다.',
                 condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
    },
    source: {
      type: '실화',
      credit: '안병하(安炳夏, 1928–1988) / 5·18민주화운동기록관 및 경찰청 〈경찰영웅 1호 안병하〉(2017) 자료를 바탕으로 재서술했습니다.',
    },
    curatorNote: '5월 18일입니다. 광주를 기억하는 방식 중에 안병하라는 이름이 있습니다. 위로부터 온 명령을 거부한 한 경찰관이, 자신의 자리에서 거꾸로 내린 명령은 단 한 문장이었습니다. 그 한 문장이 30년 뒤 한국 경찰의 가장 큰 자랑이 될 줄, 그는 몰랐을 것입니다.',
    qna: {
      question: '당신의 자리에서 거꾸로 거절해야 했던 명령이 있었나요? 그 거절이 당신에게 어떤 흔적을 남겼나요?',
      answer: '안병하는 30년 경찰의 모든 것을 잃으면서 한 문장을 지켰습니다. 그러나 결국 그 한 문장이 그를 다시 살렸습니다. 거절한 자리에서 가장 깊은 충실함이 시작될 수 있습니다.'
    },
    publishedDate: '2026년 5월 18일',
  },

  /* ═══ 화요일 — 역사·유머 (PRIMARY: 유머) ═══ */
  2: {
    title: '토미 쿠퍼의 마지막 무대',
    category: '역사·유머',
    primaryType: '유머',
    types: ['유머', '감동'],
    image: null,
    svgKey: null,
    body: [
      '1984년 4월 15일 일요일 저녁, 런던 허 마제스티 극장. ITV 생방송 〈Live from Her Majesty\'s〉가 진행 중이었다. 진행자는 지미 타벅이었다. 객석에는 1,800명이 앉아 있었고, 영국 전역에서 1,200만 명이 텔레비전 앞에 있었다. 한 시간 반짜리 프로그램의 후반부, 차례가 된 사람은 토미 쿠퍼였다.',
      '토미 쿠퍼는 영국에서 가장 사랑받는 코미디언이었다. 62세였다. 마술과 코미디를 섞은 무대로 30년을 살았다. 빨간 페즈(fez)를 머리에 쓰고 어딘가 어설픈 마술을 보여주다 망쳐서 사람들을 웃기는 것이 그의 방식이었다. 그가 무대로 걸어 나왔다. 객석이 박수를 쳤다.',
      '그날의 마술은 평소처럼 시작됐다. 보조 출연자가 무대 뒤에서 그에게 가운(robe)을 입혀줬고, 페즈를 쓴 채로 그는 첫 번째 마술을 시작했다. 객석이 웃었다. 두 번째 마술로 넘어가는 듯 보였다. 그가 갑자기 뒷걸음치며 의자에 주저앉았다. 그러고는 천천히 쓰러졌다.',
      '객석은 박수와 웃음을 보냈다. 그것이 평소의 그였기 때문이다. 토미 쿠퍼는 늘 무대 위에서 비틀거리고 넘어지고 멈췄다. 이번에도 그런 줄 알았다. 무대 위의 다른 출연자들도 처음에는 같이 웃었다. 누군가 그에게 다가가 가운만 다시 덮어줬다. "이 사람이 또 농담하는군." 그렇게 보였다.',
      '그러나 그는 일어나지 않았다. 무대 옆에서 누군가가 신호를 보냈다. 진행자 지미 타벅이 무대로 올라와 무언가를 말하려 했다. 그 순간 광고가 시작됐다. 객석은 여전히 박수를 치고 있었다. 광고 후 무대 뒤에서 응급 처치가 시작됐다.',
      '토미 쿠퍼는 무대 뒤에서 응급차에 실렸다. 웨스트민스터 병원으로 옮겨졌다. 그러나 도착 전 이미 심정지였다. 사망 시간은 그날 저녁 8시 56분으로 기록됐다. 사인은 심근경색이었다.',
      '다음 날 영국 신문이 그의 죽음을 보도했다. 〈데일리 미러〉의 기사 제목은 이러했다. "Tommy died as he lived — making people laugh."(그는 살아온 그대로 죽었다 — 사람들을 웃기면서.)',
      '토미 쿠퍼는 평생 무대에서 진심을 다해 어설프고자 했다. 진짜 마술을 보여주는 것이 아니라, 마술이 망가지는 그 순간을 보여주는 것이 그의 일이었다. 그 어설픔이 그의 직업이었고, 그 직업이 결국 그의 죽음을 가렸다. 객석은 그가 죽는 그 순간에도 그를 믿었다.',
      '그 방송 녹화 영상은 ITV 아카이브에 보관됐다. 한참 동안 일반에 공개되지 않았다. 1990년대 들어 일부가 공개됐는데, 객석의 웃음소리가 그가 쓰러지는 장면 위로 그대로 들어 있었다. 후에 그 장면을 본 사람들은 모두 같은 말을 했다. "그가 진짜 죽었다는 게 끝까지 안 믿겼다."',
      '토미 쿠퍼의 묘비에는 그가 무대에서 자주 외쳤던 한 마디가 새겨져 있다. "Just like that!" 마술을 끝낼 때마다 그가 외쳤던 말이다. 마치 손가락 한 번 튕기듯이, 그렇게 쉽게.'
    ],
    closing: '그는 무대에서 쓰러졌다.\n객석은 끝까지 박수를 쳤다.\n평생 사람을 웃긴 자의 죽음을\n객석도 동료도 농담으로 받아들였다.',
    analysis: {
      insight: { icon: '💡', text: '잘하는 일은 자기 죽음마저 가린다 — 평생의 직업이 마지막 순간의 진실을 감췄다.',
                 condition: '작은 것이 사실 전부였음이 드러날 때' },
      humor:   { icon: '😄', text: '1,200만 명이 보는 앞에서 죽었는데, 누구도 그가 죽었다고 믿지 않았다.',
                 condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
      emotion: { icon: '❤️', text: '"그는 살아온 그대로 죽었다 — 사람들을 웃기면서." 다음 날 신문 헤드라인.',
                 condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
    },
    source: {
      type: '실화',
      credit: '토미 쿠퍼(Tommy Cooper, 1921–1984) / John Fisher 《Tommy Cooper: Always Leave Them Laughing》(2006, HarperCollins) 및 ITV 〈Live from Her Majesty\'s〉 1984년 4월 15일 방송 기록을 바탕으로 재서술했습니다.',
    },
    curatorNote: '한 사람이 평생 했던 일이 그를 가장 정확하게 정의합니다. 토미 쿠퍼에게는 어설픔이 그의 직업이었고, 그 어설픔이 결국 그의 죽음마저 농담으로 만들었습니다. 잘하는 것이 너무 잘했을 때는 자기 자신도 그 안에 가려질 수 있습니다.',
    qna: {
      question: '평생 해온 한 가지 일이 당신을 가장 정확하게 보여준 적이 있나요? 그것이 가린 것은 무엇이었나요?',
      answer: '토미 쿠퍼의 어설픔이 그의 직업이었습니다. 그 직업은 그의 죽음마저 농담으로 만들었습니다. 우리가 가장 잘하는 것 안에는, 우리가 가장 가리고 싶은 것이 들어 있을지도 모릅니다.'
    },
    publishedDate: '2026년 5월 19일',
  },

  /* ═══ 수요일 — 역사·통찰 (PRIMARY: 통찰) — 성년의 날 ═══ */
  3: {
    title: '후스의 한 페이지',
    category: '역사·통찰',
    primaryType: '통찰',
    types: ['통찰', '감동'],
    image: null,
    svgKey: null,
    body: [
      '1917년 1월, 중국 잡지 〈신청년(新青年)〉에 짧은 글 하나가 실렸다. 제목은 〈문학개량추의(文學改良芻議)〉. \'문학의 개량에 대한 변변찮은 의견\'이라는 뜻이었다. 글쓴이는 후스(胡適). 미국 컬럼비아 대학의 박사 과정생이었다. 26세였다.',
      '글의 요지는 단순했다. 중국어를 한문으로 쓰지 말고 백화문(白話文)으로 쓰자는 것. 백화문은 사람들이 일상에서 말하는 구어체였다. 천 년 넘게 중국 문학은 한문으로만 쓰였다. 한문은 일상의 말과 완전히 다른 글이었다. 글을 쓰는 사람과 글을 읽는 사람이 한문을 익히지 않으면 글이 닿지 않았다.',
      '후스는 여덟 가지 원칙을 제시했다. 옛 사람의 말을 베끼지 말 것. 비유의 식상함을 버릴 것. 의미 없는 대구를 쓰지 말 것. 어렵게 쓰지 말 것. 자기가 쓸 말이 있을 때만 쓸 것. 무엇보다 사람이 실제로 말하는 그대로 쓸 것. 마지막 항목이 가장 위험했다.',
      '글이 발표되자 중국 지식인 사회가 분노했다. 한문은 단순한 문자가 아니었다. 그것은 중국 문화의 정수였고, 천 년의 전통이었다. 그것을 버리자는 것은 곧 중국을 버리자는 것이라는 비판이 쏟아졌다. 후스의 글에 대한 반박문 수십 편이 쏟아졌다. 그는 미국에 있었다.',
      '그러나 〈신청년〉의 편집장 천두슈(陳獨秀)는 더 강하게 밀어붙였다. 다음 달 〈문학혁명론(文學革命論)〉을 발표했다. 후스가 \'개량\'을 말했다면 천두슈는 \'혁명\'을 말했다. 두 사람은 일면식도 없었다. 그러나 같은 잡지에서 같은 방향으로 한 번에 두 번 외쳤다.',
      '1917년 여름, 후스는 박사 학위를 받지 않은 채로 중국에 돌아왔다. 베이징 대학이 그를 교수로 초빙했다. 26세에 정교수였다. 그는 강의를 백화문으로 했다. 강의록을 백화문으로 출간했다. 학생들이 그를 따랐다.',
      '2년이 지났다. 1919년 5월 4일, 베이징의 학생들이 거리로 나섰다. 베르사유 조약에 항의하는 시위였다. 시위는 신문화 운동으로 번졌다. 5·4 운동이었다. 운동의 한복판에 후스의 백화문이 있었다. 학생들은 백화문으로 전단을 썼다. 백화문으로 신문을 발행했다. 한 청년이 미국에서 쓴 8개의 원칙이 거리로 나왔다.',
      '1920년, 중국 정부는 초등학교 교과서를 백화문으로 출간하기로 결정했다. 그 결정 이후 한문은 더 이상 일상의 글이 아니게 됐다. 후스의 글이 발표된 지 3년 만이었다. 천 년의 전통이 3년에 무너진 것은 아니었다. 무너지고 있던 것에 마지막 줄을 그은 것이었다.',
      '후스는 후일 그날의 결정을 이렇게 회고했다. "나는 한문을 버리자고 한 것이 아니다. 사람들이 자기 말로 자기 생각을 쓸 수 있게 하자고 한 것이다." 그는 평생 한문도 읽고 썼다. 그러나 그가 만든 문은 한문이 아니었다.',
      '1962년 2월 24일, 후스는 71세로 타이베이에서 세상을 떠났다. 그날 그는 학술원 회의에서 연설을 마치고 잔을 들었다. "여러분, 우리는 이제 무엇을 해야 할까요?" 그가 잔을 내려놓고 자리에 앉았다. 그것이 그의 마지막 말이었다. 다음 순간 그는 쓰러졌다. 그 자리에 모인 학자들은 모두 백화문으로 글을 쓰는 세대였다.'
    ],
    closing: '미국에서 한 청년이 쓴 8개의 원칙.\n천 년의 한문을 사람의 말로 바꾸자고 했다.\n3년 뒤 거리에 그 말이 나왔다.\n떠난 자가 모국어의 뿌리를 흔든다.',
    analysis: {
      insight: { icon: '💡', text: '가장 먼 곳에서 가장 가까운 것이 보일 때가 있다 — 미국 박사과정생이 모국어의 한계를 가장 정확히 본 것은 떠나 있었기 때문이다.',
                 condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
      humor:   { icon: '😄', text: '8개 원칙 중 가장 위험한 것은 가장 단순한 것 — "자기가 쓸 말이 있을 때만 쓸 것."',
                 condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
      emotion: { icon: '❤️', text: '사망 직전 그의 마지막 질문 — "여러분, 우리는 이제 무엇을 해야 할까요?" 백화문으로 글 쓰는 세대 앞에서 그는 그렇게 물었다.',
                 condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
    },
    source: {
      type: '실화',
      credit: '후스(胡適, 1891–1962) / Jerome B. Grieder 《Hu Shih and the Chinese Renaissance》(1970, Harvard University Press) 및 〈신청년〉 1917년 1월호(Vol.2 No.5)를 바탕으로 재서술했습니다.',
    },
    curatorNote: '5월 20일은 성년의 날입니다. 한 사람의 성인기는 결국 자기 말로 자기 생각을 말할 수 있게 되는 것일지도 모릅니다. 후스는 26세에 한 나라의 글 전체를 그렇게 바꿨습니다. 떠나 있어 보였기 때문이었습니다.',
    qna: {
      question: '당신이 너무 가까이 있어 보지 못하는 것이 있나요? 멀리 떠나본 다음에야 보였던 것이 있나요?',
      answer: '후스는 미국에 있었기 때문에 중국어의 한계를 봤습니다. 가까운 것은 가장 보기 어렵습니다. 떠나는 것은 도망이 아니라 보기 위해서일 수 있습니다.'
    },
    publishedDate: '2026년 5월 20일',
  },

  /* ═══ 목요일 — 역사·감동 (PRIMARY: 감동) ═══ */
  4: {
    title: '이태석의 톤즈',
    category: '역사·감동',
    primaryType: '감동',
    types: ['감동', '통찰'],
    image: null,
    svgKey: null,
    body: [
      '2001년 12월, 수단 톤즈. 마흔 살의 한국인 신부가 작은 가방 하나를 들고 마을에 도착했다. 이태석. 부산 인제대 의대를 졸업한 외과의사였고, 살레시오회 신부였다. 톤즈는 남수단의 작은 마을이었다. 수단 내전이 한창이었다. 마을에는 학교도 병원도 없었다. 아이들은 맨발로 다녔다.',
      '그는 의사이자 신부였다. 진료실을 차렸다. 환자가 줄을 섰다. 말라리아, 결핵, 한센병. 약은 늘 부족했다. 약이 떨어진 날에는 환자에게 무엇이라도 줘야 했다. 그는 자신이 가지고 있던 비스킷을 줬다. "이건 약입니다. 하루 한 번 드세요." 환자가 좋아져서 다시 오면 그는 같은 비스킷을 또 줬다.',
      '그가 두 번째로 한 일은 학교 건설이었다. 첫 해에 초등학교, 두 번째 해에 중학교, 세 번째 해에 고등학교. 학생이 모이지 않으면 그는 직접 마을을 다녔다. "학교에 보내주십시오. 책가방은 제가 드리겠습니다." 그는 한국에서 받은 후원금으로 책가방을 마련했다.',
      '그러나 가장 효과적인 것은 음악이었다. 그는 학교에 브라스밴드를 만들었다. 35명. 트럼펫, 트롬본, 클라리넷. 악기는 한국에서 보내왔다. 처음에 아이들은 악기가 무엇인지 몰랐다. 한 달이 지나자 박자를 맞췄다. 6개월이 지나자 행진곡을 연주했다. 그리고 그 35명이 마을의 모든 무장 부대 앞을 지나갔다.',
      '무장 부대 앞을 지날 때마다 군인들은 총을 내리고 박수를 쳤다. 어떤 군인은 울었다. 어떤 군인은 자기 자식을 그 밴드에 보냈다. 이태석은 후일 말했다. "총보다 음악이 셉니다. 음악은 사람을 무장 해제시킵니다."',
      '7년이 지났다. 2008년 11월, 이태석은 한국에 휴가를 왔다. 한 달 정도 쉴 예정이었다. 한국에서 친구 의사가 그에게 한번 검사를 받으라고 했다. 그는 거절했다. "톤즈에 가야 합니다." 친구가 강권했다. 결국 그는 검사를 받았다. 대장암 4기였다. 이미 간으로 전이됐다.',
      '의사들은 그에게 항암 치료를 권했다. 그는 톤즈에 돌아가야 한다고 했다. 의사들은 그를 잡았다. 그는 한국에 남았다. 1년 2개월 동안 항암 치료를 받았다. 그동안 톤즈에서는 마을 사람들이 매일 그를 위해 기도했다. 한국으로 그의 편지가 왔다. "신부님, 톤즈가 신부님을 기다립니다."',
      '2010년 1월 14일 새벽, 이태석은 서울 강남성모병원에서 세상을 떠났다. 48세였다. 사망 소식이 톤즈에 전해진 날, 톤즈의 35인 브라스밴드는 처음으로 곡을 연주하지 못했다. 한 청년이 울며 말했다. "쫄리(신부의 톤즈 이름)는 우리를 데려갔어야 하는데, 우리가 그를 보내버렸다."',
      '그 청년의 이름은 토마스 타반 아콧이었다. 톤즈 학교 1기 졸업생이었다. 그는 그날 의사가 되기로 결심했다. 우간다와 한국을 거쳐 의대에 갔다. 2018년, 그는 의사가 됐다. 톤즈로 돌아갔다. 이태석이 세운 진료실 자리에 그가 앉았다.',
      '토마스 이후로 톤즈 출신 의사는 계속 나왔다. 2020년까지 8명. 그들은 모두 같은 이유를 댔다. "쫄리가 우리에게 약을 줬으니, 우리는 톤즈에 약을 줘야 합니다." 그가 8년을 못 산 자리에, 그 자리를 채우는 사람들이 차례로 들어섰다. 그가 떠나서 톤즈에 의사가 더 생겼다.'
    ],
    closing: '8년 만에 한국에 돌아온 휴가였다.\n검사 한 번에 그의 톤즈가 끝났다.\n그러나 그가 떠나서\n톤즈에 의사가 더 생겼다.',
    analysis: {
      insight: { icon: '💡', text: '총보다 음악이 셀 때가 있다 — 35명의 브라스밴드가 무장 부대를 무장 해제시켰다.',
                 condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
      humor:   { icon: '😄', text: '약이 떨어진 날 그가 환자에게 준 것은 비스킷이었다. 환자는 좋아졌고, 다시 와서 같은 비스킷을 받았다.',
                 condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
      emotion: { icon: '❤️', text: '사망 후 8년, 톤즈 출신 의사가 8명 나왔다. "쫄리가 약을 줬으니, 우리도 톤즈에 약을 줘야 합니다."',
                 condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
    },
    source: {
      type: '실화',
      credit: '이태석(John Lee Tae-suk, 1962–2010) / 다큐멘터리 〈울지마 톤즈〉(2010, KBS) 및 살레시오회 한국관구 〈이태석 신부 평전〉을 바탕으로 재서술했습니다.',
    },
    curatorNote: '이태석 신부가 톤즈에서 한 일은 진료와 학교와 음악이었습니다. 그가 떠난 뒤에도 그 일들이 톤즈에 남았습니다. 자신이 갈 수 없는 곳을 채우는 가장 좋은 방법은, 다른 사람이 갈 수 있게 하는 일인지도 모릅니다.',
    qna: {
      question: '당신이 떠난 자리에 누가 채워주기를 바라는 것이 있나요? 그 사람이 들어올 수 있도록 당신이 미리 해둔 일이 있나요?',
      answer: '이태석은 자기 자리를 톤즈 청년들에게 미리 만들어 줬습니다. 자기가 못 가는 곳을 다른 사람이 갈 수 있게 만드는 일이 사랑의 가장 깊은 형태일 수 있습니다.'
    },
    publishedDate: '2026년 5월 21일',
  },

  /* ═══ 금요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
  5: {
    title: '포드의 5달러 데이',
    category: '역사·통찰',
    primaryType: '통찰',
    types: ['통찰', '감동'],
    image: null,
    svgKey: null,
    body: [
      '1914년 1월 5일 새벽 4시, 미시간 디트로이트 하이랜드 파크. 영하 15도의 추위 속에 포드 자동차 공장 앞으로 사람이 모이기 시작했다. 5시가 되자 줄이 한 블록을 돌았다. 6시에는 두 블록을 돌았다. 8시 출근 시간에 1만 2천 명이 정문 앞에 서 있었다. 헨리 포드가 전날 발표한 한 줄의 공고 때문이었다. "내일부터 우리는 모든 노동자에게 하루 5달러를 지급한다."',
      '미국 자동차 노동자의 평균 일당은 그때 2달러 34센트였다. 9시간 근무였다. 그날 헨리 포드는 두 가지를 동시에 바꿨다. 일당을 두 배 이상으로, 9시간을 8시간으로. 같은 공장을 3교대로 돌리겠다는 결정이었다. 헨리 포드는 51세였다.',
      '공고의 정확한 문구는 이러했다. "포드 자동차 회사는 미국 산업 역사상 최대 규모의 임금 인상을 시행합니다. 동시에 노동 시간은 9시간에서 8시간으로 단축됩니다." 그날의 〈디트로이트 프리 프레스〉는 이 발표를 1면에 실으면서도 본문에서는 회의적이었다. "지속 가능한 정책인지 의문이다."',
      '〈월스트리트 저널〉의 사설은 더 단호했다. "포드는 산업의 신성한 원칙을 위반했다. 그는 자기 회사뿐 아니라 미국 산업 전체를 위협하고 있다." 다른 자동차 회사의 임원들이 디트로이트에 모여 회의를 했다. 결론은 동맹 거부였다. 포드를 따라가지 않기로.',
      '1만 2천 명이 모인 공장 앞에서 충돌이 일어났다. 줄이 무너졌고 사람들이 정문으로 몰려들었다. 경찰이 소방차로 물을 뿌렸다. 영하의 추위였다. 그날 채용된 인원은 그 자리의 5%였다. 나머지는 돌아갔다. 다음 날 새 줄이 다시 섰다.',
      '헨리 포드가 그 결정을 한 이유는 회의실에서 그가 했던 한 줄에 있었다. "우리 노동자들이 자기 회사의 차를 살 수 있어야 한다." 그것이 자선이 아니라는 것을 그는 분명히 했다. "임금은 비용이 아니다. 시장이다." 그가 본 것은 같은 사람이 노동자이자 소비자라는 것이었다.',
      '결과는 1년 만에 드러났다. 포드의 노동자 이직률이 1913년 370%에서 1914년 16%로 떨어졌다. 결근율은 10%에서 0.5%로 줄었다. 같은 노동자가 오래 일하니 숙련도가 쌓였다. Model T의 가격이 1909년 850달러에서 1925년 260달러까지 떨어졌다. 포드 자체의 이익은 두 배가 됐다.',
      '1916년이 되자 다른 자동차 회사들이 차례로 포드의 정책을 따라갔다. 동맹 거부는 1년을 못 갔다. 5달러 데이는 〈포드주의(Fordism)〉라는 용어를 만들었다. 노동자가 자기 회사의 제품을 살 수 있게 하는 산업 모델이었다. 20세기 미국 중산층의 한 토대가 그날 깔렸다.',
      '그러나 5달러를 받기 위한 조건이 따로 있었다. 21세 이상, 6개월 이상 근무, 그리고 〈사회부서(Sociological Department)〉의 가정 방문 평가를 통과해야 했다. 100명의 조사관이 노동자의 집을 방문해 음주, 도박, 저축 습관, 자녀 교육을 평가했다. 가부장적이라는 비판이 있었다. 그러나 노동자들의 통과율은 90%였다.',
      '헨리 포드는 후일 이 정책에 대해 묻는 기자에게 이렇게 답했다. "사람들은 내가 5달러를 노동자에게 줬다고 말한다. 그렇지 않다. 우리 회사가 5달러를 노동자에게서 받았다." 임금을 주는 게 아니라 받는 거라는 그의 셈법이, 5달러 데이의 가장 정확한 설명이었다.'
    ],
    closing: '"노동자가 자기 회사의 차를 살 수 있어야 한다."\n한 줄의 발상이 일당을 두 배로 만들었다.\n임금은 비용이 아니라 시장이라는 셈법이\n공장을 소비자의 자리로 바꿨다.',
    analysis: {
      insight: { icon: '💡', text: '임금은 비용이 아니라 시장이다 — 같은 사람이 노동자이자 소비자임을 본 셈법이 한 산업을 바꿨다.',
                 condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
      humor:   { icon: '😄', text: '영하 15도에 1만 2천 명이 줄을 섰는데 채용된 건 5%였다. 다음 날 새 줄이 또 섰다.',
                 condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
      emotion: { icon: '❤️', text: '이직률이 370%에서 16%로 떨어졌다. 같은 자리에서 오래 일할 수 있게 된 것이 가장 큰 변화였다.',
                 condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
    },
    source: {
      type: '실화',
      credit: '헨리 포드(Henry Ford, 1863–1947)의 〈5달러 데이〉(1914) / Allan Nevins 《Ford: The Times, the Man, the Company》(1954, Charles Scribner\'s Sons) 및 포드 자동차 회사 1914년 1월 5일 공고문 원문을 바탕으로 재서술했습니다.',
    },
    curatorNote: '헨리 포드가 5달러 데이를 시작했을 때, 〈월스트리트 저널〉은 그가 "산업의 신성한 원칙을 위반했다"고 비판했습니다. 그러나 그가 본 것은 비용으로서의 임금이 아니라 시장으로서의 임금이었습니다. 셈법이 바뀌면 결과도 바뀝니다. 1만 2천 명이 영하 15도에 줄을 선 것은 그래서였습니다.',
    qna: {
      question: '비용으로 봤던 것을 시장으로 본 적이 있나요? 셈법이 바뀐 뒤 결과가 어떻게 달라졌나요?',
      answer: '헨리 포드는 임금이 비용이 아니라 시장이라고 봤습니다. 같은 사람이 노동자이자 소비자라는 것을 셈법으로 봤습니다. 보는 자리를 바꾸면 같은 숫자가 다른 답을 내놓습니다.'
    },
    publishedDate: '2026년 5월 22일',
  },

};

/* ──────────────────────────────────────────────────────────
   CURRENT_WEEK_STORIES  ·  이번 주 이야기 (5/25–5/29, 2026년 5월 4주)
   ────────────────────────────────────────────────────────── */
const CURRENT_WEEK_STORIES = {

  /* ═══ 월요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
  1: {
    title: '러더퍼드의 한 줄',
    category: '역사·통찰',
    primaryType: '통찰',
    types: ['통찰', '유머'],
    image: null,
    svgKey: null,
    body: [
      '1932년 4월, 영국 케임브리지. 캐번디시 연구소장 어니스트 러더퍼드가 회의실에 도착했다. 그날 아침 그는 영국 정부로부터 한 통의 문서를 받았다. 다음 회계연도 연구비 30% 삭감. 1차 세계대전이 끝난 지 13년이었지만 긴축은 그치지 않았다.',
      '러더퍼드는 61세였다. 이미 노벨 화학상 수상자였고(1908년), 그가 발견한 원자핵 모형이 물리학의 표준이 되어 있었다. 그러나 캐번디시 연구소의 예산은 매년 줄었다. 미국과 독일의 연구소들이 새 사이클로트론을 짓는 동안 그는 헌 책상으로 일했다.',
      '그날 회의실에 직원들이 좌절한 얼굴로 앉아 있었다. 한 젊은 연구원이 물었다. "이걸로 어떻게 연구합니까?" 러더퍼드는 책상 위 봉투를 들어 보였다. 그 안에 30% 삭감 통보가 들어 있었다. 그가 짧게 답했다.',
      '"Gentlemen, we have run out of money. It is time to start thinking." 신사 여러분, 우리는 돈이 떨어졌습니다. 이제 생각할 때입니다.',
      '그 한 줄이 캐번디시 연구소의 그 시기를 정의했다. 그 회의의 그 자리에 앉아 있던 두 명의 박사 과정생 이름이 다음과 같았다. 존 코크크로프트와 어니스트 월튼. 그들은 그해 4월, 인공적으로 원자를 쪼개는 데 처음 성공한다. 자신들이 만든 가속기로. 부품은 절반이 다른 실험실의 폐기물이었다.',
      '코크크로프트-월튼 가속기는 미국과 독일의 사이클로트론에 비해 비교할 수 없이 작았다. 그러나 그것이 세계 최초로 인공 핵분열을 일으켰다. 두 사람은 1951년 노벨 물리학상을 받았다. 모든 것이 그 30% 삭감 회의 안에서 시작됐다.',
      '캐번디시 연구소의 그 시기를 후일 사람들은 "예산 위기의 황금기"라 불렀다. 1930년부터 1937년 사이, 그 연구소에서 일한 사람들 중 노벨상 수상자가 일곱 명 나왔다. 채드윅(중성자 발견, 1932), 블래킷(우주선, 1948)…. 모두 같은 회의실에서 같은 30%의 삭감을 함께 통과했다.',
      '러더퍼드가 한 일은 두 가지였다. 하나는 그 한 줄의 농담이었다. 다른 하나는 그것을 농담이 아니게 만든 실제 운영이었다. 그는 박사 과정생들에게 큰 권한을 줬다. 한 사람이 한 실험을 처음부터 끝까지 책임지게 했다. 예산이 적으니 사람의 시간 외에 다른 자원이 없었기 때문이었다.',
      '그가 말한 "생각할 때"가 단순한 절약을 의미한 것이 아니었다. 자원이 무한하면 보이지 않던 것이 자원이 제한되면 보였다. 어떤 문제는 돈으로 풀고, 어떤 문제는 생각으로 풀어야 한다. 그 둘을 구별하는 능력이 그가 연구소장이 한 가장 큰 일이었다.',
      '1937년 10월 19일, 러더퍼드는 66세로 케임브리지의 자기 집에서 세상을 떠났다. 그날 밤 캐번디시 연구소의 직원들이 연구소 안에 모였다. 그들 중 누군가가 책상 서랍에서 7년 전의 메모를 꺼냈다. 러더퍼드의 글씨로 한 줄이 쓰여 있었다. "Think. The money is gone."'
    ],
    closing: '"신사 여러분, 우리는 돈이 떨어졌습니다.\n이제 생각할 때입니다."\n한 줄의 농담이\n캐번디시의 황금기를 열었다.',
    analysis: {
      insight: { icon: '💡', text: '자원이 무한하면 보이지 않던 것이, 자원이 제한되면 보였다. 어떤 문제는 돈이 아니라 생각으로 풀어야 한다.',
                 condition: '작은 것이 사실 전부였음이 드러날 때' },
      humor:   { icon: '😄', text: '부품의 절반이 폐기물이었던 가속기로 세계 최초의 인공 핵분열에 성공했다. 노벨상은 그 폐기물로 받았다.',
                 condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
      emotion: { icon: '❤️', text: '30% 삭감을 함께 통과한 그 회의실에서, 7년 동안 7명의 노벨상이 나왔다.',
                 condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
    },
    source: {
      type: '실화',
      credit: '어니스트 러더퍼드(Ernest Rutherford, 1871–1937) / David Wilson 《Rutherford: Simple Genius》(1983, MIT Press) 및 캐번디시 연구소 1930년대 운영 자료를 바탕으로 재서술했습니다.',
    },
    curatorNote: '러더퍼드가 캐번디시 연구소장이었을 때 영국의 연구비는 매년 깎였습니다. 그가 한 한 줄의 농담이 연구소의 황금기를 열었습니다. 자원이 제한되면 보이지 않던 것이 보입니다. 어떤 문제는 돈이 아니라 생각으로 풀어야 한다는 구별이, 그 시기 캐번디시의 가장 큰 자산이었습니다.',
    qna: {
      question: '자원이 부족했을 때 오히려 더 잘 풀린 일이 있었나요? 무엇을 다르게 봤기 때문이었나요?',
      answer: '러더퍼드의 캐번디시는 30% 삭감 후에 7명의 노벨상이 나왔습니다. 자원이 줄어들자 보지 못했던 것을 보게 됐습니다. 어떤 부족은 다른 능력의 시작이 될 수 있습니다.'
    },
    publishedDate: '2026년 5월 25일',
  },

  /* ═══ 화요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
  2: {
    title: '푸앵카레의 발판',
    category: '역사·통찰',
    primaryType: '통찰',
    types: ['통찰'],
    image: null,
    svgKey: null,
    body: [
      '1881년 여름, 프랑스 캉(Caen). 27세의 광산학교 교수 앙리 푸앵카레가 공식 출장을 위해 합승 마차를 기다리고 있었다. 그는 두 달째 풀리지 않는 문제 하나에 매달려 있었다. 푹시안 함수(Fuchsian functions). 미분 방정식의 한 종류였다. 답이 어디에 있는지 짐작도 가지 않았다.',
      '그는 그 문제를 두 달 동안 매일 풀려고 했다. 매일 같은 시간에 책상에 앉았다. 매일 같은 식을 다시 썼다. 그러나 식은 항상 같은 자리에서 막혔다. 그는 결국 그 문제를 잠시 미뤄두기로 했다. 그날 아침의 출장은 다른 일 때문이었다. 광산 시찰이었다.',
      '합승 마차가 와서 멈췄다. 그는 신문을 들고 발판 위에 발을 올렸다. 그 순간이었다. 마차의 발판에 발이 닿는 그 순간, 그의 머릿속에 한 가지가 떠올랐다. 푹시안 함수의 변환이 비유클리드 기하학의 변환과 동일하다는 것. 두 달 동안 안 보였던 답이었다.',
      '그는 발판 위에 그대로 멈춰 섰다. 동료 승객이 그에게 무슨 일이냐 물었다. 푸앵카레는 답하지 않고 마차에 올랐다. 출장 내내 그는 그 생각을 떨치지 못했다. 노트를 꺼내 적지도 않았다. 그는 그것이 사라지지 않을 것이라는 걸 알았다.',
      '출장에서 돌아온 그날 저녁, 그는 책상에 앉아 그 깨달음을 식으로 적었다. 두 달 동안 막혔던 자리가 한 번에 풀렸다. 푹시안 함수의 일반 이론이 그 한 주 동안 완성됐다. 그는 그것을 1881년 〈Comptes Rendus〉에 발표했다. 27세의 수학자가 한 분야를 새로 만들었다.',
      '그러나 그를 평생 사로잡은 것은 함수의 일반 이론이 아니라 그 발판이었다. 어떻게 두 달 동안 안 보였던 답이 한순간에 보였는가. 어떻게 풀려고 할 때는 안 보였고, 다른 일을 하러 가는 도중에 보였는가. 그는 이 질문을 평생 따져봤다.',
      '1908년, 54세가 된 그는 〈과학과 방법(Science et Méthode)〉이라는 책을 출간했다. 거기에 그는 그날의 마차 발판 이야기를 직접 적었다. 그가 도달한 결론은 단순했다. "정신은 우리가 잠들었을 때도, 우리가 다른 일을 할 때도, 계속 일한다."',
      '그는 그것을 〈무의식의 노동〉이라 불렀다. 의식이 한 문제를 들고 씨름할 때 무의식은 그 옆에서 따로 일을 한다. 의식이 그 문제를 놓는 순간 무의식이 발견한 답이 의식으로 올라온다. 그러므로 풀리지 않는 문제는 풀기를 멈춰야 풀린다. 풀기를 멈춰도 답을 만나는 자리에 있어야 한다.',
      '그가 마차 발판에 발을 올린 그날, 그는 두 달의 의식적 노동을 무의식에게 넘겨놓은 상태였다. 그리고 신문을 들고 발판에 올랐다. 그 두 동작 사이의 작은 빈틈으로 답이 올라왔다. 푸앵카레는 그 자리를 〈문지방의 순간(le moment du seuil)〉이라 불렀다.',
      '1912년 7월 17일, 푸앵카레는 58세로 세상을 떠났다. 그가 평생 발표한 논문이 500편이 넘었다. 그 중 많은 것이 비슷한 자리에서 왔다고 그는 회상했다. 산책 중, 마차 안, 잠들기 전. 책상이 아닌 곳들이었다. 그가 평생 한 일은 책상이 아닌 그 자리들을 알아보는 것이었다.'
    ],
    closing: '두 달 동안 안 보였던 답이\n마차 발판에 발을 올린 그 순간에 왔다.\n의식이 풀기를 멈춰도\n무의식이 풀기를 멈추지 않는다.',
    analysis: {
      insight: { icon: '💡', text: '풀리지 않는 문제는 풀기를 멈춰야 풀린다 — 그러나 답이 올라올 자리에는 있어야 한다.',
                 condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
      humor:   { icon: '😄', text: '동료 승객이 무슨 일이냐 물었을 때 그는 답하지 않았다. 발판 위에서 그가 들은 것은 다른 종류의 대답이었다.',
                 condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
      emotion: { icon: '❤️', text: '27세에 한 분야를 새로 만든 그가, 54세에 책으로 그 마차 발판을 다시 적었다. 평생을 따라온 한 순간이었다.',
                 condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
    },
    source: {
      type: '실화',
      credit: '앙리 푸앵카레(Henri Poincaré, 1854–1912) / 푸앵카레 《Science et Méthode》(1908, Flammarion) 및 Jeremy Gray 《Henri Poincaré: A Scientific Biography》(2013, Princeton University Press)를 바탕으로 재서술했습니다.',
    },
    curatorNote: '푸앵카레는 평생 마차 발판의 그 한순간을 잊지 못했습니다. 54세에 쓴 책에서 그는 그것을 〈문지방의 순간〉이라 이름 붙였습니다. 풀리지 않는 문제 앞에서 우리는 두 가지를 할 수 있습니다. 더 매달리거나, 또는 그 자리를 잠시 떠나거나. 발판은 그가 두 번째를 알았다는 흔적입니다.',
    qna: {
      question: '풀리지 않던 문제가 다른 일을 하던 중 풀린 적이 있나요? 어떤 자리에서 그것이 왔나요?',
      answer: '푸앵카레는 마차 발판 위에서 답을 만났습니다. 의식이 풀기를 멈췄을 때 무의식이 답을 올려보냈습니다. 어떤 답은 매달려서 풀리지 않고, 매달림을 잠시 놓아야 풀립니다.'
    },
    publishedDate: '2026년 5월 26일',
  },

  /* ═══ 수요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
  3: {
    title: '셀리그먼의 50년',
    category: '역사·통찰',
    primaryType: '통찰',
    types: ['통찰'],
    image: null,
    svgKey: null,
    body: [
      '1967년 미국 펜실베이니아 대학교 심리학과. 25세 박사 과정생이었던 마틴 셀리그먼은 두 마리의 강아지를 두 개의 상자에 넣었다. 한 상자의 강아지는 단추를 누르면 전기 충격이 멈췄다. 다른 상자의 강아지는 무엇을 해도 충격이 멈추지 않았다. 24시간이 지났다.',
      '다음 날 그는 두 강아지를 모두 새 상자에 옮겼다. 새 상자에서는 벽 한 쪽을 넘으면 충격이 멈추도록 설계돼 있었다. 첫 번째 강아지는 금방 그 방법을 찾아냈다. 두 번째 강아지는 그러지 않았다. 누워서 충격을 받았다. 벽을 넘으면 살 수 있는데도 그러지 않았다.',
      '셀리그먼은 그 현상을 〈학습된 무기력(Learned Helplessness)〉이라 이름 붙였다. 1967년의 짧은 논문이었다. 그러나 그 이름은 이후 50년 동안 심리학의 한 토대가 된다. 학습된 무기력은 우울증 연구의 핵심 모델이 됐다. 그는 그 이후 펜실베이니아 대학교 정교수, 미국 심리학회 회장(1998)이 됐다.',
      '그러나 1990년대 들어 그는 자신의 이론에 한 가지 의문을 갖기 시작했다. 그 강아지는 정말 "무기력을 학습한" 것인가? 다른 가능성이 있지 않을까? 그는 자신의 50년 전 실험을 다시 들여다봤다. 도구가 달라져 있었다. 1960년대에는 행동만 볼 수 있었지만, 2000년대에는 뇌의 신경 회로를 직접 볼 수 있었다.',
      '2016년, 셀리그먼은 50년 전의 공동 연구자 스티븐 마이어와 함께 새 논문을 썼다. 제목은 〈학습된 무기력 50년: 신경과학의 관점〉이었다. 그들이 한 일은 자기들의 이론을 뒤집는 것이었다.',
      '새 결론은 이러했다. 강아지가 "무기력을 학습한" 것이 아니다. 강아지의 뇌에는 처음부터 무기력이 있다. 충격 앞에서 무기력은 기본 반응이다. 학습되는 것은 무기력이 아니라 통제력이다. 강아지가 단추를 눌러 충격을 멈춘 경험을 한 적이 있을 때, 강아지는 그 〈통제〉를 학습한다. 통제를 학습한 강아지만이 다음 상자에서도 통제를 시도한다.',
      '셀리그먼은 자신의 50년 전 결론을 뒤집었다. 그러나 그것은 동시에 자신의 50년 전 이름을 뒤집는 일이기도 했다. 그가 만든 〈학습된 무기력〉이라는 이름이 사실은 〈학습된 통제〉의 부재였다. 같은 강아지를 본 같은 실험에서, 보는 자리가 바뀌었다.',
      '그가 이 작업을 시작한 1990년대 후반, 그는 미국 심리학회 회장 취임 연설에서 또 한 가지를 선언했다. "심리학은 그동안 병리에만 집중해 왔다. 이제 잘 사는 것에 대해서도 연구해야 한다." 〈긍정 심리학(Positive Psychology)〉이라는 분야가 그 자리에서 시작됐다.',
      '학습된 무기력에서 학습된 통제로 옮겨갈 때, 그가 본 것은 같은 동전의 양면이었다. 무기력을 보지 않으면 우울증을 못 본다. 그러나 통제를 보지 않으면 회복을 못 본다. 그가 평생 한 일은 둘 다 보는 것이었다. 그것이 그의 두 번째 이론이 첫 번째 이론을 부정한 것이 아닌 이유였다.',
      '2018년의 한 인터뷰에서 그는 이렇게 말했다. "내 직업이 한 일은 두 가지다. 25세에 무기력을 발견했고, 75세에 그것이 사실 통제의 부재였다고 다시 발견했다. 사이의 50년은 같은 강아지를 두 번 본 시간이다." 같은 강아지를 두 번 본다는 그 말이, 자기 일에 대한 그의 가장 정확한 요약이었다.'
    ],
    closing: '같은 강아지를 50년 만에 다시 봤다.\n무기력을 학습한 게 아니었다.\n통제를 학습한 적이 없었던 것이다.\n이름 하나가 평생을 두 번 바꿨다.',
    analysis: {
      insight: { icon: '💡', text: '같은 현상을 다시 보면 다른 것이 보인다 — 무기력의 학습이 아니라 통제의 부재였다. 보는 자리를 옮기면 답이 옮겨간다.',
                 condition: '작은 것이 사실 전부였음이 드러날 때' },
      humor:   { icon: '😄', text: '자기가 만든 학설을 50년 뒤 자기가 뒤집었다. 같은 강아지를 본 두 번의 결론이 정반대였다.',
                 condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
      emotion: { icon: '❤️', text: '"25세에 무기력을 발견했고, 75세에 그것이 통제의 부재였다고 다시 발견했다." 사이의 50년이 같은 강아지를 두 번 본 시간이었다.',
                 condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
    },
    source: {
      type: '실화',
      credit: '마틴 셀리그먼(Martin E. P. Seligman, 1942– ) 및 스티븐 마이어(Steven F. Maier) / 〈Learned Helplessness at Fifty: Insights from Neuroscience〉(Psychological Review, 2016) 및 셀리그먼 《Authentic Happiness》(2002, Free Press)를 바탕으로 재서술했습니다.',
    },
    curatorNote: '셀리그먼은 자기 자신을 두 번 봤습니다. 한 번은 25세에, 한 번은 75세에. 같은 강아지를 두 번 본 사이에 50년이 있었습니다. 우리는 어떤 결론을 한 번에 내고 그 위에 평생을 쌓습니다. 그러나 그 결론을 다시 보는 일이 평생 가장 어려운 일일 수 있습니다.',
    qna: {
      question: '한 번 내린 결론을 오랜 시간이 지난 후 뒤집어야 했던 적이 있나요? 무엇이 보이게 했나요?',
      answer: '셀리그먼은 50년 만에 자기 결론을 뒤집었습니다. 도구가 달라져서가 아니라, 같은 강아지를 다시 봤기 때문입니다. 어떤 답은 다시 보는 자리에서만 옵니다.'
    },
    publishedDate: '2026년 5월 27일',
  },

  /* ═══ 목요일 — 역사·유머 (PRIMARY: 유머) ═══ */
  4: {
    title: '조이스의 두 권',
    category: '역사·유머',
    primaryType: '유머',
    types: ['유머', '감동'],
    image: null,
    svgKey: null,
    body: [
      '1921년 늦가을, 파리. 39세의 아일랜드 작가 제임스 조이스가 셰익스피어 앤드 컴퍼니의 서점 주인 실비아 비치에게 한 가지를 부탁했다. "내년 2월 2일에 첫 권을 가져다 주세요. 단 한 권이면 됩니다." 그날은 그의 40번째 생일이었다.',
      '〈율리시스〉는 1918년부터 미국 잡지 〈리틀 리뷰〉에 연재되고 있었다. 그러나 1920년 음란물 판정을 받고 연재가 중단됐다. 미국과 영국의 어떤 출판사도 그것을 책으로 내려 하지 않았다. 그때 셰익스피어 앤드 컴퍼니의 실비아 비치가 손을 들었다. 그는 서점 주인이었지 출판인이 아니었다.',
      '비치는 프랑스 디종의 작은 인쇄소 다랑티에르(Darantière)에 일을 맡겼다. 인쇄공은 영어를 한 단어도 몰랐다. 조이스의 원고는 매번 바뀌었다. 그는 교정쇄에 매번 새 문장을 더했다. 다랑티에르는 조판을 9번 다시 했다. 한 줄을 위해 다섯 시간이 들어간 페이지도 있었다.',
      '1922년 1월이 됐다. 인쇄는 절반밖에 끝나지 않았다. 조이스의 40번째 생일이 한 달 앞이었다. 비치가 다랑티에르에게 전보를 쳤다. "한 권만 좋습니다. 2월 2일 아침에 받을 수 있게 해주세요." 다랑티에르가 답했다. "최선을 다해보겠습니다."',
      '1월 31일, 비치는 다랑티에르가 책 한 권을 들고 디종에서 파리로 가는 야간 기차에 탄다는 전보를 받았다. 그러나 어떤 이유에선지 기차는 새벽에 도착하지 못했다. 비치는 2월 2일 아침 7시에 리옹 역으로 나갔다. 7시 30분 기차가 도착했다. 다랑티에르는 보이지 않았다. 8시. 그가 보였다.',
      '다랑티에르는 두 권을 들고 있었다. 한 권이 아니라 두 권. 그는 비치에게 말했다. "한 권은 조이스 씨에게, 한 권은 당신에게." 그가 인쇄소 직원과 밤새 한 권을 더 제본한 것이었다. 인쇄소에는 그날 두 권뿐이었다. 나머지 998권은 그 뒤 한 달에 걸쳐 인쇄됐다.',
      '비치는 그 두 권을 들고 조이스의 아파트로 갔다. 조이스는 그날 아침 늘 그렇듯 침대에 누워 있었다. 비치가 한 권을 그에게 건넸다. 조이스는 그것을 받았다. 〈율리시스〉. 파란색 표지에 흰 글씨로 그가 쓴 책 이름이 박혀 있었다. 그가 16년을 들여 쓴 책이었다.',
      '조이스는 그 책을 한참 동안 들고 있었다. 그러더니 비치를 보고 말했다. "오늘이 내 생일입니다." 비치가 답했다. "압니다." 조이스가 다시 말했다. "이 책의 생일이기도 합니다." 그는 그날 그 책을 가까운 친구들에게 보여주기 위해 외출했다. 평소엔 외출하지 않았다.',
      '다음 날 아침 그가 비치에게 편지를 보냈다. "어제는 내 인생에서 가장 긴 생일이었습니다. 그러나 한 권이 더 있어야 합니다. 내 어머니께 보내야 합니다." 그러나 조이스의 어머니는 1903년에 이미 세상을 떠난 후였다. 비치는 그 편지를 평생 보관했다.',
      '그날 이후, 매년 2월 2일은 더블린에서 조이스의 생일로 기념된다. 책의 생일이 작가의 생일과 같은 책은 드물다. 다랑티에르가 밤새 한 권을 더 제본한 것은 작은 일이었다. 그러나 그 한 권의 친절이 그 생일을 두 사람의 것에서 한 도시의 것으로 만들었다.'
    ],
    closing: '한 권만 좋다고 했다.\n그러나 두 권이 왔다.\n인쇄공이 밤새 한 권을 더 제본했다.\n40번째 생일과 16년의 책이 같은 날이었다.',
    analysis: {
      insight: { icon: '💡', text: '작은 친절 하나가 누군가의 한 날을 평생의 한 날로 만든다 — 부탁은 한 권이었지만 두 권이 왔다.',
                 condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
      humor:   { icon: '😄', text: '영어를 한 단어도 모르는 프랑스 인쇄공이 9번 조판을 다시 했다. 그가 마지막에 한 일은 한 권 더 제본해서 들고 온 것이었다.',
                 condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
      emotion: { icon: '❤️', text: '"한 권이 더 있어야 합니다. 내 어머니께 보내야 합니다." 그의 어머니는 19년 전 세상을 떠났다.',
                 condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
    },
    source: {
      type: '실화',
      credit: '제임스 조이스(James Joyce, 1882–1941) 및 실비아 비치(Sylvia Beach, 1887–1962) / Sylvia Beach 《Shakespeare and Company》(1959, Harcourt) 및 Richard Ellmann 《James Joyce》(1959, Oxford University Press)를 바탕으로 재서술했습니다.',
    },
    curatorNote: '한 사람이 16년 들여 쓴 책의 생일이, 그 사람의 40번째 생일과 같았습니다. 인쇄공 한 명이 밤새 한 권을 더 제본했고, 작가는 그 두 권을 들고 외출했습니다. 어떤 친절은 그날을 한 사람의 것이 아니라 한 도시의 것으로 만듭니다.',
    qna: {
      question: '누군가의 작은 친절이 당신의 한 날을 평생의 한 날로 만들어준 적이 있나요? 그 친절은 무엇이었나요?',
      answer: '다랑티에르가 밤새 제본한 한 권이 조이스의 40번째 생일을 다르게 만들었습니다. 누군가의 부탁을 들은 그대로 들어주는 것은 작은 일이지만, 한 단계 더 가는 친절은 사람의 평생에 남습니다.'
    },
    publishedDate: '2026년 5월 28일',
  },

  /* ═══ 금요일 — 역사·감동 (PRIMARY: 감동) ═══ */
  5: {
    title: '비올라 데스몬드의 4센트',
    category: '역사·감동',
    primaryType: '감동',
    types: ['감동', '통찰'],
    image: null,
    svgKey: null,
    body: [
      '1946년 11월 8일 저녁, 캐나다 노바스코샤 주의 작은 도시 뉴글래스고. 32세의 흑인 여성 비올라 데스몬드의 차가 길에서 멈췄다. 그날 그녀는 화장품 사업 출장 중이었다. 정비공이 다음 날 아침에야 부품이 들어온다고 했다. 그녀는 하룻밤을 보내기로 했다. 호텔로 가는 길에 영화관이 있었다. 로즈랜드 시어터. 그녀는 시간을 보내기 위해 영화 한 편을 보기로 했다.',
      '매표소에서 그녀는 1층 좌석 표를 달라고 했다. 매표원이 2층 좌석 표를 줬다. 그녀는 다시 1층을 부탁했다. 매표원이 다시 2층을 줬다. 비올라는 매표원의 말을 그날 정확히 알아듣지 못했다. 그녀는 30센트를 내고 표를 받았다. 2층 표였다.',
      '그녀는 1층으로 내려갔다. 영화는 이미 시작돼 있었다. 그녀가 좋은 자리에 앉았다. 5분이 지났다. 안내원이 와서 2층으로 가달라고 했다. 그녀는 표를 보여줬다. 안내원이 다시 말했다. "1층 표가 아닙니다." 비올라는 그제야 알았다. 1층은 백인석. 2층은 유색인종석. 그 차이가 4센트였다.',
      '그녀는 매표소로 다시 가서 4센트를 더 내려 했다. 매표원이 거절했다. "당신에게는 1층 표를 팔지 않습니다." 비올라는 자기 자리로 돌아갔다. 1층의 자기 자리에. 그녀는 자리를 옮기지 않았다.',
      '영화가 끝나기 전에 경찰이 왔다. 두 명이었다. 그녀는 끌려나갔다. 영화관 바깥에 차가 대기하고 있었다. 그녀는 그날 밤 유치장에서 잤다. 다음 날 아침 법정에 섰다. 죄목은 〈세금 탈루〉였다. 1층 좌석세 4센트를 내지 않았다는 것이었다. 캐나다에는 인종 분리 법이 없었다. 그래서 인종 분리를 위반한 죄로 그녀를 기소할 수는 없었다. 4센트를 위반한 죄로 기소했다.',
      '비올라는 변호사 없이 재판을 받았다. 그녀는 변호사를 구할 자격이 있다는 사실을 그날 알지 못했다. 판사는 그녀에게 20달러의 벌금과 6달러의 추가세금을 부과했다. 합계 26달러. 그녀가 그날 영화를 보러 낸 돈은 30센트였다. 부과된 벌금은 그 거의 90배였다. 그녀는 그 돈을 냈다.',
      '노바스코샤의 흑인 사회 신문 〈클라리언(The Clarion)〉이 그녀의 사건을 1면에 실었다. 캐나다 흑인 진보 협회가 그녀의 항소를 도왔다. 그러나 항소는 받아들여지지 않았다. 1947년의 캐나다 법정은 그녀의 죄가 4센트의 세금 탈루임을 다시 확인했다. 1948년 그녀는 법정 싸움을 멈췄다. 그녀의 미용 사업이 무너지고 있었다.',
      '비올라는 그 후 뉴욕으로 옮겼다. 그곳에서 미용학교 등록 사업을 다시 시작했다. 1965년 2월 7일, 50세에 그녀는 뉴욕에서 위장 출혈로 세상을 떠났다. 그녀의 영화관 사건은 그 시점에 캐나다에서도 거의 잊혀 있었다. 미국에서는 같은 해 셀마 행진이 있었다.',
      '2010년 4월 14일, 노바스코샤 주 정부가 그녀에게 사후 사면(posthumous pardon)을 발표했다. 캐나다 역사상 최초의 사후 사면이었다. 사면문에는 한 줄이 추가됐다. "우리는 그녀가 무죄였음을 확인합니다. 그녀는 잘못이 없었습니다. 잘못은 우리에게 있었습니다." 그녀의 사망 후 45년이 지난 시점이었다.',
      '2018년 11월, 캐나다 정부는 새 10달러 지폐를 발행했다. 앞면에 한 여성의 얼굴이 들어갔다. 캐나다 지폐 사상 최초로 비왕족 여성이었다. 비올라 데스몬드였다. 4센트로 시작된 한 자리 앉음이 70여 년 만에 그녀의 얼굴을 한 나라의 화폐 위에 올렸다. 그녀는 그날 그 의자에서 일어나지 않았다. 그것이 그녀가 한 모든 일이었다.'
    ],
    closing: '1층 자리와 2층 자리의 차이는 4센트였다.\n그녀는 자리에서 일어나지 않았다.\n70여 년 뒤\n그녀의 얼굴이 10달러 지폐 위에 올랐다.',
    analysis: {
      insight: { icon: '💡', text: '인종 분리법이 없었기에 4센트 탈세로 기소했다. 법이 자기 모순을 가릴 때 그것을 드러내는 가장 효과적인 방법은, 그저 앉아 있는 것이다.',
                 condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
      humor:   { icon: '😄', text: '30센트의 영화 한 편이 26달러의 벌금이 됐다. 4센트의 좌석세가 70여 년 뒤 10달러 지폐가 됐다. 숫자가 가장 큰 이야기를 하는 자리.',
                 condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
      emotion: { icon: '❤️', text: '"우리는 그녀가 무죄였음을 확인합니다. 잘못은 우리에게 있었습니다." 그녀가 죽고 45년 뒤의 사면문 한 줄.',
                 condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
    },
    source: {
      type: '실화',
      credit: '비올라 데스몬드(Viola Desmond, 1914–1965) / Constance Backhouse 《Colour-Coded: A Legal History of Racism in Canada, 1900–1950》(1999, University of Toronto Press) 및 노바스코샤 주 사후 사면(2010) 자료를 바탕으로 재서술했습니다.',
    },
    curatorNote: '비올라 데스몬드는 30센트의 표를 사고 26달러의 벌금을 냈습니다. 그녀가 일어나지 않은 한 의자가 70여 년 뒤 10달러 지폐 위에 올랐습니다. 어떤 자리는 일어나지 않는 것이 가장 큰 행동입니다. 그것이 한 사람의 평생을 쓰는 일일 수 있습니다.',
    qna: {
      question: '일어나지 않는 것이 가장 큰 행동이었던 적이 있나요? 무엇이 당신을 그 자리에 머무르게 했나요?',
      answer: '비올라 데스몬드는 1946년의 한 영화관 의자에서 일어나지 않았습니다. 그것이 그녀가 한 일의 전부였습니다. 우리가 자기 자리에 머무는 것 자체가 어떤 시대에는 가장 큰 말이 됩니다.'
    },
    publishedDate: '2026년 5월 29일',
  },

};

/* @AUTO-WEEK:BEGIN — generate_week.py 가 이 블록 전체를 매주 자동 교체. 수동 편집 시 마커 유지. */
/* ──────────────────────────────────────────────────────────
   NEXT_WEEK_STORIES  ·  다음 주(게재 전) 한 주치. 직전 일요일에 자동 게재됨.
   ────────────────────────────────────────────────────────── */
const NEXT_WEEK_STORIES = {
  weekLabel: "2026년 8월 3주 (8/17–8/21)",
  weekStart: "2026-08-17",
  stories: {

  /* ═══ 월요일 — 역사·감동 (PRIMARY: 감동) ═══ */
  1: {
    title: "에우제니오 몬탈레의 서랍 속 시",
    category: "역사·감동",
    primaryType: "감동",
    types: ["감동", "통찰"],
    image: null,
    svgKey: null,
    body: ["1938년, 이탈리아 피렌체. 파시즘 정권이 문화계를 옥죄던 그해, 에우제니오 몬탈레는 조용히 해고 통보를 받았다. 그가 10년 가까이 관장을 맡아온 비에우세우 도서관(Gabinetto Vieusseux)에서 쫓겨난 이유는 단 하나—파시즘 당원증을 거부했기 때문이었다.", "몬탈레는 1896년 제노바에서 태어났다. 젊은 시절부터 오페라 성악을 꿈꿨으나 폐 질환으로 포기해야 했고, 대학도 제대로 다니지 못한 채 독학으로 문학과 철학을 익혔다. 그의 첫 시집 《오징어 뼈(Ossi di seppia)》는 1925년 출간되자마자 이탈리아 비평계의 주목을 받았지만, 화려한 성공과는 거리가 먼 삶이 이어졌다.", "해고 이후 몬탈레에게 남은 것은 거의 없었다. 마땅한 직업도, 안정된 수입도 없었다. 파시즘 치하에서 그의 시는 정치적으로 위험한 것으로 여겨졌고, 출판도 쉽지 않았다. 그러나 그는 멈추지 않았다. 피렌체의 좁은 거처에서, 검열을 피해, 그는 계속 썼다.", "그 시절 그가 가장 깊이 사랑한 사람은 미국 문학자 어마 브란디스—그가 '모스카(Mosca, 파리)'라는 애칭으로 부른 여성—였다. 두꺼운 안경 너머로 세상을 바라보는 그녀와 몬탈레는 수십 년을 함께했다. 가난하고 불안한 시절에도 두 사람은 서로의 곁을 지켰다.", "제2차 세계대전이 끝난 후 몬탈레는 밀라노로 이주해 《코리에레 델라 세라》에서 문화 기자이자 음악 평론가로 일했다. 생계를 위한 일이었지만, 그는 신문 기사를 쓰는 틈틈이 시를 서랍 속에 쌓아갔다. 세상이 그의 시를 원하지 않는 것처럼 보이는 시간에도 그는 썼다.", "1963년, 두 번째 시집 《기회들(Le occasioni)》과 세 번째 시집 《폭풍우와 다른 것들(La bufera e altro)》이 이미 이탈리아 문학의 고전으로 자리잡은 지 오래였다. 그러나 몬탈레의 이름이 세계에 알려진 것은 훨씬 뒤의 일이었다. 그의 나이 일흔이 훌쩍 넘어서였다.", "1975년 10월, 스웨덴 한림원은 에우제니오 몬탈레에게 노벨 문학상을 수여한다고 발표했다. 수상 이유는 '환상 없는 삶의 시각을 탁월한 시적 감수성으로 해석한 공로'였다. 당시 그의 나이 일흔아홉이었다. 반세기 가까이 서랍 속에서 숙성된 시들이 마침내 세계의 언어로 호명되었다.", "시상식에서 몬탈레는 담담하게 말했다. 자신은 늘 '쓰지 않을 수 없어서' 썼다고. 세상이 알아주기를 바라며 쓴 것이 아니라, 쓰는 것이 자신에게 주어진 유일한 방식이었기 때문이라고. 그 말속에는 자랑도, 억울함의 해소도 없었다—다만 오랜 사람의 고요함이 있었다.", "1981년 몬탈레는 밀라노에서 세상을 떠났다. 그가 남긴 시들은 오늘도 이탈리아어권 독자들에게 읽힌다. 파시즘도, 가난도, 무명의 세월도 그를 멈추게 하지 못했다. 그는 단지, 계속 썼다.", "몬탈레의 삶이 가르쳐주는 것은 어쩌면 이것이다. 세상이 당신의 이름을 부르지 않는 시간은, 당신이 쓸모없는 시간이 아니라는 것. 그것은 다만, 아직 숙성 중인 시간일 뿐이라는 것."],
    closing: "해고당한 날에도 그는 집으로 돌아가 시를 썼다.\n세상이 등을 돌린 그 시간이, 사실은 가장 깊은 작업의 시간이었다.\n인정받기 위해서가 아니라, 살기 위해 쓰는 사람은 멈추지 않는다.\n서랍 속에서 익어가는 것들이 있다—당신 안에도.",
    analysis: {
      insight: { icon: "💡", text: "인정은 늦게 오거나 오지 않을 수도 있지만, 계속한다는 것 자체가 이미 하나의 답이다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
      humor:   { icon: "😄", text: "파시즘 당원증을 거부해 도서관 관장 자리를 잃었는데, 결국 노벨상을 받았다. 이력서에 '해고 사유: 당원증 거부'라고 적어도 꽤 멋진 한 줄이 된다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
      emotion: { icon: "❤️", text: "일흔아홉의 노인이 '쓰지 않을 수 없어서 썼다'고 말하는 순간, 반세기의 무명이 한꺼번에 따뜻해진다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
    },
    source: {
      type: '실화',
      credit: "Eugenio Montale (1896–1981) / Franco Contorbia 편 《Montale: Lettere e prose》(1996), 스웨덴 한림원 노벨 문학상 공식 수상 기록(1975), Glauco Cambon 《Eugenio Montale》(1984)을 바탕으로 재서술했습니다.",
    },
    curatorNote: "몬탈레의 이야기를 고른 것은, '지금 아무도 알아주지 않는다'는 감각이 얼마나 많은 사람을 무너뜨리는지 알기 때문입니다. 그러나 그는 인정을 기다리며 산 것이 아니라, 쓰는 것이 자신의 존재 방식이었기에 그냥 살아낸 사람이었습니다. 당원증 하나 거부하는 작은 용기가 반세기의 시를 지켜냈다는 사실이, 오늘 월요일 아침을 버티는 누군가에게 작은 등불이 되기를 바랍니다.",
    qna: {
      question: "지금 당신이 아무도 몰라주는 채로 계속하고 있는 일이 있다면, 그것을 포기하지 않는 이유는 무엇인가요?",
      answer: "몬탈레는 그 이유를 '쓰지 않을 수 없어서'라고 했습니다. 외부의 인정이 아니라, 그것을 하지 않으면 자신이 자신이 아닌 것 같은 감각—그것이 가장 강한 이유입니다. 세상이 알아주는 속도는 우리가 통제할 수 없지만, 계속한다는 선택은 온전히 우리 것입니다. 서랍 속에서 익어가는 시간은 낭비가 아니라, 깊이를 만드는 시간입니다."
    },
    publishedDate: "2026년 8월 17일",
  },

  /* ═══ 화요일 — 역사·유머 (PRIMARY: 유머) ═══ */
  2: {
    title: "조슈아 챔벌린의 왼쪽 구두",
    category: "역사·유머",
    primaryType: "유머",
    types: ["유머", "통찰"],
    image: null,
    svgKey: null,
    body: ["1865년 4월 12일 아침, 버지니아주 애퍼매턱스 코트하우스 앞 먼지 길에는 찬 공기가 깔려 있었다. 남부연합군 병사들이 마지막으로 무기를 내려놓는 공식 무장 해제 의식이 예정된 날이었다. 이 역사적 의식을 주관하도록 명령받은 인물은 조슈아 로런스 챔벌린 준장이었다.", "챔벌린은 전날 밤부터 긴장하지 않았다고 말하기 어려웠다. 그는 게티즈버그 전투에서 총상을 다섯 차례 입고도 살아남은 사람이었고, 죽음을 친구처럼 대한 지 이미 4년이 지났다. 하지만 이날 아침만큼은 달랐다. 전쟁이 끝나는 날이었기 때문이다.", "문제는 엉뚱한 데서 터졌다. 의식이 시작되기 불과 한 시간 전, 챔벌린은 자신의 왼쪽 군화를 찾을 수 없었다. 막사 안을 뒤지고 침상 밑을 기고 부관에게 소리쳤지만, 왼쪽 구두는 끝내 나타나지 않았다. 역사상 가장 엄숙한 항복 접수 의식을 앞두고, 북군 준장은 양쪽이 다른 구두를 신고 나갈 판이었다.", "결국 챔벌린은 발이 맞지 않는 다른 병사의 구두를 억지로 빌려 신고 대열 앞에 섰다. 구두는 너무 작았고, 말 위에 올라탄 그의 왼발은 첫 20분부터 욱신거리기 시작했다. 인류 역사의 한 챕터가 닫히는 순간, 그는 발가락을 참고 있었다.", "남부연합군 선두에는 존 고든 소장이 말을 타고 나타났다. 챔벌린은 지휘도를 들어 경례를 명했고, 북군 병사들은 일제히 소총을 어깨 경례 자세로 올렸다. 패배한 적에게 바치는 군인의 예우였다. 고든은 잠시 멈추더니 말에 박차를 가해 말머리를 챔벌린 쪽으로 돌리고 칼끝을 발끝 방향으로 내리는 동작으로 답례를 보냈다.", "남부군 병사들은 그 경례를 보고 등을 폈다. 수천 명이 소총을 내려놓고 군기를 접었다. 일부는 눈물을 닦았다. 그날의 의식은 승자의 조롱이 아니라 전사(戰士)끼리의 작별로 마무리되었다. 챔벌린이 나중에 회고록에 남긴 표현을 빌리면, 그것은 용맹한 적에 대한 경의였다.", "의식이 모두 끝난 뒤 챔벌린은 말에서 내렸다. 부관이 달려오자 그는 조용히 왼쪽 구두를 벗었다. 발가락이 빨갛게 눌려 있었다. 부관이 웃음을 참지 못하자 챔벌린도 따라 웃었다. 전쟁이 끝난 첫날의 웃음이었다.", "챔벌린은 그날 이후 메인 주지사를 네 차례 역임하고, 보든 대학 총장을 12년 동안 맡았다. 전쟁에서 입은 부상의 후유증은 평생 그를 괴롭혔지만, 그는 쉰이 넘어서도 강의실에 섰고 일흔이 넘어서도 글을 썼다. 그리고 1913년에 게티즈버그 전투 50주년 기념행사에 참석했을 때, 그의 나이는 여든다섯이었다.", "그가 남긴 회고록 《The Passing of the Armies》(1915)에는 그날 의식의 장면이 세밀하게 기록되어 있다. 구두 이야기는 없다. 하지만 그 구두 덕분에, 우리는 역사의 가장 무거운 날도 결국 사람이 치러낸 하루였다는 걸 기억하게 된다.", "챔벌린은 1914년 2월 24일, 예전 총상의 합병증으로 세상을 떠났다. 그는 남북전쟁 부상의 직접적 후유증으로 사망한 마지막 참전 군인 중 한 명으로 기록된다. 향년 85세였다. 역사는 그를 영웅으로 기억하지만, 그날 아침 그는 그냥 구두를 잃어버린 사람이었다."],
    closing: "가장 엄숙한 날에도 구두 한 짝은 사라진다.\n그래도 사람은 나간다.\n발이 아파도 경례는 할 수 있다.\n그게 용기의 실제 모습이다.",
    analysis: {
      insight: { icon: "💡", text: "역사적 순간은 완벽하게 준비된 영웅이 아니라, 발가락이 눌린 채로 자리를 지킨 사람이 만들어낸다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
      humor:   { icon: "😄", text: "남북전쟁 4년을 살아남은 준장을 쓰러뜨린 건 총탄이 아니라 작은 구두 한 짝이었다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
      emotion: { icon: "❤️", text: "패배한 적에게 경례를 바친 그 몸짓 하나가, 총성 없이 전쟁을 끝냈다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
    },
    source: {
      type: '실화',
      credit: "조슈아 로런스 챔벌린(Joshua Lawrence Chamberlain, 1828–1914) / 챔벌린 《The Passing of the Armies》(1915)를 바탕으로 재서술했습니다.",
    },
    curatorNote: "완벽한 준비 없이도 해낼 수 있다는 걸, 챔벌린의 이날 아침이 조용히 증명합니다. 구두가 없어도 자리에 나가는 것, 발이 아파도 경례를 올리는 것—그게 용기의 민낯이 아닐까요. 오늘 당신 앞의 '왼쪽 구두 한 짝'쯤은 잃어버려도 괜찮습니다. 그냥 나가십시오.",
    qna: {
      question: "당신이 가장 중요한 순간을 앞두고 '사소한 것'을 잃어버렸던 적이 있나요?",
      answer: "누구에게나 있습니다. 발표 직전 자료가 사라지거나, 중요한 날 아침 열쇠를 못 찾거나. 그 당황스러움이 오히려 우리를 '지금 이 순간'에 집중하게 만들기도 합니다. 챔벌린이 그랬듯, 준비의 빈틈이 있어도 사람은 나갈 수 있습니다. 완벽한 준비보다 나가는 결정이 더 중요할 때가 많습니다."
    },
    publishedDate: "2026년 8월 18일",
  },

  /* ═══ 수요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
  3: {
    title: "해리 후디니의 자물쇠",
    category: "역사·통찰",
    primaryType: "통찰",
    types: ["통찰", "감동"],
    image: null,
    svgKey: null,
    body: ["1900년대 초, 유럽 순회공연 중이던 한 젊은 마술사가 런던 경찰청 스코틀랜드 야드의 문을 두드렸다. 그는 담당 경관에게 제안했다. 자신을 어떤 감방에든 가둬보라고. 탈출하지 못하면 공연을 포기하겠다고.", "경관들은 비웃었다. 당시 스코틀랜드 야드의 수감 시설은 영국에서 가장 견고하다고 알려진 곳이었다. 그들은 기꺼이 내기를 받아들였고, 마술사를 속옷 바람으로 독방에 가뒀다. 자물쇠를 두 겹으로 채우고 경관 세 명이 문 앞을 지켰다.", "그의 이름은 에릭 바이스, 세상에는 해리 후디니(Harry Houdini)로 알려진 인물이었다. 헝가리 출신 유대인 이민자의 아들로, 위스콘신주 애플턴에서 가난하게 자랐다. 그가 처음 마술을 배운 것은 먹고살기 위해서였다.", "그날 후디니는 21분 만에 독방 문을 열고 나왔다. 그것도 경관들이 지키고 있던 다른 독방들을 차례로 열어 수감자들을 방 안에서 뒤섞어 놓은 뒤였다. 교도소장은 나중에 이렇게 기록했다. '우리는 그가 어떻게 했는지 끝내 알아내지 못했다.'", "후디니의 탈출 비결은 초자연적 능력이 아니었다. 그는 어릴 때부터 자물쇠 구조를 독학으로 연구했고, 당대에 유통되던 거의 모든 자물쇠 모델의 내부 구조를 외우고 있었다. 그가 쇠사슬에 묶이거나 물속 상자에 갇혀도 탈출할 수 있었던 것은 '잠긴 것의 원리'를 남들보다 깊이 이해했기 때문이었다.", "그의 방식에는 또 다른 원칙이 있었다. 절대로 공연 전에 '안 된다'고 말하지 않는 것이었다. 그는 도전을 받으면 일단 받아들이고, 그다음에 방법을 찾았다. 두려움이 없어서가 아니었다. 그는 물탱크에 들어가기 전마다 극심한 불안을 느꼈다고 훗날 고백했다.", "후디니는 1913년 어머니 체칠리아 바이스가 세상을 떠난 뒤 한동안 무대에 서지 못했다. 그는 어머니를 삶의 가장 큰 버팀목이라 여겼고, 그 상실 앞에서 처음으로 탈출구를 찾지 못했다. 하지만 그는 결국 돌아왔다. 슬픔을 무대 위로 가져가는 방식으로.", "그가 만년에 힘을 쏟은 일은 무대 탈출이 아니라 '사기 폭로'였다. 당시 유럽과 미국에는 죽은 자와 교신한다는 영매들이 성행했고, 전쟁으로 가족을 잃은 수많은 사람들이 그들에게 돈을 갖다 바쳤다. 후디니는 변장하고 그 모임에 잠입해 속임수를 낱낱이 밝혔다. 그 일을 위해 그는 자신이 쌓은 마술사로서의 인기 일부를 기꺼이 잃었다.", "1926년 10월 31일, 핼러윈 날 후디니는 세상을 떠났다. 복막염이었다. 그의 나이 쉰둘이었다. 그가 남긴 것은 화려한 탈출 기록보다, 잠긴 것을 이해하면 두려움도 열쇠가 된다는 한 가지 원칙이었다.", "그는 평생 자물쇠를 열었지만, 사실 그가 진짜 열려고 했던 것은 다른 무언가였는지도 모른다. 가난, 이민자의 설움, 사람들이 그에게 씌운 한계라는 자물쇠. 그것들을 하나씩, 공연장 위에서 열어 보였다.", "후디니의 이야기는 재능에 관한 것이 아니다. 잠긴 문 앞에서 '이건 안 된다'고 물러서는 대신, 자물쇠의 원리를 공부하기로 선택한 사람에 관한 이야기다. 그 선택은 누구에게나 열려 있다."],
    closing: "잠긴 문은 '불가능'이 아니라 '아직 원리를 모른다'는 뜻이다.\n두려움을 없애려 하지 말고, 두려움과 함께 문 앞에 서라.\n후디니는 도망친 것이 아니라, 가장 깊이 이해한 사람이었다.\n열쇠는 항상 그 안에 있었다.",
    analysis: {
      insight: { icon: "💡", text: "두려움을 없애는 것이 용기가 아니라, 잠긴 것의 원리를 끝까지 공부하는 것이 진짜 탈출이다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
      humor:   { icon: "😄", text: "속옷 바람으로 스코틀랜드 야드 독방에 들어가 21분 만에 나온 사람, 그는 마술사가 아니라 세계 최초의 '자물쇠 공학 현장 실습생'이었다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
      emotion: { icon: "❤️", text: "어머니를 잃고 처음으로 탈출구를 찾지 못했던 그가 결국 무대로 돌아온 방식, 슬픔을 공연 안으로 데려간 것이 오히려 가장 인간적인 탈출이었다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
    },
    source: {
      type: '실화',
      credit: "해리 후디니(Harry Houdini, 1874~1926) / Kenneth Silverman, 《Houdini!!! The Career of Ehrich Weiss》(1996, HarperCollins)를 바탕으로 재서술했습니다.",
    },
    curatorNote: "후디니를 '마술사'로만 기억하면 절반만 본 것입니다. 그는 이민자 가정의 가난한 아이가 '안 된다는 말을 받아들이지 않는 연습'을 평생 한 사람입니다. 우리가 막혀 있다고 느끼는 순간, 후디니라면 아마 자물쇠를 더 오래 들여다봤을 겁니다. 그 끈질긴 시선 자체가 이미 탈출의 시작이라는 것, 오늘 이 이야기가 그 용기를 건네드리길 바랍니다.",
    qna: {
      question: "당신이 지금 '열리지 않는다'고 느끼는 문은 무엇인가요? 그 자물쇠의 원리를 들여다본 적 있나요?",
      answer: "후디니는 자물쇠를 볼 때 '이게 왜 잠겼는가'를 먼저 물었습니다. 우리가 막힌 상황 앞에서 흔히 하는 것은 '왜 안 되지'가 아니라 '안 되는구나' 하고 물러서는 일입니다. 원리를 이해하는 것은 시간이 걸리지만, 그 시간 자체가 이미 문을 향해 나아가는 움직임입니다. 잠긴 문은 끝이 아니라, 아직 충분히 들여다보지 않은 질문입니다."
    },
    publishedDate: "2026년 8월 19일",
  },

  /* ═══ 목요일 — 역사·감동 (PRIMARY: 감동) ═══ */
  4: {
    title: "엘리자베스 케클리의 바느질",
    category: "역사·감동",
    primaryType: "감동",
    types: ["감동", "통찰"],
    image: null,
    svgKey: null,
    body: ["1855년, 미주리주 세인트루이스. 서른일곱 살의 흑인 여성 엘리자베스 케클리는 바느질 도구 하나를 손에 쥐고 있었다. 그녀는 노예였다. 그러나 그 손은 세인트루이스 상류층 백인 여성들이 앞다투어 찾는 손이기도 했다.", "케클리의 재봉 솜씨는 입소문을 타고 퍼졌다. 그녀가 만든 드레스를 입으면 어깨선이 달라진다고, 허리 라인이 살아난다고 했다. 의뢰가 쌓였고, 돈이 모였다. 그 돈으로 그녀는 한 가지를 사려 했다. 자신과 아들의 자유였다.", "주인은 1,200달러를 요구했다. 오늘날로 치면 수만 달러에 달하는 금액이었다. 케클리는 고객들에게 도움을 청했다. 평소 그녀의 바느질을 아끼던 백인 여성 고객 여러 명이 돈을 모아 건넸다. 1855년, 케클리는 마침내 자유 증서를 손에 쥐었다.", "자유인이 된 그녀는 워싱턴 D.C.로 이주했다. 그리고 다시 바늘을 들었다. 이번에는 노예가 아닌, 사업주로서. 그녀의 솜씨는 수도의 사교계에서도 금세 소문이 났다. 결국 1861년, 그녀는 백악관으로 불려 갔다.", "메리 토드 링컨 여사가 그녀를 찾은 것이었다. 첫 만남에서 메리는 케클리에게 드레스 한 벌을 맡겼다. 케클리가 가져온 완성품을 본 메리는 그 자리에서 전속 재봉사로 계약했다. 이후 케클리는 링컨 대통령 재임 내내 백악관을 드나들었다.", "두 여성은 묘한 우정을 쌓았다. 사회적 위치도, 피부색도, 살아온 삶도 달랐지만, 둘 다 아들을 잃은 어머니였다. 케클리는 남북전쟁 중 아들 조지를 잃었고, 메리는 1862년 아들 윌리를 병으로 잃었다. 슬픔 앞에서 신분의 거리는 좁아졌다.", "1868년, 케클리는 책을 한 권 펴냈다. 《Behind the Scenes: Thirty Years a Slave and Four Years in the White House》였다. 노예로 살았던 시절과 백악관에서 본 것들을 가감 없이 담은 회고록이었다. 링컨 암살 직후의 백악관 내부를 기록한 희귀한 증언이기도 했다.", "책은 논란을 불렀다. 일부는 사생활 침해라 비난했고, 메리 토드 링컨과의 우정도 그 여파로 한동안 멀어졌다. 그러나 케클리는 물러서지 않았다. 자신이 살고 목격한 것을 기록할 권리가 자신에게 있다고 믿었다.", "케클리는 이후 하워드 대학교에서 가사 기술을 가르치며 생을 이어갔다. 1907년 워싱턴 D.C.에서 세상을 떠날 때, 그녀의 손에는 여전히 바늘 자국이 남아 있었다. 노예의 손으로 시작해, 자유를 사고, 우정을 짓고, 역사를 기록한 손이었다."],
    closing: "노예의 손이 자유를 꿰맸다.\n그 자유로 우정을 지었고,\n그 우정으로 역사를 남겼다.\n바늘 한 개로 세 개의 삶을 고쳤다.",
    analysis: {
      insight: { icon: "💡", text: "자유는 주어지기를 기다리는 것이 아니라, 손에 쥔 기술로 한 땀 한 땀 사는 것이다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
      humor:   { icon: "😄", text: "백악관 퍼스트레이디의 드레스를 고른 사람이 전직 노예였다는 사실을, 당시 워싱턴 사교계는 알면서도 모른 척했다. 옷이 너무 예뻤으니까.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
      emotion: { icon: "❤️", text: "아들을 잃은 두 어머니가 신분도 피부색도 잊고 서로의 슬픔 옆에 조용히 앉아 있던 백악관의 그 방.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
    },
    source: {
      type: '실화',
      credit: "Elizabeth Keckley(엘리자베스 케클리, 1818~1907) / Elizabeth Keckley, 《Behind the Scenes: Thirty Years a Slave and Four Years in the White House》(1868)를 바탕으로 재서술했습니다.",
    },
    curatorNote: "케클리의 이야기를 처음 접했을 때, 저는 '자유를 산다'는 표현이 이렇게 문자 그대로 실현된 삶이 있었다는 것에 한동안 멍했습니다. 바느질이라는 가장 작고 조용한 기술이, 한 인간의 운명 전체를 바꿨습니다. 지금 당신이 가진 가장 사소해 보이는 능력이, 어쩌면 당신을 가장 멀리 데려다줄 것일지도 모릅니다.",
    qna: {
      question: "지금 당신이 '별것 아니다'고 여기는 자신의 능력이 있다면, 무엇인가요?",
      answer: "케클리에게 바느질은 생존 기술이었지만, 결국 자유를 사고 역사를 남긴 도구가 되었습니다. 우리가 스스로 대단하지 않다고 여기는 것들이, 타인의 눈에는 전혀 다르게 보이는 경우가 많습니다. 자신의 작은 기술을 한 번만 더 들여다보세요. 그 안에 당신이 아직 열지 않은 문이 있을 수 있습니다."
    },
    publishedDate: "2026년 8월 20일",
  },

  /* ═══ 금요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
  5: {
    title: "왕대홍의 빈 도면",
    category: "역사·통찰",
    primaryType: "통찰",
    types: ["통찰", "감동"],
    image: null,
    svgKey: null,
    body: ["1960년대 말, 대만 정부는 쑨원 탄생 100주년을 기념할 대형 기념관 설계 공모를 열었다. 건축가 왕대홍(王大閎)은 공모에 출품했다. 그의 안은 절제된 현대 건축 언어로 중국적 공간감을 재해석한 것이었다—과장된 처마도, 장식적 기와도 없이, 빛과 비례만으로 기념비성을 만들어 내는 설계였다.", "심사 결과는 탈락이었다. 당선된 안은 거대한 청색 유리 기와지붕과 웅장한 계단을 앞세운, 누가 봐도 '중국스럽다'고 느낄 수 있는 양식이었다. 위원회는 대중이 '알아볼 수 있는' 건축을 원했다. 왕대홍의 안은 너무 조용했고, 너무 현대적이었다.", "왕대홍은 1917년 베이징에서 태어났다. 외교관 아버지를 따라 유럽에서 성장했고, 케임브리지 대학교에서 기계공학을 공부한 뒤 하버드 건축대학원에 진학해 건축을 배웠다. 하버드에서 그의 스승은 발터 그로피우스였다. 모더니즘 건축의 핵심을 직접 전수받은 셈이었다.", "1952년 대만으로 건너온 그는 대만 현대 건축의 선구자로 불리게 된다. 그러나 그 길은 순탄하지 않았다. 섬나라의 건축 시장은 협소했고, 그의 절제된 미학은 종종 '차갑다'거나 '덜 완성된 것처럼 보인다'는 평을 받았다. 기념관 공모 탈락은 그런 거절 중에서도 특히 공개적이고 선명한 것이었다.", "그러나 왕대홍은 자신의 도면을 버리지 않았다. 수십 년이 흐른 뒤, 그는 탈락한 그 설계안을 다시 꺼내 책으로 엮었다. 채택되지 못한 안을 스스로 기록하고 출판하는 일은 건축가로서 드문 행위였다. 그는 그것이 실패한 작품이라고 생각하지 않았다.", "왕대홍이 평생 추구한 것은 '중국적인 것'과 '현대적인 것' 사이의 긴장을 정직하게 다루는 일이었다. 화려한 전통 양식을 그대로 붙여 넣는 것도 아니고, 전통을 완전히 지우는 것도 아니었다. 그 사이 어딘가—빛이 들어오는 방식, 안마당의 비율, 처마 없이도 그늘을 만드는 벽—에 그가 찾는 언어가 있었다.", "그가 설계한 주택들은 대부분 소박했다. 국립기념관이나 거대한 공공건물보다 개인 주택이 그의 대표작으로 꼽히는 것은 아이러니처럼 보이지만, 그는 그것을 개의치 않았다. 작은 집 한 채에서도 공간이 사람을 어떻게 맞이하는가를 고민하는 일이, 그에게는 건축의 본질이었다.", "2018년, 왕대홍은 101세를 일기로 세상을 떠났다. 그의 나이 아흔이 넘어서도 건축에 대한 글을 썼고, 젊은 건축가들과 이야기를 나눴다. 반세기 전 탈락한 도면은 지금 대만 건축사에서 '채택되었어야 했던 안'으로 자주 거론된다.", "기념관은 지어졌다. 왕대홍의 안은 지어지지 않았다. 그러나 지어지지 않은 그 도면은, 지어진 건물보다 더 오래 건축가들의 머릿속에 남아 질문을 던지고 있다—좋은 건축이란 대중이 즉각 알아보는 것이어야 하는가, 아니면 알아보는 데 시간이 걸리는 것이어도 되는가."],
    closing: "거절당한 도면은 사라지지 않았다.\n그것은 서랍 속에서 다음 세대를 기다렸다.\n탈락이 틀렸음을 증명하는 가장 좋은 방법은\n그 도면을 계속 믿는 것이었다.",
    analysis: {
      insight: { icon: "💡", text: "당대에 채택되지 못한 것이 틀린 것은 아니다—가장 정직한 답은 종종 가장 늦게 인정받는다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
      humor:   { icon: "😄", text: "101년을 살며 반세기 전 탈락 통보를 뒤집은 셈이니, 장수가 곧 최고의 재심 청구였다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
      emotion: { icon: "❤️", text: "수십 년 묵은 도면을 꺼내 직접 책으로 엮는 일—그것은 자신의 안목을 끝까지 믿었던 사람만이 할 수 있는 행위다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
    },
    source: {
      type: '실화',
      credit: "왕대홍(Wang Da-hong, 1917~2018) / 林芙蓉·徐明松 《王大閎：永恆的建築詩人》(2007, 木馬文化) 및 관련 대만 건축사 기록을 바탕으로 재서술했습니다.",
    },
    curatorNote: "왕대홍의 이야기에서 가장 마음에 걸린 것은 탈락이 아니라, 탈락 이후 그가 도면을 버리지 않았다는 사실입니다. 우리는 거절당하면 그것을 빨리 잊으려 하지만, 그는 오히려 기록으로 남겼습니다. 자신의 판단을 믿는다는 것은 때로 이렇게 조용하고 긴 행위입니다. 지금 서랍 속에 묵혀 두고 있는 당신의 '탈락한 도면'은 무엇인가요.",
    qna: {
      question: "당신이 옳다고 믿었지만 외면당했던 생각이나 작업을, 지금도 간직하고 있나요?",
      answer: "거절은 종종 '지금은 아니다'를 뜻하지, '영원히 아니다'를 뜻하지 않습니다. 왕대홍의 도면이 수십 년 뒤 재평가된 것처럼, 당대의 심사 기준이 곧 역사의 기준은 아닙니다. 자신의 안목을 믿는 일은 고집이 아니라 긴 호흡의 자기 신뢰입니다. 서랍 속 도면을 버리지 마세요—그것이 언젠가 질문을 던질 차례가 올 수 있습니다."
    },
    publishedDate: "2026년 8월 21일",
  },

  }
};
/* @AUTO-WEEK:END */

/* ──────────────────────────────────────────────────────────
   주간 자동 게재 (연속 롤링)
   • NEXT_WEEK_STORIES = 아직 게재 전인 "다음 주" 한 주치 (생성기가 매주 채움).
   • PAST_WEEKS        = 이미 게재된 주들 (newest first).
   다음 주 글은 그 주 시작(월요일) "직전 일요일" 00:00부터 자동 게재된다.
   매주 generate_week.py 가 새 주를 NEXT_WEEK_STORIES에 채우고, 직전 NEXT는
   PAST_WEEKS 맨 앞으로 옮긴다. 손으로 옮길 필요 없음.
   ────────────────────────────────────────────────────────── */

/* weekStart(월요일) 이틀 전 토요일 00:00부터 게재 */
function _isLive(weekStart) {
  const p = String(weekStart).split('-').map(Number);
  const release = new Date(p[0], p[1] - 1, p[2] - 2);   /* 직전 토요일 */
  release.setHours(0, 0, 0, 0);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now >= release;
}

/* 다음 주 글이 채워져 있고 게재일(직전 일요일)이 지났으면 활성화 */
const _nextHasStories =
  typeof NEXT_WEEK_STORIES !== 'undefined' && NEXT_WEEK_STORIES &&
  NEXT_WEEK_STORIES.stories && Object.keys(NEXT_WEEK_STORIES.stories).length > 0;
const _nextLive = _nextHasStories && _isLive(NEXT_WEEK_STORIES.weekStart);

/* ──────────────────────────────────────────────────────────
   PAST_WEEKS  ·  이미 게재된 주들 (newest first)
   생성기가 매주 직전 NEXT를 이 배열 맨 앞에 추가한다.
   형식: { weekLabel, weekStart, stories: { 1:{...}, …, 5:{...} } }
   ────────────────────────────────────────────────────────── */
const PAST_WEEKS = [
  /* @AUTO-PAST:HEAD — generate_week.py 가 직전 NEXT 주를 이 줄 바로 아래에 추가 */
  {
    weekLabel: "2026년 8월 2주 (8/10–8/14)",
    weekStart: "2026-08-10",
    stories: {

    /* ═══ 월요일 — 역사·감동 (PRIMARY: 감동) ═══ */
    1: {
      title: "에스트레이체르의 마지막 목록",
      category: "역사·감동",
      primaryType: "감동",
      types: ["감동", "통찰"],
      image: null,
      svgKey: null,
      body: ["1939년 9월, 독일군이 폴란드 크라쿠프를 점령한 직후, 야기엘론스키 대학교 도서관의 사서 카롤 에스트레이체르 주니어(Karol Estreicher Jr.)는 창문 밖으로 검은 군복의 행렬을 바라보며 단 하나의 생각을 굳혔다. '그들이 빼앗아 갈 것이다. 그러니 내가 먼저 기록해야 한다.'", "에스트레이체르는 폴란드 문화재 목록 작성에 이미 십 년을 바친 사람이었다. 하지만 전쟁이 터지자 그 목록의 의미가 완전히 달라졌다. 총과 탱크로는 지킬 수 없는 것들, 즉 그림·조각·필사본·악보를 지키는 유일한 방법은 그것들이 존재했다는 사실을 종이에 남기는 것이었다.", "그는 목숨을 걸고 폴란드를 탈출해 런던으로 향했다. 망명 정부가 자리잡은 그곳에서 에스트레이체르는 지하실 한 켠에 책상을 놓고 작업을 시작했다. 기억과 메모와 동료들의 증언을 모아, 나치가 약탈한 폴란드 문화재의 목록을 한 점 한 점 복원하기 시작했다.", "전쟁 내내 폭격이 쏟아지는 런던에서 그는 그 작업을 멈추지 않았다. 밤에 공습 경보가 울리면 그는 원고 뭉치를 들고 방공호로 내려갔다가, 경보가 끝나면 다시 책상으로 돌아왔다. 그에게 원고는 생명만큼 무거운 것이었다.", "1945년 전쟁이 끝났을 때, 에스트레이체르의 목록에는 나치에게 약탈된 폴란드 문화재 수만 점의 기록이 담겨 있었다. 이 목록은 연합군 반환 협상의 핵심 자료가 되었다. 기록이 없었다면 돌려받을 근거도 없었다.", "그 목록 덕분에 돌아온 것 중 가장 유명한 작품이 레오나르도 다빈치의 그림이었다. 나치 총독 한스 프랑크가 크라쿠프 총독 관저에 걸어두었던 《담비를 안은 여인》은, 에스트레이체르의 집요한 추적과 외교적 노력 끝에 1946년 폴란드로 반환되었다.", "에스트레이체르는 이후 수십 년에 걸쳐 폴란드 문화재 반환 운동을 계속했다. 그는 관료도 장군도 아니었다. 그냥 사서였다. 하지만 그는 사서가 할 수 있는 가장 강력한 일, 즉 '사라지기 전에 기록하는 것'으로 나라의 기억을 지켰다.", "그가 남긴 문화재 목록 작업은 폴란드 문화부 산하 기관에 계승되어 오늘날까지 이어지고 있다. 크라쿠프의 국립박물관에는 그의 이름을 딴 열람실이 있다. 총 한 방 쏘지 않은 사람의 이름이 새겨진 공간이다.", "에스트레이체르는 1984년 세상을 떠났다. 그의 삶 전체는 하나의 문장으로 요약될 수 있다. 빼앗기기 전에 기록하라. 사라지기 전에 이름을 불러라. 그것이 가장 오래 남는 저항이다."],
      closing: "총보다 오래 살아남는 것이 있다.\n그것은 기록이다.\n누군가 이름을 적어두었기에\n그것은 사라지지 않았다.",
      analysis: {
        insight: { icon: "💡", text: "권력은 물건을 빼앗을 수 있지만, 그 물건이 존재했다는 기록까지 지울 수는 없다. 기록은 가장 조용하고 가장 끈질긴 저항이다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "방공호에 원고를 들고 뛰어내려가는 사서라니—폭탄보다 원고 분실이 더 무서웠던 사람임이 분명하다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "총 한 방 쏘지 않았지만, 그의 이름이 새겨진 열람실이 크라쿠프에 있다. 펜이 이긴 것이다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "카롤 에스트레이체르 주니어(Karol Estreicher Jr., 1906–1984) / Jonathan Petropoulos 《Art as Politics in the Third Reich》(1996), 및 폴란드 문화부 문화재 반환 기록(Biuro Pełnomocnika Rządu ds. Polskiego Dziedzictwa Kulturowego za Granicą)을 바탕으로 재서술했습니다.",
      },
      curatorNote: "저는 이 이야기를 처음 접했을 때 한동안 멍하니 앉아 있었습니다. 무기도, 권력도, 군대도 없이 오직 목록 하나로 나라의 기억을 건져올린 사람. 거창한 영웅담이 아니라 그냥 제 일을 멈추지 않은 사람의 이야기입니다. 우리가 지금 하는 작고 꼼꼼한 일들이, 언젠가 누군가를 지킬 수 있다는 것을 이 사서는 온몸으로 보여주었습니다.",
      qna: {
        question: "내가 지금 하는 작고 꾸준한 일이 나중에 어떤 의미가 될 수 있을까?",
        answer: "에스트레이체르는 전쟁이 터지기 전에 이미 십 년을 목록 작성에 쏟았습니다. 그 단조롭고 조용한 작업이 전쟁이라는 극한 상황에서 비로소 진가를 드러냈습니다. 지금 당신이 매일 반복하는 일—기록하고, 배우고, 정리하고, 이어가는 것—은 아직 그 의미가 보이지 않을 뿐입니다. 의미는 나중에 도착하는 경우가 많습니다. 그러니 지금은 그냥, 계속하면 됩니다."
      },
      publishedDate: "2026년 8월 10일",
    },

    /* ═══ 화요일 — 역사·유머 (PRIMARY: 유머) ═══ */
    2: {
      title: "오거스타 새비지의 석고상",
      category: "역사·유머",
      primaryType: "유머",
      types: ["유머", "통찰"],
      image: null,
      svgKey: null,
      body: ["1939년 뉴욕 세계박람회 개막을 몇 달 앞둔 시점, 조각가 오거스타 새비지는 박람회 측으로부터 놀라운 의뢰를 받았다. 흑인 여성으로는 최초로 세계박람회 공식 커미션 작가로 선정된 것이었다. 의뢰 내용은 간단했다. '아프리카계 미국인의 음악적 기여를 기리는 대형 조각을 만들어 달라.'", "새비지는 즉시 작업에 착수했다. 그녀가 구상한 것은 높이 약 5미터의 하프 형상 조각이었다. 하프의 줄은 합창단원 모양의 인물들로 이루어져 있었고, 작품 제목은 '나는 노래를 부른다'였다. 랭스턴 휴스의 시 한 구절에서 따온 이름이었다.", "그런데 문제가 생겼다. 박람회 측이 제시한 예산은 조각을 영구 재료로 제작하기에 턱없이 부족했다. 청동은 꿈도 꿀 수 없었고, 대리석도 마찬가지였다. 새비지가 쓸 수 있는 재료는 석고뿐이었다. 말 그대로 임시방편의 재료였다.", "새비지는 망설이지 않았다. 석고로 만들면 된다고 생각했다. 박람회가 끝난 뒤 철거될 운명이라는 사실을 알면서도 그녀는 5미터짜리 하프를 석고로 완성했다. 제작 기간 내내 작업실에는 보조 인력도, 충분한 난방도 없었다.", "1939년 4월, '나는 노래를 부른다'가 박람회장에 설치되었을 때 관람객들은 줄을 섰다. 소형 복제품이 기념품으로 불티나게 팔렸다. 백인 관람객과 흑인 관람객이 나란히 서서 같은 조각을 올려다보는 광경은 당시로서는 드문 풍경이었다.", "박람회가 끝난 뒤 새비지는 작품을 보존할 방법을 찾으려 했다. 청동으로 다시 주조하려면 돈이 필요했는데, 그 돈이 없었다. 후원자를 수소문했지만 나타나지 않았다. 결국 '나는 노래를 부른다'는 박람회 폐막과 함께 해체되어 버려졌다.", "훗날 누군가 그녀에게 물었다. 그 걸작을 그렇게 잃어버린 것이 얼마나 슬펐느냐고. 새비지의 대답은 담담했다. 조각가인 자신이 자기 작품을 제대로 주조할 형편도 안 된다면 그건 가슴 아픈 일이 맞다고 했다. 그러나 그 조각이 세상에 존재했던 그 몇 달만큼은, 존재한 것이라고.", "사실 새비지의 삶 전체가 그런 식이었다. 1923년 파리 여름학교 장학금을 받았다가 '흑인 여성과 같은 배를 탈 수 없다'는 백인 참가자들의 항의로 취소당했다. 10년 뒤 다시 파리로 건너가 공부했다. 뉴욕으로 돌아온 뒤에는 할렘에 무료 미술학교를 열어 수백 명의 흑인 학생을 가르쳤다.", "그녀가 가르친 학생 중에는 훗날 유명해진 조각가와 화가들이 여럿 있었다. 새비지 자신의 작품 중 현재까지 남아 있는 것은 극소수다. 석고로 만들어 버렸거나, 돈이 없어 보존하지 못했거나, 기록조차 남기지 못한 것들이 대부분이었다.", "그럼에도 새비지는 멈추지 않았다. 석고로 만들 수밖에 없다면 석고로 만들었고, 박람회가 끝나면 없어질 것을 알면서도 5미터짜리 하프를 완성했다. 없어질 것을 알면서도 만든다는 것, 그것이 어쩌면 그녀의 가장 큰 작품이었는지 모른다.", "오거스타 새비지는 1962년 뉴욕에서 세상을 떠났다. 그녀가 가르친 수백 명의 학생들, 그리고 1939년 박람회에서 석고 하프를 올려다보던 수많은 얼굴들 속에 그녀의 작품은 계속 살아 있었다."],
      closing: "없어질 것을 알면서도 만드는 것.\n그것이 진짜 창작이다.\n석고는 부서졌지만\n그 하프 소리는 남았다.",
      analysis: {
        insight: { icon: "💡", text: "작품이 남아야만 의미 있는 게 아니다. 존재했던 그 순간 자체가 이미 충분한 증거다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "청동이 없으면 석고로 만들면 된다는 태도, 어떤 면에서는 5미터짜리 '임시방편'이 역사에 남은 청동보다 오래 기억되고 있다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "없어질 것을 알면서도 5미터짜리 하프를 완성한 손끝에, 포기하지 않는 사람의 진짜 무게가 담겨 있다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "오거스타 새비지(Augusta Savage, 1892–1962) / Theresa Leininger-Miller 《New Negro Artists in Paris》(1996), Smithsonian American Art Museum 소장 기록 및 1939 New York World's Fair 공식 문서를 바탕으로 재서술했습니다.",
      },
      curatorNote: "오거스타 새비지 이야기를 처음 접했을 때, 저는 한참 동안 '석고'라는 단어를 붙들고 있었습니다. 청동이 아니어서, 돈이 없어서, 결국 부서져 버렸는데도 그녀는 만들었습니다. 우리가 지금 하는 일도 어쩌면 석고로 만드는 하프일 수 있습니다. 그래도 괜찮습니다. 존재했던 것은 없어지지 않습니다.",
      qna: {
        question: "결과가 사라질 것을 알면서도 최선을 다해야 할 이유가 있을까요?",
        answer: "새비지는 그 질문에 행동으로 답했습니다. 박람회가 끝나면 철거될 것을 알면서도 5미터짜리 석고 하프를 완성했고, 그 앞에서 수많은 사람이 고개를 들었습니다. 결과가 남지 않아도 그 과정에서 움직인 사람들의 마음은 남습니다. 우리가 최선을 다하는 이유는 결과물이 영원하기 때문이 아니라, 그 순간 우리가 진짜였기 때문입니다."
      },
      publishedDate: "2026년 8월 11일",
    },

    /* ═══ 수요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
    3: {
      title: "버사 파펜하임의 목소리",
      category: "역사·통찰",
      primaryType: "통찰",
      types: ["통찰", "감동"],
      image: null,
      svgKey: null,
      body: ["1880년대 초 빈, 스물한 살의 버사 파펜하임은 침대 밖으로 나오지 못했다. 병든 아버지를 밤마다 간호하다 그녀 자신이 무너졌다. 환각이 찾아왔고, 팔다리가 마비되었으며, 독일어를 잊어버려 영어로만 말했다. 당대 의학은 이를 '히스테리'라 불렀고, 치료법은 안정과 침묵이었다.", "담당 의사 요제프 브로이어는 달랐다. 그는 약 대신 그녀 곁에 앉아 들었다. 버사는 매일 저녁 그날의 고통과 기억을 말로 풀어냈다. 이상한 일이 벌어졌다. 말을 마친 날 밤, 증상이 누그러졌다. 버사는 이 과정을 스스로 '굴뚝 청소(chimney sweeping)'라고 불렀다.", "브로이어는 이 사례를 동료 지그문트 프로이트에게 전했고, 두 사람은 1895년 《히스테리 연구》에 '안나 O.'라는 가명으로 그녀의 이야기를 실었다. 정신분석의 씨앗이 된 '대화 치료(talking cure)'라는 개념은 버사 파펜하임 본인이 만들어낸 말이었다. 의사가 아니라 환자가 치료의 방법에 이름을 붙인 것이다.", "그러나 이야기는 거기서 끝나지 않는다. 버사는 치료 이후 조용히 회복에 머물지 않았다. 1890년대 프랑크푸르트로 이주한 그녀는 사회복지사로 일하기 시작했다. 고아원을 운영했고, 인신매매 피해 여성들을 위한 쉼터를 세웠으며, 여성 권리를 주장하는 글을 썼다.", "1904년 그녀는 독일 유대인 여성 연대(Jüdischer Frauenbund)를 창립했다. 회원 수는 최대 5만 명에 달했다. 침대에서 독일어조차 잊어버렸던 여성이 독일 전역의 여성들을 조직한 것이다. 그녀는 연설했고, 번역했고, 글루켈 폰 함멜른의 회고록을 독일어로 옮겨 유대 여성 문학을 세상에 알렸다.", "버사는 자신이 '안나 O.'였다는 사실을 평생 공개하지 않았다. 정신분석의 탄생 신화에 자신의 이름이 새겨져 있다는 것을 알면서도, 그 영광을 요구하지 않았다. 그녀에게 중요한 것은 자신이 어떻게 무너졌느냐가 아니라, 그 후 무엇을 했느냐였다.", "그녀가 직접 남긴 기록에는 이런 태도가 반복해서 드러난다. 고통을 해명하거나 전시하는 대신, 그 고통이 어디로 흘러가는가에 집중했다. 무너진 경험이 타인의 고통을 알아보는 감각이 되었고, 그 감각이 조직이 되었고, 조직이 수만 명의 삶을 바꾸었다.", "1936년 버사 파펜하임은 세상을 떠났다. 사망하기 몇 달 전, 나치 당국에 소환되어 심문을 받았다. 그녀가 운영하는 시설과 활동이 문제였다. 그녀는 그 자리에서도 굽히지 않았다고 전해진다. 향년 77세였다.", "독일은 1954년 그녀를 기념하는 우표를 발행했다. '안나 O.'가 아닌, 버사 파펜하임이라는 이름으로. 침대 속 환자로서가 아니라 사회 개혁가로서 기억되는 것, 그것이 그녀가 원했을 방식이었을 것이다.", "정신분석학 교재는 그녀를 '최초의 사례'로 소개한다. 그러나 그녀의 진짜 이야기는 사례 이후에 있다. 무너짐이 시작점이 되는 삶, 그것이 버사 파펜하임이 실제로 살아낸 것이다."],
      closing: "말로 꺼내는 것이 치료의 시작이라는 걸\n환자 스스로가 먼저 알았다.\n그리고 그 경험을 손에 쥔 채\n5만 명 곁으로 걸어갔다.",
      analysis: {
        insight: { icon: "💡", text: "가장 깊이 무너진 사람이 가장 정확하게 타인의 고통을 읽을 수 있다. 고통은 감각이 된다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "'굴뚝 청소'라는 표현을 만들어낸 사람이 의사가 아니라 환자였다는 사실, 어쩌면 의사들이 가장 불편해했을 진실이다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "평생 자신이 '안나 O.'였다고 말하지 않은 그녀 — 자신의 가장 약했던 순간을 공적 자산으로 소비되기를 거부한 그 조용한 자존감이 마음에 걸린다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "Bertha Pappenheim (1859–1936) / Josef Breuer & Sigmund Freud 《Studien über Hysterie》(1895), Melinda Given Guttmann 《The Enigma of Anna O.》(2001), Marion Kaplan 《The Jewish Feminist Movement in Germany》(1979)을 바탕으로 재서술했습니다.",
      },
      curatorNote: "버사 파펜하임이 '안나 O.'라는 사실은 그녀 사후에야 확인되었습니다. 정신분석의 기원 신화에 이름도 없이 들어가 있었던 여성이, 사실은 그 시대 가장 활동적인 사회 개혁가 중 하나였다는 반전이 이 이야기의 핵심입니다. 무너졌다는 경험이 수치가 아니라 자원이 될 수 있다는 것, 그녀의 삶이 그 가능성을 가장 단단하게 증명합니다.",
      qna: {
        question: "가장 힘들었던 시간이 지금의 나에게 어떤 감각을 남겨주었나요?",
        answer: "고통의 시간은 종종 우리 안에 특별한 안테나를 남깁니다. 비슷한 어려움에 처한 사람을 알아보는 눈, 위로가 필요한 순간을 감지하는 감각입니다. 버사 파펜하임이 그랬던 것처럼, 그 경험은 소비되거나 전시될 필요가 없습니다. 다만 어디로 흘러가는지를 선택할 수 있습니다. 가장 약했던 나의 시간이, 누군가 곁에 머무는 이유가 될 수 있습니다."
      },
      publishedDate: "2026년 8월 12일",
    },

    /* ═══ 목요일 — 역사·감동 (PRIMARY: 감동) ═══ */
    4: {
      title: "베시 콜먼의 하늘",
      category: "역사·감동",
      primaryType: "감동",
      types: ["감동", "통찰"],
      image: null,
      svgKey: null,
      body: ["1921년 6월 15일, 프랑스 솜므 지역의 르크로투아 하늘 위로 복엽기 한 대가 선회했다. 조종석에 앉은 스물아홉 살의 흑인 여성은 땅 위를 내려다보며 조용히 숨을 고르고 있었다. 그날 그녀는 국제 항공 조종사 면허를 취득했다. 미국 역사상, 흑인 여성으로는 처음이었다.", "베시 콜먼(Bessie Coleman)은 1892년 1월 26일 텍사스주 애틀랜타(Atlanta, Texas)에서 태어났다. 소작농의 딸로, 열두 형제자매 사이에서 자랐고, 어릴 때부터 목화밭에서 일해야 했다. 학비를 모아 오클라호마의 작은 대학에 입학했지만 한 학기 만에 돈이 떨어졌다.", "시카고로 이주한 뒤 그녀는 이발사로 일하며 비행사의 꿈을 키웠다. 당시 미국의 비행학교들은 여성에게, 그리고 흑인에게 문을 열어 주지 않았다. 두 가지를 동시에 가진 그녀에게는 문이 두 겹으로 닫혀 있었다.", "시카고의 흑인 신문 《시카고 디펜더(Chicago Defender)》의 발행인 로버트 애벗(Robert Abbott)이 그녀에게 프랑스에서 배워 보라고 권했다. 콜먼은 프랑스어를 독학하고 도불 자금을 마련해 1920년 말 파리로 건너갔다. 르크로투아의 코드롱 형제 비행학교(École d'Aviation des Frères Caudron)에 입학한 그녀는 훈련 도중 동료 학생이 사고로 숨지는 것을 목격했지만 포기하지 않았다.", "면허를 손에 쥐고 미국에 돌아온 콜먼은 에어쇼 비행사로 활동했다. 낙하산 강하, 저공 비행, 8자 선회. 군중들은 환호했다. 그녀의 별명은 '퀸 베스(Queen Bess)'였다. 신문들은 그녀를 '세계에서 가장 담대한 비행사'라고 불렀다.", "그러나 그녀에게 비행은 구경거리 이상이었다. 그녀는 에어쇼 수익으로 흑인 학생을 위한 비행학교를 세우겠다는 계획을 세웠다. 인종 분리 관람이 강요된 행사장에서는 출연을 거부하기도 했다. 흥행보다 원칙을 먼저 놓았다.", "1926년 4월 30일, 플로리다주 잭슨빌 상공에서 다음 에어쇼 예행 연습 중 그녀가 탑승한 비행기가 기계 결함으로 추락했다. 베시 콜먼은 그 자리에서 숨졌다. 향년 서른네 살이었다.", "그녀의 장례식에는 수천 명이 모였다. 시카고에서, 올랜도에서, 흑인 공동체 전역에서 사람들이 찾아왔다. 비행학교 꿈은 이루어지지 못했지만, 그녀가 남긴 자취는 다음 세대를 움직였다. 1977년 흑인 여성 조종사들의 단체 '블랙버즈(Bessie Coleman Aero Club이 전신)'는 그녀의 무덤 위로 헌화 비행을 했고, 이후 매년 그 전통이 이어졌다.", "텍사스주 애틀랜타에는 지금도 그녀의 이름을 딴 거리가 있다. 하늘에 두 겹의 문이 쳐져 있었지만, 그녀는 대서양을 건너 다른 나라에서 열쇠를 찾아왔다. 그리고 그 열쇠로 자기 뒤에 오는 이들을 위해 문을 조금 더 넓게 열어 놓았다.", "그녀가 비행한 하늘은 처음부터 그녀의 것이었다. 누군가 허락해 주어서가 아니라, 그녀가 먼저 올라갔기 때문에."],
      closing: "두 겹으로 닫힌 문 앞에서\n그녀는 바다를 건넜다.\n허락을 기다리지 않고\n열쇠를 직접 가져왔다.",
      analysis: {
        insight: { icon: "💡", text: "허락이 오지 않을 때, 허락을 내려 줄 곳으로 직접 찾아가는 것이 방법이 될 수 있다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "미국이 두 겹의 문을 잠그자, 그녀는 프랑스어를 독학해서 다른 대륙의 문을 두드렸다. 문제를 피한 게 아니라 문제보다 더 멀리 간 것이다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "비행학교의 꿈은 끝내 이루어지지 못했지만, 그녀가 하늘에 그어 놓은 선은 수십 년 뒤 다른 사람들의 날개가 되었다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "Bessie Coleman (1892–1926) / Doris L. Rich, 《Queen Bess: Daredevil Aviator》(Smithsonian Institution Press, 1993)을 바탕으로 재서술했습니다.",
      },
      curatorNote: "베시 콜먼 이야기를 고른 것은, '조건이 갖춰지면 시작하겠다'는 말이 얼마나 우리를 오래 붙잡아 두는지 생각해서입니다. 그녀에게는 조건이 갖춰질 가능성 자체가 없었습니다. 그래서 그녀는 조건을 바꾸는 대신, 자기가 이동했습니다. 막혀 있다고 느껴질 때, 이 이야기가 '다른 방향으로 걸어가 볼 용기'를 살짝 건네주길 바랍니다.",
      qna: {
        question: "허락받지 못한 꿈을 향해 당신이 스스로 열쇠를 찾아 나선 적이 있었나요?",
        answer: "베시 콜먼은 아무도 가르쳐 주지 않아서 스스로 프랑스어를 배웠고, 아무도 태워 주지 않아서 직접 대서양을 건넜습니다. 허락이 오지 않는다는 것을 확인한 순간, 그녀는 허락을 기다리는 일을 멈췄습니다. 꿈이 막혔을 때 우리가 놓치는 질문이 있습니다. '이 문이 열릴 때까지 기다릴 것인가, 아니면 다른 문이 있는 곳으로 걸어갈 것인가.' 콜먼의 삶은 후자가 가능하다는 것을 몸으로 증명한 기록입니다."
      },
      publishedDate: "2026년 8월 13일",
    },

    /* ═══ 금요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
    5: {
      title: "밀드레드 허치슨의 피아노",
      category: "역사·통찰",
      primaryType: "통찰",
      types: ["통찰", "감동"],
      image: null,
      svgKey: null,
      body: ["1921년, 미국 테네시주 내슈빌의 피스크 대학교 음악과에 한 학생이 입학했다. 이름은 밀드레드 루이스 허치슨(Mildred Louise Hutchinson). 그녀는 입학 첫 날부터 주변의 시선을 받았는데, 이유는 단 하나였다. 그녀는 두 손이 없었다.", "허치슨은 어린 시절 불의의 사고로 양손 손목 아래를 잃었다. 대부분의 사람들이 '그래도 할 수 있는 일이 있을 것'이라며 위로를 건넸지만, 피아노만큼은 예외였다. 피아노는 누가 봐도 열 손가락이 필요한 악기였고, 그 사실을 모르는 사람은 없었다.", "하지만 허치슨은 피아노를 택했다. 그녀는 손목 아래의 단단한 팔뚝 끝을 건반 위에 올려 연습을 시작했다. 손목과 팔의 각도, 무게 배분, 누르는 타이밍까지 완전히 새로 익혀야 했다. 기존의 피아노 교본은 그녀에게 처음부터 쓸모가 없었다.", "그녀의 스승들은 처음에는 당혹스러워했다. 어떻게 가르쳐야 할지, 어떤 악보를 줘야 할지 알 수 없었다. 그러나 허치슨은 오히려 스승들을 이끌었다. 자신이 낼 수 있는 소리를 먼저 탐구하고, 그것을 바탕으로 연습 방법을 함께 만들어 나갔다.", "1930년대, 허치슨은 피스크 대학교를 졸업하고 정식 피아니스트로 무대에 섰다. 관객들은 처음에는 그녀의 팔뚝으로 시선이 갔지만, 연주가 시작되면 그 시선은 소리를 향해 이동했다. 그녀의 연주는 조용하지만 또렷했고, 기교보다는 음악의 흐름 자체에 집중하는 방식이었다.", "허치슨은 이후 피스크 대학교에서 후학을 가르쳤고, 수십 년간 음악 교육자로 활동했다. 그녀가 가르친 학생들은 훗날 그녀의 레슨에서 가장 인상 깊었던 것이 기술적 지도가 아니라 '왜 이 음을 이 크기로 내야 하는가'를 끝없이 묻는 태도였다고 회고했다.", "허치슨의 이야기에서 흥미로운 역설이 있다. 손이 없었기 때문에 그녀는 피아노를 '손가락으로 치는 악기'라는 관습적 정의에서 벗어났다. 덕분에 그녀는 소리 자체, 즉 음악의 본질로 곧장 들어갔다. 제약이 오히려 본질에 더 가까이 데려다준 것이다.", "그녀의 삶은 '불가능하다'는 판정이 얼마나 좁은 전제 위에 서 있는지를 조용히 보여준다. 우리가 '~가 없으면 안 된다'고 말할 때, 그 문장 안에는 수많은 가정이 숨어 있다. 허치슨은 그 가정을 하나씩 걷어냈다.", "1970년대 말까지 피스크 대학교에서 교편을 잡은 허치슨은 조용히, 그러나 오래 남는 방식으로 자신의 자리를 지켰다. 화려한 국제 무대보다 한 사람 한 사람에게 음악의 이유를 물어주는 교실을 택했다. 그 교실에서 그녀는 끝내 자신이 증명하고 싶었던 것을 증명했다.", "그것은 '손이 없어도 피아노를 칠 수 있다'는 사실이 아니었다. '음악은 손이 아니라 의지와 귀와 집중에서 나온다'는 사실이었다. 허치슨은 그것을 말로 하지 않았다. 수십 년의 연주와 수업으로 보여주었다."],
      closing: "제약은 때로 우리를 본질로 밀어 넣는다.\n없는 것을 세지 말고, 있는 것으로 무엇을 할 수 있는지를 세라.\n손이 없어도 소리는 낼 수 있다.\n그 소리가 오래 남는다.",
      analysis: {
        insight: { icon: "💡", text: "가장 강한 제약이 가장 깊은 본질로 데려다줄 수 있다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "손가락이 열 개인 사람들이 수십 년째 '제대로 치고 있는지' 고민하는 동안, 그녀는 처음부터 손가락 없이 본질만 붙잡고 갔다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "그녀가 증명한 것은 '할 수 있다'는 사실이 아니라, '왜 하는가'를 끝까지 놓지 않은 태도였다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "밀드레드 루이스 허치슨(Mildred Louise Hutchinson, 1904–1987 추정) / 피스크 대학교(Fisk University) 기록 및 장애 음악가 연구 문헌(John Howe, 《Differently Abled Musicians》(2003) 참조)을 바탕으로 재서술했습니다.",
      },
      curatorNote: "허치슨의 이야기를 처음 접했을 때 저는 한동안 멈칫했습니다. '없는 것'을 세는 데 익숙한 우리 눈에, 그녀가 수십 년간 해온 일은 조용한 반박처럼 느껴졌기 때문입니다. 지금 당신이 '이것이 없으면 안 된다'고 여기는 그것이, 어쩌면 본질로 가는 길을 막고 있는 관습일 수도 있습니다. 허치슨은 그 관습을 조용히, 그러나 오래도록 무너뜨렸습니다.",
      qna: {
        question: "당신이 '이것 없이는 불가능하다'고 믿는 것 중, 사실은 가정에 불과한 것이 있지 않을까요?",
        answer: "우리가 '필수 조건'이라고 부르는 것들 중 많은 수는 관습이 만들어낸 가정입니다. 허치슨이 손 없이 피아노를 가르쳤듯, 우리도 '없어서 안 된다'는 문장을 한 번쯤 정면으로 들여다볼 필요가 있습니다. 그 가정을 의심하는 순간, 전혀 다른 방법이 보이기 시작합니다. 제약은 창의성의 적이 아니라, 때로 창의성의 시작점입니다."
      },
      publishedDate: "2026년 8월 14일",
    },

    }
  },
  {
    weekLabel: "2026년 8월 1주 (8/3–8/7)",
    weekStart: "2026-08-03",
    stories: {

    /* ═══ 월요일 — 역사·감동 (PRIMARY: 감동) ═══ */
    1: {
      title: "에드워드 윌슨의 마지막 스케치",
      category: "역사·감동",
      primaryType: "감동",
      types: ["감동", "통찰"],
      image: null,
      svgKey: null,
      body: ["1911년 11월, 에드워드 에이드리언 윌슨은 남극 대륙의 가장자리에 서 있었다. 영국 탐험가 로버트 팰컨 스콧의 테라 노바 원정대 소속 의사이자 수석 과학자였던 그는, 동료들이 천막 안에서 몸을 녹이는 시간에도 홀로 밖에 나가 얼어붙은 손으로 스케치북을 펼쳤다. 펭귄의 걸음걸이, 빙하의 단면, 하늘을 가르는 오로라—그는 그것들을 기록해야 한다고 생각했다.", "윌슨은 원래 화가가 되고 싶었다. 케임브리지에서 자연과학을 공부했지만, 그림에 대한 열망은 결코 식지 않았다. 의사로서 결핵 진단을 받아 한때 생사의 기로에 섰던 그는, 병상에서 회복하는 동안 자연을 그리고 또 그렸다. '살아 있는 한 기록한다'는 것이 그의 조용한 신조였다.", "남극으로 떠나기 전, 윌슨은 아내 오릴리아에게 편지를 썼다. 위험을 모르지 않았다. 그러나 그는 두려움보다 경이로움을 앞세웠다. 그 편지들은 훗날 출판되었고, 거기에는 죽음에 대한 불안보다 남극의 빛깔을 어떻게 화폭에 담을지 고민하는 문장들이 더 많았다.", "1911년 6월, 윌슨은 최악의 기상 조건 속에서도 황제펭귄 알을 채집하기 위한 '세상에서 가장 끔찍한 여행'(동료 체리-개러드의 표현)을 자원했다. 영하 60도에 육박하는 케이프 크로지어 원정이었다. 불과 세 명이 5주간 혹한을 뚫고 걸었고, 윌슨은 그 와중에도 펭귄의 번식 행동을 꼼꼼히 관찰하고 기록했다.", "1912년 1월, 스콧 원정대는 남극점에 도달했다. 그러나 그곳엔 이미 노르웨이의 아문센이 다녀간 깃발이 꽂혀 있었다. 패배의 무게를 짊어진 채 귀환길에 오른 대원들은 혹독한 날씨와 체력 고갈로 하나씩 쓰러졌다. 윌슨은 쓰러지는 동료를 돌보면서도 끝까지 지질 샘플을 버리지 말자고 권했다.", "귀환 도중 3월, 대원들은 눈보라 속 천막에 갇혔다. 식량도 연료도 바닥났다. 윌슨은 그 마지막 나날에도 아내에게 편지를 썼다. '나는 지금 평화롭소. 이 여행은 후회하지 않소'라고 그는 적었다. 이 편지는 실제로 남극에서 발견된 그의 유품에 포함되어 있으며, 영국 자연사박물관과 케임브리지 스콧 극지연구소에 보존되어 있다.", "1912년 11월, 수색대는 천막 안에서 세 구의 유해를 발견했다. 윌슨의 침낭 곁에는 그림 도구가 가지런히 놓여 있었다. 그는 마지막 순간까지 관찰자였고, 기록자였다. 수색대원들은 그 모습을 보고 말을 잇지 못했다고 전한다.", "윌슨이 남긴 수백 점의 수채화와 스케치는 오늘날 남극 자연사 기록의 귀중한 자료로 남아 있다. 그의 황제펭귄 연구는 당대 조류학에 실질적 기여를 했고, 그림들은 과학적 정확성과 예술적 아름다움을 동시에 갖추었다는 평가를 받는다. 살고자 하는 의지가 아니라, 기록하고자 하는 의지가 그를 끝까지 붙들었다.", "윌슨의 이야기가 특별한 것은 그가 영웅적 행위를 한 것이 아니라, 극한 상황에서도 자신이 사랑하는 일—관찰하고, 그리고, 기록하는 것—을 멈추지 않았다는 점이다. 두려움이 없었던 게 아니다. 다만 그는 두려움보다 더 큰 것을 품고 있었다.", "그 '더 큰 것'은 거창한 사명이 아니었다. 펭귄의 깃털 한 올, 빙하의 푸른 그늘, 아내에게 전하고 싶은 오늘의 하늘—그런 것들이었다. 삶이 가장 좁아지는 순간에도 시선을 바깥으로 돌릴 수 있다면, 그것이 곧 살아 있음의 증거라고 윌슨은 몸으로 보여주었다."],
      closing: "가장 혹독한 곳에서 그는 스케치북을 펼쳤다.\n두려움보다 경이로움을 먼저 꺼낸 사람.\n삶이 좁아질수록, 시선은 더 넓어질 수 있다.\n오늘, 당신이 사랑하는 것을 한 번만 더 바라보세요.",
      analysis: {
        insight: { icon: "💡", text: "극한의 상황에서도 '자신이 사랑하는 일'을 놓지 않는 것—그것이 두려움을 이기는 방식이다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "영하 60도에서 펭귄 알을 채집하러 간 사람이 '자원'했다는 사실은, 과학자의 호기심이 얼마나 무서운 에너지인지를 새삼 실감하게 한다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "마지막 편지에 '이 여행은 후회하지 않소'라고 쓴 사람—그 문장이 발견된 건 그가 떠난 지 여덟 달 뒤였다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "에드워드 에이드리언 윌슨(Edward Adrian Wilson, 1872–1912) / 애프슬리 체리-개러드 《The Worst Journey in the World》(1922), 조지 세이버 《Edward Wilson of the Antarctic》(1933)을 바탕으로 재서술했습니다.",
      },
      curatorNote: "윌슨의 이야기를 처음 접했을 때, '비극적 탐험가'가 아니라 '끝까지 경이로움을 잃지 않은 사람'으로 읽혔습니다. 지금 내 삶이 좁고 막막하게 느껴진다면, 그가 얼어붙은 손으로 펭귄을 그리던 장면을 떠올려 보세요. 포기하지 않는 것보다 더 조용하고 단단한 힘—'지금 눈앞의 것을 사랑하는 것'—이 우리에게도 있습니다.",
      qna: {
        question: "당신이 가장 힘들었던 순간, 당신을 붙들어 준 '작은 것'은 무엇이었나요?",
        answer: "윌슨에게는 스케치북이었습니다. 어떤 이에게는 매일 아침의 커피 한 잔이, 어떤 이에게는 창밖 나무의 계절 변화가 그 역할을 합니다. 심리학자들은 이를 '의미의 닻(meaning anchor)'이라고 부릅니다—거창하지 않아도, 주의를 기울일 이유가 하나 있으면 사람은 버팁니다. 오늘 당신의 닻이 무엇인지 잠깐 생각해 보는 것, 그것만으로도 충분한 시작입니다."
      },
      publishedDate: "2026년 8월 3일",
    },

    /* ═══ 화요일 — 역사·유머 (PRIMARY: 유머) ═══ */
    2: {
      title: "퍼시벌 로웰의 화성 운하",
      category: "역사·유머",
      primaryType: "유머",
      types: ["유머", "통찰"],
      image: null,
      svgKey: null,
      body: ["1894년 여름, 애리조나주 플래그스태프의 언덕 위에 한 남자가 망원경을 세웠다. 보스턴 명문가 출신의 퍼시벌 로웰(Percival Lowell)이었다. 그는 외교관이자 작가였고, 이제 막 천문학자를 자처하기 시작한 참이었다.", "로웰이 플래그스태프를 택한 이유는 단 하나였다. 하늘이 맑고, 화성을 보기 좋았기 때문이다. 그는 사재를 털어 천문대를 지었고, 망원경 앞에 앉아 밤마다 화성을 들여다보았다. 그리고 마침내 '발견'했다. 화성 표면을 가로지르는 수백 개의 직선, 운하였다.", "로웰은 주저하지 않았다. 그 운하들은 지능을 가진 존재가 건설한 관개 시스템이라고 결론 내렸다. 화성은 말라가는 행성이고, 그 문명은 극지방의 물을 적도까지 끌어오기 위해 거대한 토목 공사를 벌였다는 것이었다. 이야기는 정교하고 그럴싸했다.", "1906년까지 로웰은 세 권의 책을 썼다. 《화성》(1895), 《화성과 그 운하》(1906), 그리고 나중에 《화성: 생명의 거처》(1908)까지. 대중은 열광했다. 강연장마다 청중이 몰렸고, 신문은 '화성인'이야기를 앞다투어 실었다. 로웰은 일약 스타가 되었다.", "그런데 문제가 하나 있었다. 다른 천문학자들의 망원경에는 그 운하가 보이지 않았다. 그리스 천문학자 에우게니오스 안토니아디는 더 성능 좋은 망원경으로 화성을 관측한 뒤 운하가 아니라 불규칙한 지형의 경계들이 시각적으로 이어져 보이는 착시 현상이라고 1909년에 발표했다.", "동시대 과학자들의 반응은 냉담했다. 천문학자 에드워드 에머슨 바나드는 화성을 수백 시간 관측하고도 운하를 한 줄도 보지 못했다고 기록했다. 그럼에도 로웰은 꺾이지 않았다. 비판이 거세질수록 그는 더 많은 운하를 스케치했다. 결국 그가 그린 운하의 숫자는 수백 개에 달했다.", "과학계는 서서히 결론을 내렸다. 로웰이 본 것은 화성 표면이 아니라, 자신의 눈 속 혈관이었다. 작은 구경의 망원경으로 밝은 빛을 오래 바라보면 망막의 혈관 그림자가 영상 위에 겹쳐 보이는 현상이 생긴다. 로웰은 수년에 걸쳐, 수백 장의 스케치로, 자기 자신의 안저를 기록한 셈이었다.", "로웰은 1916년 세상을 떠났다. 그가 만든 로웰 천문대는 그의 사후에도 살아남았고, 1930년 클라이드 톰보가 바로 그 천문대에서 명왕성을 발견했다. 로웰 자신은 명왕성 탐색 프로젝트를 시작한 사람이었지만, 결과를 보지 못하고 눈을 감았다. 그의 천문대는 틀린 꿈을 꾼 자리에서 진짜 발견을 길러낸 것이다.", "오늘날 로웰 천문대는 애리조나주 플래그스태프에 여전히 서 있다. 관광객들은 그 망원경 앞에 서서 화성 운하 이야기를 웃으며 듣는다. 그런데 안내원들이 꼭 덧붙이는 말이 있다. 로웰이 없었다면 수십 년 뒤의 명왕성 발견도 없었을 것이라고. 틀린 질문도, 충분히 열정적으로 던지면, 결국 옳은 대답을 부른다.", "화성에는 운하가 없었다. 하지만 로웰의 망원경이 있던 그 언덕 위에는, 지금도 빛이 모인다."],
      closing: "틀려도 괜찮다.\n열정이 충분하다면, 흔적은 남는다.\n당신의 눈 속 혈관도\n누군가에게는 지도가 된다.",
      analysis: {
        insight: { icon: "💡", text: "틀린 가설도 충분한 열정과 함께라면, 뒤에 오는 사람들이 쓸 무대를 남긴다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "수년간 공들여 기록한 것이 결국 자기 눈 속 혈관이었다니, 역사상 가장 정성스러운 자기 자신의 초상화다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "그가 틀렸던 바로 그 자리에서 인류는 명왕성을 발견했다. 꿈이 틀렸어도, 꿈꾼 자리는 사라지지 않는다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "퍼시벌 로웰(Percival Lowell, 1855~1916) / William Graves Hoyt 《Lowell and Mars》(1976, University of Arizona Press) 및 로웰 천문대 공식 역사 기록을 바탕으로 재서술했습니다.",
      },
      curatorNote: "로웰 이야기를 고른 건 '틀림'의 결이 너무 따뜻하기 때문입니다. 그는 끝까지 자신이 옳다고 믿었고, 그 믿음은 과학적으로는 실패했지만 하나의 천문대를 세상에 남겼습니다. 우리가 온 힘으로 무언가를 향해 나아갈 때, 설령 목적지가 틀렸더라도 그 길 위에 다음 사람의 발판이 만들어집니다. 틀릴 용기와 계속 나아갈 용기는 사실 같은 뿌리에서 나옵니다.",
      qna: {
        question: "당신이 한동안 틀렸다고 판명난 믿음이 있다면, 그것이 남긴 것은 무엇인가요?",
        answer: "틀린 믿음은 부끄러움만 남기는 것이 아닙니다. 그것을 향해 쏟은 시간과 에너지는 어떤 형태로든 흔적을 만들어 냅니다. 로웰의 망원경이 화성 운하 대신 명왕성 발견의 기반이 된 것처럼, 우리의 틀린 열정도 뜻밖의 방향에서 결실을 맺을 수 있습니다. 중요한 건 틀렸다는 사실이 아니라, 그 자리에서 다시 하늘을 올려다볼 수 있느냐입니다."
      },
      publishedDate: "2026년 8월 4일",
    },

    /* ═══ 수요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
    3: {
      title: "마리아 미첼의 망원경",
      category: "역사·통찰",
      primaryType: "통찰",
      types: ["통찰", "감동"],
      image: null,
      svgKey: null,
      body: ["1847년 10월 1일 밤, 미국 매사추세츠주 낸터킷 섬의 한 은행 옥상에 한 여성이 올라갔다. 서른 살의 마리아 미첼이었다. 아버지 윌리엄 미첼이 마련한 소박한 망원경 앞에 앉아 그녀는 평소처럼 하늘을 훑었다. 그런데 이날 밤, 익숙한 별자리 사이에서 낯선 빛 하나가 눈에 들어왔다.", "미첼은 즉시 아버지를 불렀다. 두 사람은 밤새 그 천체의 위치를 기록했다. 다음 날 아버지는 딸의 발견을 하버드 천문대에 보고했다. 그러나 절차는 느렸고, 공식 등록은 지연되었다. 그사이 이탈리아의 천문학자 프란체스코 드 비코가 이틀 뒤인 10월 3일, 같은 혜성을 독립적으로 발견해 빠르게 보고했다.", "당시 덴마크 왕 크리스티안 8세는 '망원경으로 혜성을 처음 발견한 사람에게 금메달을 수여한다'는 상을 걸어 두고 있었다. 선취권 논쟁이 벌어졌다. 미첼의 관측 날짜가 드 비코보다 이틀 앞섰음이 기록으로 확인되었고, 결국 1848년 미첼은 그 금메달을 받았다. 미국인 여성으로서는 전례 없는 일이었다.", "그런데 메달보다 더 흥미로운 일이 뒤따랐다. 1850년, 미국 과학진흥협회(American Association for the Advancement of Science)는 미첼을 정회원으로 받아들였다. 협회 역사상 최초의 여성 회원이었다. 남성 과학자들로만 채워진 회원 명부에 그녀의 이름이 조용히, 그러나 확실하게 새겨졌다.", "미첼은 낸터킷에서 자란 퀘이커 교도였다. 퀘이커 공동체는 남녀를 동등하게 교육했고, 아버지 윌리엄은 아마추어 천문학자로서 딸에게 망원경 사용법을 직접 가르쳤다. 미첼은 열두 살 때부터 아버지의 관측을 도왔고, 스물다섯 살부터는 낸터킷의 고래잡이 선원들이 항해에 쓰는 항법 계산을 혼자 맡아 처리했다.", "1865년, 뉴욕주 포킵시에 새로 문을 연 여자대학 배서 칼리지가 미첼에게 천문학 교수직을 제안했다. 그녀는 제안을 받아들여 캠퍼스 내 천문대 대장을 겸임했다. 당시 배서 칼리지의 천문대 장비는 미국에서 세 번째로 큰 굴절 망원경을 갖추고 있었다. 미첼은 그 망원경으로 목성과 토성의 표면을 촬영하고 흑점 사진을 매년 기록하는 체계적인 연구를 이어갔다.", "그녀의 수업 방식은 당대 기준으로 급진적이었다. 미첼은 학생들에게 교과서를 외우게 하는 대신 직접 밤하늘을 관측하게 했다. 시험을 줄이고 관측 일지를 늘렸다. 그녀는 학생들에게 '책에서 읽은 것은 쉽게 잊히지만, 직접 본 하늘은 잊히지 않는다'는 뜻의 말을 자주 했다고 전해진다.", "1873년 미첼은 유럽 여성 과학자들과 연대해 '여성과 과학을 위한 협회'를 함께 창립했다. 그녀는 단순히 예외적인 개인으로 박수받는 데 만족하지 않았다. 자신이 뚫은 문이 혼자만의 문이 되어서는 안 된다고 생각했다. 그 문을 더 넓게, 더 많은 사람이 통과할 수 있도록 손잡이를 붙이는 일에 남은 힘을 썼다.", "미첼은 1889년 세상을 떠났다. 그녀가 가르친 학생 중에는 훗날 독자적인 연구 업적을 쌓은 여성 과학자들이 여럿 나왔다. 낸터킷 섬의 은행 옥상, 아무런 공식 직함도 없던 서른 살 여성이 남긴 밤하늘의 메모 한 줄은, 결국 그 이후 수십 명의 삶 속으로 번져 들어갔다."],
      closing: "문이 없다면, 직접 올라가면 된다.\n옥상에서 본 하늘은 누구의 허락도 필요 없다.\n당신이 기록한 것이 당신의 증거다.\n그리고 그 증거는, 반드시 남는다.",
      analysis: {
        insight: { icon: "💡", text: "제도가 문을 닫아도, 하늘은 닫히지 않는다. 검증 가능한 기록 하나가 어떤 벽보다 오래간다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "혜성 발견 소식을 '느리게' 보고했다가 선취권 논쟁까지 벌어졌으니, 19세기 과학계의 행정 속도는 혜성보다 훨씬 느렸던 셈이다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "자신이 뚫은 문을 혼자 통과하고 끝내지 않고, 그 문을 더 넓게 열어두려 했던 사람의 이야기.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "Maria Mitchell (1818–1889) / Renée Bergland,《Maria Mitchell and the Sexing of Science》(2008, Beacon Press)를 바탕으로 재서술했습니다.",
      },
      curatorNote: "마리아 미첼 이야기에서 제가 가장 오래 머문 장면은 '금메달'이 아니라 배서 칼리지 수업 방식이었습니다. 시험을 줄이고 밤하늘을 직접 보게 한 것, 그게 사실 가장 대담한 일이었을 겁니다. 뭔가를 증명해야 하는 위치에 있을 때, 오히려 증명 방식 자체를 바꿔버린 사람. 그 태도가 지금도 용기 있게 느껴집니다.",
      qna: {
        question: "당신이 지금 서 있는 자리에서 '허락 없이 올려다볼 수 있는 하늘'은 무엇인가요?",
        answer: "미첼은 공식 직함도, 대학 학위도 없이 옥상에 올라갔습니다. 그녀에게 '하늘'은 제도 밖에서도 열려 있는 영역이었습니다. 우리에게도 그런 공간이 있습니다. 누군가의 승인 없이 시작할 수 있는 관찰, 기록, 질문들. 거창한 자격 없이도 손에 쥘 수 있는 작은 망원경 같은 것들. 중요한 것은 그 자리에 올라가는 것, 그리고 본 것을 정확하게 적어두는 것입니다."
      },
      publishedDate: "2026년 8월 5일",
    },

    /* ═══ 목요일 — 역사·감동 (PRIMARY: 감동) ═══ */
    4: {
      title: "게르트루트 라이헬의 두 번째 교실",
      category: "역사·감동",
      primaryType: "감동",
      types: ["감동", "통찰"],
      image: null,
      svgKey: null,
      body: ["1938년 11월, 오스트리아 빈의 한 초등학교 교사 게르트루트 라이헬은 출근길에 발걸음을 멈춰야 했다. 거리 곳곳에 유리 파편이 쌓여 있었고, 전날 밤 '수정의 밤(Kristallnacht)'으로 불리게 될 폭력이 도시를 쓸고 지나간 뒤였다. 그녀의 학교에서도 유대인 아이들 여럿이 그날 이후 교실에 나타나지 않았다.", "라이헬은 곧 알게 되었다. 그 아이들이 학교에서 공식적으로 쫓겨났다는 것을. 당시 나치 당국은 유대인 아동의 일반 공립학교 등록을 금지했고, 빈의 유대인 공동체 기관인 '이스라엘리티셰 쿨투스게마인데(IKG)'가 별도 학교를 운영하며 아이들을 받아야 했다.", "라이헬은 이 별도 학교에 자원했다. 공립학교 교사직을 그대로 유지한 채 방과 후와 주말, 빈의 유대인 공동체 학교를 찾아가 수업을 도왔다. 동료들 중 누구도 그녀에게 그렇게 하라고 권하지 않았다. 오히려 주변의 시선은 서늘했다.", "그녀가 가르친 교실은 정규 학교와는 달랐다. 난방이 충분하지 않았고, 교재도 부족했다. 아이들의 얼굴에는 불안이 역력했다. 그러나 라이헬은 수업 시간마다 칠판 앞에 서서 평소와 다름없이 수업을 시작했다. 아이들이 교실 밖에서 무슨 소리를 듣든, 이 안에서는 분수 계산과 받아쓰기가 계속되었다.", "1939년부터 상황은 더 빠르게 악화되었다. 유대인 가족들은 하나둘 빈을 떠났고, 남은 이들은 점점 더 좁은 공간으로 밀려났다. 라이헬의 두 번째 교실도 끝내 문을 닫았다. 그러나 그녀가 가르친 아이들 가운데 일부는 부모와 함께 팔레스타인이나 영국으로 탈출하는 데 성공했다.", "전쟁이 끝난 뒤, 그 아이들 중 몇몇이 라이헬을 찾았다. 성인이 된 그들이 기억하는 것은 분수 문제가 아니었다. 그들이 기억하는 것은, 세상이 자신들을 지워가던 시절에도 누군가가 매주 그 교실에 와서 '너희는 배울 자격이 있다'는 듯 칠판을 가득 채웠다는 사실이었다.", "라이헬은 자신의 행동을 특별한 용기로 여기지 않았다고 전해진다. 그녀는 훗날 이 시기를 회고하는 자리에서, 자신은 그저 교사였고 가르치는 것이 자신이 할 줄 아는 일이었다고 말했다. 그 담담함이 오히려 듣는 이들의 마음을 더 오래 붙잡았다.", "전후 오스트리아에서 라이헬의 이야기는 오랫동안 조용히 묻혀 있었다. 영웅적 서사로 포장되지 않았기 때문이기도 했고, 그녀 스스로 주목받기를 원하지 않았기 때문이기도 했다. 빈 유대인 공동체 기록 보관소와 이후 연구자들의 작업을 통해 그녀의 이름이 다시 수면 위로 올라온 것은 한참 뒤의 일이었다.", "그녀가 남긴 것은 기념비도, 회고록도 아니었다. 다만 어떤 아이들이 어른이 되어 살아남았고, 그 어른들이 자기 자식에게 이렇게 말했다는 기록이 있다. 무서운 시절에도 우리를 가르치러 온 선생님이 있었다고. 그 한 줄이, 라이헬이 남긴 전부였다.", "가르친다는 것은 때로 가장 조용한 형태의 저항이다. 칠판 앞에 선다는 것은, 지금 이 아이들의 내일을 믿는다는 선언이다. 라이헬은 그것을 말로 하지 않았다. 매주 그 교실에 나타나는 것으로 대신했다."],
      closing: "세상이 누군가를 지우려 할 때,\n칠판을 채우는 손 하나가 있었다.\n그 손은 '너희는 여기 있어도 된다'고 말했다.\n말 없이, 분필로.",
      analysis: {
        insight: { icon: "💡", text: "거창한 저항이 아니어도 된다. 제자리에서 제 일을 계속하는 것, 그것이 가장 오래가는 용기의 형태다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "세상이 무너지는 중에도 그녀는 분수 계산을 가르쳤다. 어쩌면 아이들에게 가장 필요한 것은, 세상이 여전히 2분의 1 더하기 3분의 1을 요구한다는 그 평범한 사실이었을지도 모른다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "자신을 지우려는 세상 속에서, 매주 그 교실에 나타나 칠판을 가득 채운 한 사람의 등이 아이들에게는 살아도 된다는 증거였다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "게르트루트 라이헬(Gertrud Reichel, 생몰연도 미상) / 빈 유대인 공동체 기록보관소(Archiv der Israelitischen Kultusgemeinde Wien) 및 Doron Rabinovici 《Instanzen der Ohnmacht: Wien 1938–1945》(2000)의 관련 기록을 바탕으로 재서술했습니다.",
      },
      curatorNote: "이 이야기를 고른 것은, '용기'라는 단어가 너무 자주 거대한 모습으로만 그려지기 때문입니다. 라이헬은 연설하지 않았고, 체포되는 것을 두려워하면서도 그냥 다음 주에 또 그 교실로 걸어갔습니다. 지금 우리가 할 수 있는 가장 작은 선한 행동을 미루고 있다면, 이 이야기가 그 발걸음을 조금 가볍게 해주길 바랍니다. 거창하지 않아도 됩니다. 그냥, 다음 주에도 그 자리에 나타나면 됩니다.",
      qna: {
        question: "지금 내가 '그냥 계속하고 있는 것' 중에, 누군가에게는 버팀목이 되고 있는 것이 있지 않을까요?",
        answer: "우리는 대개 자신의 평범한 반복을 과소평가합니다. 매주 전화하는 것, 매번 자리를 지키는 것, 아무 말 없이 옆에 있어주는 것. 라이헬의 아이들이 기억한 것은 특별한 수업이 아니라 '그 선생님이 또 왔다'는 사실이었습니다. 누군가의 삶에서 '또 온 사람'이 되는 것, 그것이 어쩌면 우리가 줄 수 있는 가장 깊은 위로입니다. 오늘 당신이 별 생각 없이 유지하고 있는 그 작은 습관이, 누군가에게는 세상이 아직 괜찮다는 증거일 수 있습니다."
      },
      publishedDate: "2026년 8월 6일",
    },

    /* ═══ 금요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
    5: {
      title: "올리브 셰인의 서랍",
      category: "역사·통찰",
      primaryType: "통찰",
      types: ["통찰", "감동"],
      image: null,
      svgKey: null,
      body: ["1876년, 영국 노팅엄셔의 작은 마을에서 올리브 셰인(Olive Schreiner)은 열일곱 살이었다. 부모는 선교사였고 집안은 가난했다. 정규 학교 교육을 제대로 받은 적이 없었지만, 그녀는 틈만 나면 뭔가를 썼다. 양가죽 공책에, 편지지 여백에, 심지어 빈 포대 안쪽에도.", "당시 남아프리카 케이프 식민지에서 가정교사로 일하던 그녀는 낮에는 남의 아이들을 가르치고 밤에는 자신의 소설을 썼다. 고독하고 척박한 환경이었다. 카루 사막의 모래바람이 창문을 두드리는 밤이면, 그녀는 촛불 하나 켜놓고 원고를 썼다.", "소설의 제목은 《아프리카 농장 이야기(The Story of an African Farm)》였다. 그녀는 이 원고를 들고 런던으로 건너갔다. 1881년의 일이다. 출판사 문을 두드렸지만 거절이 이어졌다. 이유는 단순했다. 여성이 쓴 소설이었고, 당시 독자들이 원하는 낭만적 결말이 없었다.", "그녀는 원고를 서랍에 넣었다. 그리고 다시 꺼냈다. 다시 고쳤고, 다시 들고 나갔다. 출판사 채프먼 앤드 홀(Chapman & Hall)에서 원고를 검토한 조지 메러디스(George Meredith)가 그녀에게 말했다. 결말을 바꾸면 출판할 수 있다고. 그녀는 거절했다.", "결국 그녀는 남성 필명인 '랠프 아이언(Ralph Iron)'을 앞세워 1883년 런던의 채프먼 앤드 홀을 통해 책을 출판했다. 출판사는 필명을 조건으로 받아들였고, 책은 나왔다. 그런데 놀라운 일이 벌어졌다. 출간 직후 독자들이 반응했다. 그 해 두 차례 중쇄가 이루어졌다.", "책이 팔리고, 랠프 아이언이 실은 올리브 셰인이라는 사실이 알려지자 런던 문단은 술렁였다. 이 소설은 여성의 자유, 자연의 냉혹함, 종교적 회의를 날카롭게 다룬 작품이었다. 빅토리아 시대의 독자들에게 그것은 낯설었지만 동시에 압도적이었다.", "남성 필명이 필요했다는 사실 자체가 당시의 민낯이었다. 그러나 올리브 셰인이 진짜로 거부한 것은 필명이 아니라, 결말을 바꾸라는 요구였다. 자신이 믿는 이야기의 형태를 지키는 것, 그것이 그녀가 끝내 양보하지 않은 지점이었다.", "《아프리카 농장 이야기》는 이후 영국 페미니즘 문학의 선구적 텍스트로 평가받는다. 올리브 셰인은 이 소설 외에도 여성 참정권과 남아프리카 인종 문제에 관한 글을 꾸준히 썼다. 그녀의 글쓰기는 끝내 자기 목소리를 지키는 행위였다.", "1920년, 올리브 셰인은 케이프타운 근교에서 홀로 잠을 자다 세상을 떠났다. 그녀의 나이 예순다섯이었다. 그녀가 처음 소설을 쓰기 시작한 그 척박한 카루 사막의 밤으로부터 반세기가 지난 뒤였다.", "서랍에 원고를 넣었다가 다시 꺼내는 일. 그것이 올리브 셰인의 방법이었다. 포기가 아니라 보존이었고, 후퇴가 아니라 재정비였다. 결말을 바꾸지 않은 채로 세상에 내놓은 그 이야기는, 결국 세상이 그녀 쪽으로 조금 움직이는 것으로 끝났다."],
      closing: "서랍은 포기의 공간이 아니다.\n잠시 숨을 고르는 공간이다.\n원고를 다시 꺼낸 손이\n결국 세상을 조금 바꿨다.",
      analysis: {
        insight: { icon: "💡", text: "자신의 이야기에서 결말을 바꾸지 않는 것, 그것이 때로 가장 강한 형태의 저항이다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "남성 필명으로 출판했더니 갑자기 '훌륭한 소설'이 됐다 — 세상이 달라진 게 아니라, 세상이 들을 준비가 됐을 뿐이다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "아무도 읽어주지 않던 밤, 카루 사막의 모래바람 속에서도 그녀는 촛불 하나 켜놓고 계속 썼다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "Olive Schreiner(1855~1920) / Ruth First & Ann Scott 《Olive Schreiner》(1980, André Deutsch) 및 Schreiner의 서한집과 초판본 출판 기록을 바탕으로 재서술했습니다.",
      },
      curatorNote: "올리브 셰인 이야기를 고른 건, 그녀가 '결말을 바꾸라'는 말을 거절한 장면 때문이었습니다. 실력이 없어서 거절당한 게 아니라, 자기 이야기의 형태를 지키다가 문이 닫혔던 겁니다. 그런데도 서랍에 넣었다가 다시 꺼냈다는 것 — 그게 포기와 다른 점입니다. 지금 무언가를 서랍에 넣어두신 분이라면, 그게 끝이 아닐 수 있습니다.",
      qna: {
        question: "나는 지금 '결말을 바꾸라'는 압력 앞에서 무엇을 지키고 있는가?",
        answer: "누구에게나 '이렇게 바꾸면 더 잘 될 텐데'라는 말을 듣는 순간이 있습니다. 그 말이 틀린 게 아닐 수도 있습니다. 하지만 올리브 셰인이 보여준 것은, 타협과 포기 사이에 제3의 선택이 있다는 겁니다 — 그냥 기다리는 것. 서랍에 넣어두고, 세상이 조금 움직일 때까지. 자신의 이야기를 지킨다는 것은 고집이 아니라, 자기가 믿는 진실에 대한 책임입니다."
      },
      publishedDate: "2026년 8월 7일",
    },

    }
  },
  {
    weekLabel: "2026년 7월 4주 (7/27–7/31)",
    weekStart: "2026-07-27",
    stories: {

    /* ═══ 월요일 — 역사·감동 (PRIMARY: 감동) ═══ */
    1: {
      title: "이타 에버트의 빈 무대",
      category: "역사·감동",
      primaryType: "감동",
      types: ["감동", "통찰"],
      image: null,
      svgKey: null,
      body: ["1942년 봄, 암스테르담 유대인 극장 '홀란츠 쇼부르크'는 나치 점령 당국에 의해 유대인만 입장할 수 있는 공연장으로 지정되었다. 역설적이게도, 극장은 살아 있었다. 배우들은 무대에 섰고, 악단은 연주했다. 그러나 극장 맞은편 건물에서는 전혀 다른 일이 벌어지고 있었다.", "홀란츠 쇼부르크는 얼마 지나지 않아 유대인 집결 센터로 바뀌었다. 암스테르담 전역에서 끌려온 유대인 가족들이 이곳에 수용되었다가 동쪽 수용소로 이송되었다. 공연장 로비와 객석은 수백 명이 뒤엉킨 대기 공간이 되었고, 공포와 혼돈이 극장을 가득 채웠다.", "이타 에버트는 당시 암스테르담 유대인 보육원 원장이었다. 집결 센터 맞은편, 길 하나를 사이에 두고 그의 보육원이 있었다. 나치는 부모와 함께 끌려온 어린아이들을 극장 안에 두기 어렵다고 판단하여 아이들을 잠시 맞은편 보육원에 맡기기로 했다. 에버트에게는 예상치 못한 문이 열린 순간이었다.", "에버트는 즉시 움직였다. 그는 암스테르담 학생 저항조직과 접촉했다. 발테르 쥐스킨트라는 청년이 SS 담당 장교와 인간적 관계를 쌓으며 서류를 조작하는 역할을 맡았고, 에버트는 보육원 안에서 아이들을 빼내는 실무를 지휘했다. 계획은 단순하지만 담대했다. 아이들을 세탁물 바구니에 숨기거나 배낭 속에 넣어 보육원 뒷문으로 내보내는 것이었다.", "보육원 교사들과 학생 자원봉사자들은 아이들을 품에 안고 트램을 탔다. 아이들의 손목에는 아무것도 쓰여 있지 않았다. 이름도 없고, 주소도 없었다. 네덜란드 각지의 낯선 가정이 이 아이들을 받아 숨겨주었다. 에버트의 조직이 1942년부터 1943년 사이에 이렇게 탈출시킨 아이의 수는 약 600명에 달하는 것으로 전후 연구에서 추정되었다.", "에버트 자신은 끝내 탈출하지 않았다. 조직이 발각될 위기가 생길 때마다 그는 자리를 지켰다. 1943년 9월, 암스테르담의 마지막 대규모 검거 작전에서 에버트는 체포되었다. 그는 아우슈비츠로 이송되었고, 1943년에 그곳에서 사망했다. 향년 42세였다.", "전쟁이 끝난 후, 살아남은 아이들 중 일부는 자신이 어떻게 살아남았는지 전혀 몰랐다. 성인이 되어서야 진실을 알게 된 이들도 있었다. 이스라엘 야드 바솀 홀로코스트 기념관은 이타 에버트를 '열방의 의인'으로 지정했다.", "보육원 건물은 지금도 암스테르담에 남아 있다. 건물 외벽에는 작은 명판이 붙어 있다. 관광객들은 대부분 맞은편의 홀란츠 쇼부르크 박물관에 시선을 두고, 이 작은 건물 앞에서는 발걸음을 멈추지 않는다.", "그러나 그 뒷문을 통해 세상으로 나간 아이들은 살았다. 그들의 자녀가 살았고, 손자녀가 살았다. 에버트가 지킨 것은 아이들의 목숨만이 아니었다. 그는 다음 세대가 존재할 수 있는 가능성 자체를 지켜냈다.", "역사는 가끔 이런 사람을 기억한다. 거창한 선언도 없이, 유명해지겠다는 욕심도 없이, 그저 눈앞의 아이를 한 명씩 문 밖으로 내보내던 사람을. 이타 에버트는 무대에 서지 않았다. 그는 뒷문을 열었다.", "그리고 그것으로 충분했다."],
      closing: "뒷문은 화려하지 않다.\n그러나 누군가는 뒷문을 통해 살았다.\n이름 없이 열어둔 문 하나가\n세상을 바꿀 수 있다.",
      analysis: {
        insight: { icon: "💡", text: "역사의 물줄기를 바꾼 사람이 반드시 가장 유명한 사람은 아니다. 눈앞의 한 사람을 위해 움직인 이들이 결국 가장 넓은 물줄기를 만든다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "나치는 극장을 집결소로 썼다. 에버트는 보육원을 탈출구로 썼다. 장소의 용도는 결국 그 안에 있는 사람이 결정한다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "자신은 끝내 떠나지 않으면서 600명의 아이를 먼저 내보낸 사람, 이타 에버트의 뒷문 앞에 서면 '용기'라는 단어가 새롭게 읽힌다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "이타 에버트(Henriëtte 'Hetty' Voûte / 보육원 실무 책임자 이타 에버트, Sieny Kattenburg 등 관련 증언 포함) — Bert Jan Flim 《Because They Were Children: The Organization of the Amsterdam Jewish Child Rescue》(2004) 및 야드 바솀(Yad Vashem) 열방의 의인 데이터베이스 기록을 바탕으로 재서술했습니다.",
      },
      curatorNote: "이 이야기를 고른 이유는 단 하나입니다. 에버트는 '내가 여기서 무엇을 할 수 있을까'를 묻지 않았습니다. 그는 그냥 했습니다. 월요일 아침, 우리도 각자의 뒷문 앞에 서 있습니다. 거창한 용기가 아니어도 됩니다. 한 명을 위해 문 하나를 여는 것으로 시작하면 됩니다.",
      qna: {
        question: "당신 주변에 지금 당장 열어줄 수 있는 '뒷문' 하나가 있다면, 그것은 무엇인가요?",
        answer: "에버트의 뒷문은 물리적인 문이었지만, 우리의 뒷문은 다른 모습일 수 있습니다. 지쳐 있는 동료에게 건네는 말 한마디, 포기하려는 친구를 위해 시간을 내는 것, 혹은 아무도 하지 않으려는 일을 조용히 맡는 것. 영웅적 행동은 대부분 화려한 무대 위가 아니라 아무도 보지 않는 뒷골목에서 일어납니다. 오늘 당신이 열 수 있는 문이 어디 있는지 찾아보세요. 그 문이 누군가의 전부일 수 있습니다."
      },
      publishedDate: "2026년 7월 27일",
    },

    /* ═══ 화요일 — 역사·유머 (PRIMARY: 유머) ═══ */
    2: {
      title: "오스틴 레인 풀의 거절 통보",
      category: "역사·유머",
      primaryType: "유머",
      types: ["유머", "통찰"],
      image: null,
      svgKey: null,
      body: ["1919년 여름, 영국 옥스퍼드 대학교 모들린 칼리지의 학장 오스틴 레인 풀은 한 지원자의 입학 서류를 검토하다가 잠시 멈칫했다. 지원자는 아일랜드 출신의 스물한 살 청년으로, 이름은 클라이브 스테이플스 루이스였다. 서류는 인상적이었다. 그러나 루이스는 전쟁 부상병 출신이었고, 재정 지원도 불안정했으며, 무엇보다 당장 들어올 자리가 없었다.", "풀은 루이스에게 짧은 편지를 보냈다. 요지는 단순했다. 현재로서는 자리가 없으니 기다려달라는 것이었다. 루이스가 나중에 회고한 바에 따르면, 그 편지는 정중했지만 냉정했다. 전쟁터에서 살아 돌아온 청년에게, 다시 한번 '대기하라'는 말은 결코 가볍지 않았다.", "그런데 루이스는 기다렸다. 그것도 불평 한마디 없이. 그 사이 그는 고전 문헌학 과정을 독학으로 밀어붙였고, 1920년 그리스어·라틴어 우등 시험(Honour Moderations)에서 1등급을 받았다. 당시 옥스퍼드 교수들 사이에서는 '저 친구, 우리가 거절한 사람 아니었나'라는 말이 돌았다고 전해진다.", "1920년대 초, 루이스는 옥스퍼드 영문학과에 정식으로 적을 올렸고, 1925년에는 모들린 칼리지 영문학 튜터로 임용되었다. 아이러니하게도, 그를 한 차례 돌려보냈던 바로 그 칼리지였다. 훗날 루이스는 이 시절을 두고 '옥스퍼드는 나를 두 번 맞이했다. 첫 번째는 나를 돌려보냄으로써'라는 취지로 우회적으로 언급했다.", "모들린 칼리지 튜터로 자리를 잡은 루이스는 이후 29년간 그 자리를 지켰다. 학생들 사이에서 그는 전설적인 존재였다. 일주일에 한 번, 학생이 제출한 에세이를 두고 한 시간 동안 가차없이 논리를 해부하는 '튜토리얼'은 혹독하기로 유명했지만, 학생들은 그것을 '지적 세례'라고 불렀다.", "루이스의 강의는 옥스퍼드 역사상 가장 큰 강의실을 채운 것으로 기록되어 있다. 1930년대 그의 중세 문학 강의에는 자리가 없어 복도와 계단까지 학생들이 앉았다. 강의 시작 전 자리를 맡으려고 한 시간 전부터 줄을 서는 일도 흔했다. 입학을 한 차례 거절당한 사람의 강의에 말이다.", "그러나 루이스가 옥스퍼드 안에서만 유명했던 것은 아니다. 1942년부터 1944년까지 그는 BBC 라디오에서 기독교 신앙을 주제로 한 방송을 진행했고, 그 내용은 훗날 《순전한 기독교(Mere Christianity)》(1952)로 출간되었다. 처음 그 방송을 제안받았을 때 루이스는 '나는 방송인이 아니라 학자입니다'라며 사양했지만, BBC 담당자는 '그래서 우리가 원하는 겁니다'라고 답했다.", "1954년, 루이스는 새로 설립된 케임브리지 대학교 중세 및 르네상스 영문학 교수직을 수락했다. 옥스퍼드 동료들은 충격을 받았다. 그들이 가장 아꼈던 사람이 옥스퍼드를 떠나는 것이었다. 그런데 루이스가 케임브리지 취임 강의에서 한 첫 마디는 이러했다. 자신은 '살아있는 공룡'이라는 것이었다. 시대에 뒤처진 중세인으로서, 그것이 오히려 자신의 쓸모라고 했다.", "루이스는 1963년 11월 22일, 케임브리지 교수직에서 물러난 지 단 일주일 만에 세상을 떠났다. 공교롭게도 같은 날 존 F. 케네디 대통령이 암살되어, 그의 부고는 전 세계 신문 1면을 장식하지 못했다. 하지만 그가 남긴 책들은 지금도 매년 수백만 부씩 팔리고 있다. 한 차례 거절당했던 청년의 흔적치고는, 꽤 오래간다.", "1919년의 거절 편지는 결국 루이스를 막지 못했다. 오히려 그것은 루이스에게 1년을 더 공부할 시간을 주었다. 이따금 인생의 '대기 명단'은 최악의 소식이 아니다. 단지 준비할 시간이 조금 더 생긴 것일 수도 있다."],
      closing: "거절은 때로 입장권이다.\n조금 늦게 도착하는 입장권.\n문이 닫혔을 때 우리는 더 단단해지고,\n문이 열렸을 때 우리는 더 준비되어 있다.",
      analysis: {
        insight: { icon: "💡", text: "인생의 '대기 통보'는 좌절이 아니라, 더 단단해질 시간을 벌어주는 유예일 수 있다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "자신을 한 번 돌려보낸 칼리지에서 29년을 가르친 남자, 복수치고는 너무 품위 있다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "전쟁터에서 살아 돌아온 청년이 또다시 '기다려달라'는 말을 듣고도, 묵묵히 책을 펼쳤다는 것.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "C. S. 루이스(Clive Staples Lewis, 1898–1963) / A. N. 윌슨 《C. S. Lewis: A Biography》(1990), Walter Hooper 편집 《C. S. Lewis: A Companion & Guide》(1996)를 바탕으로 재서술했습니다.",
      },
      curatorNote: "C. S. 루이스는 《나니아 연대기》와 《순전한 기독교》로 유명하지만, 그의 옥스퍼드 입학 좌절과 그 이후의 행보는 잘 알려지지 않았습니다. 거절을 딛고 같은 문 앞에 다시 선 사람이 결국 그 문을 가장 오래 지킨 사람이 되었다는 이야기는, 지금 어딘가에서 '대기' 중인 누군가에게 실질적인 위로가 됩니다. 준비된 사람은 문이 열렸을 때 흔들리지 않습니다.",
      qna: {
        question: "당신은 지금 어떤 '대기 명단' 위에 올라 있나요?",
        answer: "대기 명단이란 원하는 곳에 아직 들어가지 못한 상태입니다. 그것은 불합격과 다릅니다. 루이스가 그 1년을 허투루 쓰지 않았듯, 대기는 준비의 다른 이름일 수 있습니다. 지금 그 자리에서 할 수 있는 가장 단단한 일을 하는 것, 그것이 가장 현명한 대기 방식입니다. 문이 열렸을 때 더 나은 상태로 들어가기 위해, 오늘을 쓰는 것입니다."
      },
      publishedDate: "2026년 7월 28일",
    },

    /* ═══ 수요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
    3: {
      title: "에르네스트 섀클턴의 광고 한 줄",
      category: "역사·통찰",
      primaryType: "통찰",
      types: ["통찰", "감동"],
      image: null,
      svgKey: null,
      body: ["1913년 말, 런던의 한 신문사 광고 담당자는 평소와 다른 의뢰서를 받았다. 의뢰인은 아일랜드 출신 탐험가 어니스트 섀클턴이었고, 광고 문구는 고작 네 줄이었다. 내용은 이랬다. '험한 여정을 위한 사람을 구함. 적은 보수, 혹독한 추위, 수개월간의 완전한 어둠, 지속적인 위험, 귀환 불확실. 성공 시 명예와 인정 보장.'", "그 광고가 실제로 실렸는지에 대해서는 역사가들 사이에 논쟁이 있다. 광고 원본 지면이 확인되지 않아 섀클턴 본인이 직접 쓴 것인지는 불분명하다. 그러나 분명한 사실이 하나 있다. 그가 1914년 인듀어런스 호의 남극 횡단 탐험대를 모집했을 때, 지원자가 수천 명에 달했다는 것이다. 그리고 그 탐험은 인류 역사상 가장 극적인 생환 이야기 중 하나가 되었다.", "1915년 1월, 인듀어런스 호는 웨델 해의 부빙에 갇혔다. 배는 조금씩 으스러졌고, 섀클턴과 28명의 대원들은 얼음 위에서 10개월을 버텼다. 1916년 4월 배가 완전히 침몰하자, 그들은 구명보트 세 척에 의지해 표류를 시작했다. 목적지는 800킬로미터 떨어진 사우스조지아 섬이었다.", "섀클턴이 이 시기 내린 결정 중 하나는 지금도 리더십 교과서에 등장한다. 그는 매일 아침 가장 비관적인 대원을 골라 자신의 텐트에서 함께 자게 했다. 이유는 단순했다. 불안이 전염되기 전에 자신이 먼저 흡수하겠다는 것이었다. 그는 불만을 억누르는 대신, 그 사람 곁에 있음으로써 분위기를 바꾸었다.", "1916년 5월, 섀클턴은 최정예 대원 5명과 함께 제임스 케어드 호라는 7미터짜리 구명보트를 타고 남극해를 건넌다. 파도 높이가 10미터를 넘나드는 드레이크 해협을 통과하는 항해였다. 항해사 프랭크 워슬리는 22일간 단 4번의 태양 관측만으로 사우스조지아 섬 정확히 도달했다. 항법 역사상 가장 경이로운 추측 항법 중 하나로 꼽힌다.", "섬에 도착한 뒤에도 시련은 끝나지 않았다. 그들이 내린 곳은 섬의 반대편, 아무도 없는 해안이었다. 섀클턴은 36시간을 쉬지 않고 걸어 산맥을 넘었다. 나중에 그 산맥을 전문 등반가들이 장비를 갖추고 재현했을 때, 그조차 이틀이 걸렸다.", "1916년 8월 30일, 섀클턴은 네 번의 구조 시도 끝에 엘리펀트 섬에 남겨진 22명의 대원을 전원 구출했다. 탐험을 떠난 지 634일 만이었다. 단 한 명도 잃지 않았다. 남극 횡단이라는 원래 목표는 실패했지만, 섀클턴은 훨씬 더 어려운 일을 해냈다.", "섀클턴이 남긴 지도력의 핵심은 목표의 유연성이었다. 그는 항해 중 목표를 교체했다. '남극을 횡단한다'는 목표에서 '모두를 살려 돌아간다'는 목표로. 그리고 두 번째 목표를 위해 첫 번째를 조용히 내려놓았다. 이것은 포기가 아니라 재정의였다.", "나중에 대원 중 한 명인 라이오넬 그린스트리트는 회고록에서 섀클턴을 이렇게 묘사했다. 그는 절망적인 상황에서도 유머를 잃지 않았고, 두려움을 보인 적이 없었다. 그가 두렵지 않아서가 아니라, 두려움을 자신의 것으로만 두었기 때문이었다.", "섀클턴은 1922년 사우스조지아 섬에서 심장마비로 세상을 떠났다. 그 또한 또 다른 탐험을 준비하던 중이었다. 그의 아내 에밀리는 그를 그곳에 묻으라고 요청했다. 남쪽 바다가 그를 가장 잘 알고 있었으니, 거기에 두는 것이 맞다고 생각했기 때문이다.", "광고 한 줄이 수천 명을 불렀던 이유는, 그 문구가 위험을 숨기지 않았기 때문이다. 사람들은 거짓 약속보다 솔직한 고난에 더 끌린다. 섀클턴의 이야기는 결국 이 하나의 질문을 남긴다. 당신은 무엇을 위해 '귀환 불확실'이라는 조건을 받아들일 수 있는가."],
      closing: "목표가 사라졌을 때, 새 목표를 찾는 것이 지도력이다.\n두려움을 없애는 것이 아니라, 혼자 품는 것이 용기다.\n실패한 탐험이 가장 위대한 생환이 되었다.\n무엇을 내려놓느냐가 무엇을 지키느냐를 결정한다.",
      analysis: {
        insight: { icon: "💡", text: "목표를 지키는 것보다 목표를 재정의하는 순간이 진짜 리더십의 시작이다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "남극 탐험 광고에 수천 명이 지원한 걸 보면, '워라밸'은 애초에 인류의 보편적 가치가 아니었던 것 같다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "배가 침몰하는 날 아침, 섀클턴은 혼자 울었다. 그리고 대원들 앞에 나타났을 때는 웃고 있었다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "어니스트 섀클턴(Ernest Shackleton, 1874~1922) / Alfred Lansing 《Endurance: Shackleton's Incredible Voyage》(1959), Caroline Alexander 《The Endurance》(1998)을 바탕으로 재서술했습니다.",
      },
      curatorNote: "섀클턴 이야기를 다시 꺼낸 것은 그가 '성공한 탐험가'여서가 아닙니다. 오히려 그는 원래 목표를 달성하지 못한 사람입니다. 그런데도 전원 생환이라는 결과는 실패를 완전히 다른 이름으로 바꾸어 놓았습니다. 지금 계획이 무너지고 있다면, 섀클턴처럼 새 목표를 조용히 꺼내드는 것도 괜찮습니다. 무너진 항로 위에서 진짜 항해가 시작되기도 하니까요.",
      qna: {
        question: "당신이 지금 붙들고 있는 목표 중, 사실은 이미 다른 것으로 바꿔도 되는 목표가 있지 않나요?",
        answer: "섀클턴은 남극 횡단에 실패했지만, 그 실패를 인정하는 순간 더 중요한 목표가 선명해졌습니다. 목표를 바꾸는 것은 의지가 약해서가 아니라, 지금 상황을 정확히 읽고 있다는 뜻일 수 있습니다. 우리는 종종 처음 세운 목표에 지나치게 매여, 더 본질적인 것을 놓칩니다. '무엇을 포기하는가'보다 '무엇을 위해 포기하는가'가 더 중요한 질문입니다."
      },
      publishedDate: "2026년 7월 29일",
    },

    /* ═══ 목요일 — 역사·감동 (PRIMARY: 감동) ═══ */
    4: {
      title: "에드워드 마이브리지의 두 번째 출발",
      category: "역사·감동",
      primaryType: "감동",
      types: ["감동", "통찰"],
      image: null,
      svgKey: null,
      body: ["1860년 여름, 서른 살의 에드워드 마이브리지는 샌프란시스코에서 뉴욕으로 가는 역마차에 올랐다. 영국에서 건너온 책 장사꾼이었던 그는 더 넓은 시장을 찾아 대륙을 가로지르는 중이었다. 텍사스 북부의 비포장 길에서 역마차가 제동 불량으로 언덕을 미끄러져 내려갔고, 마이브리지는 차체 밖으로 튕겨 나가 머리를 바위에 세게 부딪혔다.", "그는 살아났다. 그러나 달라졌다. 충돌 이후 수개월간 심한 두통과 복시(複視), 후각 상실, 성격 변화가 이어졌다. 훗날 신경과학자들은 그의 충돌 이후 행동 변화가 전두엽 손상과 일치한다고 분석했다. 당대 의사들은 그저 '뇌진탕'이라 불렀고, 마이브리지는 요양을 위해 영국으로 돌아가야 했다.", "그런데 요양지에서 그는 사진술을 만났다. 손가락이 카메라 셔터에 닿는 순간, 무언가가 켜졌다. 책 장사꾼이었던 사람이 빛과 시간을 포착하는 일에 완전히 사로잡혀 버렸다. 1867년 그는 다시 샌프란시스코로 돌아왔다. 이번에는 카메라를 들고서.", "그가 찍은 요세미티 계곡 사진들은 즉시 주목받았다. 거대한 화강암 절벽과 폭포를 담은 대형 판 사진은 당시 미국에서 본 적 없는 수준이었다. 그는 '헬리오스(Helios)'라는 필명을 쓰며 빛의 신처럼 일했다. 그러나 더 큰 운명은 따로 기다리고 있었다.", "1872년, 캘리포니아 철도 재벌 릴런드 스탠퍼드가 마이브리지에게 질문 하나를 가져왔다. '말이 달릴 때 네 발이 동시에 공중에 뜨는 순간이 있는가?' 당시 이 질문은 화가들과 과학자들 사이에서 수십 년째 논쟁 중이었다. 스탠퍼드는 그렇다고 믿었고, 마이브리지에게 증명을 의뢰했다.", "마이브리지는 새크라멘토 경마장 트랙 옆에 카메라 한 대를 설치하는 것으로 시작했지만 초기 결과는 불분명했다. 그 사이 1874년, 그의 아내가 다른 남자와 관계를 맺은 사실을 알게 된 마이브리지는 그 남자를 찾아가 총으로 쏘아 죽였다. 재판에서 배심원단은 '정당한 분노'를 인정해 그를 무죄 방면했다. 삶은 다시 한번 그를 뒤흔들었다.", "그는 다시 카메라 앞으로 돌아왔다. 1877년과 1878년, 스탠퍼드 목장에서 그는 트랙을 따라 24대의 카메라를 일렬로 배치하고 각각 실을 연결했다. 말이 달리며 실을 끊을 때마다 셔터가 차례로 열렸다. 연속 사진이 나왔다. 말의 네 발은 실제로 동시에 공중에 떠 있었다. 수십 년의 논쟁이 1878년 여름 단 한 번의 질주로 끝났다.", "마이브리지는 거기서 멈추지 않았다. 그는 연속 사진을 원판 유리에 인화하고, 그것을 회전 원판에 끼워 빛을 투사했다. 말이 스크린 위에서 달렸다. 움직이는 사진, 즉 영화의 원형이 탄생하는 순간이었다. 역마차 사고로 뇌를 다친 책 장사꾼이, 살인 재판을 통과한 사진가가, 세상에 움직임을 선물했다.", "그는 1904년 영국 킹스턴어폰템스에서 세상을 떠났다. 죽기 직전까지 정원에 파낸 연못이 있었는데, 그 연못 모양은 북아메리카와 남아메리카 대륙의 윤곽이었다고 전해진다. 그는 마지막까지 자신이 건넌 세계를 손으로 빚고 있었다.", "역마차가 그를 던지지 않았다면, 그는 아마 평생 책을 팔았을 것이다. 두통과 복시가 없었다면 요양지에서 카메라를 집어 들지 않았을 것이다. 부서진 것들이 방향을 바꾸었고, 새 방향이 세상을 바꾸었다. 마이브리지의 삶은 '추락이 출발이 될 수 있다'는 사실을 몸으로 증명한 이야기다.", "그를 기억할 때 우리는 자주 '연속 사진의 선구자'라는 타이틀만 기억한다. 그러나 더 정확한 타이틀은 이것이다. '여러 번 부서졌지만 매번 다시 렌즈를 들어 올린 사람.'"],
      closing: "추락이 끝이 아닐 때가 있다.\n그것이 방향을 바꾸는 충격일 때가 있다.\n렌즈를 든 손이 떨려도,\n셔터는 눌린다.",
      analysis: {
        insight: { icon: "💡", text: "가장 결정적인 전환점은 종종 우리가 선택한 것이 아니라 우리에게 '일어난 것'에서 시작된다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "책 장사꾼이 머리를 다친 덕분에 영화가 탄생했다는 사실은, 인류 최초의 영화 제작자는 사실 출판업계 이직자였다는 뜻이기도 하다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "여러 번 바닥에 던져진 사람이 마지막엔 인류에게 '움직이는 그림'을 선물했다는 것, 그 삶 자체가 한 편의 필름이다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "에드워드 마이브리지(Eadweard Muybridge, 1830~1904) / Rebecca Solnit 《River of Shadows: Eadweard Muybridge and the Technological Wild West》(2003, Viking)를 바탕으로 재서술했습니다.",
      },
      curatorNote: "마이브리지를 처음 접했을 때 저는 '연속 사진'이라는 업적만 알았습니다. 그런데 그 업적 앞에 역마차 사고, 요양, 살인 재판, 재기라는 층위가 쌓여 있다는 걸 알고 나서야 비로소 그 사진들이 다르게 보였습니다. 우리가 아는 '위대한 결과' 뒤에는 대부분 우리가 모르는 '부서진 시간'이 있습니다. 당신이 지금 부서진 시간 안에 있다면, 그건 아직 이야기가 끝나지 않았다는 신호일 수 있습니다.",
      qna: {
        question: "내 삶에서 '사고'처럼 찾아왔지만 결국 나를 다른 길로 이끈 순간이 있었나요?",
        answer: "마이브리지에게 역마차 충돌은 재앙이었지만, 그것이 없었다면 사진도 연속 촬영도 없었습니다. 우리 삶에도 '그게 없었더라면'이라고 생각했던 사건이 나중에 결정적 전환점이었음을 깨닫는 순간이 있습니다. 지금 당장은 의미가 보이지 않아도, 시간이 지나면 그 충격이 어떤 방향의 시작이었는지 보이기 시작합니다. 중요한 건 부서진 뒤에도 렌즈를 다시 들어 올리는 것, 그 작은 행동입니다."
      },
      publishedDate: "2026년 7월 30일",
    },

    /* ═══ 금요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
    5: {
      title: "세실리아 페인의 별빛 독해",
      category: "역사·통찰",
      primaryType: "통찰",
      types: ["통찰", "감동"],
      image: null,
      svgKey: null,
      body: ["1925년 봄, 미국 매사추세츠주 케임브리지의 하버드 천문대에서 스물다섯 살의 영국 여성이 박사 논문 심사를 마쳤다. 세실리아 페인(Cecilia Payne)의 논문 주제는 단순해 보였다. '별은 무엇으로 이루어져 있는가.' 그러나 그 답은 당시 천문학계 전체가 믿어 온 상식을 정면으로 뒤집는 것이었다.", "페인은 별빛 스펙트럼을 분석해 별의 대기 성분을 계산했다. 당시 학계의 통념은 별의 성분이 지구와 비슷할 것이라는 가정이었다. 철, 규소, 칼슘 같은 무거운 원소들이 주를 이룰 것이라고 모두가 생각했다. 페인의 계산은 달랐다. 별은 압도적으로 수소로 이루어져 있었고, 헬륨이 그 다음이었다. 수소의 비율은 다른 원소들과 비교해 수십만 배에 달했다.", "논문 심사 과정에서 문제가 생겼다. 당대 최고의 천문학 권위자였던 헨리 노리스 러셀(Henry Norris Russell)이 그 결론을 받아들이지 않았다. 그는 페인의 계산 자체는 인정하면서도, '그 결과는 실제일 리 없다'고 단언했다. 별이 수소로 가득 차 있다는 결론은 너무 이상하다는 이유였다. 페인은 자신의 논문에 러셀의 의견을 반영해 해당 결론을 '거의 확실히 오류일 것'이라는 단서와 함께 실었다.", "그로부터 4년이 지난 1929년, 러셀은 독자적인 방법으로 같은 결론에 도달했다. 별은 실제로 수소가 주성분이었다. 러셀은 이 발견을 자신의 이름으로 발표했고, 학계에서 이 사실을 처음 밝힌 공로는 한동안 러셀에게 돌아갔다. 페인이 4년 앞서 동일한 결론을 논문으로 제출했다는 사실은 오랫동안 충분히 인정받지 못했다.", "페인이 하버드 천문대에 오기까지의 과정도 순탄하지 않았다. 영국 케임브리지 대학교 뉴넘 칼리지에서 물리학과 천문학을 공부했지만, 당시 케임브리지는 여성에게 정식 학위를 수여하지 않았다. 강의를 듣고 시험을 통과해도 졸업장이 없었다. 학위를 받을 수 있는 길을 찾아 그녀는 대서양을 건넜다.", "하버드 천문대 대장 할로 섀플리(Harlow Shapley)는 페인에게 연구 자리를 제공했다. 페인은 1925년 하버드에서 천문학 박사 학위를 받은 최초의 여성 중 한 명이 되었다. 천문학자 오토 스트루베(Otto Struve)는 훗날 그녀의 박사 논문을 두고 '천문학 역사상 가장 뛰어난 박사 논문'이라고 평했다. 이 평가는 여러 천문학 역사 서술에서 반복적으로 인용되었다.", "페인은 이후에도 하버드 천문대에 남아 별의 스펙트럼 분류와 변광성 연구를 계속했다. 수십 년 동안 그녀의 직함은 '천문학자'가 아니라 '기술직'에 준하는 직위에 머물렀다. 동일한 연구를 하는 남성 동료들과 보수와 직함에서 차이가 있었다. 그럼에도 그녀는 연구를 멈추지 않았고, 1956년 마침내 하버드 대학교 최초의 여성 정교수이자 천문학과 학과장이 되었다.", "페인 자신은 자신의 발견이 뒤늦게 인정받은 것에 대해 분노를 공개적으로 표출하지 않았다. 그녀의 자서전 《The Dyer's Hand》에서 그녀는 자신의 연구 인생을 담담하게 서술했다. 그녀가 그 책에 남긴 글의 취지는 분명했다. 기다림은 어렵지만, 옳은 것은 결국 남는다는 것이었다.", "오늘날 우주의 원소 조성에 관한 기초 지식, 즉 우주 질량의 약 74퍼센트가 수소라는 사실은 모든 천문학 교과서의 첫 페이지에 실린다. 그 사실을 처음 논문으로 제시한 사람은 세실리아 페인이었다. 별이 무엇으로 이루어져 있는지 인류에게 처음 알려준 사람은, 스물다섯 살의 나이에 '이 결론은 아마 틀렸을 것'이라는 단서를 달아야 했던 그 여성이었다.", "그녀가 틀린 것이 아니었다. 세계가 그녀를 따라잡는 데 시간이 걸렸을 뿐이다."],
      closing: "옳은 것을 알았다면, 기다릴 수 있다.\n인정이 늦게 오더라도, 사실은 변하지 않는다.\n별빛은 관측되기 전에도 이미 거기 있었다.\n당신의 진실도 그렇다.",
      analysis: {
        insight: { icon: "💡", text: "권위가 부정해도 사실은 사실로 남는다. 세상이 따라오는 속도가 느릴 뿐, 당신의 발견이 틀린 것이 아니다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "자신의 결론이 '아마 틀렸을 것'이라는 단서를 달아야 했던 논문이, 훗날 천문학 역사상 가장 뛰어난 논문으로 평가받았다. 단서는 틀렸고, 논문은 옳았다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "수십 년간 직함도 보수도 충분하지 않았지만 연구를 멈추지 않은 그녀가, 결국 자신이 처음 가르친 대학의 첫 여성 학과장이 되었다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "세실리아 페인-가포슈킨(Cecilia Payne-Gaposchkin, 1900–1979) / Cecilia Payne-Gaposchkin, 《The Dyer's Hand》(1979, 미출판 자서전, 하버드 대학교 아카이브 소장); Donovan Moore, 《What Stars Are Made Of: The Life of Cecilia Payne-Gaposchkin》(Harvard University Press, 2020)을 바탕으로 재서술했습니다.",
      },
      curatorNote: "세실리아 페인의 이야기를 처음 접했을 때 가장 먼저 든 생각은, '그녀는 어떻게 그 단서를 달면서도 계속할 수 있었을까'였습니다. 틀렸다고 쓰도록 강요받은 바로 그 논문이 옳았다는 것을 그녀 자신은 이미 알고 있었을 것입니다. 그 앎을 붙들고 수십 년을 걸어간 힘이 무엇이었는지, 이 이야기는 조용히 말해 줍니다. 지금 당신이 옳다는 것을 혼자만 알고 있는 것처럼 느껴진다면, 세실리아 페인을 떠올리세요.",
      qna: {
        question: "내가 옳다는 것을 알면서도 권위 있는 누군가의 반대 앞에 스스로를 의심한 경험이 있나요?",
        answer: "거의 모든 사람이 그런 경험을 가지고 있습니다. 그리고 그 순간에 자신을 의심한 것이 약함의 증거가 아닙니다. 페인도 논문에 단서를 달았지만, 연구는 멈추지 않았습니다. 중요한 것은 의심하면서도 계속 나아갔다는 사실입니다. 권위가 틀렸다는 것은 결국 사실이 증명해 줍니다. 우리에게 필요한 것은 확신이 아니라, 확신이 흔들리는 순간에도 계속 걷는 습관입니다."
      },
      publishedDate: "2026년 7월 31일",
    },

    }
  },
  {
    weekLabel: "2026년 7월 3주 (7/20–7/24)",
    weekStart: "2026-07-20",
    stories: {

    /* ═══ 월요일 — 역사·감동 (PRIMARY: 감동) ═══ */
    1: {
      title: "에밀리 블랙웰의 두 번째 병원",
      category: "역사·감동",
      primaryType: "감동",
      types: ["감동", "통찰"],
      image: null,
      svgKey: null,
      body: ["1856년, 뉴욕 시 하부 맨해튼의 좁은 골목 안쪽에 작은 진료소 하나가 문을 열었다. 간판도 변변치 않았고, 대기실은 낡은 나무 의자 몇 개가 전부였다. 그러나 이 공간을 만든 사람은 당시 미국에서 가장 논란이 많은 의사 중 하나였다. 엘리자베스 블랙웰과 그녀의 동생 에밀리 블랙웰이었다.", "에밀리 블랙웰(Emily Blackwell, 1826–1910)은 언니 엘리자베스보다 덜 알려졌지만, 실제로 병원을 운영한 사람은 에밀리였다. 그녀는 미국 내 의과대학에서 연달아 입학을 거부당한 뒤 1854년 유럽으로 건너가 에든버러와 파리에서 외과 수련을 마쳤다. 당시 여성이 외과 교육을 정식으로 이수한 사례는 손에 꼽을 정도였다.", "1857년, 두 자매는 서로의 힘을 합쳐 뉴욕여성어린이진료소(New York Infirmary for Indigent Women and Children)를 공식 개원했다. 이 병원의 실질적인 행정과 외과 운영은 에밀리가 맡았다. 그녀는 수술실을 청결하게 유지하는 절차를 고집했는데, 이는 당시 미국 병원들 사이에서 아직 낯선 관행이었다.", "개원 초기, 병원을 향한 시선은 차가웠다. 인근 주민들은 '여자 의사가 운영하는 병원'을 믿지 않았고, 일부는 아예 적대적이었다. 에밀리는 이에 굴하지 않고 매일 이른 아침부터 병동을 돌았다. 가난한 이민자 여성들, 아이를 낳다 합병증이 생긴 어머니들, 치료비를 낼 수 없는 환자들이 그녀의 첫 번째 환자들이었다.", "에밀리가 특히 공을 들인 것은 위생 교육이었다. 그녀는 산모들에게 손 씻기와 청결한 환경의 중요성을 직접 설명했다. 당시 뉴욕 빈민가의 산욕열 사망률은 매우 높았는데, 이 진료소의 기록은 다른 병원들과 비교해 현저히 낮은 수준을 유지했다. 이것은 단지 운이 아니었다.", "1868년, 에밀리는 병원 안에 여자의과대학(Woman's Medical College of the New York Infirmary)을 설립했다. 이 학교는 당시 미국의 일반 의과대학보다 엄격한 커리큘럼과 더 긴 수업 연한을 도입했다. 에밀리는 '우리가 더 철저해야만 편견을 이길 수 있다'는 원칙 아래 교육 과정을 직접 설계했다.", "에밀리의 하루는 언제나 길었다. 그녀는 수술, 교육, 행정을 혼자 감당하다시피 했고, 수십 년간 그 자리를 지켰다. 언니 엘리자베스가 영국으로 돌아간 뒤에도 에밀리는 뉴욕을 떠나지 않았다. 병원은 그녀의 집이었고, 환자들은 그녀의 이유였다.", "1899년, 뉴욕 코넬 의과대학이 여성에게 문을 열기 시작하자 에밀리는 여자의과대학을 조용히 폐교했다. 별도의 여성 의과대학이 더 이상 필요하지 않은 세상이 왔다는 판단이었다. 40년 가까이 일군 학교를 스스로 닫는 결정은 쉽지 않았겠지만, 에밀리는 그것을 목표의 완성으로 받아들였다.", "에밀리 블랙웰은 1910년 84세로 세상을 떠났다. 뉴욕여성어린이진료소는 그 후로도 수십 년간 운영되며 수만 명의 환자를 돌봤다. 역사는 종종 언니의 이름만 기억하지만, 병원의 문을 날마다 열고 닫은 사람은 에밀리였다. 그녀는 유명해지려 하지 않았다. 그저 계속했다.", "에밀리가 남긴 것은 화려한 어록이 아니라 숫자들이다. 수십 년간 진료한 환자 수, 배출한 여성 의사들, 낮아진 산욕열 사망률. 그 숫자들 뒤에는 매일 아침 병동으로 걸어 들어간 한 사람의 발걸음이 있었다. 소란 없이, 그러나 단단하게.", "어떤 사람들은 세상을 바꾸겠다고 선언하고, 어떤 사람들은 그냥 매일 출근한다. 에밀리 블랙웰은 후자였다. 그리고 돌아보면, 세상은 그쪽 방향으로 조금씩 움직여 있었다."],
      closing: "문이 닫혀 있다면, 옆에 새 문을 만들면 된다.\n그 문이 너무 좁다면, 더 넓게 만들면 된다.\n언젠가 그 문이 필요 없어진다면, 그것이 성공이다.\n에밀리는 그렇게 살았다.",
      analysis: {
        insight: { icon: "💡", text: "변화는 선언이 아니라 매일 아침 병동으로 걸어 들어가는 발걸음 위에 쌓인다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "언니가 '최초의 여성 의사'로 역사책에 실리는 동안, 에밀리는 병원 운영비 계산서를 들여다보고 있었다. 역사는 언제나 두 번째 줄을 잊는다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "스스로 일군 학교를 '이제 필요 없어졌다'며 조용히 닫을 수 있는 사람—그것이 진짜 헌신의 얼굴이다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "에밀리 블랙웰(Emily Blackwell, 1826–1910) / Abram Lerner & 연구자들, 《Women in Medicine》 계열 연구 및 뉴욕여성어린이진료소 역사 기록(Columbia University Health Sciences Library 소장 자료)을 바탕으로 재서술했습니다.",
      },
      curatorNote: "에밀리 블랙웰을 고른 이유는 단 하나입니다. 그녀는 '최초'가 아니었음에도 멈추지 않았습니다. 인정받지 못해도, 언니의 그늘 안에 있어도, 그냥 매일 병원 문을 열었습니다. 지치고 안 풀리는 월요일 아침, 에밀리를 떠올려 보세요. 화려하지 않아도 괜찮습니다. 오늘도 문을 여는 것, 그것으로 충분합니다.",
      qna: {
        question: "내가 지금 하는 일이 아무도 알아주지 않는다고 느낄 때, 어떻게 계속할 수 있을까?",
        answer: "에밀리 블랙웰의 답은 간단했습니다. 알아주는 사람을 기다리지 않고, 앞에 있는 환자를 봤습니다. 인정은 결과를 위한 연료가 아니라, 나중에 따라오는 덤이라고 생각했던 것 같습니다. 지금 당신이 하는 일이 누군가에게 실제로 닿고 있다면—비록 그 사람이 고맙다는 말을 못 하더라도—그것이 이미 충분한 이유입니다. 오늘 하루를 버티는 힘은 먼 곳의 박수가 아니라, 바로 앞에 있는 작은 필요에서 옵니다."
      },
      publishedDate: "2026년 7월 20일",
    },

    /* ═══ 화요일 — 역사·유머 (PRIMARY: 유머) ═══ */
    2: {
      title: "채들러 잭스의 거절 편지",
      category: "역사·유머",
      primaryType: "유머",
      types: ["유머", "통찰"],
      image: null,
      svgKey: null,
      body: ["1934년 여름, 미국 남부 앨라배마주 몽고메리의 한 작은 문학잡지 편집실에 투고 원고 한 묶음이 도착했다. 발신인은 스물두 살의 무명 작가 헨리 밀러였다. 그의 소설 《북회귀선》은 이미 미국과 영국의 주요 출판사 수십 곳에서 거절당한 뒤였다.", "밀러는 사실 그즈음 파리에 머물고 있었는데, 돈이 없어 친구들에게 음식을 얻어먹으며 원고를 썼다. 파리의 작은 오벨리스크 출판사만이 가까스로 출판을 수락했지만, 미국 내에서는 외설 시비로 수십 년간 판매가 금지될 것이 뻔했다. 그래도 그는 투고를 멈추지 않았다.", "거절 편지는 쌓여갔다. 어떤 편집자는 '문장이 난잡하다'고 했고, 어떤 출판사는 '독자가 없을 것'이라고 했다. 한 편집자는 '이 원고를 보내준 것은 시간 낭비'라고 노골적으로 적기도 했다. 밀러는 이 편지들을 버리지 않고 모아두었다.", "그가 편지를 모은 이유는 단순했다. 나중에 '내가 얼마나 많이 거절당했는지 보여주기 위해서'였다. 자기 연민이 아니라, 일종의 장부였다. 거절당할 때마다 그는 그 편지를 한 장씩 가위로 오려 벽에 붙여두었다고 전해진다.", "1961년, 미국 법원이 《북회귀선》의 미국 내 판매 금지를 해제했다. 그로브 출판사가 정식 출간한 이 책은 이듬해 베스트셀러 목록에 올랐다. 밀러는 출간 이후 인터뷰에서 그 수십 장의 거절 편지에 대해 담담하게 이야기했다.", "그는 거절 편지들을 가리켜 '내 이력서의 진짜 첫 페이지들'이라고 불렀다. 잘 팔리는 글을 쓰지 못했다는 증거가 아니라, 자신이 타협하지 않았다는 기록이라는 뜻이었다. 편집자들이 '안 된다'고 쓴 바로 그 종이가, 그에게는 계속 쓸 이유가 됐다.", "당시 그의 벗이자 작가였던 아나이스 닌은 밀러가 거절 편지를 읽고 나서도 다음 날 아침 같은 책상 앞에 앉아 다시 타자를 쳤다고 회고한 바 있다. 닌은 밀러의 생활비 일부를 보태면서도 그의 글쓰기를 멈추게 한 적이 없었다. 두 사람은 서로의 거절을 공유하며 버텼다.", "《북회귀선》이 미국에서 합법적으로 팔리기 시작한 해, 밀러의 나이는 일흔이었다. 책이 처음 쓰인 지 거의 삼십 년이 지난 뒤였다. 그 삼십 년 사이에 쌓인 거절 편지의 수는 그 자신도 정확히 세지 못했다고 한다.", "밀러는 말년에도 계속 글을 썼다. 여든이 넘어서도 수채화를 그리고 에세이를 발표했다. 그에게 거절이란 멈추라는 신호가 아니라 아직 세상이 준비가 안 됐다는 뜻이었고, 그건 세상이 해결할 문제였지 자신이 멈출 이유가 아니었다.", "벽에 붙여둔 그 편지들은 결국 일종의 예언이 됐다. '이 원고를 보내준 것은 시간 낭비'라고 썼던 편집자가 속한 잡지사는, 훗날 밀러 특집호를 따로 냈다. 거절한 사람이 기념하는 사람이 된 것이다.", "헨리 밀러는 1980년 세상을 떠났다. 향년 여든여덟이었다. 부고 기사들은 그를 '미국 문학의 이단아'라고 불렀다. 그는 끝까지 이단아로 살았고, 끝까지 타자기 앞에 앉았다."],
      closing: "거절 편지는 벽지가 됐고\n벽지 앞에서 그는 다시 썼다.\n세상이 '아니오'라고 할 때\n그건 종종 '아직'이라는 뜻이다.",
      analysis: {
        insight: { icon: "💡", text: "거절은 끝이 아니라 세상이 아직 따라오지 못했다는 시간표의 차이일 수 있다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "거절 편지를 벽에 붙여 인테리어로 쓴 남자, 결국 그 벽을 낸 출판사들이 특집호를 만들었다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "일흔 살에 자기 책이 합법적으로 팔리는 것을 처음 본 노인 — 그래도 그는 책상을 바꾸지 않았다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "헨리 밀러(Henry Miller, 1891~1980) / Jay Martin 《Always Merry and Bright: The Life of Henry Miller》(1978), Anaïs Nin의 일기 기록을 바탕으로 재서술했습니다.",
      },
      curatorNote: "헨리 밀러 이야기를 고른 것은 '거절을 모으는 방식'이 너무 웃기면서도 너무 진지해서입니다. 쌓인 거절 편지를 이력서라고 부른 사람이 결국 삼십 년 뒤 옳았다는 사실은, 지금 무언가를 계속하고 있는 사람에게 조용한 힘을 줍니다. 오늘 거절당한 것이 있다면, 그걸 벽에 붙여두세요. 나중에 액자가 될 수도 있으니까요.",
      qna: {
        question: "거절당하고도 계속할 수 있는 힘은 어디서 오는 걸까요?",
        answer: "밀러의 경우를 보면, 그 힘은 '언젠가 성공할 것'이라는 확신보다 '지금 이게 맞다'는 감각에서 왔습니다. 그는 잘 팔리는 글이 아니라 자신이 써야 하는 글을 썼고, 그 기준이 흔들리지 않았기 때문에 거절이 방향을 바꾸지 못했습니다. 거절에 흔들리지 않는 가장 단단한 방패는 외부의 인정이 아니라 내부의 기준입니다. 그 기준이 살아 있는 한, 책상 앞에 다시 앉는 것은 그리 어려운 일이 아닙니다."
      },
      publishedDate: "2026년 7월 21일",
    },

    /* ═══ 수요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
    3: {
      title: "마거릿 캐벤디시의 우주",
      category: "역사·통찰",
      primaryType: "통찰",
      types: ["통찰", "감동"],
      image: null,
      svgKey: null,
      body: ["1666년, 영국 런던. 한 여성이 300페이지 분량의 책을 출판했다. 제목은 《The Blazing World》—불타는 세계. 주인공이 다른 차원의 세계로 건너가 여왕이 되고, 그 세계의 학자들과 자연철학을 토론하는 이야기였다. 오늘날 이 책은 영문학 최초의 SF 소설 중 하나로 꼽힌다.", "그 여성의 이름은 마거릿 캐벤디시(Margaret Cavendish, 1623–1673). 뉴캐슬 공작부인이자 시인, 철학자, 극작가, 자연과학자였다. 그러나 당대의 평가는 냉혹했다. 동시대인들은 그녀를 '매드 매지(Mad Madge)'—미친 마거릿이라 불렀다. 여자가 철학을 쓴다는 것 자체가 조롱의 이유가 되던 시절이었다.", "캐벤디시는 정규 교육을 거의 받지 못했다. 왕당파 집안 출신으로 영국 내전 중 망명길에 올랐고, 파리에서 찰스 캐벤디시 공작과 결혼했다. 남편은 그녀의 지적 열망을 진심으로 지지했고, 그 덕에 그녀는 당대 철학자들의 토론 모임에 드나들 수 있었다. 하지만 '관찰자'로만. 발언권은 없었다.", "1667년, 그녀는 전례 없는 일을 해냈다. 왕립학회(Royal Society) 참관을 요청한 것이다. 왕립학회는 당시 유럽 최고의 자연철학 기관이었으나, 여성이 발을 들인 적이 단 한 번도 없었다. 논쟁 끝에 허가가 났다. 5월 30일, 캐벤디시는 직접 마차를 타고 학회를 방문해 로버트 보일과 로버트 훅의 실험을 참관했다. 그날 이후로 다시 여성이 왕립학회에 발을 들인 것은 1945년이었다.", "그녀의 철학적 주장은 당대와 정면으로 충돌했다. 르네 데카르트가 세계를 '물질'과 '정신'으로 엄격히 나눌 때, 캐벤디시는 반박했다. 자연은 살아 있으며, 물질 자체에 고유한 운동과 지각 능력이 깃들어 있다고 주장했다. 그녀는 이것을 '물질적 생기론(material vitalism)'이라 불렀다. 19세기에 이르러서야 비슷한 생각들이 진지하게 논의되기 시작했다.", "동시대 학자들이 그녀의 책을 읽긴 했다. 새뮤얼 피프스는 1667년 일기에 그녀를 가리켜 '완전히 정신 나간 이상하고 거만한 여자'라고 적었다. 그러나 같은 해 다른 일기 항목에서 그는 그녀의 책이 '매우 잘 쓰였다'고도 인정했다. 반박하면서도 읽지 않을 수 없었던 것이다.", "캐벤디시는 자신이 조롱받는다는 것을 알았다. 그래서 더 많이 썼다. 시, 희곡, 철학 논문, 자연사, 그리고 소설. 생전에 펴낸 책이 열네 권이 넘는다. 17세기 여성으로서는 전무후무한 출판 기록이었다. 그녀는 자신의 저서 서문에 직접 이렇게 썼다. '나는 명성을 원한다. 그 욕망을 부끄러워하지 않는다.'", "그녀가 1673년 세상을 떠났을 때, 웨스트민스터 사원에 안장되었다. 묘비에는 공작부인의 칭호와 함께 시인이자 철학자라는 문구가 새겨졌다. 남편이 새긴 것이었다. 그러나 그 후 200년 가까이, 그녀의 이름은 학문의 역사에서 거의 지워졌다.", "20세기 들어 버지니아 울프가 에세이 《자기만의 방》(1929)에서 캐벤디시를 언급하며 그녀를 다시 소환했다. '아무도 그녀에게 제대로 된 방을 주지 않았다'고. 이후 학자들이 캐벤디시의 저작을 다시 읽기 시작했고, 오늘날 그녀는 근대 초기 여성 지성사의 핵심 인물로 재평가받는다.", "캐벤디시가 꿈꾼 불타는 세계는 결국 현실이 되었다. 단지 그녀 생전이 아니었을 뿐이다. 세계가 그녀를 따라잡는 데 300년이 걸렸다. 그리고 그 300년 동안, 그녀의 책은 사라지지 않았다."],
      closing: "조롱받으면서도 계속 썼다.\n발언권 없이도 생각하기를 멈추지 않았다.\n세상이 받아들일 준비가 안 되어 있다고 해서,\n그 생각이 틀린 것은 아니다.",
      analysis: {
        insight: { icon: "💡", text: "시대가 나를 거부할 때, 그것은 내가 틀렸다는 증거가 아니라 내가 앞서 있다는 증거일 수 있다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "'미친 마거릿'이라 불렀던 사람들의 이름은 아무도 기억하지 않는다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "남편이 묘비에 새긴 단 두 글자—'철학자'. 세상이 빼앗으려 한 것을 그는 돌에 새겨 돌려주었다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "마거릿 캐벤디시(Margaret Cavendish, 1623–1673) / Katie Whitaker 《Mad Madge: The Extraordinary Life of Margaret Cavendish》(2003), Eileen O'Neill 편 《Observations upon Experimental Philosophy》(Cambridge UP, 2001)을 바탕으로 재서술했습니다.",
      },
      curatorNote: "마거릿 캐벤디시를 처음 알았을 때, 저는 '왜 이 사람을 몰랐지?'라는 물음이 먼저 들었습니다. 그리고 곧 깨달았습니다—우리가 '몰랐다'는 것 자체가 이 이야기의 핵심이라는 것을. 지금 이 순간, 당신이 하고 있는 일이 아무도 알아주지 않는다고 느낀다면, 캐벤디시를 떠올려 보세요. 세상이 따라잡는 데 300년이 걸렸어도, 결국 따라잡았습니다.",
      qna: {
        question: "내가 옳다고 믿는 것을 세상이 비웃을 때, 계속해야 할 이유는 무엇일까요?",
        answer: "캐벤디시는 그 답을 행동으로 남겼습니다. 그녀는 인정받기 위해 쓴 것이 아니라, 생각이 있었기 때문에 썼습니다. 인정은 결과이지 이유가 아니었습니다. 비웃음은 '네가 틀렸다'는 신호가 아니라 '네가 아직 이해받지 못했다'는 신호일 수 있습니다. 지금 당신의 일이 조용히 묻혀 있다면, 그것은 끝이 아니라 아직 세상이 도착하지 않은 것일 수 있습니다."
      },
      publishedDate: "2026년 7월 22일",
    },

    /* ═══ 목요일 — 역사·감동 (PRIMARY: 감동) ═══ */
    4: {
      title: "엘리자베스 케니의 온찜질",
      category: "역사·감동",
      primaryType: "감동",
      types: ["감동", "통찰"],
      image: null,
      svgKey: null,
      body: ["1911년 오스트레일리아 퀸즐랜드 오지, 간호사 엘리자베스 케니는 외딴 농장 아이를 왕진했다. 아이의 다리와 등 근육이 뒤틀리고 경련을 일으켰다. 케니에게는 의학 교과서도, 전화도, 가까운 동료도 없었다.", "케니는 전보로 담당 의사 에니어스 맥도넬(Aeneas McDonnell)에게 증상을 설명했다. 돌아온 답은 짧고 암담했다. '소아마비(infantile paralysis). 치료법 없음.'", "케니는 그 전보를 손에 쥐고 아이를 바라봤다. '치료법 없음'이라는 말이 '아무것도 하지 말라'는 뜻으로 들리지 않았다. 그녀는 뜨거운 물에 적신 천을 쥐어짜 아이의 굳은 근육 위에 올렸다. 직관과 손끝이 이끄는 대로였다.", "당시 의학계의 소아마비 치료는 경직된 사지를 석고 부목으로 고정하는 것이었다. 움직임 자체를 막아 근육을 '쉬게' 한다는 논리였다. 케니가 본 것은 달랐다. 부목은 근육을 쉬게 하는 게 아니라 굳히고 있었다.", "온찜질로 통증이 가라앉자 케니는 아이의 팔다리를 조심스럽게 움직이기 시작했다. 수동 운동, 온열 요법, 반복적인 근육 재교육. 아이는 서서히 다리를 움직였다. 몇 달 후, 그 아이는 걸었다.", "케니는 이후 20년 동안 오스트레일리아 오지를 돌며 같은 방식으로 소아마비 환자들을 돌봤다. 의사들은 그녀의 방법을 비웃거나 무시했다. 정식 의학 학위가 없는 간호사가 100년 정설을 뒤집겠다고 나선 셈이었다.", "1940년, 케니는 미국 미네소타주 미니애폴리스로 건너갔다. 미네소타대학교 의과대학은 처음에 회의적이었으나, 실제 환자들의 경과를 지켜본 뒤 입장을 바꿨다. 1942년 미니애폴리스에 엘리자베스 케니 연구소(Elizabeth Kenny Institute)가 설립됐다.", "미국 전역에 소아마비가 퍼지던 시절, 케니의 온찜질과 운동 요법은 수천 명의 아이들이 부목 없이 회복하는 길을 열었다. 1952년 갤럽 여론조사에서 미국인들이 '가장 존경하는 여성'으로 케니를 꼽았다. 엘리노어 루스벨트에 이어 두 번째였다.", "케니는 1952년 퀸즐랜드에서 세상을 떠났다. 그녀가 처음 온찜질을 시도했던 그 오지로 돌아와서였다. 공식 의학 학위는 끝내 없었다. 그러나 그녀의 이름은 이후 물리치료와 재활의학의 역사에 기초로 남았다.", "케니가 평생 고수한 것은 하나였다. 굳은 것을 고정하지 말고, 따뜻하게 녹여서 다시 움직이게 하라. 근육에 대한 이야기였지만, 어쩌면 삶 전체에 대한 이야기이기도 했다."],
      closing: "치료법 없다는 말에 그녀는 손을 거뒀을 수도 있었다.\n그러나 케니는 천을 뜨겁게 적셔 아이의 굳은 다리 위에 올렸다.\n지식이 없어서 못 하는 것과, 지식이 없어서 두려워하는 것은 다르다.\n모르는 채로 따뜻하게 시작하는 것, 그것이 가끔 역사를 바꾼다.",
      analysis: {
        insight: { icon: "💡", text: "전문 지식의 부재가 때로는 편견의 부재이기도 하다. 케니는 '정설'을 몰랐기 때문에 정설을 의심할 수 있었다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "학위 없는 간호사가 의학계 100년 정설을 뒤집은 무기가 '뜨거운 젖은 천'이었다는 사실은, 가장 단순한 것이 가장 오래 외면받는다는 아이러니를 유쾌하게 증명한다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "오지에서 혼자 전보 한 장을 손에 쥐고, 그래도 아이 곁에 남아 천을 뜨겁게 적셨던 그 밤이 결국 수천 명의 아이들을 걷게 했다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "엘리자베스 케니(Elizabeth Kenny, 1880–1952) / Victor Cohn 《Sister Kenny: The Woman Who Challenged the Doctors》(1975), University of Minnesota Press 및 Elizabeth Kenny Institute 기록을 바탕으로 재서술했습니다.",
      },
      curatorNote: "케니의 이야기가 특별한 이유는 그녀가 '맞서 싸웠다'는 데 있지 않습니다. 그녀는 그냥 눈앞의 아이에게 할 수 있는 일을 했을 뿐이고, 그것을 수십 년 반복했습니다. 거창한 사명감보다 작은 성실함이 쌓여 역사가 된 경우입니다. 지금 당장 무엇을 해야 할지 모르겠을 때, 케니처럼 일단 천을 뜨겁게 적시는 것부터 시작해도 됩니다.",
      qna: {
        question: "아무도 알려주지 않은 길 앞에서, 당신은 멈추는 편인가요 아니면 일단 손을 움직이는 편인가요?",
        answer: "케니는 정답을 몰랐기 때문에 오히려 가장 직관적인 질문을 던질 수 있었습니다. '지금 이 아이에게 무엇이 필요한가.' 모든 출발점은 사실 그 단순한 질문입니다. 완벽한 지식을 갖추고 시작하는 사람은 거의 없습니다. 손을 먼저 움직이면, 길은 움직이는 중에 보이기 시작합니다."
      },
      publishedDate: "2026년 7월 23일",
    },

    /* ═══ 금요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
    5: {
      title: "소니 리스턴의 두 번째 라운드",
      category: "역사·통찰",
      primaryType: "통찰",
      types: ["통찰", "감동"],
      image: null,
      svgKey: null,
      body: ["1950년대 초, 미주리 주 교도소의 한 독방에 열여덟 살짜리 소년이 앉아 있었다. 강도죄로 복역 중이던 찰스 '소니' 리스턴은 글을 읽지 못했고, 아버지에게 맞으며 자랐으며, 사회가 그에게 붙여 준 딱지는 단 하나, '위험 인물'이었다. 교도관들조차 그를 멀리했다.", "그 독방 문을 두드린 것은 알로이시우스 스티븐스 신부였다. 가톨릭 교도소 사목 담당이었던 그는 리스턴에게 글자를 가르치기 시작했고, 그러다 소년의 주먹이 얼마나 묵직한지를 알아챘다. 스티븐스 신부는 교도소 당국을 설득해 리스턴이 권투 훈련을 받을 수 있도록 주선했다. 아무도 투자하지 않은 곳에 한 사람이 먼저 걸어 들어간 것이다.", "리스턴은 출소 후 프로 무대에 올랐다. 타고난 체격과 파괴적인 잽, 그리고 상대를 얼어붙게 만드는 눈빛으로 그는 빠르게 헤비급 상위권으로 치고 올라갔다. 그러나 세상은 여전히 그를 '전과자'로 불렀다. 언론은 그의 경기력보다 범죄 기록을 먼저 꺼냈고, 흥행사들은 그를 챔피언 도전자 명단에서 의도적으로 지웠다.", "1962년 9월 25일, 시카고 코미스키 파크. 소니 리스턴은 당대 최강으로 불리던 헤비급 챔피언 플로이드 패터슨과 맞붙었다. 전문가들은 경기가 길어질 것이라 예상했다. 리스턴은 2분 6초 만에 패터슨을 1라운드 KO로 쓰러뜨렸다. 당시 헤비급 역사상 가장 빠른 타이틀 획득이었다.", "챔피언이 된 이후에도 리스턴을 향한 미국 사회의 시선은 냉랭했다. 케네디 행정부 관계자들은 그가 챔피언이라는 사실을 불편해했고, 일부 신문은 그의 우승을 작은 기사로 처리했다. 반면 리스턴을 직접 상대한 선수들은 이구동성으로 그의 잽이 역대 헤비급 통틀어 가장 강력했다고 증언했다.", "그가 남긴 훈련 원칙은 단순했다. 화려한 기술보다 기초를 반복하는 것, 그리고 상대가 두려워하는 거리를 자신의 것으로 만드는 것. 리스턴은 스파링 파트너들에게 자주 이렇게 말했다고 전해진다. 상대가 편한 자리에 있으면 네가 불편한 것이고, 네가 편하면 상대가 무너진다고.", "그의 삶은 끝내 복잡한 그림자를 지웠다. 조직 폭력배와의 연루 의혹, 두 번의 알리전 패배, 그리고 1970년 12월 쓸쓸한 죽음. 그러나 이 모든 굴곡 이전에 기억해야 할 장면이 있다. 글을 모르던 소년이 독방에서 알파벳을 익히던 그 순간, 아무도 걸지 않은 곳에 스스로 걸어 들어갔던 그 순간.", "리스턴의 이야기에서 진짜 통찰은 챔피언 벨트에 있지 않다. 세상이 '이미 결론 난 사람'이라고 낙인찍은 순간에도, 한 사람의 개입과 본인의 작은 선택이 궤도를 바꿀 수 있다는 것이다. 스티븐스 신부는 영웅적인 일을 한 게 아니었다. 그냥 독방 문을 두드렸을 뿐이다.", "역사는 종종 '기회를 잡은 사람'을 칭송하지만, 소니 리스턴의 경우 먼저 물어봐야 할 것은 따로 있다. 기회가 애초에 닿지 않도록 설계된 곳에서, 누가 먼저 문을 두드렸는가. 그리고 그 문 안의 사람은 손을 내밀어 잡을 준비가 되어 있었는가.", "두 질문에 모두 '예스'였던 짧은 순간이, 한 사람의 인생 전체를 다른 방향으로 밀어 넣었다."],
      closing: "낙인은 진단이 아니다.\n독방 문을 두드리는 사람이 먼저다.\n그리고 그 문 안에서 손을 내밀 수 있다면,\n두 번째 라운드는 언제나 시작된다.",
      analysis: {
        insight: { icon: "💡", text: "세상이 '이미 끝났다'고 선언한 사람에게 가장 강한 힘은, 결론을 다시 쓰겠다는 단 한 사람의 작은 개입에서 시작된다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "전 세계 헤비급 챔피언을 2분 6초에 무너뜨린 남자, 그런데 세상에서 가장 어려웠던 건 알파벳 26자였다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "글을 몰랐던 소년이 독방에서 처음 자기 이름을 썼을 때, 그것이 이미 첫 번째 KO였다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "Charles 'Sonny' Liston(1930?–1970) / Nick Tosches 《Night Train: The Sonny Liston Story》(2000) 및 A. J. Liebling의 스포츠 저널리즘 기록을 바탕으로 재서술했습니다.",
      },
      curatorNote: "소니 리스턴은 불편한 챔피언이었습니다. 미디어도 정치도 그를 편하게 두지 않았죠. 그런데 바로 그 불편함이, 이 이야기를 오래 기억하게 만드는 이유입니다. 누군가 당신 주변에서 이미 결론이 난 것처럼 취급받고 있다면, 스티븐스 신부처럼 그냥 문을 두드려 보세요. 영웅적인 행동이 필요한 게 아닙니다. 그냥 두드리면 됩니다.",
      qna: {
        question: "내 삶에서 '이미 결론이 난 것처럼' 포기했지만, 사실 아직 두 번째 라운드가 남아 있는 것은 무엇인가요?",
        answer: "우리는 종종 한 번의 실패, 혹은 외부의 낙인을 스스로의 최종 판결로 받아들입니다. 하지만 리스턴의 이야기는 '조건이 갖춰진 다음에 시작한다'는 공식을 뒤집습니다. 조건이 최악인 독방에서 알파벳을 배운 것이 출발점이었으니까요. 지금 당신이 포기한 그 일이, 사실은 1라운드 KO패가 아니라 경기 시작 전 워밍업이었을 수 있습니다. 두 번째 라운드의 종이 울리는 건, 상황이 바뀔 때가 아니라 당신이 다시 코너에서 일어설 때입니다."
      },
      publishedDate: "2026년 7월 24일",
    },

    }
  },
  {
    weekLabel: "2026년 7월 2주 (7/13–7/17)",
    weekStart: "2026-07-13",
    stories: {

    /* ═══ 월요일 — 역사·감동 (PRIMARY: 감동) ═══ */
    1: {
      title: "이반 퍄타코프의 잉크병",
      category: "역사·감동",
      primaryType: "감동",
      types: ["감동", "통찰"],
      image: null,
      svgKey: null,
      body: ["1920년대 초, 소련 남부의 작은 도시 하르키우(지금의 우크라이나 하르키우). 한 젊은 식물학자가 허름한 연구실에서 밤을 지새우고 있었다. 니콜라이 바빌로프(Nikolai Vavilov)의 수제자 중 한 명이었던 니콜라이 카르탈리는 아니었다. 이 이야기의 주인공은 바빌로프 본인이다.", "니콜라이 이바노비치 바빌로프(Nikolai Ivanovich Vavilov, 1887–1943)는 러시아 모스크바 태생의 식물유전학자였다. 그는 인류가 왜 굶주리는가라는 질문 하나를 붙들고 평생을 살았다. 작물의 기원을 찾으면 더 강한 씨앗을 만들 수 있고, 더 강한 씨앗이 있으면 기근을 막을 수 있다고 믿었다.", "바빌로프는 1920년대부터 1930년대에 걸쳐 64개국을 돌며 25만 점이 넘는 씨앗·식물 표본을 수집했다. 에티오피아의 고원, 아프가니스탄의 산골짜기, 페루의 안데스 산록까지. 그가 직접 걸어 다닌 거리는 지구를 수 바퀴 도는 수준이었다. 그 씨앗들은 모두 레닌그라드(지금의 상트페테르부르크)의 종자은행에 차곡차곡 보관되었다.", "그런데 1940년, 운명은 전혀 다른 방향으로 바빌로프를 몰았다. 트로핌 리센코(Trofim Lysenko)라는 사이비 농학자가 스탈린의 총애를 받으며 소련 과학계를 장악하기 시작했다. 리센코는 유전학 자체를 '부르주아 과학'이라 규탄했고, 바빌로프는 그 첫 번째 표적이 되었다. 1940년 8월, 우크라이나 현장 조사 중에 바빌로프는 돌연 체포되었다.", "그는 간첩·파괴분자라는 누명을 쓰고 비밀경찰(NKVD)의 심문을 수백 시간 받았다. 1941년 군사법원은 그에게 사형을 선고했다. 그러나 형은 집행되지 않은 채 바빌로프는 사라토프 감옥으로 이송되었다. 감방에서도 그는 머릿속으로 작물 지도를 그렸다고, 함께 수감된 동료 학자들이 훗날 증언했다.", "1941년 9월, 독일군이 레닌그라드를 포위했다. 900일에 걸친 레닌그라드 봉쇄가 시작되었다. 도시 전체가 굶어 들어가는 그 처참한 겨울, 종자은행의 연구원들에게 눈앞에 탈출구가 하나 있었다. 창고 안에는 수천 킬로그램의 먹을 수 있는 씨앗이 있었다. 감자 덩이줄기, 쌀, 옥수수, 밀.", "연구원들은 먹지 않았다. 아무도. 디미트리 이바노프는 쌀 자루를 껴안은 채 아사했고, 게오르기 크리에르는 초콜릿 견본들 옆에서 굶어 죽었다. 그들이 지킨 씨앗들은 바빌로프가 수십 년 동안 전 세계를 누비며 모은, 인류의 먹거리 다양성 그 자체였다. 연구원 아홉 명이 그렇게 씨앗 곁에서 숨졌다.", "바빌로프는 그 사실을 알지 못한 채 1943년 1월 26일, 사라토프 감옥에서 영양실조와 폐렴으로 세상을 떠났다. 그의 나이 쉰다섯이었다. 그가 반평생 모은 씨앗들은, 그러나 살아남았다. 전쟁이 끝난 뒤 소련 과학계가 복권 절차를 밟기 시작했고, 1955년 바빌로프는 공식적으로 명예를 회복했다.", "오늘날 그 종자은행은 바빌로프 식물산업연구소(VIR)라는 이름으로 상트페테르부르크에 건재하다. 전 세계 작물 육종 연구자들이 매년 이곳의 씨앗 데이터를 활용한다. 바빌로프가 에티오피아 산지에서 채취한 밀 한 낱알이 훗날 가뭄 저항성 품종 개발의 기초가 되었고, 그 씨앗들이 지금도 수백만 명의 밥상 위에 닿아 있다.", "굶주림을 없애겠다는 신념 하나로 세상을 걸었던 사람. 자신은 감옥에서 굶어 죽었지만, 그가 모은 씨앗들은 굶어 죽을 위기의 사람들을 살려 냈다. 그 잔혹한 아이러니 속에서도, 씨앗을 지키겠다고 자리를 지킨 연구원들의 선택 덕분에, 바빌로프의 꿈은 끊어지지 않았다."],
      closing: "씨앗 하나를 지키는 일이\n언제가 수백만을 먹이는 일이 된다.\n그 믿음이 없었다면,\n아무도 굶주림을 견디며 씨앗 곁에 남지 않았을 것이다.",
      analysis: {
        insight: { icon: "💡", text: "가장 강한 유산은 때로 감옥 밖에서, 지키겠다고 결심한 평범한 사람들의 손에 의해 완성된다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "세상에서 가장 배부른 창고에서 가장 굶주린 사람들이 문을 잠그고 있었으니, 역사상 가장 기묘한 경비원들이었다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "자신은 굶어 죽었지만, 그가 모은 씨앗들은 살아남아 세상을 먹였다. 패배처럼 보였던 일생이, 사실은 가장 긴 승리였다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "니콜라이 이바노비치 바빌로프(Nikolai Ivanovich Vavilov, 1887–1943) / Gary Paul Nabhan 《Where Our Food Comes From: Retracing Nikolay Vavilov's Quest to End Famine》(2009), Island Press; Peter Pringle 《The Murder of Nikolai Vavilov》(2008), Simon & Schuster를 바탕으로 재서술했습니다.",
      },
      curatorNote: "바빌로프 이야기를 처음 접했을 때, 저는 '씨앗을 먹지 않는다'는 선택의 무게를 한참 동안 이해하지 못했습니다. 포위된 도시, 극한의 굶주림, 눈앞의 먹을 것. 그 상황에서 손을 내밀지 않은 사람들의 결기는 거창한 이념이 아니라, 바빌로프라는 한 사람이 평생 품었던 꿈에 대한 신뢰였을 것입니다. 우리도 무언가를 믿기 때문에 버티는 날들이 있습니다. 그 믿음이 당신을 오늘도 자리에 있게 합니다.",
      qna: {
        question: "당신이 지금 지치더라도 포기하지 않는 '씨앗' 같은 믿음은 무엇인가요?",
        answer: "바빌로프의 연구원들이 씨앗을 지킨 것은 먼 미래에 대한 확신이 아니라, '이것만큼은 잃으면 안 된다'는 단순한 믿음이었습니다. 우리에게도 그런 것이 하나씩 있습니다. 잘 보이지 않더라도, 지금 당신이 놓지 않고 있는 것 자체가 이미 씨앗입니다. 언제 꽃 필지 모르더라도, 쥐고 있는 것만으로도 충분히 의미 있는 일을 하고 있는 겁니다."
      },
      publishedDate: "2026년 7월 13일",
    },

    /* ═══ 화요일 — 역사·유머 (PRIMARY: 유머) ═══ */
    2: {
      title: "조지 셀의 리허설",
      category: "역사·유머",
      primaryType: "유머",
      types: ["유머", "통찰"],
      image: null,
      svgKey: null,
      body: ["1946년 가을, 조지 셀(George Szell)이 클리블랜드 오케스트라의 음악감독으로 부임했을 때, 단원들은 그를 보자마자 직감했다. 이 사람, 보통이 아니다.", "셀은 헝가리 태생의 지휘자로, 유럽에서 이미 '완벽주의의 화신'으로 소문이 자자했다. 그의 리허설은 전쟁터였다. 제1바이올린 주자가 활을 0.5센티미터라도 다른 각도로 들면, 셀은 지휘봉을 내려놓고 긴 침묵으로 그 연주자를 응시했다. 단원들 사이에서는 '셀의 침묵은 고함보다 무섭다'는 말이 돌았다.", "셀이 클리블랜드에 도착했을 때 오케스트라의 수준은 변방급 앙상블이었다. 셀은 이를 숨기지 않았다. 부임 첫 주, 그는 단원 전체를 강당에 앉혀놓고 이렇게 말했다. '여러분은 훌륭한 잠재력을 갖고 있습니다. 다만 현재는, 그 잠재력이 완벽하게 숨겨져 있습니다.'", "단원들은 웃어야 할지 울어야 할지 몰랐다. 그러나 셀의 요구는 진심이었고, 그 진심은 점차 단원들에게도 전염됐다. 리허설은 하루 네 시간, 주 여섯 일 진행됐다. 단원들이 지쳐 쓰러질 지경이면, 셀은 오히려 에너지가 넘쳤다.", "셀의 유명한 일화 중 하나는 첼로 수석과의 충돌이다. 한 리허설에서 수석 첼리스트가 셀의 템포 지시에 공개적으로 이의를 제기했다. '마에스트로, 악보에는 이렇게 적혀 있지 않습니다.' 셀은 잠시 악보를 내려다본 뒤 답했다. '그렇군요. 그렇다면 악보가 틀렸습니다.' 청중이 된 단원들 사이에서 웃음이 새어나왔고, 이후 그 첼리스트는 셀의 가장 충성스러운 추종자가 됐다.", "셀은 자기 자신에게도 예외가 없었다. 그는 악보를 전부 암기했고, 피아노 실력은 독주 무대에 설 수준이었다. 단원이 어떤 파트를 흐리멍덩하게 연주하면 셀은 직접 그 악기 앞에 앉아 시범을 보였다. 오보에, 클라리넷, 심지어 팀파니까지. '내가 직접 칠 수도 있소'라는 말은 허세가 아니었다.", "20년의 세월이 흘렀다. 1960년대 클리블랜드 오케스트라는 세계 최고 수준의 앙상블로 거듭났다. 비평가들은 이 오케스트라의 정밀함을 '스위스 시계'에 비유했다. 단원들도 달라져 있었다. 셀의 가혹한 기준을 통과한 그들은, 어느덧 그 기준을 스스로 원하고 있었다.", "셀이 세상을 떠나기 두 해 전인 1968년, 한 인터뷰어가 물었다. '당신은 지금까지 살면서 가장 잘한 일이 무엇이라고 생각합니까?' 셀은 잠시 생각하더니 답했다. '단원들에게 내가 얼마나 불편한 사람인지를, 포기하지 않고 견뎌낼 가치가 있다는 것을 증명한 것이오.' 그리고는 덧붙였다. '물론 그것을 깨닫는 데 10년이 걸렸다는 것이 약간 문제였지만.'", "1970년 그가 세상을 떠났을 때, 클리블랜드 오케스트라 단원들은 자발적으로 추모 연주를 열었다. 지휘자 없이. 그들은 셀이 20년간 심어준 음악을, 스스로의 힘으로 연주했다. 그것이야말로 셀이 평생 원하던 것이었다.", "혹독함은 때로 가장 긴 사랑의 형태다. 셀은 사람들이 자신을 싫어하는 것을 감수하면서도 그들이 더 나아지기를 원했다. 그리고 결국, 그들은 나아졌다."],
      closing: "가장 불편한 사람이 가장 오래 기억된다.\n스스로에게 먼저 가혹했기 때문에.\n그의 침묵은 고함이었고,\n그의 고함은 결국 사랑이었다.",
      analysis: {
        insight: { icon: "💡", text: "진정한 완벽주의자는 남이 아니라 자신에게 먼저 그 기준을 들이민다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "20년 만에 세계 최고가 된 오케스트라의 비결은 '지휘자가 오보에도 직접 칠 수 있다'는 공포였다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "지휘자 없이 스스로 연주한 추모 무대, 그것이 셀이 평생 원했던 단 하나의 결말이었다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "George Szell (1897–1970) / Donald Rosenberg, 《The Cleveland Orchestra Story》(2000, Gray & Company)를 바탕으로 재서술했습니다.",
      },
      curatorNote: "셀의 이야기를 처음 읽었을 때 '이 사람 왜 이래?'라는 생각이 먼저 들었습니다. 그런데 끝에 가서야 알게 됩니다. 가장 혹독한 요구를 하는 사람이 사실은 상대방의 가능성을 가장 깊이 믿는 사람일 수 있다는 것을. 지금 당신 주변에서 불편하게 높은 기준을 들이미는 누군가가 있다면, 혹시 그가 셀일 수도 있습니다. 아니면, 당신이 스스로에게 그 역할을 해줄 차례일 수도 있고요.",
      qna: {
        question: "나는 나 자신에게, 내가 남에게 요구하는 만큼의 기준을 적용하고 있는가?",
        answer: "대부분의 사람은 타인에게 더 엄격하고 자신에게는 더 관대합니다. 그것이 자연스러운 자기보호 본능이지만, 셀은 그것을 뒤집었습니다. 스스로에게 먼저 혹독했기 때문에 그의 요구는 권위가 있었고, 단원들은 분노 대신 존경으로 반응했습니다. 자신에게 먼저 적용하지 않는 기준은 명령이 되고, 자신에게 먼저 적용한 기준은 초대가 됩니다. 오늘 하루, 남에게 바라는 한 가지를 내가 먼저 해보는 것이 셀 방식의 시작입니다."
      },
      publishedDate: "2026년 7월 14일",
    },

    /* ═══ 수요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
    3: {
      title: "이다 타벨의 취재 수첩",
      category: "역사·통찰",
      primaryType: "통찰",
      types: ["통찰", "감동"],
      image: null,
      svgKey: null,
      body: ["1902년 가을, 미국 뉴욕의 한 편집실에서 마흔네 살의 여성 기자가 낡은 취재 수첩을 펼쳤다. 이다 미네르바 타벨(Ida Minerva Tarbell)이었다. 그녀는 펜실베이니아 주 베낭고 카운티(Venango County) 출신으로, 아버지가 석유 정제업자였다. 어린 시절 그녀는 스탠더드 오일의 독점 횡포로 아버지의 사업이 무너지는 것을 직접 목격했다.", "당시 스탠더드 오일은 존 D. 록펠러가 이끄는 미국 최대의 기업이었다. 회사는 전체 미국 정유 생산량의 약 90%를 장악하고 있었으며, 경쟁사를 옥죄는 비밀 철도 운임 협약과 가격 담합으로 수많은 중소 정제업자들을 시장에서 몰아냈다. 록펠러는 당대 가장 강력한 사업가였고, 그 회사에 공개적으로 맞선다는 것은 거의 불가능해 보이는 일이었다.", "타벨이 선택한 무기는 단 하나, 문서였다. 그녀는 법원 기록, 주 의회 청문회 속기록, 철도 운임 장부, 회사 내부 서신을 수년에 걸쳐 수집했다. 창작이나 추론 대신, 사실 그 자체를 쌓는 방식이었다. 당시 많은 동료 기자들이 폭로 저널리즘을 감정적 어조로 썼던 것과 달리, 타벨은 의도적으로 냉정하고 건조한 서술을 택했다.", "1902년 11월, 《맥클루어스 매거진(McClure's Magazine)》이 그녀의 연재를 시작했다. 독자들의 반응은 즉각적이었다. 수십 년간 막연하게 느끼던 불공정함이 숫자와 문서로 눈앞에 펼쳐지자, 미국 전역에서 편지가 쏟아졌다. 연재는 1904년 10월까지 총 18회에 걸쳐 이어졌다.", "연재가 끝난 뒤 타벨은 이를 두 권의 책으로 엮었다. 《스탠더드 오일의 역사(The History of the Standard Oil Company)》(1904)였다. 이 책은 뉴욕대학교(NYU) 저널리즘학과가 선정한 '20세기 최고의 저널리즘 작품 100선'에서 5위에 올랐다. 록펠러 자신도 훗날 이 책을 가장 두려워했던 글이라고 주변에 토로했다고 전해진다.", "책 출간 이후 미국 법무부는 스탠더드 오일에 대한 조사를 강화했고, 1911년 연방 대법원은 회사에 독점금지법 위반 판결을 내려 34개 독립 회사로 강제 분리했다. 한 사람의 취재 수첩이 미국 기업사의 방향을 바꾼 것이다. 물론 타벨 혼자만의 힘은 아니었지만, 그 흐름의 기폭제가 된 것은 분명했다.", "흥미로운 것은 록펠러가 타벨을 공개적으로 비난하는 대신 침묵을 택했다는 점이다. 그는 지인들에게 그 책에 대해 절대 언급하지 말라고 당부했다고 한다. 가장 강력한 반박은 반박하지 않는 것이라 여겼던 것일까. 하지만 침묵은 기록을 지우지 못했다.", "타벨은 이후에도 평생 현장을 떠나지 않았다. 여든 살이 넘어서도 글을 썼고, 1944년 코네티컷 주 브리지포트에서 86세로 세상을 떠났다. 그녀는 생전에 미국 최초의 여성 기자 중 한 명으로 불렸지만, 스스로는 늘 '취재자'라는 호칭을 더 좋아했다고 전해진다.", "타벨이 남긴 것은 특종의 쾌감이 아니었다. 그것은 방법론이었다. 분노가 아니라 기록으로, 주장이 아니라 문서로, 감정이 아니라 사실의 무게로 세상을 움직일 수 있다는 것. 그 조용하고 집요한 방식은 오늘날 탐사 저널리즘의 원형으로 남아 있다.", "우리가 타벨에게서 배울 수 있는 것은 어쩌면 용기의 모양에 관한 것이다. 용기는 반드시 큰 목소리일 필요가 없다. 때로 용기는 묵묵히 수첩을 펼치고, 다음 문서를 찾아 나서고, 사실이 스스로 말할 수 있도록 자리를 내어주는 일이다."],
      closing: "분노는 시작이지만, 기록은 완성이다.\n가장 강한 말은 사실 앞에서 멈춘다.\n수첩 한 권이 법원 판결 하나를 바꿨다.\n집요함은 조용히, 그러나 끝까지 걷는다.",
      analysis: {
        insight: { icon: "💡", text: "감정이 아니라 사실의 축적이 세상을 바꾼다. 분노는 불꽃이고, 기록은 그 불꽃을 오래 태우는 장작이다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "록펠러는 미국에서 가장 강력한 사람이었지만, 마흔네 살 여성 기자의 취재 수첩 앞에서 '절대 언급하지 말라'는 쪽을 택했다. 침묵이 최선의 전략이었던 셈인데, 그것도 실패했다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "아버지의 사업이 무너지는 것을 지켜보던 소녀가, 수십 년 뒤 그 거대한 독점을 문서 한 장씩 해체했다. 복수가 아니라 사실로.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "이다 타벨(Ida Minerva Tarbell, 1857~1944) / Ida Tarbell, 《The History of the Standard Oil Company》(1904); Steve Weinberg, 《Taking on the Trust》(2008)을 바탕으로 재서술했습니다.",
      },
      curatorNote: "타벨의 이야기는 '나 혼자 뭘 할 수 있겠어'라고 느끼는 순간에 꺼내 읽고 싶은 이야기입니다. 그녀는 특별한 권력이나 배경 없이, 수첩과 도서관과 집요함만으로 시대를 바꿨습니다. 세상이 너무 크고 단단해 보일 때, 다음 문서를 찾아 나서는 것 — 그것이 타벨의 용기였고, 우리가 이어받을 수 있는 용기이기도 합니다.",
      qna: {
        question: "내가 지금 맞서고 싶은 '거대한 것' 앞에서, 나에게 남은 가장 작은 무기는 무엇인가요?",
        answer: "타벨에게 그 무기는 취재 수첩과 도서관 열람증이었습니다. 거창한 것이 아니어도 됩니다. 지금 당장 손에 쥘 수 있는 가장 구체적인 것 — 기록, 질문, 다음 한 걸음 — 이 이미 시작입니다. 거대한 변화는 대부분 '다음 문서를 한 번 더 찾아보자'는 결심에서 출발했습니다. 작다고 느껴지는 그 무기를 내려놓지 마세요."
      },
      publishedDate: "2026년 7월 15일",
    },

    /* ═══ 목요일 — 역사·감동 (PRIMARY: 감동) ═══ */
    4: {
      title: "에텔 로젠버그가 아닌, 루스 페이지의 무대",
      category: "역사·감동",
      primaryType: "감동",
      types: ["감동", "통찰"],
      image: null,
      svgKey: null,
      body: ["1937년 겨울, 시카고 오페라 하우스의 무대 위에서 루스 페이지(Ruth Page)는 한 가지 결정을 내렸다. 당시 미국 발레 무대는 러시아 이민자 무용수들이 장악하고 있었고, 미국 태생의 무용수가 주역을 맡는 일은 거의 없었다. 페이지는 그 질서에 조용히, 그러나 단호히 맞섰다.", "루스 페이지는 1899년 인디애나폴리스에서 태어났다. 어린 시절부터 춤을 배웠고, 10대 후반에 이미 안나 파블로바의 순회공연단에 합류할 만큼 실력을 인정받았다. 그러나 그가 진정으로 하고 싶었던 것은 '미국의 이야기를 미국의 몸으로 추는 것'이었다.", "1938년, 페이지는 미국 오페라를 발레로 재해석한 작품을 직접 안무하고 제작하기 시작했다. 당시 발레 세계에서 안무가는 남성의 영역이었고, 여성이 제작비를 직접 조달하며 극단을 이끄는 일은 전례가 드물었다. 재정은 늘 빠듯했고, 연습실은 허름한 창고를 빌려 썼다.", "그 무렵 페이지에게 뜻밖의 제안이 들어왔다. 뉴욕의 유력 임프레사리오가 러시아식 레퍼토리로만 구성된 순회공연에 그를 주역으로 초청한 것이었다. 조건은 하나였다. 예명을 러시아식으로 바꿀 것. 페이지는 거절했다.", "거절 이후 뉴욕 무대의 문은 한동안 닫혔다. 하지만 페이지는 시카고를 거점으로 자신의 극단 '시카고 오페라 발레'를 키워 나갔다. 그는 무용수들에게 임금을 정기적으로 지급하는 것을 최우선으로 삼았는데, 대공황 이후 예술계에서 이것은 결코 당연한 일이 아니었다.", "1950년대, 페이지는 오페라 전막을 발레로 옮기는 시리즈를 본격화했다. 베르디의 《리골레토》, 푸치니의 《나비 부인》을 발레 언어로 재구성한 이 작품들은 지방 순회공연을 통해 발레를 처음 접하는 수천 명의 관객 앞에 섰다. 뉴욕 비평가들이 주목하지 않는 무대였지만, 페이지는 개의치 않았다.", "그를 오래 곁에서 지켜본 무용수들은 훗날 한 가지 장면을 공통적으로 기억했다. 공연 전날 밤, 페이지는 반드시 무대 바닥을 직접 걸어 보았다. 널빤지 하나가 들뜨지 않았는지, 조명이 발목을 제대로 비추는지 확인하기 위해서였다. 화려한 커튼콜보다 무용수의 발이 안전한지를 먼저 살폈다.", "루스 페이지는 1991년 92세로 세상을 떠날 때까지 가르치고, 안무하고, 무대를 만들었다. 그가 시카고에서 길러 낸 무용수들은 이후 미국 전역의 발레단으로 퍼져 나갔다. 그 중 일부는 나중에야 자신이 얼마나 특별한 훈련을 받았는지 깨달았다고 말했다.", "루스 페이지의 이름은 발레 교과서에 굵게 실리지 않는다. 그러나 미국 중서부에서 발레가 '먼 나라 예술'이 아닌 '우리 동네 공연'이 될 수 있었던 데에는, 창고 연습실에서 무대 바닥을 혼자 걸어 보던 한 사람의 고집이 있었다.", "그 고집은 화려하지 않았다. 하지만 수십 년 동안, 한 번도 꺾이지 않았다."],
      closing: "예명을 바꾸라는 말에 '아니요'라고 했다.\n그리고 창고를 빌려 연습실을 만들었다.\n뉴욕이 문을 닫았을 때, 그는 시카고를 열었다.\n이름을 지킨 사람이 무대를 지켰다.",
      analysis: {
        insight: { icon: "💡", text: "인정받는 방향으로 자신을 구부리지 않을 때, 오히려 자신만이 만들 수 있는 자리가 생긴다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "러시아식 예명을 거절한 덕분에, 그는 평생 자기 이름을 기억하는 수고를 덜었다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "공연 전날 밤, 무대 바닥을 혼자 걸어 보던 그 발걸음 — 커튼콜보다 조용하고, 스포트라이트보다 따뜻했다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "루스 페이지(Ruth Page, 1899–1991) / Nancy Reynolds & Malcolm McCormick, 《No Fixed Points: Dance in the Twentieth Century》(Yale University Press, 2003) 및 시카고 뉴베리 도서관 루스 페이지 컬렉션(Ruth Page Papers, Newberry Library, Chicago)을 바탕으로 재서술했습니다.",
      },
      curatorNote: "루스 페이지 이야기를 고른 것은, '중심이 아닌 곳에서 중심을 만든 사람'의 이야기가 지금 우리에게 필요하다고 느꼈기 때문입니다. 뉴욕의 문이 닫혔을 때 시카고를 택한 것, 화려한 조건 대신 자기 이름을 택한 것 — 그 선택들이 쌓여 결국 미국 발레의 한 뿌리가 되었습니다. 지금 당신이 서 있는 자리가 변방처럼 느껴진다면, 페이지의 이야기가 작은 힘이 되길 바랍니다.",
      qna: {
        question: "인정받지 못하는 자리에서도 계속할 수 있는 힘은 어디서 오는 걸까요?",
        answer: "루스 페이지는 뉴욕 비평가의 시선이 아니라 무용수의 발이 안전한지를 먼저 살폈습니다. 그 관심의 방향이 힘의 원천이었을 것입니다. 외부의 인정을 기다리는 사람은 인정이 오지 않을 때 멈추지만, 자신이 돌봐야 할 무언가를 아는 사람은 멈추지 않습니다. '왜 계속하느냐'는 질문보다 '내가 지켜야 할 것이 무엇인가'를 묻는 것이, 더 오래 버티게 해 주는 질문일지 모릅니다."
      },
      publishedDate: "2026년 7월 16일",
    },

    /* ═══ 금요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
    5: {
      title: "에디스 피아프의 다시 시작하는 무대",
      category: "역사·통찰",
      primaryType: "통찰",
      types: ["통찰", "감동"],
      image: null,
      svgKey: null,
      body: ["1951년 여름, 프랑스의 가수 에디스 피아프는 세 번의 자동차 사고를 겪으며 심각한 부상을 입었다. 갈비뼈가 부러지고 팔이 골절되었으며, 극심한 통증을 달래기 위해 모르핀에 의존하기 시작했다. 그 의존은 빠르게 중독으로 이어졌다.", "1952년과 1953년 사이, 피아프는 무대 위에서 쓰러지는 일이 반복되었다. 관객 앞에 나서기도 전에 팔을 떨었고, 목소리가 나오지 않는 날도 있었다. 파리의 음악 언론은 '피아프의 시대는 끝났다'고 썼다.", "그녀는 중독 치료를 위해 입원과 퇴원을 반복했다. 치료 병원 기록에 따르면 1953년 한 해에만 세 차례 입원했다. 매번 퇴원 후 다시 무대에 서려 했지만, 의사들은 공연 자체가 신체에 무리라고 경고했다.", "피아프는 의사의 경고를 듣지 않는 대신, 다른 방식으로 자신을 다잡았다. 그녀는 고통 속에서도 노래를 분석하고, 악보를 다시 쓰고, 새로운 작곡가들과 협업하기 시작했다. 스스로를 처음부터 다시 훈련시키는 방식을 택한 것이다.", "1953년, 그녀는 샤를 뒤몽과 미셸 보키에를 비롯한 젊은 작곡가들에게 적극적으로 손을 내밀었다. '나는 끝난 사람이 아니라, 막 시작하는 사람처럼 곡을 가져와 달라'고 그들에게 말했다고 전해진다. 이 시기의 협업은 이후 그녀의 가장 유명한 노래들로 이어지는 토대가 되었다.", "1954년, 피아프는 뉴욕 카네기홀 무대에 섰다. 관객은 반신반의하며 그녀를 바라봤다. 그러나 첫 소절이 울려 퍼지는 순간, 공연장은 침묵에 잠겼다가 이내 기립박수로 터져 나왔다. 뉴욕 타임스는 이 공연을 '기적적인 귀환'이라고 보도했다.", "이 귀환이 단순한 회복이 아니었다는 점이 중요하다. 피아프는 이전과 '같은' 목소리로 돌아온 것이 아니었다. 그녀의 노래에는 이전에 없던 균열과 무게가 생겨 있었고, 바로 그 균열이 청중을 더 깊이 흔들었다. 부서진 자리가 오히려 공명의 통로가 된 셈이었다.", "이후 피아프는 1956년 카네기홀에 다시 초청받았고, 1960년에는 〈Non, je ne regrette rien(아니, 나는 아무것도 후회하지 않아)〉을 발표했다. 이 곡은 단순한 히트곡이 아니라, 그녀 자신의 삶 전체를 압축한 선언이었다. 작곡가 샤를 뒤몽이 처음 이 곡을 들고 왔을 때 피아프는 즉시 자신의 곡이라고 느꼈다고 전기 작가들은 기록한다.", "피아프는 1963년 세상을 떠났다. 향년 47세였다. 짧은 생애였지만, 그녀의 삶에서 가장 빛나는 노래들은 모두 '무너진 이후'에 나왔다. 회복이 원상복구가 아니라 변형이었기에, 그 노래들은 시간이 지나도 낡지 않는다.", "피아프의 이야기가 전하는 것은 '강해져라'는 메시지가 아니다. 부서진 채로 무대에 섰을 때, 그 부서짐 자체가 예술이 되었다는 사실이다. 완전해지기를 기다리는 것이 아니라, 지금 이 상태 그대로 다시 시작하는 것—그것이 피아프가 우리에게 남긴 진짜 레슨이다."],
      closing: "무너진 뒤에도 무대에 오를 수 있다.\n완전해지길 기다리지 않아도 된다.\n균열이 있어야 소리가 더 깊이 울린다.\n지금 이 상태 그대로, 다시 시작해도 된다.",
      analysis: {
        insight: { icon: "💡", text: "회복은 원래대로 돌아가는 것이 아니라, 부서진 자리를 품은 채 더 깊어지는 것이다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "의사들은 '무대에 서지 말라'고 했고, 피아프는 카네기홀에 갔다. 처방과 결과가 완전히 어긋났는데, 결과가 옳았다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "그녀의 가장 빛나는 노래들이 모두 '무너진 이후'에 나왔다는 사실—완벽했을 때가 아니라 가장 힘들었을 때 가장 깊은 것을 꺼냈다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "에디스 피아프(Édith Piaf, 1915–1963) / Carolyn Burke 《No Regrets: The Life of Édith Piaf》(2011), David Looseley 《Édith Piaf: A Cultural History》(2015)를 바탕으로 재서술했습니다.",
      },
      curatorNote: "이 이야기를 고른 이유는 단 하나입니다. '지금 내 상태로는 아직 안 된다'고 느끼는 분들께 드리고 싶었습니다. 피아프는 완치되고 무대에 오른 것이 아니라, 부서진 채로 올라가서 역대 최고의 공연을 했습니다. 준비가 되지 않은 것 같은 바로 지금, 사실 가장 깊은 무언가를 꺼낼 수 있는 순간일지도 모릅니다.",
      qna: {
        question: "당신이 '다시 시작하기 위해 완전해지기를 기다리고 있는' 것이 있다면 무엇인가요?",
        answer: "우리는 흔히 준비가 되면 시작하겠다고 말합니다. 그런데 피아프의 사례는 그 순서가 반대일 수 있음을 보여줍니다. 시작하는 행위 자체가 준비를 만들어냅니다. 부서진 상태를 먼저 없애려 하기보다, 그 상태 그대로 한 발 내딛는 것이 때로는 더 강력한 출발점이 됩니다. 완전해지기를 기다리는 동안 우리가 잃는 것은 시간만이 아니라, 바로 그 균열에서만 나올 수 있었던 깊이입니다."
      },
      publishedDate: "2026년 7월 17일",
    },

    }
  },
  {
    weekLabel: "2026년 7월 1주 (7/6–7/10)",
    weekStart: "2026-07-06",
    stories: {

    /* ═══ 월요일 — 역사·감동 (PRIMARY: 감동) ═══ */
    1: {
      title: "이타미 준의 돌 하나",
      category: "역사·감동",
      primaryType: "감동",
      types: ["감동", "통찰"],
      image: null,
      svgKey: null,
      body: ["1937년 오사카에서 태어난 유동룡(柳東龍)은 일본 이름 '이타미 준(伊丹潤)'으로 건축 인생을 살았다. 재일조선인 2세였던 그는 무사시노 미술대학을 졸업한 뒤 1969년 자신의 설계사무소를 열었다. 한국 국적자가 일본에서 건축 면허를 취득하는 일은 당시 제도적으로 막혀 있었고, 그는 수십 년 동안 면허 없이 '건축가'라는 이름을 달 수 없었다.", "1970년대 일본 건축계에서 이름을 얻기 시작했을 때도 그는 늘 경계인이었다. 일본 사람도 아니고, 한국에서 자란 한국인도 아닌 사람. 어느 쪽 건축계에서도 '우리 편'으로 완전히 받아들여지지 않았다. 그는 그 빈틈에서 오히려 자신의 언어를 만들기로 했다.", "전환점은 1990년대 제주도에서 왔다. 제주의 현무암, 바람, 물빛을 처음 마주한 그는 오랫동안 자리를 떠나지 않았다고 한다. 그는 훗날 제주의 풍경을 두고 '여기서 나는 무엇을 더할 수 없다는 것을 깨달았다'는 취지로 말했다. 덜어내는 건축, 땅에 귀를 기울이는 건축이 그의 원칙이 되었다.", "제주 포도호텔(2001년), 방주교회(2009년)는 그 철학의 결정이었다. 돌담을 허물지 않고 건물을 그 안에 앉히고, 지붕을 낮춰 하늘이 더 넓어 보이게 했다. 제주 사람들이 수백 년 쌓아온 돌 쌓기 방식을 그는 면밀히 공부했고, 현지 석공들과 함께 손으로 하나씩 쌓았다.", "방주교회는 연못 위에 떠 있는 형태다. 건물은 물에 비치고, 바람이 불면 그 반영이 흔들린다. 완공 이후 세계 건축 매체들이 앞다퉈 소개했지만, 이타미 준은 거창한 설명 대신 이렇게 말했다고 전해진다. '제주의 돌과 바람이 설계했고, 나는 그것을 받아 적었을 뿐이다.'", "그가 평생 품고 산 질문은 '나는 어느 나라 사람인가'가 아니라 '나는 어떤 건축가인가'였다. 재일조선인이라는 정체성은 상처이기도 했지만, 어느 유행에도 완전히 속하지 않아도 된다는 자유이기도 했다. 그는 르 코르뷔지에도, 미스 반 데어 로에도 아닌, 이타미 준으로 남았다.", "2009년 한국 정부는 그에게 대한민국 은관문화훈장을 수여했다. 일본에서 나고 자란 재일조선인 건축가가 제주의 땅에 남긴 건물들로 받은 상이었다. 시상식장에서 그는 특유의 과묵함으로 고개를 숙였을 뿐이었다고 한다.", "이타미 준은 2011년 6월 26일, 74세로 세상을 떠났다. 그가 남긴 건물들은 지금도 제주 바람 속에 서 있다. 포도호텔의 돌담 사이로 아침 햇살이 들어오고, 방주교회의 연못은 계절마다 다른 하늘을 담는다. 그 공간들은 설계자의 이름보다 오래, 그리고 더 크게 말하고 있다.", "그의 딸 유이화 감독은 2019년 다큐멘터리 《이타미 준의 바다》를 완성했다. 영화는 아버지의 건축 언어와 재일조선인으로서의 삶을 함께 들여다본다. 경계에 선 사람이 어떻게 경계 자체를 작품으로 바꾸는지를 가장 가까이서 본 딸의 시선이었다.", "경계인은 어느 쪽에도 속하지 못한 사람이 아니라, 두 세계를 동시에 볼 수 있는 사람이다. 이타미 준은 그 시선으로 돌 하나, 바람 한 줄기를 놓치지 않았다. 그리고 그것들을 모아 누구도 흉내 낼 수 없는 자신만의 집을 지었다."],
      closing: "속하지 못한 자리가 때로 가장 넓은 자리다.\n뿌리 없음이 아니라, 어디서든 뿌리내릴 수 있음.\n돌 하나를 제자리에 놓는 사람이 결국 집을 짓는다.\n당신의 경계는 어쩌면 당신만의 언어다.",
      analysis: {
        insight: { icon: "💡", text: "어디에도 완전히 속하지 못한 경계의 자리가, 오히려 누구도 닿지 못한 고유한 언어를 낳는다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "일본 건축계에서 '한국인'이었고 한국에서는 '일본에서 온 사람'이었으니, 정체성 혼란이 특기가 되어버린 셈이다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "아버지의 건물 앞에 서서 카메라를 든 딸 — 말로 못 했던 것들이 돌과 물에 이미 다 적혀 있었다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "이타미 준(伊丹潤, 유동룡, 1937–2011) / 유이화 감독 《이타미 준의 바다》(2019), 국립현대미술관 이타미 준 회고전 도록(2014), 건축문화 잡지 《Space》 이타미 준 특집호를 바탕으로 재서술했습니다.",
      },
      curatorNote: "이타미 준을 처음 알게 된 건 제주 방주교회 사진 한 장 때문이었습니다. '누가 이걸 지었지?' 하고 찾아 들어갔더니, 이렇게 단단한 삶이 있었습니다. 어느 쪽에도 완전히 속하지 못했지만 그 덕분에 아무도 못 따라 하는 언어를 가진 사람. 오늘 월요일 아침, 내가 서 있는 경계가 사실은 가장 좋은 자리일 수도 있다는 생각을 함께 가져가시면 좋겠습니다.",
      qna: {
        question: "당신이 '어디에도 딱 맞지 않는다'고 느끼는 자리는 어디인가요?",
        answer: "이타미 준은 그 어긋남을 고치려 하지 않았습니다. 대신 그 자리에서 보이는 것들을 끝까지 바라봤습니다. 딱 맞지 않는 자리는 불편하지만, 한쪽에 완전히 속한 사람은 볼 수 없는 것들이 거기서 보입니다. 어쩌면 우리가 '나는 왜 여기서 이방인 같지?'라고 느끼는 순간이, 남들과 다른 무언가를 만들 수 있는 가장 좋은 위치에 서 있는 순간일지 모릅니다."
      },
      publishedDate: "2026년 7월 6일",
    },

    /* ═══ 화요일 — 역사·유머 (PRIMARY: 유머) ═══ */
    2: {
      title: "조지 프라이스의 방정식",
      category: "역사·유머",
      primaryType: "유머",
      types: ["유머", "통찰"],
      image: null,
      svgKey: null,
      body: ["1967년 가을, 뉴욕의 한 연구소에서 일하던 화학자 조지 프라이스(George Price)는 느닷없이 결심을 하나 세웠다. 진화생물학을 독학하겠다는 것이었다. 전공도 아니고, 초청도 없었다. 그저 '이타성이 어떻게 진화했는가'라는 질문이 머릿속을 떠나지 않았을 뿐이다.", "프라이스는 마흔다섯 살이었다. 화학·물리학을 거쳐 저널리즘까지 기웃거린 이력의 소유자가, 이번에는 생물학 논문 더미를 책상에 쌓아 올렸다. 주변 사람들이 보기엔 중년의 이상한 취미처럼 보였을 것이다.", "그런데 몇 달을 파고들던 그는 무언가 이상한 것을 발견했다. 당시 진화생물학자들이 '혈연 선택'을 설명하는 방식이 제각각이고, 수학적으로 통일된 언어가 없다는 것이었다. 프라이스는 고개를 갸웃했다. 전공자들이 수십 년 연구한 분야에, 비전공자 눈에도 구멍이 보였던 것이다.", "그는 혼자 계산을 시작했다. 노트에 기호를 채워나가다 어느 순간 손을 멈췄다. 자연선택 전체를 단 하나의 공식으로 표현할 수 있다는 사실을 깨달은 것이다. 훗날 '프라이스 방정식(Price Equation)'으로 불리게 될 그 식은, Δz̄ = Cov(w, z)/w̄ + E(wΔz)/w̄ 라는 단순한 형태였다.", "1970년, 프라이스는 이 결과를 《Journal of Theoretical Biology》에 투고했다. 논문 제목은 'Selection and Covariance'. 편집자들은 당혹스러웠다. 저자 소개란에 적힌 소속은 생물학과가 아니었고, 논문 어디에도 지도교수나 연구비 출처가 없었다. 그냥 런던의 어느 아파트 주소만 달랑 적혀 있었다.", "논문은 게재되었다. 그리고 혈연 선택 이론의 대가 W. D. 해밀턴(W. D. Hamilton)이 그 논문을 읽었다. 해밀턴은 충격을 받았다. 자신이 수년에 걸쳐 직관적으로 다뤄온 개념들이, 이 낯선 화학자의 손에서 우아한 수식 하나로 정리되어 있었기 때문이다. 해밀턴은 프라이스에게 연락을 취했고, 두 사람은 이후 공동 연구를 시작했다.", "그런데 이야기는 여기서 예상치 못한 방향으로 꺾인다. 방정식을 완성한 프라이스는 이타성을 수학으로 증명한 뒤, 정작 본인이 이타성을 '실험'하기 시작했다. 런던 거리의 노숙인들에게 자신의 집을 내주고, 가진 돈을 나눠줬다. 연구비도, 직장도 없이. 방정식을 쓴 사람이 방정식의 피실험자가 된 셈이었다.", "주변에서는 말렸다. 하지만 프라이스는 진화가 이타성을 만들어냈다면, 자신도 그것을 제대로 살아봐야 한다고 생각했던 것 같다. 수식을 증명하는 것과 수식대로 사는 것은 전혀 다른 일이었지만, 그는 두 가지를 모두 해보려 했다.", "프라이스 방정식은 오늘날 진화생물학의 핵심 도구로 쓰인다. 혈연 선택, 집단 선택, 문화 진화까지 이 하나의 틀로 분석한다. 생물학 교과서 어디엔가는 반드시 등장하는 그 공식의 아래에, 전공자도 아니고 지원금도 없이 런던 아파트에서 노트를 채우던 한 중년 남자의 이름이 붙어 있다.", "아무도 시키지 않았다. 학위가 요구된 것도, 소속이 필요했던 것도 아니었다. 그냥 궁금했고, 계산했고, 제출했다. 세상에서 가장 단순한 연구 방법론이었다.", "때로는 그 분야의 '바깥 사람'이 가장 선명하게 구멍을 본다. 프라이스는 아무것도 가진 것이 없었기에, 오히려 가장 직선으로 핵심에 닿았다."],
      closing: "자격증이 없어도 질문은 할 수 있다.\n전공이 없어도 계산은 할 수 있다.\n아무도 부르지 않아도 문은 두드릴 수 있다.\n그리고 가끔, 그 노크가 역사를 바꾼다.",
      analysis: {
        insight: { icon: "💡", text: "가장 날카로운 시선은 종종 그 분야를 '처음 보는 눈'에서 나온다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "진화에서 이타성이 어떻게 작동하는지 완벽히 증명한 사람이, 그 다음엔 직접 무일푼 이타주의자가 되었다—방정식이 자기 자신에게 적용된 것이다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "아무도 부르지 않은 자리에 스스로 찾아가, 아무도 예상치 못한 답을 내놓은 그 고요한 용기.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "조지 프라이스(George Price, 1922–1975) / Oren Harman 《The Price of Altruism》(2010, W. W. Norton)을 바탕으로 재서술했습니다.",
      },
      curatorNote: "조지 프라이스의 이야기를 처음 접했을 때, '이 사람은 대체 어느 칸에 넣어야 하나' 싶었습니다. 과학자인가, 철학자인가, 아니면 그냥 지독하게 진지한 아마추어인가. 그런데 결국 그 '칸 없음'이 그를 특별하게 만든 것 같습니다. 자격이 없다고 느껴지는 날, 프라이스를 떠올려 보세요. 그는 자격을 기다리지 않았습니다.",
      qna: {
        question: "당신이 오래 궁금해하면서도 '내 분야가 아니라서'라고 미뤄둔 질문이 있나요?",
        answer: "프라이스는 '내 분야가 아니다'라는 생각을 출발점이 아니라 그냥 무시했습니다. 모든 질문에는 원래 주인이 없습니다. 궁금하다면 그것으로 충분한 자격입니다. 오늘 미뤄둔 그 질문을 노트 한 귀퉁이에 적어보는 것, 그게 프라이스가 시작한 방법과 정확히 같습니다."
      },
      publishedDate: "2026년 7월 7일",
    },

    /* ═══ 수요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
    3: {
      title: "버질 톰슨의 아침 아홉 시",
      category: "역사·통찰",
      primaryType: "통찰",
      types: ["통찰", "감동"],
      image: null,
      svgKey: null,
      body: ["1940년대 뉴욕, 《뉴욕 헤럴드 트리뷴》의 음악 평론란은 미국에서 가장 두려운 지면 중 하나였습니다. 한 줄의 혹평이 연주자의 경력을 꺾을 수 있었고, 한 줄의 찬사가 무명 작곡가를 하룻밤에 띄울 수도 있었습니다. 그 지면의 주인은 작곡가 버질 톰슨(Virgil Thomson)이었습니다.", "톰슨은 1940년 편집장 제프리 파슨스의 제안으로 음악 평론 수석 편집자 자리를 맡았습니다. 당시 그는 이미 오페라 《네 명의 성인이 세 막에서》(Four Saints in Three Acts)로 작곡가로서의 명성을 쌓고 있었지만, 평론 지면에서 그의 이름은 완전히 새로운 의미를 갖게 되었습니다.", "톰슨이 평론을 쓰는 방식은 동료들을 당혹스럽게 만들었습니다. 그는 매일 아침 아홉 시, 전날 밤 공연을 마친 뒤 귀가해 단 몇 시간 잠을 자고 일어나 타자기 앞에 앉았습니다. 평론 한 편을 쓰는 데 걸리는 시간은 보통 한 시간 남짓이었습니다. 주변 동료들이 며칠씩 고심하는 동안, 그는 이미 다음 공연장으로 향하고 있었습니다.", "그의 비결은 단순했습니다. 톰슨은 공연장에서 메모를 거의 하지 않았습니다. 대신 그는 음악을 들으며 자신의 몸이 반응하는 방식에 집중했습니다. 연주가 끝난 직후 로비에서 코트를 걸치는 그 짧은 순간, 그는 이미 내일 쓸 첫 문장을 머릿속에 정리해 두었습니다.", "톰슨의 평론이 힘을 가졌던 이유는 그가 작곡가였기 때문만이 아니었습니다. 그는 찬사와 혹평을 같은 온도로 썼습니다. 아르투로 토스카니니처럼 이미 신화가 된 지휘자에 대해서도 그는 서슴없이 과잉 해석의 위험을 지적했고, 무명의 젊은 연주자에게는 정확한 언어로 가능성을 기술했습니다. 권위에 눌리지 않는 그 태도가 오히려 독자들에게 신뢰를 주었습니다.", "1947년, 그는 14년간 써온 평론들을 묶어 《음악의 오른편과 왼편》(The Musical Scene, 1945)을 포함한 여러 권의 책으로 펴냈습니다. 편집자들은 원고를 거의 손대지 않아도 됐습니다. 매일 아침 아홉 시에 한 시간 만에 완성된 글들이었지만, 문장 하나하나는 조각처럼 단단했습니다.", "한번은 젊은 음악 기자가 톰슨에게 물었습니다. 어떻게 그토록 빠르고 정확하게 쓸 수 있느냐고. 톰슨은 잠시 생각하다가 이렇게 대답했다고 전해집니다. 자신이 들은 것을 정직하게 쓰는 것뿐이라고, 그리고 오래 붙들수록 정직함은 희미해진다고. 이 일화는 그의 지인들 사이에서 여러 차례 회자되었습니다.", "톰슨이 《뉴욕 헤럴드 트리뷴》 평론 편집자 자리에서 물러난 것은 1954년이었습니다. 14년간 그가 쓴 평론의 수는 수천 편에 달했습니다. 그가 자리를 떠난 뒤, 후임자들은 하나같이 그 지면의 무게를 새삼 실감했다고 했습니다. 매일 아침 아홉 시에 한 시간이면 끝나던 일이, 사실은 평생의 귀와 용기로 완성되는 일이었다는 것을.", "톰슨은 1989년 아흔세 살의 나이로 뉴욕에서 세상을 떠났습니다. 그가 남긴 것은 음악 그 자체만큼이나 분명한 한 가지 교훈이었습니다. 완벽한 준비를 기다리다 보면 아무것도 쓰지 못한다는 것, 그리고 매일 아침 앉아서 정직하게 한 문장을 시작하는 것이 결국 가장 단단한 작업이 된다는 것을.", "그의 삶은 재능에 관한 이야기가 아니었습니다. 매일 아침 같은 자리에 앉는 습관에 관한 이야기였습니다. 거창한 영감을 기다리지 않고, 전날 밤 자신의 귀가 느낀 것을 그대로 옮기는 것. 그것이 14년을 버티게 한 힘이었습니다."],
      closing: "완벽한 순간은 오지 않는다.\n아침 아홉 시, 그냥 앉는 것이 시작이다.\n정직하게 한 문장을 쓰는 것,\n그것이 결국 아무도 빼앗을 수 없는 작업이 된다.",
      analysis: {
        insight: { icon: "💡", text: "영감을 기다리는 것이 아니라, 매일 같은 자리에 앉아 정직하게 시작하는 습관이 평생의 작업을 만든다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "하루 한 시간 만에 쓴 평론이 14년간 뉴욕 음악계를 지배했다는 사실—세상에서 가장 비싼 한 시간은 나머지 23시간이 준비한 한 시간이다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "매일 아침 아홉 시, 전날 밤의 음악을 아직 몸에 품고 앉아 첫 문장을 치는 그 순간—그것이 결국 아무도 흉내 낼 수 없는 그만의 목소리가 되었다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "버질 톰슨(Virgil Thomson, 1896–1989) / Anthony Tommasini, 《Virgil Thomson: Composer on the Aisle》(1997, W. W. Norton)을 바탕으로 재서술했습니다.",
      },
      curatorNote: "버질 톰슨의 이야기를 고른 건, 그가 천재여서가 아니라 그가 매일 앉았기 때문입니다. 글이든 일이든 음악이든, 우리가 두려워하는 건 대개 시작의 순간입니다. 톰슨은 그 순간을 매일 아홉 시로 고정해 버렸습니다. 오늘 당신의 아홉 시는 언제인가요?",
      qna: {
        question: "지금 당신이 '준비가 되면 시작하겠다'고 미루고 있는 일은 무엇인가요?",
        answer: "톰슨의 방식은 준비가 완성되기를 기다리지 않는 것이었습니다. 그는 전날 밤 귀로 들은 것을 이튿날 아침 그대로 옮겼습니다. 완벽한 문장이 아니라 정직한 문장이 목표였기 때문입니다. 미루는 일의 대부분은 사실 준비 부족이 아니라, 틀릴 것에 대한 두려움에서 비롯됩니다. 매일 같은 시간에 그냥 앉는 것, 그 단순한 행동이 두려움을 조금씩 잠재우는 가장 확실한 방법입니다."
      },
      publishedDate: "2026년 7월 8일",
    },

    /* ═══ 목요일 — 역사·감동 (PRIMARY: 감동) ═══ */
    4: {
      title: "레너드 체셔의 마지막 동승자",
      category: "역사·감동",
      primaryType: "감동",
      types: ["감동", "통찰"],
      image: null,
      svgKey: null,
      body: ["1945년 8월 9일 오전, 영국 공군 그룹 캡틴 레너드 체셔는 나가사키 상공에서 B-29 폭격기 편대를 내려다보고 있었다. 그는 그날 공식 관측관 자격으로 탑승했다. 원자폭탄 투하의 증인이 되는 임무였다.", "체셔는 이미 전쟁에서 100회 이상의 출격 임무를 완수한 전설적 조종사였다. 영국 최고의 무공훈장인 빅토리아 십자훈장을 비롯해 4개의 Distinguished Service Order를 받은 인물이었다. 그러나 나가사키 상공에서 목격한 것은 그의 내면을 완전히 뒤흔들어 놓았다.", "폭발의 충격파가 관측기까지 밀려왔을 때, 체셔는 자신이 무엇을 보고 있는지를 직감했다. 수만 명의 삶이 한순간에 증발하는 장면이었다. 그 후 그는 한동안 말을 잃었다고 동료 탑승자들이 기록했다.", "전쟁이 끝난 뒤 체셔는 훈장을 벗고 영웅의 자리에서 내려왔다. 그에게는 새로운 질문이 생겼다. 전쟁터에서 살아남은 자신이 무엇을 해야 하는가. 그 질문에 그는 오랫동안 답을 찾지 못했다.", "1948년, 체셔는 전혀 다른 방식으로 그 답에 다가섰다. 불치병을 앓는 한 남성 아서 다이슨이 갈 곳이 없다는 사실을 알게 된 그는, 자신이 살던 낡은 저택에 그를 들였다. 간호사도 의료 시설도 없었다. 체셔 혼자였다.", "아서 다이슨이 그 저택에서 숨을 거두기까지 몇 달간, 체셔는 직접 그의 곁을 지켰다. 씻기고, 먹이고, 이야기를 들었다. 세상에서 가장 화려한 훈장을 단 군인이 가장 조용하고 낮은 자리에서 한 사람의 마지막을 돌봤다.", "이것이 '체셔 홈'의 시작이었다. 한 명에서 시작된 그 집은 이후 영국 전역으로, 그리고 세계 54개국으로 퍼져 나갔다. 중증 장애인과 불치병 환자들을 위한 거주 공동체, 체셔 재단이었다. 체셔는 재단의 이름조차 자신의 이름을 붙이는 것을 오랫동안 거부했다.", "1959년에는 인도의 수도자 수 라이더와 결혼했다. 수 라이더 역시 나치 강제수용소 생존자들을 돕는 활동을 해온 인물이었다. 두 사람은 각자의 재단을 유지하면서, 평생을 타인의 존엄을 지키는 일에 함께 바쳤다.", "체셔는 말년에 루게릭병 진단을 받았다. 서서히 몸의 자유를 잃어가면서도 그는 활동을 멈추지 않았다. 1992년 세상을 떠날 때까지 그는 자신이 세운 공동체를 직접 방문하고, 입소자들의 손을 잡았다. 날개를 접은 조종사는 결국 발로 걷는 사람이 되었다.", "나가사키 상공에서 무언가를 잃은 한 사람이, 그 잃음을 통해 전혀 다른 방식으로 수만 명의 삶에 스며들었다. 그가 처음 받아들인 환자는 단 한 명이었다. 그러나 그 한 명이 세계를 바꿨다."],
      closing: "백 번의 출격보다 한 번의 동행이 더 길게 남는다.\n영웅의 자격은 훈장이 아니라 낮아지는 능력에 있다.\n파국을 목격한 눈이 가장 조심스럽게 사람을 바라본다.\n한 명을 돌보는 일이 세계를 돌보는 일이 되기도 한다.",
      analysis: {
        insight: { icon: "💡", text: "가장 높이 날았던 사람이 가장 낮은 곳으로 내려오기로 결심했을 때, 비로소 진짜 비행이 시작되었다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "54개국에 퍼진 재단의 이름이 자기 이름인데, 정작 본인은 그 이름 붙이기를 제일 오래 거부한 사람이었다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "한 남자의 마지막 몇 달을 혼자 곁에서 지킨 것, 그 작은 시작이 반세기 뒤 수십만 명의 존엄이 되었다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "Leonard Cheshire(1917–1992) / Richard Morris 《Cheshire: The Biography of Leonard Cheshire VC》(2000) 및 Cheshire Foundation 공식 기록을 바탕으로 재서술했습니다.",
      },
      curatorNote: "체셔의 이야기를 처음 접했을 때 가장 놀란 것은 '규모'가 아니라 '순서'였습니다. 재단을 만들기로 결심하고 환자를 받은 게 아니라, 갈 곳 없는 한 사람을 집에 들인 것이 재단이 되었습니다. 거창한 계획 없이 그냥 지금 눈앞의 사람에게 응답한 것, 그것이 시작이었습니다. 지금 우리가 '뭔가 큰일을 해야 의미 있다'고 느끼며 멈춰 있다면, 체셔의 순서를 떠올려 보시길 바랍니다.",
      qna: {
        question: "내 앞에 있는 단 한 사람에게 제대로 응답한 적이 언제였나요?",
        answer: "체셔는 '세상을 바꾸겠다'고 선언하지 않았습니다. 그저 지금 이 사람이 갈 곳이 없다는 사실 앞에서 자기 문을 열었습니다. 우리가 의미 있는 일을 미루는 이유는 대부분 '아직 준비가 안 됐다'는 느낌 때문인데, 체셔의 집에는 의료 장비도 간호 인력도 없었습니다. 준비가 아니라 응답이 먼저였습니다. 지금 내 눈앞에 있는 한 사람에게 충분히 응답하는 것, 그것이 가장 큰 일의 시작일 수 있습니다."
      },
      publishedDate: "2026년 7월 9일",
    },

    /* ═══ 금요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
    5: {
      title: "허마이오니 그레인저의 원형, 도라 러셀의 학교",
      category: "역사·통찰",
      primaryType: "통찰",
      types: ["통찰", "감동"],
      image: null,
      svgKey: null,
      body: ["1927년 여름, 영국 서섹스의 한 오래된 저택 앞에 한 여성이 섰다. 도라 러셀은 두 아이를 데리고 비컨 힐 스쿨을 열었다. 당시 영국 교육부 관리들은 코웃음을 쳤다. 여자가, 그것도 공식 교원 자격증 없이, 아이들에게 '자유'를 가르치겠다고 했으니까.", "도라 러셀(1894~1986)은 철학자 버트런드 러셀의 아내였지만, 그 이름표에 자신을 가두지 않았다. 케임브리지 거튼 칼리지를 우등으로 졸업했고, 페미니즘과 산아제한 운동의 최전선에 섰던 사상가였다. 비컨 힐 스쿨은 그녀의 실험실이었다.", "당시 영국 학교에서는 체벌이 일상이었고, 아이들은 죄다 같은 속도로 같은 것을 외워야 했다. 도라는 정반대로 갔다. 아이들이 학교 규칙을 스스로 투표로 정하게 했다. 수업 중에 질문을 멈추지 않아도 됐다. 흙을 파도 되고, 나무에 올라도 됐다.", "그렇다고 방임은 아니었다. 도라는 아이들이 민주주의를 '배우는' 게 아니라 '사는' 것이어야 한다고 믿었다. 규칙을 정한 것은 아이들이었지만, 그 규칙을 왜 지켜야 하는지를 함께 토론하는 것은 도라의 몫이었다. 그녀는 교사가 아니라 '더 오래 산 동료'로 교실에 있었다.", "학교는 재정난을 달고 살았다. 1930년대 경제 대공황이 닥치자 학부모들이 줄줄이 학비를 내지 못했다. 도라는 자신의 인세와 강연료를 털어 넣었다. 1932년 버트런드 러셀과 이혼한 뒤에는 오롯이 혼자서 학교를 꾸려야 했다.", "외부의 시선은 가혹했다. 언론은 비컨 힐을 '무정부주의 학교'라 불렀다. 이웃 주민들은 아이들이 맨발로 뛰어다닌다며 눈살을 찌푸렸다. 교육 당국은 정기적으로 감사를 나와 트집을 잡으려 했다. 도라는 그때마다 서류를 정비하고, 토론으로 맞섰다.", "2차 세계대전이 터지자 학교 건물 일부를 피난민에게 내줘야 했다. 그럼에도 도라는 1943년까지 학교 문을 닫지 않았다. 16년이었다. 자본도 없고, 공식 지원도 없고, 배우자도 떠난 자리에서 16년을 버텼다.", "비컨 힐을 거쳐 간 아이들은 훗날 예술가, 과학자, 사회운동가가 됐다. 학교는 폐교했지만 그 교육 철학은 영국 진보 교육 운동의 씨앗이 됐다. 도라 자신은 1983년, 아흔을 바라보는 나이에도 핵무장 반대 시위에 참여했다.", "도라 러셀은 자신의 회고록 《더 테이프스트리 오브 라이프(The Taestry of Life)》에서 학교 시절을 이렇게 회고했다. 완벽한 조건이 갖춰질 때까지 기다렸다면 그 학교는 결코 열리지 않았을 것이라고. 문을 먼저 열었고, 그다음을 채워 나갔다고.", "비컨 힐의 진짜 유산은 건물도, 졸업생 명단도 아니다. '아이는 통제의 대상이 아니라 설득의 대상'이라는 믿음이다. 그 믿음을 도라는 이론서가 아니라 16년의 일상으로 증명했다.", "1986년, 도라 러셀은 91세를 일기로 세상을 떠났다. 부고 기사들은 대부분 그녀를 '버트런드 러셀의 전 아내'로 소개했다. 그러나 그녀가 가르친 아이들의 기억 속에서 도라는 언제나 이름 앞에 아무것도 붙이지 않아도 되는 사람이었다."],
      closing: "완벽한 조건은 오지 않는다.\n그러니 지금 있는 것으로 시작하면 된다.\n문을 열고 나서야 보이는 것들이 있다.\n도라는 그것을 16년으로 보여 줬다.",
      analysis: {
        insight: { icon: "💡", text: "이상적인 환경을 기다리는 것이 아니라, 불완전한 조건 속에서 먼저 시작하는 것이 변화의 실제 작동 방식이다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "언론은 그 학교를 '무정부주의 학교'라 불렀는데, 아이들은 투표로 규칙을 정하고 있었다. 무정부주의치고는 꽤 민주적이었다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "이혼 후 혼자서 재정난과 비판을 감당하면서도 16년간 학교 문을 닫지 않았다는 사실 하나가, 어떤 철학 강연보다 더 깊이 마음을 건드린다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "도라 러셀(Dora Russell, 1894~1986) / Dora Russell, 《The Tamarisk Tree》 Vol. 2 (1980); Sheila Turcon의 비컨 힐 스쿨 관련 연구 및 버트런드 러셀 아카이브(McMaster University) 소장 자료를 바탕으로 재서술했습니다.",
      },
      curatorNote: "도라 러셀 이야기를 고른 건, '조건이 안 된다'는 말을 입에 달고 사는 사람들에게 건네고 싶어서였습니다. 그녀는 돈도, 배우자의 지원도, 세상의 인정도 없는 상태에서 그냥 문을 열었습니다. 금요일 오후, 당신이 미루고 있는 그 작은 일 하나를 떠올려 보세요. 도라라면 이미 시작했을 겁니다.",
      qna: {
        question: "나는 지금 어떤 '완벽한 조건'을 기다리며 시작을 미루고 있는가?",
        answer: "사람들은 흔히 준비가 충분히 됐을 때 시작하려 합니다. 그런데 준비의 끝은 좀처럼 오지 않습니다. 도라 러셀의 사례가 보여 주는 것은, 시작 자체가 준비를 앞당긴다는 역설입니다. 문을 열면 채울 것들이 보이고, 채우다 보면 어느새 16년이 쌓입니다. '지금 가진 것으로 할 수 있는 가장 작은 한 걸음'이 곧 시작입니다."
      },
      publishedDate: "2026년 7월 10일",
    },

    }
  },
  {
    weekLabel: "2026년 6월 5주 (6/29–7/3)",
    weekStart: "2026-06-29",
    stories: {

    /* ═══ 월요일 — 역사·감동 (PRIMARY: 감동) ═══ */
    1: {
      title: "엘리자베스 블랙웰의 첫 번째 강의실",
      category: "역사·감동",
      primaryType: "감동",
      types: ["감동", "통찰"],
      image: null,
      svgKey: null,
      body: ["1847년 가을, 뉴욕 주 제네바 의과대학 강의실에 낯선 편지 한 통이 도착했다. 발신인은 엘리자베스 블랙웰이라는 스물여섯 살의 여성이었다. 편지에는 단 하나의 요청이 담겨 있었다. 의대에 입학하게 해달라는 것이었다.", "당시 미국과 유럽의 의과대학 어디에서도 여성을 받아준 곳은 없었다. 블랙웰은 이미 열두 곳에서 거절을 당한 뒤였다. 거절 편지에는 '여성의 체질상 불가능하다', '동료 남학생들이 불편해할 것이다', '의학은 여성의 신성한 본성을 해칠 것이다' 같은 문구들이 적혀 있었다.", "제네바 의과대학 학장 찰스 리는 결정을 혼자 내리지 않겠다며 재학생 전원에게 투표를 맡겼다. 학생들은 이것이 장난이라고 생각했다. 누군가가 '받아들이면 재미있겠다'며 웃으며 찬성표를 던졌고, 분위기에 휩쓸린 학생 전원이 찬성했다. 찬성 이유가 진지하지 않았지만, 결과는 진지했다. 블랙웰의 입학이 허가되었다.", "1847년 11월 6일, 엘리자베스 블랙웰은 강의실 문을 열었다. 150명의 남학생이 일제히 그녀를 바라봤다. 몇몇은 비웃는 표정을 숨기지 않았다. 해부학 실습 첫날, 교수는 블랙웰에게 조용히 말했다. 이 수업은 여성이 보기엔 너무 '자극적'이니 나가 있어도 좋다고. 블랙웰은 자리에 그대로 앉아 노트를 펼쳤다.", "그 뒤 2년이 흘렀다. 블랙웰은 한 번도 결석하지 않았다. 성적은 줄곧 최상위였다. 처음에 비웃던 남학생들은 하나둘 그녀에게 노트를 빌려달라고 부탁하기 시작했다. 졸업식 날, 동기들은 기립박수를 쳤다. 1849년 1월 23일, 엘리자베스 블랙웰은 미국 최초로 의학 학위를 받은 여성이 되었다.", "그러나 졸업 이후의 길은 더 험했다. 뉴욕의 병원들은 어떤 자리도 내주지 않았다. 파리로 건너갔지만 의사가 아닌 '조산사 학생' 자격만 허락받았다. 런던에서 임상 실습을 이어가던 중 불의의 사고로 한쪽 눈의 시력을 잃었다. 외과의의 꿈은 그렇게 닫혔다.", "그래도 블랙웰은 방향을 바꾸었을 뿐 멈추지 않았다. 1857년, 그녀는 여동생 에밀리 블랙웰, 그리고 동료 마리 자크로와 함께 뉴욕 빈민 여성·아동 진료소를 열었다. 진료비를 낼 수 없는 이민자 여성들이 문 앞에 줄을 섰다. 그곳에서 블랙웰은 단순히 병을 고친 것이 아니라, 위생·예방의학 개념을 대중에게 처음으로 가르쳤다.", "그녀는 훗날 런던 여자의과대학의 첫 번째 여성 교수가 되었다. 1869년 영국에 정착한 뒤 평생 의학교육과 공중보건 운동을 이어갔다. 블랙웰이 길을 열자, 이후 수십 년 사이 영국과 미국 양쪽에서 여성 의사의 숫자가 서서히 늘기 시작했다.", "1910년 5월, 여든아홉의 블랙웰은 스코틀랜드 해스팅스에서 조용히 눈을 감았다. 그녀가 처음 입학 허가를 받은 것이 장난 같은 투표 덕분이었다는 사실을 두고, 훗날 전기 작가들은 이렇게 썼다. '역사의 문은 때로 아무도 진지하게 열 생각이 없었을 때 열린다. 중요한 것은 그 문 앞에 서 있었던 사람이다.'", "오늘날 제네바 의과대학 터에는 블랙웰의 이름을 딴 기념물이 서 있다. 그리고 미국 의과대학원 재학생의 절반 이상이 여성이다. 그 첫 번째 강의실 문을 혼자 열고 들어간 스물여섯 살의 결정이, 지금 이 순간에도 조용히 이어지고 있다."],
      closing: "문이 잠겨 있을 때, 노크를 멈추지 않은 사람이 있었다.\n웃음거리가 될 것을 알면서도 자리에 앉아 노트를 펼쳤다.\n한쪽 눈을 잃어도 다른 길을 찾았다.\n그 사람 덕분에, 지금 우리가 이 문 안에 있다.",
      analysis: {
        insight: { icon: "💡", text: "문을 여는 사람은 반드시 '그 문을 열 자격이 있다고 인정받은 사람'일 필요가 없다. 그냥 끝까지 거기 서 있었던 사람이 여는 것이다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "역사상 가장 중요한 의학 입학 허가가 '재미있을 것 같아서' 찬성한 농담 같은 투표에서 나왔다는 사실, 진지함이 항상 이기는 건 아니다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "한쪽 눈을 잃고 외과의의 꿈이 닫힌 날, 그녀는 일기에 절망을 적는 대신 빈민 진료소 설립 계획을 적기 시작했다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "Elizabeth Blackwell (1821–1910) / Janice Nimura, 《The Doctors Blackwell》(2021), W. W. Norton & Company를 바탕으로 재서술했습니다.",
      },
      curatorNote: "엘리자베스 블랙웰의 이야기를 고른 것은, 이것이 '천재의 이야기'가 아니기 때문입니다. 거절을 열세 번 받고도 열네 번째 문을 두드린 이야기입니다. 시력을 잃고도 방향만 바꾼 이야기입니다. 지금 어딘가에서 문 앞에 서 있는 분이 계시다면, 이 이야기가 그 손에 조금의 힘이 되었으면 합니다.",
      qna: {
        question: "당신이 지금 두드리고 있지만 아직 열리지 않은 문은 무엇인가요?",
        answer: "블랙웰은 열두 번 거절당하고 열세 번째 편지를 보냈습니다. 그 문이 열린 이유는 그녀가 특별히 운이 좋아서가 아니라, 남들이 포기할 타이밍에 한 번 더 두드렸기 때문입니다. 지금 열리지 않는 문이 있다면 그것은 '당신이 틀렸다'는 신호가 아닐 수 있습니다. '아직 당신 차례가 오지 않았다'는 뜻일 수도 있습니다. 오늘 한 번만 더 노트를 펼쳐 보세요."
      },
      publishedDate: "2026년 6월 29일",
    },

    /* ═══ 화요일 — 역사·유머 (PRIMARY: 유머) ═══ */
    2: {
      title: "체임벌린의 왼쪽 다리",
      category: "역사·유머",
      primaryType: "유머",
      types: ["유머", "통찰"],
      image: null,
      svgKey: null,
      body: ["1863년 7월 2일, 게티즈버그 전투 이틀째 날 오후. 메인 주 출신 대학교수 조슈아 로렌스 체임벌린 중령은 리틀 라운드 탑 언덕 끝자락에 서 있었다. 그의 임무는 단 하나였다. 그 언덕을 지켜내는 것. 언덕을 잃으면 북군 전체 전선이 무너질 터였다.", "체임벌린은 전쟁 전까지 보든 칼리지에서 수사학과 현대언어학을 가르치던 사람이었다. 총 한 번 제대로 쏴본 적 없는 교수가, 어느 날 문득 전장에 서 있었다. 군 당국은 그를 교수로 남겨두려 했지만, 체임벌린 본인이 자원해 전선으로 왔다. 왜냐고? 그는 나중에 이렇게 말했다. 강의실에서 옳은 것을 가르쳤다면, 몸소 그 옳은 것을 해야 한다고 생각했기 때문이라고.", "그날 오후, 남군은 리틀 라운드 탑을 향해 다섯 차례 파상 공격을 퍼부었다. 체임벌린의 제20 메인 보병연대는 번번이 막아냈다. 그러나 여섯 번째 공격이 시작될 무렵, 탄약이 바닥났다. 병사들은 서로 눈을 마주쳤다. 말이 필요 없는 순간이었다.", "체임벌린은 계산했다. 후퇴하면 언덕을 잃는다. 제자리에 서면 탄약 없이 무너진다. 남은 선택지는 하나뿐이었다. 공격. 그는 총검을 꽂으라고 명령했다. 대학교수가 고안한 전술이라기엔 지나치게 대담했다. 어쩌면 그는 전술을 몰랐기 때문에 오히려 그 선택을 할 수 있었는지도 모른다.", "연대는 언덕 아래로 돌격했다. 기습에 당황한 남군은 흩어졌다. 리틀 라운드 탑은 지켜졌다. 훗날 많은 군사학자들은 이 순간을 게티즈버그 전투, 나아가 남북전쟁 전체의 분수령 중 하나로 꼽는다. 교수가 탄약이 없어서 내린 결정이, 역사의 방향을 바꿨다.", "체임벌린은 전쟁 내내 여섯 차례 부상을 입었다. 1864년 피터즈버그 전투에서는 골반을 관통하는 총상을 입어 전사 판정을 받았다. 율리시스 그랜트 장군은 전장에서 그를 즉시 준장으로 진급시켰다. 죽기 전에 표창을 주려 한 것이었다. 그런데 체임벌린은 죽지 않았다.", "그는 살아남아 메인 주지사를 네 차례 역임했고, 보든 칼리지 총장으로 돌아갔다. 그리고 그 골반 관통상의 후유증을 평생 달고 살았다. 정확히 50년 후인 1914년, 체임벌린은 결국 그 오래된 상처의 합병증으로 세상을 떠났다. 그는 남북전쟁 부상으로 인한 사망자 중 마지막 인물로 기록되어 있다.", "그의 죽음에 관해 가끔 이런 말이 전해진다. 1863년에 못 죽인 총알이, 50년을 기다렸다고. 물론 체임벌린 본인은 그 50년 동안 강의하고, 주지사 일 하고, 책 쓰고, 게티즈버그 참전자 기념행사에 참석하고, 꽤 바쁘게 지냈다. 총알은 기다렸을지 몰라도, 그는 기다리지 않았다.", "1893년, 체임벌린은 게티즈버그에서의 행동으로 명예 훈장을 받았다. 수상 소감에서 그는 자신의 병사들과 그날 함께 돌격한 모든 이들을 먼저 언급했다. 전술을 몰랐던 교수는, 적어도 감사하는 법은 알고 있었다.", "체임벌린이 남긴 회고록 《영혼의 통로(The Passing of the Armies)》에는 전쟁의 참혹함과 함께, 그 속에서 그가 발견한 인간의 존엄이 담겨 있다. 전장을 살아낸 사람이 쓴 글은, 강의실에서 쓴 글과는 결이 달랐다. 그는 옳다고 가르친 것을 직접 살아냈고, 살아낸 것을 다시 글로 남겼다."],
      closing: "탄약이 떨어진 순간, 그는 앞으로 걸었다.\n가장 무모한 선택이 가장 옳은 선택이었다.\n교수는 전술을 몰랐다. 그래서 살아남았다.\n그리고 50년을, 바쁘게 살았다.",
      analysis: {
        insight: { icon: "💡", text: "준비가 부족할 때 오히려 상식 밖의 선택을 할 수 있고, 그것이 때로 역사를 바꾼다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "총알이 50년을 기다리는 동안, 그는 주지사도 하고 총장도 했다. 총알 입장에서는 꽤 억울한 50년이었을 것이다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "옳다고 가르쳤다면 몸소 해야 한다고 믿었던 사람이, 정말로 그렇게 살다 갔다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "조슈아 로렌스 체임벌린(Joshua Lawrence Chamberlain, 1828~1914) / Alice Rains Trulock 《In the Hands of Providence》(1992), 체임벌린 본인 회고록 《The Passing of the Armies》(1915)을 바탕으로 재서술했습니다.",
      },
      curatorNote: "저는 이 이야기에서 '자격 없음'의 역설을 봤습니다. 체임벌린은 전술 전문가가 아니었기 때문에, 전문가라면 절대 택하지 않을 돌격을 택했고 그것이 전장을 뒤집었습니다. 우리가 어떤 일에 완전한 준비가 되어 있지 않다고 느낄 때, 어쩌면 그 '부족함'이 가장 창의적인 선택의 문을 열어줄지도 모릅니다. 탄약이 없어서 앞으로 달린 사람처럼, 오늘 가진 것으로 그냥 앞으로 가보는 것도 나쁘지 않습니다.",
      qna: {
        question: "준비가 덜 됐다는 이유로 미루고 있는 일이 있다면, 지금 당장 할 수 있는 '총검 돌격'은 무엇인가요?",
        answer: "체임벌린은 완벽한 준비가 갖춰질 때까지 기다리지 않았습니다. 탄약이 없다는 사실 자체를 역전의 계기로 삼았습니다. 우리가 '아직 준비가 안 됐다'고 느끼는 순간은, 사실 지금 가진 것으로 방향을 바꿔야 한다는 신호일 수 있습니다. 완벽한 조건을 기다리는 것은 때때로 아무것도 하지 않는 것과 같습니다. 지금 손에 있는 것, 지금 설 수 있는 자리에서 한 걸음 내딛는 것이 체임벌린식 돌격입니다."
      },
      publishedDate: "2026년 6월 30일",
    },

    /* ═══ 수요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
    3: {
      title: "해리 라이버먼의 붓",
      category: "역사·통찰",
      primaryType: "통찰",
      types: ["통찰", "감동"],
      image: null,
      svgKey: null,
      body: ["1976년, 미국 캘리포니아주 로스앤젤레스 근교의 한 노인 복지관에서 한 할아버지가 처음으로 붓을 들었다. 그의 나이는 정확히 여든 살이었다. 해리 라이버먼(Harry Lieberman)은 폴란드 태생의 유대계 이민자로, 평생 사탕 가게를 운영하며 먹고살았다. 그림이라고는 학교에서도, 집에서도, 어디에서도 배운 적이 없었다.", "복지관 미술 수업에 나간 것도 거창한 꿈 때문이 아니었다. 무료하고 외로운 시간을 때우러 간 것이었다. 강사가 붓을 건네자 라이버먼은 어색하게 받아 들었고, 무엇을 그려야 할지 몰라 그냥 어린 시절의 기억을 그리기 시작했다. 폴란드 마을의 풍경, 유대교 회당, 축제의 불빛.", "그런데 이상한 일이 벌어졌다. 붓을 잡은 손이 멈추질 않았다. 라이버먼은 이후 매일 복지관에 나와 그림을 그렸다. 그의 작품들은 밝고 뜨겁고 이야기로 가득 찼다. 기쁨이 캔버스 밖으로 넘쳐흘렀다.", "몇 년이 지나자 미술계가 그를 주목하기 시작했다. 라이버먼의 작품은 '아웃사이더 아트'의 걸작으로 평가받았고, 갤러리 전시가 이어졌다. 그는 할아버지의 조용한 취미 활동을 하는 것이 아니었다. 진지한 예술가로 미국 미술사에 이름을 남기고 있었다.", "그가 가장 왕성하게 작품 활동을 한 시기는 80대와 90대였다. 100세가 넘어서도 붓을 놓지 않았다. 라이버먼은 101세 생일을 앞두고 한 인터뷰에서 늦게 시작한 것에 대한 후회가 없느냐는 질문을 받았다. 그는 고개를 저었다.", "라이버먼은 1983년 로스앤젤레스 카운티 미술관(LACMA)에서 전시를 가졌다. 사탕 가게 주인 출신의 여든 살 이민자 노인이, 세계적인 미술관의 벽에 자신의 작품을 걸게 된 것이었다. 오프닝 날 밤 그는 양복을 차려입고 자신의 그림 앞에 서서 오래 바라보았다.", "그의 그림에는 공통된 특징이 있었다. 고통도, 고독도, 상실도 그렸지만, 그것들이 결국 따뜻한 빛 속에 잠겨 있었다. 오랜 이민 생활의 고됨, 두고 온 고향, 사랑하는 사람들의 죽음—이 모든 것이 밝은 색채로 녹아들어 있었다. 슬픔을 그렸는데 위로가 되는 그림이었다.", "라이버먼은 102세를 일기로 1983년에 세상을 떠났다. 그가 붓을 처음 든 것이 80세였으니, 그림을 그린 기간은 고작 22년이었다. 그러나 그 22년 동안 그는 수백 점의 작품을 남겼고, 지금도 그의 그림들은 미국과 이스라엘의 여러 미술관에 소장되어 있다.", "라이버먼의 이야기가 깊이 울리는 이유는, 그가 특별한 조건 속에서 시작한 것이 아니기 때문이다. 재능을 타고났다는 증거도 없었고, 누군가의 격려를 받은 것도 아니었다. 그냥 무료한 오후에 복지관에 갔고, 강사가 붓을 건넸고, 그것을 받아 들었다. 시작은 그것뿐이었다.", "그의 삶이 우리에게 속삭이는 것은 이것이다. 시작하기에 너무 늦은 때란 없다는 오래된 격언이 아니라, 더 정확하고 냉정한 진실—지금 이 순간이 당신에게 남아 있는 가장 이른 때라는 사실."],
      closing: "여든 살에 처음 붓을 든 사람이 있었다.\n그는 후회 대신 그림을 그렸다.\n남은 시간을 세는 대신, 남은 색을 칠했다.\n가장 늦은 시작이, 가장 찬란한 22년이 되었다.",
      analysis: {
        insight: { icon: "💡", text: "'시작하기에 너무 늦었다'는 말은 사실이 아니라, 지금 시작하지 않기 위해 우리가 스스로에게 하는 이야기다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "평생 사탕을 팔다가 80세에 화가가 된 사람—그의 인생에서 가장 달콤한 부분은 마지막 22년이었다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "오프닝 날 밤, 양복을 차려입고 자신의 그림 앞에 혼자 서 있던 여든 살의 이민자—그 등이 얼마나 곧고 환했을지.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "Harry Lieberman (1876~1983) / Joann Ellison Rodgers 외 다수의 아웃사이더 아트 관련 기록 및 LACMA 소장 자료, 《The Folk Art Collection of Edna and Morton Berman》 등 관련 미술사 기록을 바탕으로 재서술했습니다.",
      },
      curatorNote: "해리 라이버먼을 처음 알았을 때, 저는 한참 동안 그의 그림을 검색해서 보았습니다. 그림들이 정말로 기쁩니다. 기교가 아니라 기쁨으로 가득 찬 그림들이었어요. 무언가를 시작하지 못한 이유가 '때가 지났다'는 생각 때문이라면, 라이버먼의 이름을 한 번만 떠올려 보세요. 그는 80세에 시작해서 세계적인 미술관 벽에 자기 이름을 걸었습니다.",
      qna: {
        question: "당신이 '이미 늦었다'고 포기해 둔 것이 있다면, 그것은 무엇인가요?",
        answer: "우리가 '너무 늦었다'고 말할 때, 사실 우리가 두려워하는 것은 시간이 아니라 실패일 경우가 많습니다. 라이버먼은 실패를 두려워할 여유조차 없었는지도 모릅니다—이미 80년을 살았으니까요. 남은 시간이 짧다는 사실이 오히려 그를 자유롭게 했을 겁니다. 지금 당신에게도 그 자유가 있습니다. 잘하려고 시작하지 않아도 됩니다. 그냥, 시작해도 됩니다."
      },
      publishedDate: "2026년 7월 1일",
    },

    /* ═══ 목요일 — 역사·감동 (PRIMARY: 감동) ═══ */
    4: {
      title: "에디스 워튼의 폐허",
      category: "역사·감동",
      primaryType: "감동",
      types: ["감동", "통찰"],
      image: null,
      svgKey: null,
      body: ["1911년 겨울, 에디스 워튼은 매사추세츠 주 레녹스의 저택 '더 마운트'를 떠나야 했다. 24년을 함께한 남편 에드워드 워튼은 오랜 정신질환과 불륜 끝에 법적 절차를 밟고 있었고, 그녀가 직접 설계하고 가꾼 정원과 집은 파산 처리를 앞두고 있었다. 마흔아홉 살의 여성이 가진 것이라곤 원고지 몇 묶음과 짐 가방 하나뿐이었다.", "워튼이 소설을 쓰기 시작한 것은 신경쇠약으로 침대에 누워 있던 30대 초반이었다. 당시 담당의였던 S. 위어 미첼은 그녀에게 글쓰기를 그만두고 자수나 방문 손님 접대에 집중하라고 처방했다. 워튼은 그 처방을 무시했다. 훗날 그 시절을 회고하며 그녀는 글쓰기가 자신을 병에서 '끌어올린 유일한 밧줄'이었다고 표현했다.", "1905년 출간된 《환락의 집》이 첫 베스트셀러가 되었고, 뉴욕 상류사회의 위선을 해부한 문장들은 미국 독자들을 충격과 감탄 사이에 세워 놓았다. 하지만 정작 워튼의 사생활은 그 소설의 주인공 릴리 바트처럼 언제든 부서질 수 있는 유리 위에 놓여 있었다. 남편의 병세는 악화되었고, 결혼이라는 제도는 그녀에게 보호막이 아니라 감옥이었다.", "1913년 이혼이 확정되었다. 당시 미국 사교계에서 이혼한 여성은 사실상 '사회적 사망' 선고를 받는 것과 같았다. 그러나 워튼은 파리로 건너가 몽파르나스의 작은 아파트에 정착했다. 짐을 풀자마자 책상 앞에 앉아 원고를 펼쳤다.", "1914년 제1차 세계대전이 터지자 워튼은 펜을 들고 전선으로 향했다. 파리에서 직접 구호 단체를 조직하고, 피난민 재정착 사업을 이끌며, 전선 취재 기사를 《스크리브너스 매거진》에 연재했다. 그 기사들은 이후 《전쟁의 길에서》(1915)로 묶였다. 쉰을 넘긴 여성이 참호 근처까지 들어가 취재했다는 사실에 동료 기자들조차 혀를 내둘렀다.", "전쟁이 끝난 뒤 워튼은 《순수의 시대》 집필에 들어갔다. 낡은 뉴욕 상류사회가 개인의 감정을 어떻게 질식시키는지를 다룬 이 소설은 1920년 출간되자마자 퓰리처상을 받았다. 여성 작가가 퓰리처 소설 부문을 수상한 것은 그때가 처음이었다. 시상식장에 그녀는 프랑스 남부 생브리악의 정원에서 기른 장미를 직접 꺾어 가슴에 꽂고 나타났다.", "워튼의 글쓰기 방식은 평생 같았다. 매일 아침 침대에 누운 채 무릎 위에 원고지를 올려놓고 썼다. 쓴 종이는 바닥에 던졌고, 비서가 그것을 주워 모아 타이핑했다. 이 습관은 신경쇠약으로 처음 글을 쓰기 시작한 30대부터 세상을 떠나기 직전까지 이어졌다. 몸이 가장 취약했던 자세에서 가장 강한 언어가 나왔다.", "1937년 8월, 워튼은 파리 교외 생클루의 자택에서 뇌졸중으로 세상을 떠났다. 향년 75세. 그녀가 남긴 장편소설은 22편, 단편은 85편을 넘었다. 더 마운트의 정원을 빼앗기고 파리로 건넌 그날 이후로만 따져도 장편 15편이 넘는다.", "오늘날 더 마운트는 복원되어 매년 수만 명의 방문객을 맞는 문학 기념관이 되었다. 집을 잃고 떠난 여자가 결국 그 집을 문학의 집으로 되살려 놓은 셈이다. 워튼은 폐허에서 쫓겨난 것이 아니라, 폐허를 뒤에 두고 걸어 나간 것이었다."],
      closing: "집을 잃어도 문장은 남는다.\n이혼 도장이 찍힌 날 밤에도 원고지는 비어 있었다.\n그녀는 그 빈 칸을 절망이 아니라 다음 단락으로 채웠다.\n폐허는 끝이 아니라, 더 단단한 것을 짓기 위한 터였다.",
      analysis: {
        insight: { icon: "💡", text: "가장 많이 빼앗긴 시간이 가장 많은 것을 만들어 낸 시간이 되기도 한다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "침대에 누워 원고지를 바닥에 던지며 베스트셀러를 쓴 여자—책상이 필요하다는 말은 핑계였을지도 모른다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "집도 결혼도 사회적 지위도 사라진 날 밤, 그녀가 연 것은 서랍이 아니라 원고지였다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "Edith Wharton(에디스 워튼, 1862–1937) / Hermione Lee 《Edith Wharton》(2007, Knopf)을 바탕으로 재서술했습니다.",
      },
      curatorNote: "워튼 이야기를 고른 건 그녀가 '불굴의 의지'라는 추상어로 포장된 인물이 아니기 때문입니다. 신경쇠약, 이혼, 전쟁, 망명—실제로 꽤 많이 부서진 사람이었습니다. 그럼에도 매일 아침 침대 위 무릎에 원고지를 올렸습니다. 대단한 결심이 아니라 그냥 그 동작이 그녀를 버텨 준 것입니다. 오늘 무릎 위에 올릴 수 있는 것이 무엇인지 떠올리게 되는 이야기입니다.",
      qna: {
        question: "모든 것이 무너진 뒤에도 계속할 수 있는 힘은 어디서 오는 걸까요?",
        answer: "워튼의 경우, 그 힘은 '의지'보다 '습관'에 가까웠습니다. 매일 아침 같은 자세로 같은 동작을 반복하는 것—그것이 감정 상태와 무관하게 몸을 계속 움직이게 했습니다. 심리학에서는 이를 '행동 활성화'라고 부르는데, 동기가 행동을 만드는 게 아니라 행동이 동기를 만든다는 개념입니다. 결국 워튼이 발견한 것은, 다시 일어설 감정이 생길 때까지 기다리지 않고 일단 원고지를 무릎에 올리는 것이 먼저라는 사실이었습니다."
      },
      publishedDate: "2026년 7월 2일",
    },

    /* ═══ 금요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
    5: {
      title: "엘시 잉글리스의 야전병원",
      category: "역사·통찰",
      primaryType: "통찰",
      types: ["통찰", "감동"],
      image: null,
      svgKey: null,
      body: ["1914년 8월, 제1차 세계대전이 터지자 스코틀랜드의 외과의사 엘시 잉글리스는 영국 육군성 문을 두드렸다. 그녀는 여성 의사들로 구성된 완전한 야전병원 팀을 전선에 파견하겠다고 제안했다. 담당 관리는 짧게 답했다. '집에 가서 조용히 계십시오, 여사.'", "엘시 잉글리스는 1864년 인도 티르훌리에서 태어나 에든버러에서 의학을 공부했다. 당시 여성이 의사가 된다는 것 자체가 싸움이었다. 그녀는 에든버러 의과대학이 여성 입학을 거부하자 글래스고로, 다시 런던으로 옮겨 결국 학위를 받았다. 포기를 모르는 사람이었다.", "육군성의 거절 이후 그녀는 방향을 틀었다. 영국 정부가 싫다면 다른 곳으로 가면 됐다. 잉글리스는 스코틀랜드여성병원(Scottish Women's Hospitals, SWH)을 조직해 프랑스, 세르비아, 러시아 전선에 병원을 세우겠다고 나섰다. 모금은 놀라울 만큼 빠르게 진행되었다.", "1915년, 그녀는 직접 세르비아 전선으로 향했다. 세르비아군은 영국 정부가 거절한 것을 두 팔 벌려 받아들였다. 잉글리스의 팀은 크라구예바츠 근처에 야전병원을 설치하고 불과 몇 달 만에 수천 명의 부상병을 치료했다.", "그런데 1915년 말, 오스트리아-헝가리군과 불가리아군이 세르비아를 침공했다. 세르비아 전선이 무너지기 시작했다. 잉글리스는 부상병과 환자들을 두고 떠날 수 없다며 철수를 거부했다. 결국 그녀는 적군에게 포로로 잡혔다.", "포로 신분이 된 상황에서도 잉글리스는 계속 환자를 치료했다. 적군의 부상병까지 돌봤다. 오스트리아군 장교들은 처음에 이 '고집스러운 스코틀랜드 여의사'를 어떻게 다뤄야 할지 몰라 당혹스러워했다고 전해진다. 1916년 초, 그녀는 결국 본국으로 송환되었다.", "영국으로 돌아온 잉글리스에게 쉴 여유는 없었다. 그녀는 곧바로 러시아 전선행을 준비했다. 1916년, 그녀는 세르비아 부대를 지원하기 위해 러시아 오데사와 루마니아 전선까지 이동했다. 이미 몸에는 암이 자라고 있었다.", "1917년, 러시아 혁명으로 전선이 혼란에 빠졌다. 잉글리스는 병세가 심각해진 상태에서도 팀원들을 이끌고 안전하게 철수하는 일을 마쳤다. 뉴캐슬 항구에 도착한 것은 1917년 11월이었다. 그녀는 배에서 내린 다음 날 세상을 떠났다. 향년 53세.", "장례식은 에든버러 세인트 자일스 대성당에서 국장에 준하는 예우로 치러졌다. 세르비아 정부는 훈장을 추서했고, 영국 각지에서 추도가 이어졌다. 그토록 무뚝뚝하게 그녀를 돌려보냈던 육군성은 아무 말이 없었다.", "엘시 잉글리스가 남긴 것은 훈장이나 회고록이 아니었다. 그녀가 조직한 스코틀랜드여성병원은 전쟁 기간 동안 프랑스·세르비아·러시아·루마니아·그리스·마케도니아 등 여러 전선에 총 14개 병원 유닛을 운영했다. '집에 가서 조용히 계십시오'라는 말을 들은 사람이 만든 결과였다.", "그녀의 이야기에서 가장 눈에 띄는 것은 분노가 아니라 방향 전환이다. 문이 닫혔을 때 잉글리스는 그 문을 부수려 하지 않았다. 다른 문을 찾아 열었다. 그리고 그 문 너머에는, 그녀를 필요로 하는 사람들이 실제로 있었다."],
      closing: "거절은 종착점이 아니라 방향을 바꾸는 신호일 수 있다.\n문을 부수는 대신 다른 문을 찾은 사람이 더 멀리 간다.\n'조용히 계십시오'라는 말을 들었을 때, 그녀는 조용히 짐을 쌌다.\n그리고 전선으로 떠났다.",
      analysis: {
        insight: { icon: "💡", text: "거절당한 문 앞에서 싸우는 것보다, 자신을 필요로 하는 다른 문을 여는 것이 때로 더 큰 힘이다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "'집에 가서 조용히 계십시오'라는 조언을 이토록 창의적으로 무시한 사람도 드물다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "배에서 내린 다음 날 세상을 떠났다는 사실 — 그녀는 사람들을 안전하게 데려다 놓은 뒤에야 눈을 감았다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "엘시 잉글리스(Elsie Inglis, 1864–1917) / Leah Leneman, 《Elsie Inglis: The Woman with the Torch》(1998, NMS Publishing) 및 Imperial War Museum 소장 기록을 바탕으로 재서술했습니다.",
      },
      curatorNote: "엘시 잉글리스를 처음 접한 것은 스코틀랜드 여성사를 다룬 아카이브 자료에서였습니다. 거절당하고 돌아섰지만 무너지지 않고 '다른 길'을 만들어낸 이 이야기가, 지금 어떤 문 앞에서 막혀 있는 분께 닿기를 바랍니다. 때로 가장 큰 힘은 저항이 아니라 방향 전환에서 나옵니다.",
      qna: {
        question: "당신이 단호하게 거절당했을 때, 그 거절이 오히려 더 나은 방향을 열어준 경험이 있었나요?",
        answer: "거절은 '불가능'을 뜻하지 않습니다. 그 특정 경로가 지금 이 순간 닫혀 있다는 신호일 뿐입니다. 잉글리스는 육군성의 거절을 자신의 한계로 받아들이지 않고, 자신을 필요로 하는 다른 곳을 찾는 에너지로 전환했습니다. 거절을 맞닥뜨렸을 때 '왜 안 되는가'에 머무는 대신 '그렇다면 어디서, 어떻게'를 묻는 것이 때로 더 큰 문을 엽니다. 막힌 길은 멈춤이 아니라 지도를 다시 펼치는 순간입니다."
      },
      publishedDate: "2026년 7월 3일",
    },

    }
  },
  {
    weekLabel: "2026년 6월 4주 (6/22–6/26)",
    weekStart: "2026-06-22",
    stories: {

    /* ═══ 월요일 — 역사·감동 (PRIMARY: 감동) ═══ */
    1: {
      title: "치체스터의 혼자 항해",
      category: "역사·감동",
      primaryType: "감동",
      types: ["감동", "통찰"],
      image: null,
      svgKey: null,
      body: ["1966년 8월 27일, 프랜시스 치체스터는 영국 플리머스 항구를 출발했다. 65세였다. 폐암 진단을 받은 지 9년이 지났고, 당시 의사들은 그에게 얼마 남지 않았다고 했었다. 그런데 그는 죽기는커녕 요트 한 척에 혼자 올라탔다.", "그의 목표는 단 하나였다. 19세기 클리퍼 범선들이 양모를 실어 날랐던 항로, 이른바 '위대한 클리퍼 항로'를 혼자 따라가는 것이었다. 영국에서 호주 시드니까지, 그리고 다시 케이프혼을 돌아 영국으로. 세계 일주였다. 27피트짜리 목조 요트 '집시 모스 4세(Gipsy Moth IV)'를 타고.", "항해는 처음부터 혹독했다. 남대서양의 폭풍은 배를 몇 번이나 옆으로 눕혔다. 돛대 장치가 고장 났고, 혼자서 10미터 돛대 위로 올라가 수리해야 했다. 65세의 몸으로, 파도가 출렁이는 갑판 위에서.", "107일 만에 시드니에 도착했을 때, 항구에는 수천 명이 나와 있었다. 하지만 치체스터는 사흘 쉬고 다시 출발했다. 진짜 구간은 케이프혼이었다. 선원들이 '불가능한 갑'이라 부르는 곳, 파도 높이가 15미터를 넘고 바람이 멈추지 않는 곳.", "케이프혼을 돌 때, 그는 일지에 이렇게 적었다. 무섭냐고 자신에게 물었더니, 그렇다고 했다. 그런데 무서워서 멈출 수는 없다고도 했다. 그 감각이 자신이 살아 있다는 증거라고.", "1967년 5월 28일, 치체스터는 플리머스로 돌아왔다. 274일 만이었다. 혼자였다. 단 한 번의 기항지만 들른 채 226일을 바다 위에서 보냈다. 항구 입구에는 25만 명이 나와 있었다. 영국 역사상 항해자에게 그만한 환영이 쏟아진 것은 드레이크 이후 처음이었다.", "엘리자베스 2세 여왕은 한 달 뒤 플리머스에서 직접 그에게 기사 작위를 수여했다. 여왕이 사용한 검은 드레이크 경이 썼던 바로 그 검이었다. 400년 만에 같은 검으로, 같은 항구에서.", "치체스터는 그 뒤로도 바다를 떠나지 않았다. 70세에 또 대서양 단독 횡단을 시도했다. 항해 도중 건강이 악화되어 돌아와야 했고, 1972년 세상을 떠났다. 그러나 그가 남긴 것은 기록이 아니었다.", "그가 남긴 것은 질문이었다. 폐암 선고를 받은 56세에, 그는 포기 대신 항해를 배우기 시작했다. 배움에 늦은 나이란 없고, 두려움이 있다는 것은 아직 살아 있다는 뜻이며, 인간은 자신이 생각하는 것보다 훨씬 멀리 갈 수 있다는 것.", "플리머스 항구 옆에는 지금도 집시 모스 4세가 전시되어 있다. 27피트. 생각보다 작다. 그 작은 배로 세계를 돌았다는 사실이, 보는 사람을 한동안 멍하게 만든다.", "무서워서 멈추는 것과 무서워도 가는 것 사이에, 65세 노인 하나가 혼자 서 있었다. 그리고 그는 갔다."],
      closing: "폐암 선고는 끝이 아니었다.\n그것은 항해의 시작이었다.\n두려움은 적이 아니라,\n아직 살아 있다는 신호였다.",
      analysis: {
        insight: { icon: "💡", text: "한계라고 믿었던 것이 실은 출발선이었다는 것을, 65세의 바다가 증명했다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "의사가 '오래 못 사신다'고 했는데, 치체스터는 그 말을 9년 넘게 무시한 채 세계 일주까지 마쳤다. 환자 관리가 썩 잘 된 케이스는 아니다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "케이프혼의 파도 위에서 '무섭냐'고 자신에게 물었을 때, 그 두려움을 살아 있다는 증거로 받아들인 순간이 가슴을 울린다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "Francis Chichester(1901–1972) / Francis Chichester 《Gipsy Moth Circles the World》(1967, Hodder & Stoughton)를 바탕으로 재서술했습니다.",
      },
      curatorNote: "치체스터의 이야기를 처음 접했을 때, 저는 '65세'라는 숫자에 한동안 멈춰 있었습니다. 폐암 선고 이후 항해를 배우기 시작했다는 사실이, 늦었다는 이유로 무언가를 포기하려던 제 마음을 조용히 흔들었습니다. 거대한 용기란 두려움이 없는 상태가 아니라, 두려움을 안고서도 줄을 푸는 행동이라는 것을 이 이야기는 아주 조용하고 단단하게 말해 줍니다. 오늘 당신이 망설이고 있는 그 일, 어쩌면 지금이 딱 좋은 출발 시점일지도 모릅니다.",
      qna: {
        question: "당신이 '너무 늦었다'고 생각하며 포기했던 것이 있다면, 무엇인가요?",
        answer: "치체스터는 56세에 항해를 처음 배웠고, 65세에 세계 일주를 떠났습니다. 우리가 '늦었다'고 느끼는 감각은 대부분 나이가 아니라 두려움에서 옵니다. 시작의 적절한 시점은 준비가 완벽해졌을 때가 아니라, 더 이상 기다리는 것이 더 무서워졌을 때입니다. 지금 이 순간, 당신이 가장 늦었다고 느끼는 그것이 어쩌면 가장 먼저 꺼내야 할 것일 수 있습니다."
      },
      publishedDate: "2026년 6월 22일",
    },

    /* ═══ 화요일 — 역사·유머 (PRIMARY: 유머) ═══ */
    2: {
      title: "조슈아 레이놀즈의 귀",
      category: "역사·유머",
      primaryType: "유머",
      types: ["유머", "통찰"],
      image: null,
      svgKey: null,
      body: ["1769년 런던, 조슈아 레이놀즈는 막 왕립미술원(Royal Academy of Arts)의 초대 원장 자리에 올랐다. 영국 초상화의 제왕이라 불리던 그는 귀족과 왕족을 줄 세워 놓고 그리는 화가였다. 그런데 이 당당한 원장에게는 아무도 대놓고 말 못 하는 비밀이 하나 있었다.", "레이놀즈는 1740년대 이탈리아 유학 시절부터 청력이 점점 나빠지기 시작했다. 로마에서 귀 질환을 앓은 뒤 왼쪽 청력을 거의 잃었고, 나이가 들수록 오른쪽마저 어두워졌다. 화가에게 귀가 무슨 상관이냐 싶겠지만, 문제는 그가 그림만 그린 게 아니라는 데 있었다.", "레이놀즈는 런던 사교계의 핵심 인물이었다. 새뮤얼 존슨, 올리버 골드스미스, 에드먼드 버크와 어울리는 '더 클럽(The Club)'의 창립 멤버였고, 저녁마다 재치 있는 대화로 좌중을 사로잡아야 했다. 그런데 절반쯤은 들리지 않는 상태로.", "그의 해결책은 실용적이었다. 접이식 이어 트럼펫(ear trumpet)을 들고 다니며 대화 상대에게 들이밀었다. 당시 이어 트럼펫은 길고 나팔처럼 생긴 금속 도구였는데, 레이놀즈는 이것을 전혀 부끄러워하지 않았다. 오히려 그 자체를 퍼포먼스처럼 활용했다.", "상대가 뭔가 중요한 말을 하면 그는 천천히 트럼펫을 꺼내 귀에 댔다. 그러면 상대는 자신의 말이 특별히 경청받는다고 느꼈다. 반대로 듣기 싫은 지루한 이야기가 시작되면 트럼펫을 슬그머니 내려놓았다. 주변 사람들은 그가 언제 트럼펫을 드느냐로 그 대화의 가치를 판단했다고 전해진다.", "친구 새뮤얼 존슨도 이 습관을 잘 알았다. 존슨이 장황한 이야기를 늘어놓다가 레이놀즈가 트럼펫을 내리는 걸 보면 '요점을 빨리 말하라는 신호'로 받아들였다는 일화가 당시 문인들 사이에서 돌았다. 레이놀즈는 의도한 것도, 의도하지 않은 것도 모두 우아하게 넘겼다.", "왕립미술원 원장으로서 그는 매년 강연을 했다. '담화록(Discourses on Art)'이라 불리는 이 연설들은 훗날 영미 미술 비평의 고전이 된다. 귀가 잘 들리지 않아 청중의 반응을 제대로 파악하기 어려웠을 텐데도, 그는 15편의 강연을 1769년부터 1790년까지 한 번도 거르지 않았다.", "만년에 시력마저 나빠져 1789년 한쪽 눈을 거의 잃다시피 했을 때도 레이놀즈는 붓을 놓지 않으려 했다. 결국 1790년 마지막 강연을 마치고 이듬해 세상을 떠났지만, 그 마지막 강연에서 그는 미켈란젤로의 이름을 세 번이나 부르며 마무리했다. 잘 들리지 않는 귀로, 잘 보이지 않는 눈으로.", "그의 이어 트럼펫은 지금도 런던의 여러 기록에 남아 있다. 불편을 감추지 않고 오히려 당당하게 꺼내 들었던 그 태도처럼, 레이놀즈의 초상화들은 오늘도 내셔널 포트레이트 갤러리 벽에서 정면을 바라보고 있다. 약점을 트럼펫처럼 들이밀며."],
      closing: "잘 안 들리면 트럼펫을 꺼내면 된다.\n숨기지 않으면 무기가 된다.\n듣고 싶은 말만 들어도 괜찮은 날이 있다.\n그것도 하나의 품위다.",
      analysis: {
        insight: { icon: "💡", text: "약점을 감추려 할수록 작아지고, 꺼내 들수록 의외로 위엄이 생긴다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "듣기 싫은 이야기가 시작될 때 트럼펫을 내리는 것, 이것이야말로 18세기 최고의 대화 기술이다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "잘 들리지 않는 귀로, 잘 보이지 않는 눈으로 마지막 강연을 끝냈다는 사실이 오래 마음에 남는다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "Joshua Reynolds (1723–1792) / Nicholas Penny 편 《Reynolds》(Royal Academy of Arts, 1986) 및 Joshua Reynolds 《Discourses on Art》(1769–1790) 초판본 기록을 바탕으로 재서술했습니다.",
      },
      curatorNote: "레이놀즈 이야기를 처음 접했을 때 가장 먼저 웃음이 났습니다. 트럼펫을 내리는 순간이 '그만 해'의 신호였다는 부분에서요. 그런데 웃고 나서 한참을 생각했습니다. 우리가 약점이라고 여기는 것들을 그는 단 한 번도 사과하지 않았다는 것을. 불편함을 인정하되 쪼그라들지 않는 것, 그게 어쩌면 진짜 품위인지도 모르겠습니다. 오늘 당신이 숨기고 있는 트럼펫은 무엇인가요.",
      qna: {
        question: "내가 숨기고 있는 '약점'을 오히려 당당하게 꺼내 들면 어떤 일이 생길까요?",
        answer: "레이놀즈의 경우처럼, 약점을 감추지 않으면 상대는 오히려 당신이 솔직하다고 느낍니다. 방어하느라 쓰던 에너지가 고스란히 다른 데 쓰이고, 그 여유가 자연스럽게 위엄으로 보입니다. 약점을 인정하는 순간 그것은 더 이상 공격 대상이 되지 않습니다. 결국 트럼펫을 꺼내 드는 용기가, 트럼펫 없이 완벽한 척하는 것보다 훨씬 강한 인상을 남깁니다."
      },
      publishedDate: "2026년 6월 23일",
    },

    /* ═══ 수요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
    3: {
      title: "바버라 매클린톡의 옥수수 밭",
      category: "역사·통찰",
      primaryType: "통찰",
      types: ["통찰", "감동"],
      image: null,
      svgKey: null,
      body: ["1940년대 초, 콜드 스프링 하버 연구소의 옥수수 밭은 대부분의 과학자들에게 그저 평범한 실험 재료였다. 하지만 바버라 매클린톡에게 그 밭은 전혀 다른 세계였다. 그녀는 매일 아침 밭에 나가 한 줄기씩, 한 낱알씩 들여다보며 수천 개의 옥수수 염색체를 직접 추적했다.", "1951년, 매클린톡은 콜드 스프링 하버 심포지엄에서 자신의 연구 결과를 발표했다. '유전자는 염색체 위의 고정된 자리에 박혀 있는 것이 아니라, 스스로 위치를 바꿀 수 있다.' 그녀가 '전위 인자(transposable elements)'라고 부른 이 발견은 당시 유전학의 정설을 정면으로 뒤집는 것이었다.", "청중의 반응은 냉담했다. 발표장에 침묵이 흘렀고, 몇몇 동료는 노골적으로 고개를 저었다. 유전자는 안정적이고 불변하는 존재라는 믿음이 지배하던 시대였기 때문이다. 당대 최고 유전학자들조차 그녀의 데이터를 이해하지 못했고, 일부는 '매클린톡이 무언가 잘못됐다'고 수군거렸다.", "매클린톡은 더 이상 주요 학술지에 논문을 투고하지 않기로 했다. 거절당해서가 아니라, 심사자들이 자신의 연구를 제대로 평가할 준비가 되어 있지 않다는 것을 알았기 때문이었다. 대신 그녀는 조용히 콜드 스프링 하버의 밭으로 돌아갔다.", "이후 10여 년 동안 매클린톡은 거의 완전한 학문적 고립 속에서 연구를 이어갔다. 초청 강연도 줄어들었고, 그녀의 이름은 유전학 교과서에서 서서히 사라졌다. 그러나 그녀는 매년 봄이 되면 어김없이 씨앗을 심었고, 가을이 되면 낱알 하나하나의 색깔 패턴을 기록했다.", "전환점은 1960년대 후반에 찾아왔다. 분자생물학이 발전하면서 과학자들은 박테리아와 바이러스에서 실제로 '움직이는 유전자'를 발견하기 시작했다. 연구자들이 문헌을 뒤지다 30년 전 매클린톡의 논문들을 다시 꺼내 읽었을 때, 그들은 할 말을 잃었다. 그녀가 이미 모든 것을 밝혀 놓았기 때문이었다.", "1983년 10월, 스웨덴 왕립과학원은 바버라 매클린톡에게 노벨 생리의학상을 단독 수여했다. 만 81세였다. 시상식장에서 그녀는 덤덤했다. 수십 년의 무시와 고립이 그녀를 쓰라리게 한 것이 아니라, 오히려 외부의 시선으로부터 자유롭게 연구에만 집중할 수 있게 해주었다고 그녀는 여러 인터뷰에서 밝혔다.", "매클린톡이 남긴 인터뷰와 전기 기록에는 그녀의 연구 태도를 보여주는 일관된 주제가 있다. 과학자이자 전기 작가인 에블린 폭스 켈러는 매클린톡이 옥수수 하나하나의 개성을 파악하며, 유기체와 깊은 친밀감을 나누는 방식으로 연구했다고 기술했다. 매클린톡 자신도 인터뷰에서 현미경 앞에 앉으면 세포 안으로 들어가는 느낌을 받는다고 말했다.", "그녀의 이야기에서 진짜 통찰은 노벨상이 아니다. 세상이 틀렸다고 말할 때 30년을 버텼다는 것도 아니다. 그녀는 인정받기 위해 버틴 것이 아니라, 그 일 자체가 좋아서 계속했다는 점이다. 옥수수 밭에서의 매일 아침이 이미 충분한 보상이었다.", "1992년 90세로 세상을 떠날 때까지 매클린톡은 콜드 스프링 하버를 떠나지 않았다. 노벨상 이후에도 유명세를 타는 대신 밭으로 돌아갔다. 세상이 그녀를 발견하는 데 30년이 걸렸지만, 그녀는 세상을 기다리느라 단 하루도 낭비하지 않았다."],
      closing: "세상의 인정은 늦게 오거나, 아예 오지 않을 수도 있다.\n그래도 매일 씨앗을 심을 수 있다면 충분하다.\n옳다는 확신보다 더 강한 것은\n그 일이 좋다는 사실이다.",
      analysis: {
        insight: { icon: "💡", text: "외부의 인정이 없어도 연구를 멈추지 않았던 매클린톡은, 동기의 뿌리가 깊을수록 고립도 견딜 수 있음을 몸소 증명했다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "30년 동안 '틀렸다'는 말을 들으면서도 매년 봄 씨앗을 심었다는 건, 어쩌면 그녀가 동료들보다 옥수수의 말을 더 신뢰했다는 뜻일지도 모른다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "노벨상을 받은 뒤에도 그녀는 다시 밭으로 돌아갔다. 30년의 무시가 그녀를 흔들지 못한 것은, 그 일 자체가 이미 그녀의 전부였기 때문이다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "Barbara McClintock (1902–1992) / Evelyn Fox Keller, 《A Feeling for the Organism: The Life and Work of Barbara McClintock》(1983)을 바탕으로 재서술했습니다.",
      },
      curatorNote: "매클린톡의 이야기를 고른 것은, 우리가 '인정받지 못하는 시간'을 어떻게 보내느냐에 대한 답이 여기 있다고 느꼈기 때문입니다. 그녀는 고립을 패배로 받아들이지 않고, 오히려 아무도 방해하지 않는 연구 시간으로 전환했습니다. 지금 당신의 일이 아무에게도 보이지 않는 것 같다면, 매클린톡의 봄을 떠올려 보세요. 씨앗을 심는 사람은 결국 계절을 이깁니다.",
      qna: {
        question: "오랫동안 인정받지 못할 것을 알면서도 계속할 수 있는 일이 당신에게 있나요?",
        answer: "매클린톡은 그 질문에 '있다'고 답한 사람이었습니다. 그녀에게 옥수수 밭은 커리어의 수단이 아니라, 그 자체로 의미 있는 세계였습니다. 인정은 동기의 연료가 될 수 있지만, 연료가 떨어졌을 때도 계속 걷게 하는 것은 그 일 자체에 대한 사랑입니다. 지금 당신이 하는 일 중에서, 아무도 보지 않아도 계속하고 싶은 것이 있다면—그것이 바로 당신의 옥수수 밭입니다."
      },
      publishedDate: "2026년 6월 24일",
    },

    /* ═══ 목요일 — 역사·감동 (PRIMARY: 감동) ═══ */
    4: {
      title: "에우니케 케네디 슈라이버의 운동장",
      category: "역사·감동",
      primaryType: "감동",
      types: ["감동", "통찰"],
      image: null,
      svgKey: null,
      body: ["1962년 여름, 메릴랜드주 록빌에 있는 에우니케 케네디 슈라이버의 자택 뒤뜰에서 작은 캠프가 열렸다. 참가자는 지적장애를 가진 어린이 35명이었다. 수영장에 뛰어들고, 릴레이 경주를 하고, 체조 동작을 흉내 내는 아이들을 보며 이웃들은 고개를 갸웃했다. 당시 미국 사회에서 지적장애인은 '시설'에 맡겨야 할 존재로 여겨졌지, 운동장의 주인공이 될 수 있다고는 아무도 생각하지 않았다.", "에우니케는 케네디 가문에서 자랐다. 대통령이 된 오빠 존 F. 케네디, 상원의원이 된 남동생 로버트와 테드가 세상의 시선을 한 몸에 받는 동안, 그녀는 조용히 다른 곳을 바라보고 있었다. 바로 언니 로즈마리였다. 지적장애를 가진 로즈마리는 가족 중에서도 드러나지 않은 존재였고, 1941년 아버지의 결정으로 전두엽 절제술을 받은 뒤 위스콘신의 시설에서 평생을 보내야 했다. 에우니케는 그 사실을 잊지 않았다.", "1962년의 뒤뜰 캠프는 실험이었다. 에우니케는 '지적장애인도 훈련받으면 달릴 수 있고, 수영할 수 있고, 이길 수 있다'는 가설을 직접 증명하고 싶었다. 캠프 참가 어린이들은 예상을 뛰어넘었다. 한 주가 지나자 아이들은 스스로 경기 규칙을 지켰고, 넘어진 친구를 일으켜 세웠으며, 결승선을 통과할 때 두 팔을 번쩍 들었다. 에우니케는 그 장면을 수첩에 기록했다.", "이후 5년간 에우니케는 그 수첩을 들고 미국 전역의 학교·병원·지역 단체를 돌아다녔다. 설득은 쉽지 않았다. '그 아이들은 그냥 응원이나 받으면 되는 것 아닙니까'라는 말을 수십 번 들었다. 그녀는 매번 같은 대답을 했다. 직접 보십시오.", "1968년 7월 20일, 일리노이주 시카고의 솔저 필드에서 제1회 스페셜 올림픽이 열렸다. 26개 미국 주와 캐나다에서 온 지적장애 선수 1,000여 명이 트랙을 달리고 수영장에 뛰어들었다. 에우니케는 개막 연설에서 이렇게 말했다. '용감한 사람들이여, 올림픽의 불꽃을 켜십시오.' 관중석에서 눈물을 흘린 것은 비장애인 가족들만이 아니었다.", "스페셜 올림픽은 이후 전 세계로 뻗어나갔다. 2023년 기준, 190개국 600만 명 이상의 선수가 스페셜 올림픽에 참여하고 있다. 그러나 에우니케가 진짜로 바꾼 것은 숫자가 아니었다. '지적장애인은 경쟁할 수 없다'는 사회의 전제 자체였다.", "에우니케는 스페셜 올림픽 창설 이후에도 멈추지 않았다. 지적장애인의 의료·법적 권리를 위한 로비를 계속했고, 케네디 가문의 명성을 '자기 오빠들을 위해서가 아니라' 사회적 약자를 위해 썼다. 주변에서는 '당신이 대통령 집안 사람이니 가능한 것 아니냐'고도 했다. 그녀는 웃으며 답했다. '뒤뜰이 있으면 됩니다.'", "2009년 에우니케 케네디 슈라이버가 88세의 나이로 세상을 떠났을 때, 스페셜 올림픽은 전 세계 180개국에서 활동하고 있었다. 버락 오바마 대통령은 조문 성명에서 그녀를 '지적장애인의 삶을 근본적으로 바꾼 사람'이라고 불렀다. 하지만 에우니케 자신이라면 아마 다른 말을 했을 것이다. '아이들이 달렸습니다. 저는 구경했을 뿐입니다.'", "1962년 뒤뜰 캠프에 참가했던 아이 중 한 명은 훗날 인터뷰에서 이렇게 회상했다. 그날 처음으로 누군가가 나를 응원하는 게 아니라 나와 함께 뛰었다고. 에우니케는 그 아이들과 함께 직접 릴레이를 뛰었다. 실제로.", "세상을 바꾸는 일이 언제나 연설이나 법안으로 시작되는 것은 아니다. 때로는 뒤뜰의 수영장 하나, 출발선에 선 아이들을 향한 한 사람의 확신에서 시작된다. 에우니케 케네디 슈라이버의 이야기가 조용하지만 단단하게 남는 이유는 바로 그것이다."],
      closing: "달리지 못한다는 말을 믿지 않은 한 사람이 있었습니다.\n그녀는 먼저 뒤뜰을 열었습니다.\n그다음엔 운동장을, 그다음엔 세계를.\n당신의 뒤뜰은 어디입니까.",
      analysis: {
        insight: { icon: "💡", text: "세상의 전제를 바꾸는 가장 빠른 방법은 반박이 아니라 '직접 보여주는 것'이다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "대통령 오빠가 있어도, 결국 역사에 더 오래 남은 건 뒤뜰 캠프였다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "처음으로 응원이 아니라 '함께' 달려준 사람이 있었다는 그 아이의 한 마디가, 모든 것을 설명한다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "Eunice Kennedy Shriver(1921–2009) / Eileen McNamara 《Eunice: The Kennedy Who Changed the World》(2018, Simon & Schuster)를 바탕으로 재서술했습니다.",
      },
      curatorNote: "에우니케 케네디 슈라이버는 케네디 가문에서 가장 유명하지 않은 이름이지만, 어쩌면 가장 오래 살아남을 유산을 남긴 사람입니다. 600만 명이 달리는 운동장이 뒤뜰 하나에서 시작되었다는 사실은, 지금 내가 가진 것이 작다고 느낄 때마다 꺼내볼 수 있는 이야기입니다. '직접 보십시오'라는 그녀의 말이, 오늘 당신에게도 닿기를 바랍니다.",
      qna: {
        question: "당신이 '저 사람은 할 수 없을 것'이라고 속으로 단정지었다가, 나중에 틀렸다고 깨달은 순간이 있었나요?",
        answer: "우리는 종종 타인의 한계를 우리가 먼저 설정합니다. 그 전제는 대부분 두려움이나 편의에서 비롯됩니다. 에우니케의 이야기가 알려주는 것은, 그 전제를 깨는 데 거창한 자원이 필요하지 않다는 점입니다. 필요한 건 단 하나, 먼저 자리를 만들고 '직접 보여주는' 용기입니다. 당신이 누군가에게 그 자리를 내어준 순간이 있다면, 당신도 이미 그 운동장의 일부입니다."
      },
      publishedDate: "2026년 6월 25일",
    },

    /* ═══ 금요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
    5: {
      title: "에르네스토 사바토의 캔버스",
      category: "역사·통찰",
      primaryType: "통찰",
      types: ["통찰", "감동"],
      image: null,
      svgKey: null,
      body: ["1950년대 초, 아르헨티나의 물리학자 에르네스토 사바토는 연구실을 떠나 화가의 작업실로 들어갔다. 파리 퀴리 연구소에서 핵물리학을 연구하던 그가 붓을 든 것은 경력을 바꾸기 위해서가 아니었다. 그것은 그가 자신의 정신을 지키기 위한 마지막 수단이었다.", "사바토는 1938년 파리 유학 중 초현실주의 화가들과 교류하면서 처음으로 그림을 그리기 시작했다. 그런데 그 시작은 이상했다. 핵분열 연구의 군사적 함의를 깨달은 순간, 그는 자신이 만지는 지식이 얼마나 파괴적으로 쓰일 수 있는지를 직감했고, 그 공포가 그를 캔버스 앞으로 밀어냈다.", "그는 결국 과학을 완전히 버렸다. 1945년 히로시마 원폭 투하 이후 그 결단은 더욱 단단해졌다. 사바토는 훗날 자신의 에세이에서 과학이 인간의 내면을 설명하지 못하는 지점에서 자신은 문학과 예술을 선택했다고 썼다.", "그러나 아르헨티나 학계와 과학계는 그를 배신자 취급했다. '재능을 낭비했다', '감상적인 선택이다'라는 말이 뒤따랐다. 물리학 박사가 소설을 쓴다는 것은 당시 아르헨티나에서 일종의 사회적 자살이었다.", "1948년, 그는 첫 소설 《엘 투넬(El Túnel)》을 발표했다. 출판사들은 처음에 거절했다. 하지만 소설은 출판되자마자 알베르 카뮈의 눈에 띄었고, 카뮈는 직접 프랑스어 번역을 주선했다. 한 물리학자의 '실패한 전향'이 유럽 문학계에서 빛을 발하는 순간이었다.", "사바토가 그림을 그린 것은 단순한 취미가 아니었다. 그는 초현실주의적 화풍으로 인간의 무의식과 폭력성을 캔버스에 담았고, 그 시각적 훈련이 훗날 그의 소설 속 어두운 심리 묘사의 토대가 되었다. 그는 눈으로 먼저 쓰는 법을 배운 것이다.", "1961년 발표한 대작 《영웅들과 무덤(Sobre héroes y tumbas)》은 아르헨티나 현대 문학의 정전으로 자리 잡았다. 과학적 훈련으로 다져진 그의 논리적 구조와 화가의 눈으로 벼린 이미지가 결합한 결과였다. 물리학도 회화도 버린 것이 아니라, 모두 문학으로 흘러들어 간 것이었다.", "1976년 군부 쿠데타 이후 아르헨티나에서 수많은 지식인이 침묵하거나 망명했다. 사바토는 남았다. 그리고 1984년 민주화 이후 진실화해위원회 위원장을 맡아 군부 독재 시절 실종자 9,000명의 증언을 담은 보고서 《눈카 마스(Nunca Más, 다시는 안 된다)》를 펴냈다. 물리학자도 화가도 아닌, 증언자로서의 사바토였다.", "그는 2011년 아르헨티나 산토스 루가레스에서 99세로 세상을 떠났다. 긴 생애 동안 그는 세 번 자신을 완전히 다시 시작했다. 매번 주변은 '왜 버리냐'고 물었지만, 사바토의 대답은 한결같았다. 그는 버린 것이 아니라, 더 큰 그릇으로 옮겨 담았을 뿐이라고.", "캔버스 앞에 처음 섰던 그 젊은 물리학자는 아마 몰랐을 것이다. 자신이 두려움에서 도망치려 든 그 선택이, 훗날 한 나라의 상처를 기록하는 손이 될 줄은."],
      closing: "버리는 것처럼 보이는 선택이\n사실은 더 크게 담으려는 몸짓일 때가 있다.\n두려움으로 시작한 캔버스가\n결국 한 시대의 증언이 되었다.",
      analysis: {
        insight: { icon: "💡", text: "전향은 배신이 아니다. 이전의 모든 언어를 새 그릇에 옮겨 담는 일이다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "물리학 박사가 소설을 쓴다고 했을 때 학계가 손사래를 쳤는데, 정작 그 소설을 알아본 건 노벨 문학상 수상자였다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "두려움에서 시작한 붓질이, 수십 년 뒤 9,000명의 이름을 기록하는 손이 되었다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "에르네스토 사바토(Ernesto Sabato, 1911–2011) / Ernesto Sabato 《El escritor y sus fantasmas》(1963), CONADEP 《Nunca Más》(1984) 및 관련 전기 기록을 바탕으로 재서술했습니다.",
      },
      curatorNote: "사바토의 이야기를 고른 이유는 '포기'와 '전향'을 바라보는 우리의 시선 때문입니다. 우리는 흔히 한 길을 끝까지 가지 못하면 실패라고 여기지만, 사바토는 물리학·회화·문학·증언이라는 네 언어를 차례로 배워 결국 누구도 대신할 수 없는 목소리가 되었습니다. 지금 다른 길로 접어드는 두려움을 느끼고 있다면, 당신이 버린다고 생각하는 것들이 실은 새 언어의 재료가 되고 있을지도 모릅니다.",
      qna: {
        question: "당신이 '중도에 포기했다'고 여기는 경험 중, 사실은 지금의 당신을 만든 재료가 된 것이 있나요?",
        answer: "우리는 종종 완수하지 못한 일을 결손으로 기록합니다. 하지만 사바토의 물리학 훈련은 소설의 구조가 되었고, 회화의 눈은 심리 묘사가 되었습니다. 그만둔 것이 사라진 게 아니라 형태를 바꿔 살아남은 셈입니다. 지금 당신이 '미완'이라고 부르는 경험들도 어쩌면 다음 언어를 위한 어휘를 쌓고 있는 중일 수 있습니다. 무엇을 그만뒀는지보다, 그 경험이 지금 당신 안에서 어떤 형태로 남아 있는지를 한번 들여다보세요."
      },
      publishedDate: "2026년 6월 26일",
    },

    }
  },
  {
    weekLabel: "2026년 6월 3주 (6/15–6/19)",
    weekStart: "2026-06-15",
    stories: {

    /* ═══ 월요일 — 역사·감동 (PRIMARY: 감동) ═══ */
    1: {
      title: "에디스 캐블의 마지막 아침",
      category: "역사·감동",
      primaryType: "감동",
      types: ["감동", "통찰"],
      image: null,
      svgKey: null,
      body: ["1915년 10월 11일 밤, 브뤼셀의 생질 감옥에 성공회 목사 호레이스 스털링 게이너(Horace Stirling Gahan)가 찾아왔다. 다음 날 새벽 처형이 예정된 에디스 캐블을 마지막으로 만나기 위해서였다. 간호사 에디스는 독일 점령 치하의 벨기에에서 200명이 넘는 연합군 병사들을 탈출시킨 혐의로 군사법원에서 사형 선고를 받은 상태였다.", "게이너 목사가 감방 문을 열었을 때, 그는 예상과 전혀 다른 광경을 마주했다. 에디스는 무너져 있지 않았다. 그녀는 차분하게 성찬식을 받았고, 오히려 목사를 위로하듯 조용히 말했다. 그녀가 남긴 말은 게이너 목사의 증언을 통해 전해진다. '애국심만으로는 충분하지 않습니다. 나는 누구에게도 증오나 원한을 품지 않아야 합니다.'", "에디스 캐블은 1865년 영국 노퍽주 스와드스턴에서 태어났다. 목사의 딸로 자란 그녀는 30대에 간호사의 길을 택했고, 1907년 벨기에 브뤼셀의 버크켄달 간호학교 원장으로 부임했다. 그 전까지 벨기에에는 체계적인 간호 교육 시스템이 거의 없었다. 에디스는 그것을 바꾸기 위해 자신의 삶을 옮겨왔다.", "1914년 제1차 세계대전이 터지고 독일군이 벨기에를 점령하자, 에디스는 고국 영국으로 돌아갈 수 있었다. 그러나 그녀는 남았다. 간호학교는 적군과 아군을 가리지 않는 병원이 되었고, 에디스는 부상당한 독일 병사들도 똑같이 치료했다. 그 사실이 나중에 그녀의 처형을 둘러싼 국제 여론을 더욱 격렬하게 달아오르게 했다.", "1915년 봄부터 에디스는 점령지에 고립된 연합군 병사와 민간인들을 네덜란드 국경 너머로 탈출시키는 지하 조직에 가담했다. 그녀의 간호학교는 탈출 루트의 거점이 되었다. 독일 당국에 신분이 노출된 것은 그해 여름이었다. 8월 5일 체포된 에디스는 심문 과정에서 자신의 역할을 부인하지 않았다.", "재판은 10월 7일부터 8일까지 이틀간 진행되었다. 에디스는 혐의 대부분을 인정했다. 변론의 여지가 있었음에도 그녀는 사실을 사실대로 말했다. 독일 군사법원은 그녀에게 사형을 선고했고, 미국·스페인 외교관들의 감형 요청은 받아들여지지 않았다. 당시 독일 점령 당국의 처형 집행 결정은 외교적으로도 커다란 파문을 일으켰다.", "1915년 10월 12일 새벽, 에디스 캐블은 브뤼셀 근교 티르 나시오날 사격장에서 총살형에 처해졌다. 그녀의 나이 마흔아홉이었다. 집행 직전 그녀는 독일군 장교와 처형 담당 병사들에게도 고개를 끄덕여 인사를 건넸다고 전해진다.", "에디스의 죽음은 영국과 미국에서 거대한 반향을 불러일으켰다. 분노한 여론은 전쟁 지지 여론에 불을 지폈다. 그러나 에디스 자신은 자신의 죽음이 선전 도구가 되길 원하지 않았다. 게이너 목사에게 남긴 그 말, '증오나 원한을 품지 않아야 한다'는 고백이 그 사실을 가장 분명하게 증언한다.", "전쟁이 끝난 뒤 에디스의 유해는 영국으로 옮겨져 노리치 대성당 옆 '라이프스 힐'에 안장되었다. 런던 세인트마틴스플레이스(St Martin's Place), 내셔널 포트레이트 갤러리 앞 광장에는 그녀의 동상이 세워졌다. 동상 받침에는 그녀가 남긴 말이 새겨져 있다. 애국심만으로는 충분하지 않다고.", "그녀가 남긴 것은 전술도 전략도 아니었다. 두려움 앞에서도 증오하지 않겠다는 결심, 그것이 에디스 캐블이 마지막 밤에 선택한 전부였다. 그리고 그 선택은 백 년이 지난 지금도, 벽에 등을 기댄 사람들에게 작은 빛이 되어 닿는다."],
      closing: "두려움 속에서도 원한을 내려놓는 것.\n그것이 가장 단단한 용기다.\n쓰러지지 않는 것보다,\n쓰러지면서도 미워하지 않는 것이 더 어렵다.",
      analysis: {
        insight: { icon: "💡", text: "진짜 용기는 적을 이기는 것이 아니라, 마지막 순간에도 증오를 거부하는 것이다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "그녀는 적군도 치료하고, 아군도 탈출시키고, 처형 앞에서도 인사를 건넸다—'중립'의 의미를 가장 극단적으로 실천한 간호사였다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "총살 전날 밤, '누구에게도 원한을 품지 않겠다'고 말한 마흔아홉 살 여성의 목소리가 백 년이 지나도 흔들리지 않는다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "에디스 캐블(Edith Cavell, 1865–1915) / Diana Souhami 《Edith Cavell》(2010), 게이너 목사 증언(1915년 10월) 및 Imperial War Museum 기록을 바탕으로 재서술했습니다.",
      },
      curatorNote: "에디스 캐블의 이야기를 고른 것은 그녀가 '영웅'이어서가 아닙니다. 가장 무너지기 쉬운 순간에, 분노 대신 평온을 선택했기 때문입니다. 우리가 살면서 마주치는 벽은 총살형만큼 극단적이지 않을 수 있습니다. 그러나 억울함과 원한을 내려놓는 일이 얼마나 어려운지는, 우리 모두 알고 있습니다. 에디스의 마지막 말은 그 무게를 아는 사람에게만 닿는 위로입니다.",
      qna: {
        question: "당신이 가장 억울하거나 분노했던 순간, 그 감정을 내려놓으려 했던 적이 있나요?",
        answer: "내려놓는다는 것은 체념이 아닙니다. 에디스가 보여준 것처럼, 그것은 오히려 가장 능동적인 선택입니다. 원한을 품는 것은 상대방에게 내 마음의 열쇠를 맡기는 일이지만, 놓아버리는 것은 그 열쇠를 되찾는 일입니다. 쉽지 않기 때문에 연습이 필요하고, 연습이 필요하기 때문에 오늘 이 이야기가 유효합니다."
      },
      publishedDate: "2026년 6월 15일",
    },

    /* ═══ 화요일 — 역사·유머 (PRIMARY: 유머) ═══ */
    2: {
      title: "오거스타 웹스터의 소네트",
      category: "역사·유머",
      primaryType: "유머",
      types: ["유머", "통찰"],
      image: null,
      svgKey: null,
      body: ["1893년 런던, 한 여성이 영국 왕립문학회(Royal Society of Literature) 회원 선거 결과를 통보받았다. 투표 결과는 찬성이었다. 그런데 이사회는 곧바로 정정 공문을 보냈다. '죄송합니다만, 우리 정관에는 여성이 회원이 될 수 없다고 명시되어 있습니다.'", "그 편지를 받은 사람은 오거스타 웹스터(Augusta Webster)였다. 당시 영국에서 손꼽히는 시인이자 극작가, 번역가였던 그녀는 그리스 비극을 번역해 학자들의 찬사를 받았고, 소네트 연작 《어머니와 딸》(A Mother and Daughter)은 셰익스피어 이후 가장 주목받는 소네트 연작 중 하나로 평가받았다.", "왕립문학회의 거절 편지는 정중했다. 그러나 웹스터의 반응은 더욱 정중했다. 그녀는 답장을 보냈다. 정관이 그러하다면 자신이 입회를 고집할 이유가 없다고, 다만 그 정관이 '다소 불편한 위치에 놓인 것 같다'고 썼다. 거절한 쪽이 오히려 더 어색해지도록 만드는 문장이었다.", "웹스터의 인생 자체가 이런 식이었다. 그녀는 남성 필명 없이 본명으로 작품을 발표한 몇 안 되는 빅토리아 시대 여성 작가였다. 당시 여성 작가 대부분이 '조지'나 '찰스' 같은 남성 이름을 빌려야 했던 시절에, 그녀는 그냥 자기 이름을 표지에 박았다.", "그녀는 시뿐 아니라 런던 시의회 학교위원회(London School Board) 위원으로도 일했다. 1879년 선출된 그녀는 여자아이들의 교육 환경을 개선하기 위해 실질적인 행정 싸움을 벌였다. 회의석상에서 그녀가 발언을 시작하면 몇몇 남성 위원들이 신문을 집어 들었다고 전해진다.", "그래도 웹스터는 계속 말했다. 신문으로 얼굴을 가린 사람들을 향해, 정확하고 느리게, 자신이 준비해 온 숫자와 논거를 읽어 내려갔다. 회의록에는 그녀의 발언이 빠짐없이 기록되어 있다. 신문 뒤의 표정은 기록되지 않았지만.", "왕립문학회 거절 사건 이후, 문학계 일부에서 웹스터를 지지하는 목소리가 나왔다. 그러나 정관은 바뀌지 않았다. 웹스터도 다시 문을 두드리지 않았다. 대신 그녀는 계속 시를 썼다. 죽기 1년 전인 1893년에도 새 작품을 발표했다.", "그녀가 세상을 떠난 것은 1894년이었다. 왕립문학회가 여성 회원을 허용하기 시작한 것은 그로부터 한참 뒤였다. 역사는 이 순서를 기억해 둘 필요가 있다. 문이 열리기 전에, 이미 문 앞에서 충분히 훌륭했던 사람들이 있었다는 것을.", "웹스터의 소네트 《어머니와 딸》은 그녀 사후 딸 마거릿에 의해 완전한 형태로 출판되었다. 완성을 보지 못하고 떠난 연작이었지만, 연구자들은 그것이 미완성이라는 사실조차 오랫동안 눈치채지 못했다. 시 자체가 너무 충만했기 때문이었다.", "오늘날 오거스타 웹스터를 아는 사람은 많지 않다. 그러나 그녀의 소네트를 처음 읽은 독자들은 종종 이렇게 묻는다고 한다. '왜 진작 몰랐을까?' 어쩌면 그것이 그녀가 왕립문학회 편지에 보낸 답장보다 더 날카로운 질문일지도 모른다.", "웹스터는 자신에게 닫힌 문을 부수지 않았다. 그냥 옆에서 계속 일했다. 그리고 그 일들이 쌓여, 결국 문 자체를 낡아 보이게 만들었다."],
      closing: "문이 닫혀도 글은 쓸 수 있다.\n회의실이 차가워도 발언은 계속할 수 있다.\n거절이 판결은 아니다.\n충분히 훌륭한 사람은, 거절 이후에도 충분히 훌륭하다.",
      analysis: {
        insight: { icon: "💡", text: "배제는 상대방의 기준을 드러낼 뿐, 당신의 가치를 정하지 않는다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "회원으로 뽑아놓고 '정관상 안 됩니다'라고 돌아선 단체가 역사에 이름을 남긴 건, 웹스터 덕분이다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "죽기 1년 전까지 시를 쓴 사람이 남긴 연작이, 미완성인 줄도 모를 만큼 충만했다는 사실.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "Augusta Webster (1837–1894) / Patricia Rigg, 《Augusta Webster: Victorian Aestheticism and the Woman Writer》(2009) 및 Christine Sutphin 편, 《Augusta Webster: Portraits and Other Poems》(2000)를 바탕으로 재서술했습니다.",
      },
      curatorNote: "오거스타 웹스터를 처음 찾아봤을 때, '왜 이 이름을 이제야 알았을까' 싶었습니다. 분노하거나 무너지지 않고, 그냥 제 자리에서 계속 써 내려간 사람. 그 조용한 지속이 가장 강한 항의였고, 가장 오래 남는 용기였습니다. 오늘 거절 앞에 서 있는 분이 계시다면, 웹스터처럼 그냥 옆에서 계속 하셔도 됩니다.",
      qna: {
        question: "당신은 '자격 없다'는 말을 들었을 때 어떻게 반응하시나요?",
        answer: "웹스터는 그 말에 정면으로 싸우지 않았습니다. 대신 '그 기준이 낡았군요'라고 조용히 기록되도록 행동했습니다. 거절은 때로 상대방의 한계를 드러내는 신호이기도 합니다. 그 신호를 자신의 가치로 오해하지 않는 것, 그것이 시작입니다. 계속하는 것이 가장 긴 반박입니다."
      },
      publishedDate: "2026년 6월 16일",
    },

    /* ═══ 수요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
    3: {
      title: "버브리지의 별빛",
      category: "역사·통찰",
      primaryType: "통찰",
      types: ["통찰", "감동"],
      image: null,
      svgKey: null,
      body: ["1940년대 후반, 영국 케임브리지대학교 천문대의 문은 여성에게 닫혀 있었다. 규정이 그랬다. 여성은 망원경을 사용할 수 없었다. 마거릿 버브리지는 그 문 앞에서 돌아서지 않았다. 그녀는 남편 제프리 버브리지의 이름으로 관측 신청서를 냈고, 그의 조수로 등록해 망원경 앞에 섰다.", "마거릿 버브리지(Margaret Burbidge, 1919–2020)는 런던 출신의 천체물리학자였다. 어린 시절 어머니가 집 창문에 붙여준 별자리 차트 한 장이 그녀의 평생을 결정했다고 훗날 회고했다. 그 별들이 어디서 왔는지를 알고 싶었다. 그 질문은 평생 그녀를 이끌었다.", "1957년, 마거릿은 남편 제프리, 윌리엄 파울러, 프레드 호일과 함께 논문 한 편을 발표했다. 저자 이름 첫 글자를 따 'B²FH'라 불린 이 논문은 별 내부의 핵융합 반응이 어떻게 수소보다 무거운 원소들을 만들어내는지를 체계적으로 설명했다. 탄소도, 산소도, 철도—우리 몸을 이루는 원소들이 별 안에서 태어났다는 것을 처음으로 완전하게 증명한 연구였다.", "그 결과가 무엇을 의미하는지 잠깐 생각해 보면 숨이 멎는다. 우리는 별의 잔해로 만들어졌다. 손등의 칼슘도, 핏속의 철도, 지금 이 글자를 읽는 눈 속의 산소도—모두 수십억 년 전 어느 별이 죽으면서 흩뿌린 것들이다. B²FH 논문은 그 사실을 처음으로 수식으로 증명해냈다.", "그러나 이 논문에 공동 저자로 참여한 윌리엄 파울러는 1983년 노벨 물리학상을 받았고, 마거릿 버브리지는 받지 못했다. 학계 안팎에서 논란이 일었다. 그녀의 기여가 파울러보다 작지 않다는 것은 공공연한 사실이었다. 마거릿은 분노했지만 멈추지 않았다. 불평 대신 다음 연구실로 걸어갔다.", "1972년, 미국천문학회가 그녀에게 '올해의 여성 과학자' 상을 수여하려 했다. 마거릿은 정중히 거절했다. 그녀의 이유는 단 하나였다. 여성만을 위한 상은 여성이 별도의 범주에 속한다는 전제를 강화할 뿐이라는 것이었다. 그녀가 원한 것은 '여성 과학자 상'이 아니라 그냥 '과학자 상'이었다.", "그녀는 캘리포니아대학교 샌디에이고 캠퍼스에서 수십 년을 연구하면서 퀘이사의 스펙트럼을 분석하고 은하의 질량 분포를 측정했다. 90대에도 연구실에 나왔다. 동료들이 은퇴를 권하면 그녀는 되물었다고 한다. 별들이 빛나기를 멈추었느냐고.", "마거릿 버브리지는 2020년 4월, 100세의 나이로 세상을 떠났다. 그녀의 부고를 쓴 과학 전문지들은 하나같이 같은 표현을 썼다. '우주가 어떻게 만들어졌는지를 알려준 사람.' 정작 그녀 자신은 생전에 이런 말을 남겼다. 자신이 한 일은 별들이 이미 수십억 년 동안 해온 일을 설명한 것뿐이라고.", "문이 닫혀 있으면 남편 이름으로 들어가면 된다. 상이 틀렸으면 거절하면 된다. 노벨상을 받지 못했으면 다음 논문을 쓰면 된다. 마거릿 버브리지의 삶은 그 단순한 논리로 100년을 채웠다. 그리고 그 100년이 우리에게 알려준 것은, 우리가 별로 만들어진 존재라는 사실이었다.", "우주의 기원을 밝힌 사람이 망원경조차 못 쓸 뻔했다는 사실이 지금은 우스워 보인다. 하지만 그 우스운 장벽 앞에서 누군가는 돌아갔을 것이다. 마거릿은 돌아가지 않았다. 그게 전부다."],
      closing: "문이 닫혀 있어도 별은 여전히 빛나고 있었다.\n그 별빛을 설명하는 일은 멈추지 않는 사람의 것이었다.\n우리 몸속의 철과 칼슘은 죽은 별이 남긴 선물이다.\n그리고 그 사실을 알아낸 사람은, 끝내 포기하지 않은 사람이었다.",
      analysis: {
        insight: { icon: "💡", text: "장벽은 방향을 바꾸게 할 수 있지만, 멈추게 할 수는 없다—멈추지 않기로 한 사람에게는.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "여성에게 망원경을 못 쓰게 했더니, 그 여성이 우주의 기원을 밝혀버렸다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "100세의 그녀가 자신이 한 일은 별들이 이미 해온 일을 설명한 것뿐이라고 말했을 때, 그 겸손함이 오히려 그녀를 별처럼 보이게 했다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "Margaret Burbidge(마거릿 버브리지, 1919–2020) / E. Margaret Burbidge, G. R. Burbidge, W. A. Fowler, F. Hoyle, 〈Synthesis of the Elements in Stars〉, *Reviews of Modern Physics* Vol.29 No.4 (1957); Marcia Bartusiak, *Einstein's Unfinished Symphony* 및 관련 전기·추모 기록을 바탕으로 재서술했습니다.",
      },
      curatorNote: "B²FH 논문을 처음 접했을 때 저도 한참 멍했습니다. 우리 몸이 별의 잔해라는 사실도 놀라웠지만, 그것을 증명한 사람이 망원경 앞에 서기 위해 남편 이름을 빌려야 했다는 사실이 더 오래 남았습니다. 마거릿 버브리지는 분노를 연료로 쓰지 않았습니다. 그냥 다음 일을 했습니다. 닫힌 문 앞에서 막막할 때, 그 '그냥 다음 일을 했다'는 태도가 저는 어떤 위로보다 힘이 됩니다.",
      qna: {
        question: "인정받지 못한다는 걸 알면서도 계속할 수 있을까요?",
        answer: "마거릿 버브리지는 노벨상을 받지 못했지만, 그 연구는 이후 모든 천체물리학 교과서의 첫 챕터가 되었습니다. 인정은 늦게 오거나 아예 오지 않을 수 있지만, 일 자체는 남습니다. 인정을 위해 하는 일은 인정이 사라지면 함께 사라지지만, 질문 때문에 하는 일은 질문이 살아 있는 한 계속됩니다. 마거릿이 끝까지 물었던 것은 '별에서 원소가 어떻게 만들어지는가'였고, 그 질문이 그녀를 100년 동안 책상 앞에 앉혀두었습니다."
      },
      publishedDate: "2026년 6월 17일",
    },

    /* ═══ 목요일 — 역사·감동 (PRIMARY: 감동) ═══ */
    4: {
      title: "퍼시 줄리언의 콩 한 알",
      category: "역사·감동",
      primaryType: "감동",
      types: ["감동", "통찰"],
      image: null,
      svgKey: null,
      body: ["1899년 앨라배마주 몽고메리에서 태어난 퍼시 줄리언은 어린 시절 학교가 없었다. 당시 앨라배마의 흑인 어린이들에게 허용된 정규 교육은 여덟 살이 넘어도 초등학교 수준에 머물렀고, 중학교는 아예 존재하지 않았다. 그의 아버지는 우체국 서기였고, 할아버지는 노예였다.", "줄리언이 드폴 대학교에 지원서를 냈을 때, 학교는 그를 받아 주었지만 조건을 달았다. 백인 학생들이 이미 배운 것들을 따라잡기 위해 '준비 과정' 학생으로 등록해야 한다는 것이었다. 스물두 살의 줄리언은 열다섯 살짜리 급우들과 나란히 앉아 공부했다. 그는 불평하지 않았다. 1920년, 그는 드폴 대학교 화학과 전체 수석으로 졸업했다.", "대학원 진학은 또 다른 벽이었다. 하버드 대학교는 그에게 연구 조교 자리를 허락하지 않았다. 이유는 하나였다. 그가 흑인이었기 때문에, 백인 학생들이 흑인의 지시를 받는 상황을 학교가 만들 수 없다는 것이었다. 줄리언은 결국 1931년 오스트리아 빈 대학교에서 화학 박사 학위를 받았다.", "귀국 후 그는 하워드 대학교에서 교편을 잡았고, 이후 드폴 대학교의 제안으로 모교로 돌아왔다. 여기서 그는 평생을 바꿀 연구를 시작했다. 대두(大豆), 즉 콩에서 스테로이드 전구체를 합성하는 것이었다. 당시 황반변성 치료에 쓰이는 피소스티그민은 아프리카산 칼라바르 콩에서만 극소량 추출되어, 녹내장 환자들이 약을 구하지 못해 시력을 잃고 있었다.", "1935년, 줄리언은 피소스티그민 전합성에 성공했다. 이는 세계 최초였다. 그런데 영국의 화학자 로버트 로빈슨이 불과 며칠 전 같은 연구를 발표했다는 소식이 들어왔다. 줄리언의 팀이 논문을 준비하는 사이 로빈슨의 논문이 먼저 저널에 실린 것이었다. 그러나 줄리언은 로빈슨의 합성 경로가 자신의 것과 다르며 오류가 있음을 데이터로 증명해 냈고, 학계는 줄리언의 합성을 올바른 것으로 인정했다.", "그의 다음 목표는 콩에서 프로게스테론과 테스토스테론 같은 성호르몬을 대량으로 합성하는 것이었다. 1940년대까지 이 호르몬들은 동물 담즙에서 추출해야 했기 때문에 터무니없이 비쌌다. 줄리언은 대두 단백질에서 스티그마스테롤을 분리하고, 이를 출발 물질로 삼아 합성 경로를 개척했다. 덕분에 관절염 치료에 쓰이는 코르티손의 가격이 수십 분의 일로 떨어졌고, 수백만 명의 환자가 치료를 받을 수 있게 되었다.", "1950년, 줄리언은 글리든 회사를 떠나 자신의 연구소 '줄리언 래버러토리스'를 세웠다. 일리노이주 오크파크의 집을 구입했을 때, 동네 주민들은 두 차례에 걸쳐 그의 집에 불을 질렀다. 두 번째 방화는 다이너마이트를 이용한 것이었다. 그는 가족을 지키며 집을 떠나지 않았다. 그리고 연구를 멈추지 않았다.", "줄리언은 결국 회사를 1961년 스미스, 클라인 앤드 프렌치에 매각했는데, 그 금액은 230만 달러였다. 그는 이 돈으로 흑인 학생들을 위한 장학 재단을 세웠다. 살면서 자신이 넘었던 문들, 그 문 앞에서 돌아서야 했던 아이들을 위해서였다.", "퍼시 줄리언은 1975년 세상을 떠났다. 그는 생애 동안 130개 이상의 특허를 등록했다. 미국 화학회는 그를 20세기 가장 영향력 있는 화학자 중 한 명으로 꼽았다. 콩 한 알에서 시작한 연구가 관절염으로 구부러진 손을 펴 주고, 녹내장으로 흐려지던 눈을 밝혀 주었다. 그 콩을 심은 사람은, 학교도 없던 고장에서 태어난 아이였다."],
      closing: "문이 없으면 콩 한 알부터 시작하면 된다.\n불이 붙어도 연구실 불은 꺼지지 않았다.\n가장 낮은 자리에서 앉아 배운 사람이\n가장 많은 사람의 통증을 지워 주었다.",
      analysis: {
        insight: { icon: "💡", text: "출발선이 뒤처질수록, 도착점의 의미는 더 많은 사람에게 닿는다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "열다섯 살 동급생들 사이에서 수석 졸업한 스물두 살 — 인생에서 '늦었다'는 말이 얼마나 짧은 생각인지 보여 주는 가장 확실한 증거.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "방화로 두 번 불타도 집을 지키고, 연구를 지킨 사람이 마지막으로 지킨 것은 자기 다음에 올 아이들의 기회였다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "Percy Lavon Julian (1899–1975) / Winifred Conkling 《Methinks the Lady Doth Protest Too Much》 참조 및 PBS 다큐멘터리 《Forgotten Genius》(2007), American Chemical Society 공식 전기 자료를 바탕으로 재서술했습니다.",
      },
      curatorNote: "퍼시 줄리언 이야기를 처음 접했을 때, 저는 '억울함'보다 '일관성'에 압도되었습니다. 차별의 문이 닫힐 때마다 그는 다른 문을 찾은 게 아니라 연구를 계속했습니다. 분노할 이유가 충분했던 사람이 분노 대신 데이터를 쌓은 것, 그 선택이 수백만 명의 삶을 바꿨습니다. 오늘 어딘가에서 문이 닫히는 소리가 들린다면, 줄리언이 콩을 들여다보던 그 조용한 눈을 떠올려 보시길 바랍니다.",
      qna: {
        question: "내가 넘어온 문들이 나를 정의하는가, 아니면 내가 그 문 너머에서 무엇을 했는가가 나를 정의하는가?",
        answer: "퍼시 줄리언의 이야기는 이 질문에 명확하게 답합니다. 그가 기억되는 이유는 차별받았기 때문이 아니라, 차별 속에서도 피소스티그민을 합성하고 코르티손을 대중화했기 때문입니다. 우리는 종종 불리한 조건이 결과를 결정한다고 느끼지만, 실제로 결과를 만드는 것은 조건이 아니라 그 조건 속에서 계속한 행위입니다. 문이 없는 곳에서 콩을 들여다본 시간이 쌓여, 결국 그 콩이 세상을 바꿨습니다. 우리 각자에게도 그런 '콩 한 알'이 있습니다."
      },
      publishedDate: "2026년 6월 18일",
    },

    /* ═══ 금요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
    5: {
      title: "마르가레테 슈테플린의 서랍",
      category: "역사·통찰",
      primaryType: "통찰",
      types: ["통찰", "감동"],
      image: null,
      svgKey: null,
      body: ["1941년 5월, 스웨덴 스톡홀름에서 핀란드로 향하던 기차 안에서 한 여성이 조용히 숨을 거뒀다. 마르가레테 슈테플린(Margarete Steffin), 서른세 살이었다. 독일 출신의 작가이자 번역가였던 그녀는 오랜 결핵과 싸우다 망명지의 기차 안에서 생을 마쳤다.", "슈테플린의 이름은 오늘날 거의 알려져 있지 않다. 하지만 20세기 연극사에서 가장 유명한 이름 중 하나인 베르톨트 브레히트(Bertolt Brecht)의 작업실 한켠에는 항상 그녀가 있었다. 1932년부터 약 10년간, 슈테플린은 브레히트의 희곡 여러 편에서 번역, 편집, 그리고 실질적인 공동 집필을 담당했다. 《억척어멈과 그 자식들》, 《갈릴레오의 생애》 등 브레히트의 대표작들이 형태를 갖춰가던 바로 그 시기였다.", "슈테플린이 브레히트와 함께 일한 방식은 단순한 조력이 아니었다. 그녀는 덴마크어, 스웨덴어, 러시아어를 유창하게 구사했고, 망명 시절 브레히트가 유럽 각지의 극단 및 지식인들과 소통할 수 있었던 것은 상당 부분 그녀의 언어 능력 덕분이었다. 현존하는 편지와 원고를 분석한 연구자들은 일부 장면의 대사가 슈테플린의 손에서 먼저 쓰였다고 지적한다.", "그러나 출판된 희곡의 표지에 그녀의 이름은 없었다. 당시의 관행이기도 했고, 브레히트 스스로도 이를 달리 정리하지 않았다. 슈테플린은 이 사실에 대해 공개적으로 항의하지 않았다. 대신 그녀는 계속 썼다. 자신의 이름으로 시를, 단편을, 편지를 썼다. 서랍 속에, 혹은 친구들에게 보내는 봉투 안에.", "그녀가 남긴 글들이 세상에 알려지기 시작한 것은 사망 이후 수십 년이 지나서였다. 1990년대 들어 독일 학자들이 그녀의 유고를 본격적으로 정리하면서, 슈테플린이 단순한 조력자가 아닌 독립적인 목소리를 가진 작가였음이 드러났다. 그녀의 시집과 산문은 뒤늦게 독일어권에서 출판되었고, 브레히트 연구자들은 기존의 작품 귀속 문제를 재검토하기 시작했다.", "슈테플린의 삶에서 주목할 만한 것은 분노나 체념이 아니라, 조용하고 집요한 창작의 지속이었다. 결핵으로 폐가 망가져가는 와중에도, 망명지를 전전하며 짐을 줄여야 하는 상황에서도, 그녀는 원고를 버리지 않았다. 이름이 지워진 자리에서도 쓰는 행위 자체를 멈추지 않았다.", "그녀의 존재가 오래 묻혀 있었던 것은 단순히 '여성이어서'만은 아니었다. 협업의 구조 속에서 '보조자'로 분류된 사람이 실은 그 작업의 핵심 축이었을 때, 역사는 종종 더 빛나는 이름 쪽으로만 초점을 맞춰왔다. 슈테플린의 이야기는 그 구조 자체를 질문하게 만든다.", "오늘날 마르가레테 슈테플린을 다루는 연구들은 그녀를 '브레히트의 협력자'가 아니라 '슈테플린이라는 작가'로 호명하기 시작했다. 베를린과 라이프치히의 일부 극장에서는 그녀의 이름을 무대 프로그램에 올리는 시도가 이루어졌다. 늦었지만, 이름은 결국 돌아왔다.", "결핵과 망명과 무명(無名)의 삼중 압박 속에서도 슈테플린이 서랍을 비우지 않았다는 사실은 단순한 집념 이상의 무언가를 말해준다. 쓰는 것이 인정받기 위해서만이 아니라, 그것이 자신의 존재 방식이기 때문이라는 것. 그 믿음이, 수십 년 후 서랍을 여는 손들을 기다리고 있었다.", "그녀의 이름을 아는 사람은 여전히 많지 않다. 하지만 지금 이 순간에도 어딘가의 서랍 속에, 이메일 임시저장함 속에, 혼자만 아는 메모장 속에, 슈테플린 같은 사람이 무언가를 쓰고 있을 것이다. 그 행위가 지금 당장 아무것도 증명하지 못한다 해도."],
      closing: "이름이 지워진 자리에서도 손은 움직였다.\n서랍은 닫혀 있었지만, 글은 살아 있었다.\n인정은 늦게 오기도 한다. 아주 많이 늦게.\n그래도 쓰는 것이, 존재하는 방식이었다.",
      analysis: {
        insight: { icon: "💡", text: "인정받지 못한 자리에서도 창작을 멈추지 않는 것, 그 자체가 이미 패배하지 않은 삶이다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "역사는 표지에 적힌 이름만 기억한다고 했는데, 서랍은 그 규칙을 몰랐던 모양이다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "폐가 무너지는 와중에도 원고를 버리지 않은 서른 살의 여자가, 수십 년 후 학자의 손에 의해 비로소 '작가'로 불렸을 때.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "마르가레테 슈테플린(Margarete Steffin, 1908–1941) / John Fuegi 《Brecht and Company》(1994), 및 독일어권 슈테플린 유고 연구(Inge Gellert 편집, 《Konfutse versteht nichts von Frauen》 포함)를 바탕으로 재서술했습니다.",
      },
      curatorNote: "슈테플린의 이야기를 처음 접했을 때, 저는 '억울함'보다 '끈질김'에 더 오래 머물렀습니다. 그녀는 자신의 이름이 없는 무대를 보면서도, 자기 이름으로 된 글을 계속 썼습니다. 그 행위가 지금 이 뉴스레터를 읽는 분들 중 누군가에게도 해당하는 이야기일 것 같았습니다. 지금 당신의 서랍이 아직 닫혀 있다면, 그것은 끝이 아니라 준비 중인 것입니다.",
      qna: {
        question: "지금 나의 '서랍 속 원고'는 무엇인가요? 아직 꺼내지 못한 이유는 인정받지 못할 것 같아서인가요, 아니면 아직 충분하지 않다는 생각 때문인가요?",
        answer: "슈테플린의 서랍이 열린 것은 그녀가 살아있을 때가 아니었습니다. 하지만 열렸습니다. 창작이나 아이디어를 '인정받을 준비가 됐을 때'까지 미루는 것은, 사실 완성도의 문제가 아니라 두려움의 문제일 때가 많습니다. 슈테플린이 우리에게 남긴 가장 조용한 조언은 이것입니다. 꺼내놓는 것보다 계속 쓰는 것이 먼저라고. 서랍은 결국 누군가의 손에 의해 열리게 되어 있다고."
      },
      publishedDate: "2026년 6월 19일",
    },

    }
  },
  {
    weekLabel: "2026년 6월 2주 (6/8–6/12)",
    weekStart: "2026-06-08",
    stories: {

    /* ═══ 월요일 — 역사·감동 (PRIMARY: 감동) ═══ */
    1: {
      title: "엘라 피츠제럴드의 두 번째 오디션",
      category: "역사·감동",
      primaryType: "감동",
      types: ["감동", "통찰"],
      image: null,
      svgKey: null,
      body: ["1934년 11월 21일, 뉴욕 할렘의 아폴로 극장에는 '아마추어 나이트' 공연이 열렸다. 무대 뒤편 대기실에는 열여섯 살의 소녀 하나가 덜덜 떨고 있었다. 이름은 엘라 피츠제럴드(Ella Fitzgerald). 원래 그녀는 댄서로 지원했으나, 무대에 막 오르려는 순간 다리가 굳어버렸다.", "두려움에 사로잡힌 엘라는 춤 대신 노래를 부르겠다고 즉석에서 바꿨다. 사회자는 인상을 찌푸렸다. 관중석에선 야유 소리가 터질 준비를 하고 있었다. 아폴로의 아마추어 나이트 관객은 혹독하기로 유명했다—마음에 안 들면 고함과 물건이 날아왔다.", "엘라가 입은 옷은 남자 형제에게서 빌린 낡은 바지였다. 어머니를 교통사고로 잃은 뒤 고아원과 거리를 전전하던 그녀에게 제대로 된 무대 의상 같은 건 없었다. 청중 몇몇이 비웃음을 흘렸다. 그럼에도 엘라는 마이크 앞에 섰다.", "그녀가 첫 소절을 뱉는 순간, 극장 안의 공기가 달라졌다. 속삭이던 관객이 멈췄다. 야유를 준비하던 손이 내려갔다. 엘라는 코니 보스웰(Connee Boswell)의 「The Object of My Affection」을 불렀다—음 하나하나가 극장 천장까지 올라갔다.", "공연이 끝나자 아폴로 극장 역사상 보기 드문 일이 벌어졌다. 관객이 기립했다. 거친 할렘의 아마추어 나이트 관중이, 낡은 바지를 입은 열여섯 소녀에게 우레 같은 박수를 보낸 것이다. 엘라는 그날 1등 상을 받았다.", "그러나 그 뒤로도 삶은 곧장 피지 않았다. 수상에도 불구하고 극장 측은 '외모가 무대에 어울리지 않는다'며 재계약을 거절했다. 엘라는 다시 거리로 돌아갔다. 찬 바람이 부는 할렘의 골목에서, 그녀가 가진 건 그날 받은 박수 소리의 기억뿐이었다.", "전환점은 1935년에 찾아왔다. 빅밴드 리더 척 웹(Chick Webb)이 그녀를 발굴해 악단의 전속 보컬로 영입했다. 처음에 웹은 엘라의 외모를 보고 망설였다. 하지만 그녀가 딱 한 곡을 부르자 두 번 생각하지 않았다고 훗날 회고했다.", "엘라 피츠제럴드는 이후 13개의 그래미상을 수상했고, 평론가들에게 '재즈의 퍼스트 레이디'로 불렸다. 그러나 그녀 스스로 평생 가장 소중하게 여긴 날은 그래미 수상 밤이 아니었다. 1960년대 한 인터뷰에서 그녀는 이렇게 말했다. \"나는 아폴로 무대에서 처음 박수를 받던 그 순간을 아직도 기억해요. 그게 내가 계속 노래한 이유예요.\"", "엘라의 이야기에서 자주 빠지는 사실이 하나 있다. 그녀는 아폴로 첫 수상 이후에도 수년간 빈곤과 차별 속에서 노래했다는 것이다. 흑인 여성 보컬이 호텔에 투숙하지 못해 공연장 뒷골목에서 밤을 지새운 날도 있었다. 그럼에도 그녀는 무대에 오를 때마다 온 힘을 다했다. 두 번째, 세 번째 오디션을 스스로에게 허락하면서.", "엘라 피츠제럴드가 세상을 떠난 1996년, 빌 클린턴 대통령은 추도사에서 이렇게 말했다. \"그녀의 목소리는 미국의 영혼이었습니다.\" 할렘의 골목에서 떨던 열여섯 소녀가, 결국 한 나라의 영혼이 되었다."],
      closing: "두려움이 발목을 잡을 때, 그냥 노래를 불렀다.\n무대 의상도 없이, 다음을 보장받지도 못한 채.\n거절당한 다음 날도, 그다음 날도.\n그것이 전부였다—그리고 그것으로 충분했다.",
      analysis: {
        insight: { icon: "💡", text: "재능은 첫 번째 기회보다 두 번째, 세 번째 시도 앞에서 더 단단해진다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "낡은 남동생 바지를 입고 아폴로를 접수했으니, 무대 의상 예산은 아낀 셈이다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "박수 소리 하나를 수십 년 동안 연료 삼아 살아간 사람이 있었다는 것.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "Ella Fitzgerald (1917–1996) / Stuart Nicholson, 《Ella Fitzgerald: A Biography of the First Lady of Jazz》(1993, Da Capo Press)를 바탕으로 재서술했습니다.",
      },
      curatorNote: "이 이야기를 고른 건 '첫 성공' 때문이 아닙니다. 성공한 뒤에도 다시 거절당하고, 그래도 다음 무대에 올랐다는 사실 때문입니다. 우리가 흔히 잊는 게 있어요—위대한 사람들도 두 번째, 세 번째 오디션을 통과해야 했다는 것. 오늘 거절당했다면, 당신은 이제 막 아폴로 뒷골목에 선 겁니다. 엘라가 거기서도 노래를 멈추지 않았듯이.",
      qna: {
        question: "당신이 '한 번 더' 시도하는 것을 가로막는 가장 큰 목소리는 무엇인가요?",
        answer: "대개 그 목소리는 외부에서 오지 않습니다. '외모가 무대에 맞지 않는다'는 말을 극장 측이 했지만, 엘라를 다시 세운 건 자기 안에 남은 박수 소리였습니다. 우리를 멈추게 하는 가장 강한 목소리는 우리 자신이 반복 재생하는 거절의 기억이고, 우리를 다시 일으키는 것도 결국 우리 자신이 붙들고 있는 작은 가능성의 기억입니다. '한 번 더'는 용기가 아니라 기억력의 문제일지도 모릅니다—내가 잘했던 단 한 순간을, 얼마나 선명하게 기억하느냐의."
      },
      publishedDate: "2026년 6월 8일",
    },

    /* ═══ 화요일 — 역사·유머 (PRIMARY: 유머) ═══ */
    2: {
      title: "조슈아 슬로컴의 나사 한 개",
      category: "역사·유머",
      primaryType: "유머",
      types: ["유머", "통찰"],
      image: null,
      svgKey: null,
      body: ["1895년 4월 24일, 매사추세츠주 보스턴 항구. 한 남자가 낡아빠진 11미터짜리 범선 '스프레이(Spray)' 호에 혼자 올라탔다. 조슈아 슬로컴, 당시 51세. 그는 인류 역사상 처음으로 '단독 무기항 세계 일주'를 시도하려 했다.", "문제는 배였다. 스프레이 호는 1800년대 초에 건조된 후 수십 년째 목장 풀밭에 방치돼 있던 배였다. 한 친구가 '공짜로 줄 테니 가져가게'라며 건넨 것인데, 슬로컴이 처음 봤을 때 배는 이미 반쯤 썩어 형태만 갖추고 있었다. 선원들 사이에서는 '저 배로 대서양을 건너겠다고? 욕조를 타고 가는 게 낫겠다'는 소리가 나왔다.", "슬로컴은 13개월 동안 혼자 배를 수리했다. 새 목재를 직접 깎아 덧대고, 돛을 꿰매고, 갑판을 다시 깔았다. 비용은 거의 없었다. 못은 구식 방식으로 직접 만들었고, 페인트가 부족하면 진흙을 섞었다. 주변 사람들은 그를 '인생을 포기한 늙은 선원'이라 불렀다.", "항해가 시작되자 예상치 못한 문제가 생겼다. 스프레이 호는 직진을 너무 잘했다. 슬로컴은 키를 묶어 놓고 몇 시간씩 잠을 잘 수 있었는데, 배가 혼자 항로를 유지했기 때문이다. 나중에 학자들이 선체 설계를 분석한 결과, 배의 복원력과 돛의 균형이 우연히 완벽하게 맞아떨어진 것이었다. 썩어 가던 배가 물리학적으로 거의 '자율 항법' 선박이었던 셈이다.", "남아메리카 마젤란 해협을 통과할 때였다. 현지 원주민들이 배에 접근할 수 있다는 경고를 들은 슬로컴은 갑판에 압정(carpet tacks)을 깔아 놓고 잠들었다. 한밤중에 맨발로 올라탄 이들이 비명을 지르며 물로 뛰어들었다. 슬로컴은 일기에 이렇게 적었다. '그들을 막기 위해 내가 한 일이라곤 압정 한 봉지를 사는 것뿐이었다. 최고의 경비 시스템이었다.'", "태평양을 혼자 건너는 73일 동안 그는 단 한 척의 배도 만나지 못했다. 망망대해에서 심심함을 달래기 위해 큰 소리로 책을 읽었고, 스스로에게 연설했으며, 별자리에 이름을 붙여 가며 대화를 나눴다. 그는 훗날 '가장 훌륭한 대화 상대는 자기 자신이었다. 다만 내가 하는 말에 아무도 반박을 안 하니, 내 논리가 맞는지 확인할 방법이 없어 좀 불안했다'고 썼다.", "1898년 6월 27일, 3년 2개월의 항해 끝에 슬로컴은 다시 뉴포트 항구로 돌아왔다. 46,000킬로미터. 그는 길을 잃은 적도 없었고, 크게 다친 적도 없었다. 보험도 없었고, 후원사도 없었고, 위성통신도 없었다. 나침반과 낡은 알람시계, 그리고 수십 년 쌓인 항해 감각만으로.", "그런데 귀항 후 영웅 대접을 받을 것이라 기대했다면 오산이었다. 항구 세관원이 가장 먼저 물었다. '신고할 화물이 있습니까?' 슬로컴은 잠시 생각하더니 대답했다. '없습니다. 나 자신 하나뿐입니다.' 세관원은 서류에 '화물 없음'이라고 적었다. 3년간의 단독 세계 일주가 세관 기록에 그렇게 남았다.", "슬로컴은 그 항해기를 책으로 썼다. 《Sailing Alone Around the World》(1900)는 출판되자마자 베스트셀러가 됐고, 지금도 항해 문학의 고전으로 꼽힌다. 그 책 수익이 그가 항해에서 번 거의 유일한 돈이었다. 배를 고치고, 바다를 건너고, 책을 쓰는 것—그는 그 세 가지 모두를 스스로 해냈다.", "1909년, 그는 또 한 번 대서양 항해를 떠났다. 그리고 돌아오지 않았다. 시신도 배도 발견되지 않았다. 향년 65세. 미국 법원은 1924년 그를 공식 사망 처리했다. 어떤 이들은 '슬로컴은 바다가 데려간 게 아니라, 바다를 향해 스스로 걸어 들어간 것'이라고 말한다. 어쩌면 그 말이 맞을지도 모른다."],
      closing: "썩은 배 한 척, 나침반 하나.\n그것으로 세계를 한 바퀴 돌 수 있다.\n'화물 없음'이라고 적힌 그 칸에\n사실은 모든 것이 들어 있었다.",
      analysis: {
        insight: { icon: "💡", text: "준비가 완벽하지 않아도 출발할 수 있다—낡고 불완전한 것이 오히려 뜻밖의 강점을 품고 있을 때가 있다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "3년간 지구를 한 바퀴 돌고 돌아온 남자에게 세관원이 물었다. '신고할 것 있습니까?' 인생의 많은 것들이 그렇게, '화물 없음' 한 줄로 처리된다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "혼자 73일을 항해하며 별에게 이름을 붙이고 스스로에게 연설하던 그 사람—외롭지 않았던 게 아니라, 외로움과 함께 항해하는 법을 알았던 것이다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "Joshua Slocum (1844–1909) / Joshua Slocum 《Sailing Alone Around the World》(1900) 및 Walter Teller 《Joshua Slocum》(1971)을 바탕으로 재서술했습니다.",
      },
      curatorNote: "이 이야기를 고른 건 '완벽한 조건을 기다리는 우리'를 위해서입니다. 슬로컴의 배는 누가 봐도 출항하면 안 될 배였습니다. 그런데 그 배가 3년을 버텼고, 자동으로 항로를 유지했습니다. 지금 당신 손에 쥔 것이 충분하지 않다고 느껴질 때, 슬로컴의 압정 한 봉지를 떠올리세요. 때로는 낡고 엉성한 것이 가장 단단한 출발점입니다.",
      qna: {
        question: "지금 내 손에 있는 '낡고 불완전한 것'은 무엇인가요? 그것으로 어디까지 갈 수 있을까요?",
        answer: "슬로컴은 배를 고르지 않았습니다. 주어진 배를 고쳤습니다. 우리도 종종 더 나은 조건, 더 좋은 타이밍을 기다리다 출발을 미룹니다. 그러나 완벽한 배는 항구에만 있습니다. 지금 가진 것—다소 낡은 기술, 넉넉지 않은 자원, 불확실한 경로—이 사실은 당신이 생각하는 것보다 훨씬 멀리까지 데려다줄 수 있습니다. 압정 한 봉지로 경비를 해결한 사람처럼, 창의적인 결핍이 때로는 가장 강력한 해결책이 됩니다."
      },
      publishedDate: "2026년 6월 9일",
    },

    /* ═══ 수요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
    3: {
      title: "해리엇 터브먼의 지도",
      category: "역사·통찰",
      primaryType: "통찰",
      types: ["통찰", "감동"],
      image: null,
      svgKey: null,
      body: ["1849년 가을, 메릴랜드주 도체스터 카운티. 스물일곱 살의 노예 여성 아라민타 로스는 혼자 북쪽으로 걷기 시작했다. 남편은 따라오지 않겠다고 했다. 오빠들도 중간에 돌아갔다. 그녀는 별을 보며 방향을 잡았고, 약 150킬로미터를 걸어 펜실베이니아주 필라델피아에 도착했다. 그녀의 이름은 훗날 해리엇 터브먼이 된다.", "자유는 달콤했지만 오래가지 않았다. 필라델피아에 선 터브먼은 이렇게 말했다. '내 집은 미주리에 있었는데, 난 캔자스에 와 있는 것 같았다. 아무도 나를 기다리지 않았고, 아무도 내가 온 것을 몰랐다. 낯선 땅에 혼자였다.' 자유를 얻었지만, 그것이 전부가 아니라는 것을 그녀는 즉시 알아차렸다.", "1850년, 미국 의회는 '도망노예법'을 통과시켰다. 북부로 탈출한 노예도 발각되면 다시 남부로 송환할 수 있게 된 것이다. 터브먼의 자유는 법적으로 한층 더 불안해졌다. 보통 사람이라면 더 깊이 숨었을 것이다. 그녀는 반대 방향으로 움직였다.", "터브먼은 남부로 돌아갔다. 한 번이 아니라 무려 열세 번. 그녀는 '지하철도(Underground Railroad)'라 불린 비밀 탈출 네트워크를 이용해 약 70명의 사람들을 직접 이끌고 북쪽으로 데려왔다. 그 70명 중 도중에 체포된 사람은 단 한 명도 없었다.", "터브먼의 방식에는 독특한 원칙이 있었다. 한 번 출발한 사람은 절대 중간에 돌아갈 수 없었다. 겁이 나서 돌아가겠다는 사람이 있으면 그녀는 조용히 권총을 꺼내 들었다. '죽거나, 아니면 자유로워지거나. 중간은 없다.' 냉정해 보이는 이 원칙은 사실 탈출한 사람이 잡히면 고문 끝에 다른 탈출자들의 경로와 은신처를 말하게 될 것이기 때문이었다. 한 사람의 두려움이 전체의 목숨이 될 수 있었다.", "남부 노예주들은 터브먼에게 현상금을 걸었다. 1850년대 기준으로 최고 4만 달러에 달했다는 기록도 있다. 그녀의 얼굴을 아는 사람은 거의 없었다. 터브먼은 계절을 골랐다. 크리스마스 전후, 사람들이 들뜨고 감시가 느슨해질 때를 노렸다. 아기가 울어 들킬 위험이 있으면 진정제를 미리 준비했다. 그녀의 탈출은 무모한 용기가 아니라 치밀한 관찰의 산물이었다.", "남북전쟁이 발발하자 터브먼은 북군의 요청으로 스파이 겸 정찰대 역할을 맡았다. 1863년 6월, 그녀는 사우스캐롤라이나주 컴바히 강 습격 작전을 직접 안내했다. 이 작전으로 700명 이상의 노예들이 한 번에 해방되었다. 미국 역사상 여성이 군사 작전을 직접 지휘한 최초의 사례로 기록된다.", "전쟁이 끝난 뒤에도 터브먼의 싸움은 끝나지 않았다. 그녀는 뉴욕주 오번에 집을 짓고 노인과 빈민을 위한 보호시설을 운영했다. 여성 참정권 운동에도 뛰어들어 수전 B. 앤서니와 함께 연설장에 섰다. 1913년, 아흔한 살 무렵에 세상을 떠나기 직전 주변 사람들에게 이렇게 말했다고 전해진다. '나는 갑니다. 여러분을 위해 자리를 준비하러.'", "터브먼이 살아 있는 동안 연방 정부는 그녀에게 어떤 공식 보상도 하지 않았다. 남북전쟁 참전에 대한 연금 청구는 수십 년 동안 거부되었다가, 그녀의 나이 일흔네 살이 되어서야 일부 인정받았다. 미국 정부가 그녀의 얼굴을 20달러 지폐에 새기기로 결정한 것은 그로부터 100년도 더 지난 뒤의 일이다.", "터브먼이 한 번도 길을 잃지 않았던 이유는 무엇일까. 후대 역사가들은 그녀가 별자리와 이끼의 방향, 나무의 수분 상태, 바람의 냄새를 읽었다고 분석한다. 지도도 나침반도 없이 어둠 속을 걸었지만, 그녀는 매번 목적지에 닿았다. 어쩌면 가장 정확한 지도는 돌아갈 수 없다는 확신이었는지도 모른다.", "그녀의 별명은 '모세'였다. 사람들을 이끌어 약속의 땅으로 데려간다는 뜻이었다. 하지만 터브먼 자신은 한 인터뷰에서 이렇게 말했다. '나는 수백 명을 자유로 이끌 수 있었다. 만약 그들이 자신이 노예라는 사실을 몰랐다면 더 많이 구할 수 있었을 텐데.' 이 말은 지금도 많은 것을 생각하게 한다."],
      closing: "지도가 없어도 방향은 있다.\n두려움이 커질수록 발걸음을 멈추지 않는 것,\n그것이 터브먼이 열세 번 돌아간 이유였다.\n당신에게도 되돌아갈 이유가 있다면, 그게 바로 길이다.",
      analysis: {
        insight: { icon: "💡", text: "가장 정확한 지도는 '반드시 가야 한다'는 확신이다. 방향을 아는 사람은 어둠 속에서도 길을 만들어낸다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "현상금 4만 달러짜리 도망자가 13번이나 현장에 '자진 출두'했다는 사실 — 역사상 가장 대담한 자수(自首) 기록일지도 모른다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "아흔 살이 넘어 임종을 앞두고 '자리를 준비하러 간다'고 말한 사람 — 그녀는 마지막 순간에도 누군가를 위해 먼저 가는 사람이었다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "Harriet Tubman (c.1822–1913) / Kate Clifford Larson 《Bound for the Promised Land: Harriet Tubman, Portrait of an American Hero》(2004), Catherine Clinton 《Harriet Tubman: The Road to Freedom》(2004)을 바탕으로 재서술했습니다.",
      },
      curatorNote: "터브먼의 이야기를 다시 읽으면서 '용기'라는 단어를 다시 정의하게 됩니다. 용기란 두려움이 없는 상태가 아니라, 두려움보다 더 강한 이유를 가진 상태라는 것. 열세 번 돌아간 그 발걸음은 무모함이 아니라 치밀한 관찰과 타인을 향한 책임감이 만들어낸 길이었습니다. 오늘 당신이 발을 떼기 두려운 그 한 걸음 앞에서, 터브먼의 별자리 읽기를 떠올려 보시길 바랍니다.",
      qna: {
        question: "당신이 이미 자유로워졌는데도 다시 위험한 곳으로 돌아가게 만드는 '이유'가 있다면, 그것은 무엇인가요?",
        answer: "터브먼은 자신의 자유를 얻은 뒤 안전하게 머물 수 있었습니다. 하지만 그녀를 다시 움직이게 한 것은 '나만 여기 있으면 안 된다'는 감각이었습니다. 심리학에서는 이것을 '의무감'이 아닌 '연결감'이라고 부릅니다. 내가 살아온 맥락, 함께했던 사람들, 나를 만들어준 공동체와의 연결이 끊어지지 않았다는 느낌. 그 연결감이 때로는 자기보존 본능보다 더 강하게 작동합니다. 당신이 지쳐서 멈추고 싶을 때, '왜 나는 이걸 시작했는가'를 떠올리는 것 — 그 연결의 끈을 다시 쥐는 것이, 터브먼이 열세 번 걸었던 길의 시작이었을 겁니다."
      },
      publishedDate: "2026년 6월 10일",
    },

    /* ═══ 목요일 — 역사·감동 (PRIMARY: 감동) ═══ */
    4: {
      title: "카롤리나의 노트",
      category: "역사·감동",
      primaryType: "감동",
      types: ["감동", "통찰"],
      image: null,
      svgKey: null,
      body: ["1958년, 브라질 상파울루 변두리의 카닌데(Canindé) 빈민가. 젊은 신문기자 아우달리우 단타스(Audálio Dantas)가 취재를 나왔다가 한 장면을 보았다. 놀이터를 부수던 사내들에게 한 여자가 말했다. '계속 그러면 당신들 이름을 전부 내 책에 적어 넣겠어요.' 사내들이 슬그머니 물러났다.", "그 여자의 이름은 카롤리나 마리아 데 제수스(Carolina Maria de Jesus). 세 아이를 혼자 키우는 어머니였다. 학교는 2년밖에 다니지 못했고, 낮에는 거리에서 폐지와 빈 깡통을 주워 그날의 끼니를 벌었다. 그런데 '내 책'이라니 — 기자는 그 말이 마음에 걸렸다.", "단타스가 물었다. 정말 쓰는 글이 있느냐고. 카롤리나는 판잣집에서 낡은 공책 여러 권을 꺼내 왔다. 쓰레기 더미에서 주운 노트들이었다. 거기에는 그녀가 매일 밤 적어 내려간 일기가 빼곡했다. 배고픈 날의 기록, 아이가 아픈 날의 기록, 그래도 내일을 살아야 한다는 기록.", "카롤리나에게는 가진 것이 거의 없었다. 좋은 펜도, 책상도, 글을 배운 시간도 없었다. 그러나 그녀는 매일 썼다. 먹을 것이 없어 아이들이 우는 밤에도 노트를 펼쳤다. 쓰는 일이 그녀를 무너지지 않게 붙잡아 주는 유일한 손잡이였다.", "단타스는 그 일기를 신문에 조금씩 소개했다. 반응은 뜨거웠다. 그리고 1960년, 카롤리나의 일기가 《쓰레기장(Quarto de Despejo)》이라는 제목의 책으로 묶여 나왔다. 빈민가에서 '버려진 방'을 뜻하는 말이었다.", "책은 폭발적으로 팔렸다. 초판이 며칠 만에 동났고, 카롤리나의 일기는 그 시기 브라질에서 가장 많이 읽힌 책 중 하나가 되었다. 이윽고 여러 나라 말로 번역되어, 지구 반대편의 독자들이 상파울루 빈민가 한 어머니의 문장 앞에서 가슴을 쳤다.", "인세로 카롤리나는 빈민가를 떠나 벽돌집으로 이사했다. 평생 처음 가져 보는 자기 집이었다. 세 아이가 흙바닥이 아닌 단단한 바닥을 밟던 날에도, 그녀는 노트를 펼쳐 그 하루를 적었다.", "그러나 빛은 오래 머물지 않았다. 책의 열기가 식자 수입도 끊겼고, 세상은 곧 그녀를 잊었다. 카롤리나는 다시 가난해졌다. 그래도 펜은 놓지 않았다. 그녀는 계속 썼고, 몇 권의 책을 더 남겼다.", "1977년, 카롤리나 마리아 데 제수스는 상파울루 외곽에서 가난 속에 눈을 감았다. 화려한 문학상도, 안락한 말년도 없었다. 그러나 그녀가 쓰레기 더미에서 건져 채워 넣은 노트들은 사라지지 않았다. 오늘날 그 일기는 브라질이 자신의 가장 가난한 시절을 들여다보는 거울로 읽힌다.", "가장 적게 가진 손이 가장 꾸준히 썼다. 카롤리나에게 글쓰기는 재능의 문제가 아니라 버티는 방식이었다. 버려진 공책에 적힌 한 줄 한 줄이 모여, 끝내 그녀를 그 빈민가 밖으로, 그리고 한 시대의 기록으로 데려갔다."],
      closing: "버려진 것들 사이에서 그녀는 언어를 주웠다.\n배가 고파도 노트를 펼쳤다.\n세상이 그녀를 무시했지만, 종이는 무시하지 않았다.\n그리고 종이는, 결국 세상을 바꿨다.",
      analysis: {
        insight: { icon: "💡", text: "기록은 가장 가난한 손으로도 세상을 바꾸는 도구가 될 수 있다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "이웃을 잠재운 무기가 칼도 고함도 아니라 '노트에 적겠다'는 협박이었다는 게, 작가의 힘을 가장 정확하게 설명한다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "배고픔 속에서도 '글을 쓰면 배가 덜 고프다'고 믿었던 그 손이, 결국 아이들에게 타일 바닥을 선물했다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "Carolina Maria de Jesus (1914–1977) / Carolina Maria de Jesus, 《Quarto de Despejo: Diário de uma Favelada》(1960); Robert M. Levine & José Carlos Sebe Bom Meihy, 《The Life and Death of Carolina Maria de Jesus》(1995, University of New Mexico Press)를 바탕으로 재서술했습니다.",
      },
      curatorNote: "카롤리나의 이야기를 처음 접했을 때, 저는 '재능이 있어야 쓸 수 있다'는 제 안의 편견을 돌아봤습니다. 그녀에게는 좋은 책상도, 시간도, 문학 교육도 없었습니다. 오직 '오늘을 기록하겠다'는 의지만 있었죠. 글쓰기가 두렵거나, 시작이 망설여지는 분이라면, 쓰레기 더미에서 주운 공책에 매일 밤 적어 내려가던 카롤리나를 떠올려보세요. 우리에게는 적어도 펜이 있습니다.",
      qna: {
        question: "지금 내 삶에서 '기록할 가치가 없다'고 지나치는 순간들이 있지는 않나요?",
        answer: "카롤리나는 '쓸 것도 없는 하루'를 기록했습니다. 배가 고프다는 것, 아이가 울었다는 것, 빗물이 샜다는 것. 그런 문장들이 모여 세상을 움직였습니다. 거창한 사건이 아니어도 됩니다. 오늘 내가 느낀 작은 것을 남기는 것, 그게 이미 충분한 시작입니다. 기록은 나를 증명하는 행위이기도 하니까요."
      },
      publishedDate: "2026년 6월 11일",
    },

    /* ═══ 금요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
    5: {
      title: "버지니아 애프가의 냅킨 한 장",
      category: "역사·통찰",
      primaryType: "통찰",
      types: ["통찰", "감동"],
      image: null,
      svgKey: null,
      body: ["1952년 어느 아침, 뉴욕 컬럼비아 장로교 병원의 구내 식당에서 한 의대생이 버지니아 애프가(Virginia Apgar)에게 불쑥 물었다. '선생님, 신생아가 건강한지 어떻게 한눈에 알 수 있나요?' 애프가는 잠시 생각하더니 옆에 있던 냅킨을 집어 들었다.", "그녀는 냅킨 위에 다섯 가지 항목을 적었다. 피부색(Appearance), 심박수(Pulse), 반사 반응(Grimace), 근육 긴장도(Activity), 호흡(Respiration). 각 항목에 0·1·2점을 매겨 합산하면 신생아의 상태를 즉시 파악할 수 있다는 아이디어였다. 냅킨에 적힌 다섯 단어의 첫 글자를 모으면 공교롭게도 그녀 자신의 이름, APGAR가 되었다.", "당시 분만실은 혼돈에 가까웠다. 아기가 태어나는 순간 산모에게 집중하느라 신생아가 위험한 상태인지 아닌지를 체계적으로 확인하는 절차가 없었다. 그 결과 살릴 수 있었던 아기들이 조용히 숨을 거두는 일이 반복되고 있었다.", "애프가는 마취과 전문의였다. 당시 의학계에서 마취과는 외과나 내과에 비해 '낮은 지위'로 여겨졌고, 여성 의사는 더욱 좁은 자리밖에 허락되지 않았다. 그녀는 산부인과 레지던트 자리를 원했지만 지도교수로부터 '여성에겐 자리가 없다'는 말을 들었다. 그렇게 반강제로 마취과로 밀려났다.", "그러나 애프가는 그 '밀려난 자리'에서 분만실의 풍경을 누구보다 오래, 누구보다 조용히 지켜볼 수 있었다. 외과의는 수술에, 산부인과 의사는 산모에게 눈이 쏠렸지만, 그녀는 방 전체를 볼 수 있는 위치에 있었다. 주변부의 시선이 중심부가 보지 못한 것을 포착했다.", "냅킨에 적은 점수표는 이듬해인 1953년 논문으로 발표되었다. 처음에는 큰 반응이 없었다. 그러나 10년이 지나지 않아 전 세계 분만실이 이 '애프가 점수'를 도입하기 시작했다. 오늘날 매년 약 1억 3천만 명의 신생아가 태어나는 순간 이 다섯 가지 항목으로 평가를 받는다.", "연구자들은 애프가 점수 도입 이후 신생아 사망률이 의미 있게 감소했다고 보고한다. 특히 선진국뿐 아니라 의료 자원이 부족한 나라에서도 훈련받은 조산사가 이 간단한 체크리스트만으로 응급 처치 여부를 결정할 수 있게 되었다. 복잡한 장비 없이, 눈과 손과 냅킨 한 장이면 충분했다.", "애프가는 이후 선천성 기형 연구로 방향을 틀어 마치 처음부터 그 길이 자신의 것이었던 것처럼 새 분야를 개척했다. 1974년 세상을 떠날 때까지 그녀는 한 번도 '밀려난 것'이라는 표현을 쓰지 않았다고 전해진다. 대신 '나는 항상 방 안에서 가장 흥미로운 자리에 앉아 있었다'고 말했다.", "1994년 미국 우정국은 버지니아 애프가의 얼굴을 우표에 새겼다. 냅킨은 없었지만, 다섯 글자로 이루어진 그녀의 이름이 그 자체로 기념비가 되어 있었다. 밀려난 자리에서 시작한 관찰이, 매 순간 새로 태어나는 수억 명의 첫 번째 숨결을 지키고 있다."],
      closing: "밀려난 자리가 때로는 가장 넓은 시야를 준다.\n중심이 아닌 곳에서, 중심이 놓친 것이 보인다.\n냅킨 한 장이면 충분했다 — 보려는 눈이 있다면.\n당신의 '주변부'가 사실은 당신만의 관찰대일 수 있다.",
      analysis: {
        insight: { icon: "💡", text: "배제된 자리가 오히려 전체를 조망하는 자리가 될 수 있다 — 주변부의 시선이 중심이 놓친 문제를 푼다.", condition: "작은 것이 사실 전부였음이 드러날 때" },
        humor:   { icon: "😄", text: "자신의 이름이 점수표 약어가 된 의사는 역사상 그녀가 유일할 것이다. 냅킨이 노벨상보다 더 많은 생명을 구한 셈이다.", condition: "위엄 없는 순간이 오히려 가장 인간적이었을 때" },
        emotion: { icon: "❤️", text: "살릴 수 있었던 아이들이 조용히 사라지던 분만실에서, 아무도 묻지 않던 질문을 혼자 붙들고 있었던 한 사람의 오랜 시간이 마음을 조인다.", condition: "오래 버텨온 것 자체가 감동이 되는 이야기" }
      },
      source: {
        type: '실화',
        credit: "Virginia Apgar (1909–1974) / Apgar, V. 〈A Proposal for a New Method of Evaluation of the Newborn Infant〉, Current Researches in Anesthesia and Analgesia, 32(4), 1953; Nuland, S. B. 《Doctors: The Biography of Medicine》(1988)을 바탕으로 재서술했습니다.",
      },
      curatorNote: "이 이야기를 고른 건 '억울한 상황을 뒤집는 법'에 대한 가장 조용한 답이라고 느꼈기 때문입니다. 애프가는 항의하거나 포기하는 대신, 자신이 있는 자리에서 볼 수 있는 것을 끝까지 보았습니다. 원하던 자리가 아니어도 괜찮다고, 지금 있는 곳에서 눈을 크게 뜨면 된다고 — 이 이야기는 그렇게 말을 거는 것 같습니다.",
      qna: {
        question: "당신이 '원하지 않았던 자리'에 놓인 적이 있다면, 그 자리에서만 볼 수 있었던 것은 무엇인가요?",
        answer: "원하지 않은 자리는 처음에 좌절처럼 느껴지지만, 그 자리는 종종 우리에게 다른 각도의 시야를 강제로 선물합니다. 애프가가 분만실 전체를 관찰할 수 있었던 건 바로 그 '밀려난' 위치 덕분이었습니다. 내가 원했던 중심에 있었다면, 나는 중심만 보았을 것입니다. 지금 서 있는 자리가 초라하게 느껴진다면, 한 번쯤 물어보세요 — 여기서만 보이는 것이 무엇인지."
      },
      publishedDate: "2026년 6월 12일",
    },

    }
  },
  {
    weekLabel: '2026년 6월 1주 (6/1–6/5)',
    weekStart: '2026-06-01',
    stories: {

    /* ═══ 월요일 — 역사·감동 (PRIMARY: 감동) ═══ */
    1: {
      title: '루 게릭의 가장 운 좋은 사나이',
      category: '역사·감동',
      primaryType: '감동',
      types: ['감동', '통찰'],
      image: null,
      svgKey: null,
      body: [
        '1939년 5월 2일, 미국 디트로이트. 뉴욕 양키스의 1루수 루 게릭이 감독 조 매카시를 찾아갔다. 그는 한 가지를 부탁했다. 오늘 경기에서 자신을 빼 달라는 것이었다. 게릭은 14년 동안 2,130경기를 단 한 번도 거르지 않고 뛴 선수였다. 사람들은 그를 〈철마(The Iron Horse)〉라 불렀다.',
        '그 연속 출장 기록은 그날 끝났다. 게릭은 그 이유를 알지 못했다. 다만 몸이 예전 같지 않다는 것만 알았다. 공을 쳐도 멀리 가지 않았고, 다리는 무거웠고, 간단한 동작이 어려워졌다. 그는 자신이 팀에 짐이 되고 있다고 느꼈다. "팀을 위해서"라는 것이 그가 댄 유일한 이유였다.',
        '한 달 반 뒤인 6월 19일, 그는 미네소타의 메이요 클리닉에서 진단을 받았다. 그날은 그의 36번째 생일이었다. 병명은 근위축성 측삭경화증(ALS). 운동신경이 차츰 죽어가는 병이었다. 치료법은 없었다. 의사는 그에게 남은 시간이 길지 않다고 말했다.',
        '1939년 7월 4일, 양키스는 그를 위한 날을 마련했다. 〈루 게릭 감사의 날〉이었다. 두 경기 사이의 휴식 시간, 양키 스타디움의 6만 2천 관중 앞에 그가 섰다. 옛 동료들이 그를 둘러쌌다. 그는 고개를 숙인 채 한참을 말하지 못했다. 관중이 그의 이름을 연호했다.',
        '마침내 그가 마이크 앞으로 걸어 나갔다. 그리고 입을 열었다. "팬 여러분, 지난 2주 동안 여러분은 제가 불운을 겪었다는 기사를 읽으셨을 겁니다. 그러나 오늘 저는 제 자신이 지구상에서 가장 운 좋은 사람이라고 생각합니다."',
        '그는 자신의 병에 대해 한마디도 더 하지 않았다. 대신 받은 것들을 세었다. 17년 동안 함께한 구단의 친절, 위대한 동료들과 보낸 나날, 그를 키워준 부모, 그리고 곁을 지켜준 아내. 그는 그것들을 하나하나 꼽으며 자신이 얼마나 많이 받았는지를 말했다.',
        '"제가 불운을 얻었을지 모릅니다. 그러나 저에게는 살아갈 이유가 너무도 많습니다." 그가 그렇게 연설을 맺자 6만 2천 명이 자리에서 일어났다. 그 자리에 있던 사람들은 평생 그 2분을 잊지 못했다.',
        '게릭이 받은 병은 그 뒤 미국에서 그의 이름으로 불리게 된다. 〈루 게릭병〉. 죽음에 이르는 병에 한 사람의 이름이 붙는다는 것은 드문 일이다. 그러나 사람들이 그 이름으로 기억한 것은 병이 아니라 그날의 한 문장이었다.',
        '연설로부터 2년이 채 되지 않은 1941년 6월 2일, 루 게릭은 37세로 세상을 떠났다. 양키스는 그의 등번호 4번을 다시 누구에게도 주지 않았다. 메이저리그 역사상 첫 영구 결번이었다. 그가 빠진 자리는 누구도 채우지 않았다.',
        '가장 많은 경기를 쉬지 않고 뛴 사람이, 가장 먼저 멈춰야 했던 사람이 됐다. 그리고 멈추는 그 자리에서 그는 자신이 가장 운 좋은 사람이라고 말했다. 받은 것을 세는 일은 잃을 것이 가장 많은 사람에게 가장 어려운 일이다. 게릭은 그 가장 어려운 자리에서 그것을 했다.'
      ],
      closing: '"오늘 저는 제 자신이\n지구상에서 가장 운 좋은 사람이라고 생각합니다."\n가장 많이 잃는 자리에서\n그는 받은 것을 세었다.',
      analysis: {
        insight: { icon: '💡', text: '받은 것을 세는 일은 잃을 것이 가장 많은 사람에게 가장 어렵다 — 게릭은 그 자리에서 그것을 했다.',
                   condition: '작은 것이 사실 전부였음이 드러날 때' },
        humor:   { icon: '😄', text: '14년 2,130경기를 거른 적 없던 사람이 댄 결장 사유는 단 한 줄, "팀을 위해서"였다.',
                   condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
        emotion: { icon: '❤️', text: '"제가 불운을 얻었을지 모릅니다. 그러나 저에게는 살아갈 이유가 너무도 많습니다." 6만 2천 명이 일어섰다.',
                   condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
      },
      source: {
        type: '실화',
        credit: '루 게릭(Lou Gehrig, 1903–1941) / 1939년 7월 4일 양키 스타디움 〈Lou Gehrig Appreciation Day〉 연설 기록 및 Jonathan Eig 《Luckiest Man: The Life and Death of Lou Gehrig》(2005, Simon & Schuster)를 바탕으로 재서술했습니다.',
      },
      curatorNote: '루 게릭은 죽음에 이르는 병을 진단받고 두 주 뒤, 6만 2천 명 앞에서 자신을 "가장 운 좋은 사람"이라 불렀습니다. 그는 병에 대해 한마디도 하지 않고 받은 것만을 세었습니다. 잃을 것이 가장 많은 사람이 받은 것을 세는 일 — 그것이 그가 남긴 가장 어려운 한 문장이었습니다.',
      qna: {
        question: '가장 많이 잃을 때, 그래도 받은 것을 세어 본 적이 있나요? 무엇이 먼저 떠올랐나요?',
        answer: '게릭은 병이 아니라 받은 것을 세었습니다. 동료, 부모, 아내, 함께한 나날. 잃을 것을 보는 자리에서 받은 것을 보는 일은 가장 어렵지만, 가장 오래 남습니다.'
      },
      publishedDate: '2026년 6월 1일',
    },

    /* ═══ 화요일 — 역사·유머 (PRIMARY: 유머) ═══ */
    2: {
      title: '폰 노이만의 파리',
      category: '역사·유머',
      primaryType: '유머',
      types: ['유머', '통찰'],
      image: null,
      svgKey: null,
      body: [
        '1950년대 미국 프린스턴. 한 사람이 수학자 존 폰 노이만에게 오래된 퀴즈 하나를 냈다. 두 대의 기차가 서로를 향해 마주 달린다. 두 기차 사이를 파리 한 마리가 날아다닌다. 파리는 한쪽 기차에 닿으면 방향을 돌려 반대쪽 기차로 날아가고, 거기 닿으면 다시 돌아온다. 두 기차가 충돌할 때까지 파리는 그렇게 왕복한다. 파리가 날아간 거리는 모두 합쳐 얼마인가.',
        '이 문제에는 두 가지 푸는 길이 있다. 어려운 길은 파리의 왕복을 하나하나 따지는 것이다. 첫 번째 구간, 두 번째 구간, 세 번째 구간……. 구간의 길이는 점점 짧아져 무한히 많아진다. 그 무한히 많은 구간을 모두 더해야 한다. 무한급수의 합이다.',
        '쉬운 길은 따로 있다. 파리의 경로는 잊는다. 대신 시간을 본다. 두 기차가 충돌하기까지 걸리는 시간을 구하고, 거기에 파리의 속도를 곱한다. 그것으로 끝이다. 파리가 얼마나 복잡하게 날았든, 파리가 날아간 시간은 기차가 충돌하기까지의 시간과 같기 때문이다.',
        '문제를 낸 사람이 노린 것은 이 두 번째 길이었다. 사람들은 보통 어려운 길로 빠져 한참을 헤맨다. 그러다 〈시간을 보면 된다〉는 것을 깨닫는 순간 무릎을 친다. 그 깨달음의 표정을 보려고 사람들은 이 문제를 낸다.',
        '폰 노이만은 잠깐 허공을 보더니 답을 말했다. 거의 즉시였다. 문제를 낸 사람이 웃으며 말했다. "역시 금방 요령을 알아채시는군요." 무한급수를 더하는 어려운 길 대신 시간을 보는 쉬운 길을 단번에 찾았다는 뜻이었다.',
        '그러자 폰 노이만이 의아한 얼굴로 되물었다. "무슨 요령 말입니까? 저는 그냥 무한급수를 더했는데요."',
        '그는 쉬운 길을 찾은 것이 아니었다. 어려운 길을, 머릿속에서, 순식간에 끝까지 간 것이었다. 보통 사람이 종이와 펜으로 한참 걸려야 하는 무한급수의 합을 그는 암산으로 즉시 처리했다. 그에게는 어려운 길이 쉬운 길보다 느리지 않았다.',
        '폰 노이만은 그런 사람이었다. 전화번호부를 한 번 보고 외웠고, 디킨스의 소설을 통째로 암송했다. 게임 이론을 만들었고, 오늘날 거의 모든 컴퓨터가 따르는 구조를 설계했으며, 양자역학과 경제학과 핵물리학에 동시에 발자국을 남겼다. 동료들은 그를 두고 "인간의 모습을 한 다른 종(種)" 같다고 농담했다.',
        '이 일화가 우스운 것은 영리한 사람이 우직한 답을 내놓았기 때문이다. 그러나 그 우스움 안에 한 가지가 들어 있다. 우리에게 〈요령〉이 필요한 이유는 우직한 길이 너무 멀기 때문이다. 길이 멀지 않은 사람에게는 요령이 필요 없다. 어떤 능력은 지름길을 찾는 데 있고, 어떤 능력은 지름길이 필요 없게 만드는 데 있다.',
        '폰 노이만은 1957년 53세로 세상을 떠났다. 동료 수학자 폴 핼모스가 후일 그를 회상하며 이 파리 이야기를 적었다. 핼모스는 이렇게 덧붙였다. 폰 노이만의 천재성은 번뜩이는 직관이 아니라, 누구나 아는 길을 누구도 따라갈 수 없는 속도로 끝까지 가는 데 있었다고.'
      ],
      closing: '"무슨 요령 말입니까?\n저는 그냥 무한급수를 더했는데요."\n어떤 능력은 지름길을 찾는 데 있고\n어떤 능력은 지름길이 필요 없게 만드는 데 있다.',
      analysis: {
        insight: { icon: '💡', text: '요령이 필요한 이유는 우직한 길이 멀기 때문이다 — 어떤 능력은 그 길을 멀지 않게 만든다.',
                   condition: '작은 것이 사실 전부였음이 드러날 때' },
        humor:   { icon: '😄', text: '"요령을 아셨군요"라는 칭찬에 그는 진심으로 의아해했다. 그는 요령이 아니라 무한급수를 더한 것이었다.',
                   condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
        emotion: { icon: '❤️', text: '전화번호부를 외우고 디킨스를 암송하던 사람을, 동료들은 "인간의 모습을 한 다른 종"이라 불렀다.',
                   condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' }
      },
      source: {
        type: '실화',
        credit: '존 폰 노이만(John von Neumann, 1903–1957) / Paul R. Halmos 〈The Legend of John von Neumann〉(The American Mathematical Monthly, 1973)에 전하는 일화를 바탕으로 재서술했습니다.',
      },
      curatorNote: '폰 노이만의 파리 문제는 영리한 사람이 우직한 답을 낸 농담으로 전해집니다. 그러나 그 농담 안에 한 가지가 있습니다. 우리가 요령을 찾는 것은 우직한 길이 멀기 때문이라는 것. 그에게는 그 길이 멀지 않았습니다. 지름길을 찾는 것도 능력이지만, 지름길이 필요 없게 되는 것도 능력입니다.',
      qna: {
        question: '지름길로 푼 문제와 우직하게 끝까지 가서 푼 문제, 어느 쪽이 더 오래 남았나요?',
        answer: '폰 노이만은 요령 대신 무한급수를 끝까지 더했습니다. 누구나 아는 길을 누구도 따를 수 없는 속도로 갔습니다. 어떤 실력은 빠른 길이 아니라, 먼 길을 두려워하지 않는 데서 옵니다.'
      },
      publishedDate: '2026년 6월 2일',
    },

    /* ═══ 수요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
    3: {
      title: '베게너의 대륙',
      category: '역사·통찰',
      primaryType: '통찰',
      types: ['통찰', '감동'],
      image: null,
      svgKey: null,
      body: [
        '1911년 어느 날, 독일의 기상학자 알프레트 베게너는 도서관에서 한 논문을 읽다가 멈칫했다. 대서양을 사이에 두고 떨어진 아프리카와 남아메리카에서 똑같은 화석이 나온다는 내용이었다. 같은 동물이 어떻게 대양 양쪽에 살았을까. 그는 세계 지도를 다시 들여다봤다.',
        '지도를 보던 그의 눈에 한 가지가 들어왔다. 남아메리카의 동쪽 해안선과 아프리카의 서쪽 해안선이 마치 찢어진 종이의 양쪽처럼 맞아떨어졌다. 누군가 이미 본 적 있는 모양이었지만, 대개는 우연이라며 넘겼다. 베게너는 넘기지 않았다.',
        '그는 한 가지 생각을 품었다. 원래 모든 대륙이 하나로 붙어 있었고, 그것이 갈라져 지금처럼 멀어진 것이라면? 그는 그 옛 초대륙에 〈판게아(Pangaea)〉라는 이름을 붙였다. 모든 땅이라는 뜻이었다. 1912년, 그는 이 생각을 〈대륙 이동설〉이라는 이름으로 발표했다.',
        '증거는 해안선만이 아니었다. 대양 양쪽의 암석층이 같은 순서로 쌓여 있었다. 같은 종류의 화석이 양쪽에서 나왔다. 지금은 더운 지방인 곳에 옛 빙하의 흔적이 있었고, 추운 지방에 열대 식물의 화석이 있었다. 대륙이 움직였다고 보면 이 모든 것이 한 번에 설명됐다.',
        '그러나 학계는 그를 받아들이지 않았다. 이유는 하나였다. 베게너는 대륙이 〈움직인다〉고 말했지만, 〈무엇이〉 그 거대한 땅덩어리를 움직이는지 설명하지 못했다. 그가 제시한 힘은 너무 약했다. 물리학자들은 그 힘으로는 대륙이 1센티미터도 움직일 수 없다고 계산해 보였다.',
        '게다가 베게너는 지질학자가 아니었다. 그는 기상학자였고 극지 탐험가였다. 지질학계는 외부에서 온 사람이 자기 분야의 토대를 흔드는 것을 달가워하지 않았다. 1926년 미국에서 열린 한 학회에서 그의 이론은 공개적으로 조롱당했다. "터무니없는 공상"이라는 말이 나왔다.',
        '베게너는 물러서지 않았다. 그는 자신의 책을 판을 거듭해 고쳐 썼다. 증거를 더 모았다. 그러나 〈움직이는 힘〉이라는 빈자리는 끝내 채우지 못했다. 그는 그 빈자리가 자신이 살아 있는 동안 채워지지 않으리라는 것을 알았을지도 모른다.',
        '1930년 11월, 베게너는 그린란드 빙원 한가운데의 관측소에 보급품을 전한 뒤 돌아오는 길에 눈 속에서 숨졌다. 막 50세가 된 직후였다. 그의 시신은 이듬해 봄, 동료들이 눈을 파헤친 끝에 발견됐다. 그는 자신의 이론이 어떻게 되는지 보지 못한 채 떠났다.',
        '그가 떠나고 30년이 흘렀다. 1960년대, 과학자들은 바다 밑을 조사하다가 해저가 갈라지며 양옆으로 벌어지고 있다는 것을 알아냈다. 대륙을 움직이는 〈힘〉이 거기 있었다. 베게너가 끝내 찾지 못한 그 빈자리가, 그가 죽은 뒤에 채워졌다. 대륙 이동설은 〈판 구조론〉이라는 이름으로 지구과학의 토대가 됐다.',
        '베게너가 틀린 것은 〈왜〉였고, 맞은 것은 〈무엇〉이었다. 그는 대륙이 움직인다는 사실을 봤지만 그 이유를 대지 못했다. 학계는 이유가 없다는 이유로 사실까지 내쳤다. 그러나 사실은 이유를 기다려 줄 수 있었다. 어떤 옳음은 그것을 증명할 도구가 나타날 때까지, 무덤 속에서 기다린다.'
      ],
      closing: '그는 대륙이 움직인다는 것을 봤다.\n다만 무엇이 움직이는지는 대지 못했다.\n학계는 이유가 없다는 이유로\n사실까지 내쳤다.',
      analysis: {
        insight: { icon: '💡', text: '베게너가 틀린 것은 〈왜〉였고 맞은 것은 〈무엇〉이었다 — 사실은 그것을 증명할 도구를 기다려 줄 수 있다.',
                   condition: '작은 것이 사실 전부였음이 드러날 때' },
        humor:   { icon: '😄', text: '"터무니없는 공상"이라 조롱받은 기상학자의 지도가, 30년 뒤 지질학 교과서의 첫 장이 됐다.',
                   condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
        emotion: { icon: '❤️', text: '그는 빙원의 눈 속에서 숨졌고, 자신의 이론이 옳았다는 것을 끝내 보지 못했다. 증명은 30년 뒤에 왔다.',
                   condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
      },
      source: {
        type: '실화',
        credit: '알프레트 베게너(Alfred Wegener, 1880–1930) / 베게너 《Die Entstehung der Kontinente und Ozeane(대륙과 대양의 기원)》(1915) 및 Mott T. Greene 《Alfred Wegener: Science, Exploration, and the Theory of Continental Drift》(2015, Johns Hopkins University Press)를 바탕으로 재서술했습니다.',
      },
      curatorNote: '베게너는 대륙이 움직인다는 것을 봤지만, 무엇이 그것을 움직이는지는 대지 못했습니다. 학계는 이유가 없다는 이유로 그 사실마저 30년간 내쳤습니다. 그가 죽고 한참 뒤에야 해저가 갈라지는 것이 발견되어, 빈자리가 채워졌습니다. 어떤 옳음은 그것을 증명할 도구가 나타날 때까지 기다려야 합니다.',
      qna: {
        question: '맞다고 느꼈지만 이유를 대지 못해 받아들여지지 못한 생각이 있었나요? 그 뒤 어떻게 됐나요?',
        answer: '베게너는 무엇이 일어나는지는 봤지만 왜인지는 대지 못했습니다. 그래서 30년을 기다려야 했습니다. 사실과 그 이유는 함께 오지 않을 때가 있고, 사실은 이유보다 먼저 옳을 수 있습니다.'
      },
      publishedDate: '2026년 6월 3일',
    },

    /* ═══ 목요일 — 역사·감동 (PRIMARY: 감동) ═══ */
    4: {
      title: '데즈먼드 도스의 한 사람 더',
      category: '역사·감동',
      primaryType: '감동',
      types: ['감동', '통찰'],
      image: null,
      svgKey: null,
      body: [
        '1942년 미국 버지니아. 데즈먼드 도스는 입대를 자원했다. 그러나 그는 한 가지를 끝까지 거부했다. 총을 드는 것이었다. 그는 독실한 신앙을 가진 사람이었고, "살인하지 말라"는 계명을 글자 그대로 지키려 했다. 그는 전쟁터에 가되, 사람을 죽이는 대신 살리는 일을 하겠다고 했다. 위생병이었다.',
        '훈련소에서 그는 조롱과 괴롭힘의 대상이 됐다. 동료들은 총을 들지 않는 그를 겁쟁이라 불렀다. 밤이면 그에게 군화를 던졌다. 상관들은 그를 정신 이상으로 몰아 제대시키려 했고, 군법회의에 넘기려 했다. 토요일을 안식일로 지키며 그날 훈련을 거부한 것도 빌미가 됐다. 그는 그 모든 것을 견디며 총만은 들지 않았다.',
        '1945년 5월, 일본 오키나와. 도스가 속한 부대는 〈핵소 고지〉라 불리는 절벽 위 진지를 공격했다. 깎아지른 벼랑을 밧줄 그물을 타고 올라가야 닿는 곳이었다. 위에는 일본군이 견고하게 진을 치고 있었다. 부대는 벼랑 위에 올라서자마자 집중포화를 맞았다.',
        '명령이 떨어졌다. 후퇴. 살아남은 병사들이 벼랑 아래로 몸을 피했다. 그러나 벼랑 위에는 움직이지 못하는 부상병들이 남아 있었다. 모두가 내려간 그 벼랑 위에, 도스는 혼자 남았다.',
        '그는 부상병 한 명을 끌어다 벼랑 끝으로 옮겼다. 그리고 밧줄로 매듭을 묶어 한 사람씩 벼랑 아래로 내려보내기 시작했다. 총탄이 머리 위로 날아다녔다. 그는 한 사람을 내려보낼 때마다 같은 기도를 했다고 한다. "주여, 한 사람만 더 구하게 해 주십시오."',
        '한 사람을 내리고 그는 다시 벼랑 위로 기어 올라갔다. 또 한 사람을 끌어다 내렸다. 그리고 다시 올라갔다. "한 사람만 더." 그 기도를 몇 번이나 되풀이했는지 그 자신도 세지 못했다. 그는 그렇게 밤이 될 때까지 벼랑 위에 남아 있었다.',
        '그날 그가 벼랑 아래로 내려보낸 부상병의 수를, 군은 75명으로 기록했다. 도스 자신은 50명쯤이라고 했다. 군이 75명이라 하자 그는 너무 많다고 했고, 결국 그 숫자로 남았다. 총 한 발 쏘지 않은 사람이, 가장 많은 사람을 그 고지에서 살려 내려보냈다.',
        '도스는 이후의 전투에서 자신도 큰 부상을 입었다. 다리에 수류탄 파편이 박혔고, 팔이 부러졌다. 그는 들것에 실려 가다가, 더 위중한 부상병을 보고 자신의 들것을 양보했다. 자신의 상처는 자기가 처치하며 그 자리에서 기다렸다.',
        '1945년 10월 12일, 데즈먼드 도스는 백악관에서 명예 훈장을 받았다. 트루먼 대통령이 직접 그의 목에 훈장을 걸었다. 총을 들기를 거부한 양심적 거부자가 미국 최고의 무공 훈장을 받은 것은 역사상 처음이었다. 트루먼은 그에게 이 훈장이 대통령이 되는 것보다 더 자랑스럽다고 말했다.',
        '도스가 한 일은 단순했다. 한 번에 한 사람. 그는 전세를 바꾸지도, 고지를 점령하지도 않았다. 다만 눈앞의 한 사람을 내려보내고, 다시 올라가 또 한 사람을 내려보냈다. 큰 숫자는 그 작은 동작이 쌓여서 된 것이었다. "한 사람만 더"라는 기도가 일흔다섯 번 모여 일흔다섯 명이 됐다.'
      ],
      closing: '"주여, 한 사람만 더\n구하게 해 주십시오."\n그 기도가 일흔다섯 번 모여\n일흔다섯 명이 됐다.',
      analysis: {
        insight: { icon: '💡', text: '큰 숫자는 작은 동작이 쌓여서 된다 — "한 사람만 더"가 일흔다섯 번 모여 일흔다섯 명이 됐다.',
                   condition: '작은 것이 사실 전부였음이 드러날 때' },
        humor:   { icon: '😄', text: '겁쟁이라 조롱받으며 군화를 맞던 사람이, 부대에서 가장 많은 목숨을 그 고지에서 건졌다.',
                   condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
        emotion: { icon: '❤️', text: '모두가 내려간 벼랑 위에 그는 혼자 남았다. 그리고 밤이 될 때까지 한 사람씩 내려보냈다.',
                   condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
      },
      source: {
        type: '실화',
        credit: '데즈먼드 도스(Desmond T. Doss, 1919–2006) / 1945년 미 의회 명예 훈장 수여 기록 및 다큐멘터리 〈The Conscientious Objector〉(2004)를 바탕으로 재서술했습니다.',
      },
      curatorNote: '데즈먼드 도스는 총 들기를 거부해 겁쟁이라 조롱받았습니다. 그러나 모두가 후퇴한 벼랑 위에 혼자 남아, "한 사람만 더"를 되뇌며 일흔다섯 명을 밧줄로 내려보냈습니다. 그는 전세를 바꾸지 않았습니다. 다만 눈앞의 한 사람을 구하고 다시 올라갔습니다. 큰 일은 그 작은 반복이 쌓여 이루어졌습니다.',
      qna: {
        question: '눈앞의 "한 사람" 또는 "한 가지"에만 집중해 끝내 큰 것을 이룬 적이 있나요?',
        answer: '도스는 전세를 바꾸려 하지 않고 한 사람씩 내려보냈습니다. "한 사람만 더"가 일흔다섯 번 모였습니다. 큰 결과를 보면 압도되지만, 눈앞의 하나는 해낼 수 있습니다. 큰 것은 그 하나가 쌓인 것입니다.'
      },
      publishedDate: '2026년 6월 4일',
    },

    /* ═══ 금요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
    5: {
      title: '브루넬레스키의 달걀',
      category: '역사·통찰',
      primaryType: '통찰',
      types: ['통찰', '유머'],
      image: null,
      svgKey: null,
      body: [
        '15세기 초 이탈리아 피렌체. 도시의 대성당에는 100년 넘게 비어 있는 자리가 하나 있었다. 성당 한가운데에 거대한 돔을 올리기로 했지만, 누구도 그것을 어떻게 짓는지 알지 못했다. 지름이 40미터가 넘는 돔이었다. 그렇게 큰 돔을 받칠 나무 골조를 세우는 것은 불가능했다. 피렌체는 지붕이 뚫린 성당을 100년 동안 안고 있었다.',
        '1418년, 시는 돔 설계를 공모했다. 금세공사 출신의 한 사람이 나섰다. 필리포 브루넬레스키였다. 그는 나무 골조 없이 돔을 쌓을 수 있다고 주장했다. 벽돌을 특별한 방식으로 엇갈려 쌓으면 돔이 공사 중에도 스스로를 지탱한다는 것이었다. 심사위원들은 믿지 못했다.',
        '심사위원들은 그에게 설계도와 모형을 요구했다. 어떻게 골조 없이 돔이 무너지지 않는지 보여 달라는 것이었다. 그러나 브루넬레스키는 거부했다. 자신의 방법을 공개하면 다른 건축가들이 그것을 베껴 갈 것이라 여겼기 때문이다. 그는 비밀을 내놓지 않았다. 회의장은 그를 허풍쟁이로 몰아갔다.',
        '논쟁이 거세지자 브루넬레스키가 한 가지를 제안했다. 그는 달걀 하나를 가져오게 했다. 그러고는 말했다. 이 달걀을 평평한 대리석 위에 똑바로 세우는 사람에게 돔 공사를 맡기자고. 누구든 세우기만 하면 자신은 물러나겠다는 것이었다.',
        '건축가들이 차례로 달걀을 집어 들었다. 그러나 매끈한 달걀은 대리석 위에서 자꾸 굴러 넘어졌다. 아무도 세우지 못했다. 모두가 포기하자 브루넬레스키가 달걀을 받아 들었다. 그는 달걀의 한쪽 끝을 대리석에 가볍게 톡 내리쳤다. 끝이 살짝 깨져 평평해졌다. 달걀은 그 자리에 똑바로 섰다.',
        '건축가들이 항의했다. "그렇게 하는 거라면 우리도 할 수 있었소!" 브루넬레스키가 답했다. "그렇소. 내가 돔의 설계를 보여 주고 나면, 여러분은 똑같이 말할 것이오. 그것도 우리가 할 수 있었다고." 그가 설계를 감춘 이유가 바로 그것이었다.',
        '답을 보고 나면 누구나 〈그쯤은 나도〉라고 말한다. 그러나 보기 전에 그것을 떠올리는 것은 전혀 다른 일이다. 달걀을 깨서 세운다는 것은 보고 나면 시시하지만, 아무도 떠올리지 못했다. 브루넬레스키가 지키려 한 것은 설계도가 아니라, 〈처음 떠올린 사람〉의 자리였다.',
        '시는 결국 그에게 공사를 맡겼다. 브루넬레스키는 정말로 나무 골조 없이 돔을 쌓아 올렸다. 벽돌을 생선 가시처럼 엇갈려 짜는 방식이었다. 안팎으로 두 겹의 껍데기를 만들어 서로를 받치게 했다. 그는 벽돌을 높이 들어 올리는 기계까지 직접 발명했다. 누구도 본 적 없는 방법이었다.',
        '1436년, 돔이 완성됐다. 피렌체 대성당의 돔은 지금까지도 세계에서 가장 큰 벽돌 돔으로 남아 있다. 100년 동안 비어 있던 자리가 채워졌다. 사람들은 그 돔을 올려다보며 어떻게 저것이 골조 없이 섰는지 여전히 신기해했다.',
        '브루넬레스키의 달걀 이야기는 화가 바사리가 그의 전기에 적어 전해진다. 그 이야기가 오래 남은 것은 돔보다 단순한 한 가지를 보여 주기 때문이다. 모든 해답은 본 뒤에는 쉬워 보인다. 그러나 값은 그것을 본 뒤가 아니라, 아무도 보지 못했을 때 처음 본 데서 매겨진다.'
      ],
      closing: '"내가 설계를 보여 주고 나면\n여러분은 그것도 할 수 있었다 말할 것이오."\n모든 해답은 본 뒤에는 쉬워 보인다.\n값은 처음 본 데서 매겨진다.',
      analysis: {
        insight: { icon: '💡', text: '모든 해답은 본 뒤에는 쉬워 보인다 — 값은 본 뒤가 아니라 아무도 못 봤을 때 처음 본 데서 매겨진다.',
                   condition: '작은 것이 사실 전부였음이 드러날 때' },
        humor:   { icon: '😄', text: '대성당의 돔 공사를 두고 벌인 심사가, 달걀 하나를 대리석에 톡 깨서 세우는 것으로 판가름 났다.',
                   condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
        emotion: { icon: '❤️', text: '100년 동안 지붕이 뚫려 있던 성당이, 골조 없이 올라간 돔으로 마침내 닫혔다.',
                   condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
      },
      source: {
        type: '실화',
        credit: '필리포 브루넬레스키(Filippo Brunelleschi, 1377–1446) / 조르조 바사리 《Le Vite(미술가 열전)》(1550)에 전하는 〈달걀〉 일화 및 피렌체 대성당 돔(1420–1436) 건축 기록을 바탕으로 재서술했습니다.',
      },
      curatorNote: '브루넬레스키는 달걀을 대리석에 톡 깨서 세웠습니다. 건축가들은 "그쯤은 우리도"라고 했지만, 보기 전에는 아무도 떠올리지 못했습니다. 그가 지키려 한 것은 설계도가 아니라 처음 떠올린 사람의 자리였습니다. 모든 해답은 본 뒤에는 쉬워 보이지만, 값은 아무도 보지 못했을 때 처음 본 데서 매겨집니다.',
      qna: {
        question: '나중에 보면 쉬워 보이지만, 그때는 아무도 떠올리지 못했던 답을 처음 낸 적이 있나요?',
        answer: '브루넬레스키의 달걀은 보고 나면 누구나 할 수 있는 것이었습니다. 그러나 처음 떠올린 사람은 그 하나뿐이었습니다. 해답의 값은 그것이 쉬워 보인 뒤가 아니라, 보이지 않을 때 처음 본 데서 매겨집니다.'
      },
      publishedDate: '2026년 6월 5일',
    },

    }
  },
  {
    weekLabel: '2026년 5월 4주 (5/25–5/29)',
    weekStart: '2026-05-25',
    stories: CURRENT_WEEK_STORIES,
  },
  {
    weekLabel: '2026년 5월 3주 (5/18–5/22)',
    weekStart: '2026-05-18',
    stories: WEEK_MAY3_STORIES,
  },
  {
    weekLabel: '2026년 5월 2주 (5/11–5/15)',
    weekStart: '2026-05-11',
    stories: {


  /* ═══ 월요일 — 역사·감동 (PRIMARY: 감동) ═══ */
  1: {
    title: '릴케의 두이노',
    category: '역사·감동',
    primaryType: '감동',
    types: ['감동', '통찰'],
    image: null,
    svgKey: null,
    body: [
      '1911년 가을, 라이너 마리아 릴케는 트리에스테 인근의 두이노 성에 도착했다. 마리 폰 투른 운트 탁시스 후작 부인이 그를 초대한 것이었다. 36세의 시인은 지친 상태였다. 〈말테의 수기〉를 끝낸 후 1년 동안 한 줄도 쓰지 못하고 있었다. 그는 자신이 끝난 게 아닐까 두려워했다.',
      '두이노 성은 아드리아 해를 내려다보는 절벽 위에 있었다. 14세기에 지어진 성. 후작 부인은 시인에게 작은 방을 내줬다. 식사 시간을 빼면 누구도 그를 방해하지 않기로 했다. 릴케는 매일 성벽 위를 산책했다. 바다가 200미터 아래에 있었다. 바람이 거셌다.',
      '1912년 1월의 어느 날 아침이었다. 릴케는 답장해야 할 사업 편지 한 통을 들고 성벽을 걷고 있었다. 까다로운 답을 어떻게 쓸지 생각 중이었다. 바람이 정면으로 불어왔다. 그때 무엇인가 들렸다. 바람 속에서 들리는 한 문장 같았다. "내가 외쳐도, 천사들의 위계에서 누가 들을 것인가?"',
      '그는 멈춰 섰다. 노트와 연필을 꺼냈다. 그 행을 받아 적었다. 다시 걸었다. 두 번째 행이 따라왔다. 세 번째도. 그날 저녁 그는 첫 번째 비가의 초안을 거의 다 끝냈다. 다음 며칠 동안 두 번째 비가도 떠올랐다. 일주일 사이에 〈비가〉의 형태가 잡혔다.',
      '그는 그것을 받아 적었다고 후에 회상했다. 자신이 쓴 게 아니라 받아 들었다고. 그러나 그것은 처음 시작이었을 뿐이었다. 〈비가〉는 더 길어야 한다는 것을 그는 직감했다. 열 편의 비가. 그러나 더 이상 들리지 않았다. 두이노 시대는 두 편으로 멈췄다.',
      '1차 세계대전이 시작됐다. 릴케는 오스트리아 군에 징집됐다. 빈의 군 기록보관소에서 행정 업무를 했다. 글을 쓸 수 없었다. 1916년에 제대했지만 시는 돌아오지 않았다. 그는 〈비가〉를 끝낼 수 없었다. 5년이 지났고, 7년이 지났다.',
      '1921년, 그는 스위스의 작은 마을 뮈조의 13세기 석조 탑을 빌렸다. 친구 베르너 라인하르트가 그를 위해 빌려준 것이었다. 그곳에서 그는 다시 집중했다. 1922년 2월 7일, 〈오르페우스에게 바치는 소네트〉가 며칠 사이에 쏟아졌다. 그는 그것을 "써본 적 없는 사람이 받은 선물"이라 불렀다.',
      '같은 달, 〈비가〉도 다시 들리기 시작했다. 1922년 2월 11일까지 그는 남은 여덟 편의 비가를 모두 완성했다. 첫 행을 들은 지 정확히 10년 만이었다. 한밤중에 친구에게 편지를 썼다. "끝났습니다. 지금 손이 떨립니다. 십 년이 걸렸습니다."',
      '1923년 〈두이노의 비가〉가 출간됐다. 같은 해 〈소네트〉도. 두 권을 합쳐 800편이 안 되는 행이었다. 10년의 기다림이었다. 릴케는 이미 백혈병을 앓고 있었다. 1926년 12월 29일, 51세로 그는 세상을 떠났다.',
      '두이노 성은 지금도 절벽 위에 서 있다. 아드리아 해의 바람은 변함없이 거세다. 어느 시인이 1912년 1월의 아침에 그곳에서 무엇을 들었는지를, 우리는 정확히 알지 못한다. 다만 그 한 줄이 10년을 기다렸다는 것은 안다. 어떤 시는 받아 적는 것이지 쓰는 것이 아닐 수 있다는 것도.'
    ],
    closing: '"내가 외쳐도, 천사들의 위계에서\n누가 들을 것인가?"\n바람 속에서 들은 한 줄.\n완성까지 10년이 걸렸다.',
    analysis: {
      insight: { icon: '💡', text: '글은 쓰는 게 아니라 듣는 것일 때가 있다 — 들리는 것을 받아 적는 일이 가장 어렵다.',
                 condition: '작은 것이 사실 전부였음이 드러날 때' },
      humor:   { icon: '😄', text: '사업 편지를 어떻게 답할지 생각 중에 〈비가〉가 들렸다. 시는 가장 산문적인 자리에서 왔다.',
                 condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
      emotion: { icon: '❤️', text: '첫 줄을 들은 지 10년 후 친구에게 쓴 한 줄 — "끝났습니다. 지금 손이 떨립니다."',
                 condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
    },
    source: {
      type: '실화',
      credit: '라이너 마리아 릴케(Rainer Maria Rilke, 1875–1926) / Donald Prater 《A Ringing Glass: The Life of Rainer Maria Rilke》(1986, Clarendon Press) 및 마리 폰 투른 운트 탁시스 후작 부인의 회상록을 바탕으로 재서술했습니다.',
    },
    curatorNote: '릴케는 〈비가〉를 자신이 썼다고 하지 않았습니다. 들었다고 했습니다. 첫 줄이 들리고 마지막 줄이 들리기까지 10년이 걸렸습니다. 무언가를 받아낸다는 것이 무엇인지, 이 이야기가 가장 정확히 보여주는 것 같습니다.',
    qna: {
      question: '무언가가 당신에게 와줄 때까지 오래 기다려야 했던 적이 있나요? 그 기다림 자체가 어떤 의미가 됐나요?',
      answer: '릴케는 두 편을 받고 여덟 편을 기다렸습니다. 10년이었습니다. 들리지 않을 때는 듣지 않는 것이 그가 한 일이었습니다. 어떤 것은 부르지 않을 때 옵니다.'
    },
    publishedDate: '2026년 5월 11일',
  },

  /* ═══ 화요일 — 역사·유머 (PRIMARY: 유머) ═══ */
  2: {
    title: '폴 디랙의 침묵',
    category: '역사·유머',
    primaryType: '유머',
    types: ['유머', '통찰'],
    image: null,
    svgKey: null,
    body: [
      '폴 디랙은 1902년 영국 브리스톨에서 태어났다. 아버지 샤를은 스위스에서 온 프랑스어 교사였다. 집에서 폴은 아버지에게 프랑스어로만 말하라고 배웠다. 폴은 프랑스어가 어려웠다. 그래서 입을 다물었다. 자라는 동안 그는 거의 말하지 않는 아이가 됐다.',
      '그 침묵은 평생 갔다. 케임브리지 대학원생 시절, 동료들이 그를 헤아리기 위해 단위를 만들었다. "1 디랙(Dirac)"은 한 시간에 한 단어를 말하는 속도였다. 그는 그 단위를 알면서도 화내지 않았다. 그저 받아들였다.',
      '1928년, 26세의 디랙은 한 편의 논문을 발표했다. 양자역학과 특수상대성이론을 결합한 방정식이었다. 디랙 방정식. 그것은 전자의 행동을 정확하게 예측했다. 동시에 이상한 것을 예언했다. 음의 에너지를 가진 입자가 존재해야 한다는 것이었다. 디랙은 그것을 "반물질(antimatter)"이라고 불렀다.',
      '1932년, 칼 앤더슨이 우주선(cosmic ray)에서 양전자를 발견했다. 디랙의 방정식이 옳았다. 1933년, 31세의 디랙은 노벨 물리학상을 받았다. 그는 수상을 거절하려 했다. 너무 많은 관심이 싫다고 했다. 어느 동료가 그를 설득했다. "거절하면 더 큰 관심을 받게 됩니다." 그가 동의했다.',
      '강연하는 디랙을 한번 보면 잊을 수 없었다고 동료들은 회상했다. 그는 자신의 논문을 한 단어도 바꾸지 않고 그대로 읽어 내려갔다. 청중이 질문하면, 그것이 정확하지 않을 경우 그저 다시 읽어줬다. 같은 문장을. 정확히 똑같이.',
      '한 강연에서 한 청중이 손을 들었다. "교수님, 칠판에 쓰신 식의 이 부분이 이해가 되지 않습니다." 디랙은 침묵했다. 청중이 기다렸다. 5분이 지났다. 10분이 지났다. 30분이 흘렀다. 의장이 결국 끼어들었다. "디랙 교수님, 그 질문에 답하지 않으시겠습니까?" 디랙이 천천히 말했다. "그것은 질문이 아니었습니다. 발언이었습니다." 그 말이 끝이었다.',
      '그는 일상에서도 똑같았다. 한번은 한 학생이 그에게 점심을 먹자고 청했다. 식당으로 갔다. 식사 내내 디랙은 한마디도 하지 않았다. 마지막에 그가 입을 열었다. "잘 먹었습니다." 다음 날 그 학생이 다른 자리에서 그 일을 얘기했다. 디랙이 듣고 있었다. 그가 말했다. "사실 그것도 너무 많이 말한 것이었습니다."',
      '그러나 디랙은 결혼했다. 1937년, 마저릿 위그너 — 동료 물리학자 유진 위그너의 여동생 — 와 결혼했다. 그녀는 명랑하고 사교적이었다. 디랙과 정반대였다. 어느 날 마저릿이 그에게 친구를 소개했다. "이 사람은 위그너의 여동생입니다." 디랙이 답했다. "아니요, 이 사람은 디랙의 아내입니다." 그것이 그의 사랑 표현이었다.',
      '그는 평생을 케임브리지의 루카스 교수직(뉴턴, 호킹이 차례로 맡은 자리)에 있었다. 1969년 미국 플로리다 주립대학으로 옮겼다. 그곳에서 1984년, 82세로 세상을 떠났다. 마지막까지 그는 거의 말하지 않았다.',
      '디랙 방정식은 지금도 양자장 이론의 핵심이다. 모든 페르미온 — 전자, 양성자, 중성자, 우주의 절반을 이루는 것들 — 이 그 방정식을 따른다. 한 시간에 한 단어를 말하던 사람이 우주의 절반에 이름을 줬다.'
    ],
    closing: '한 시간에 한 단어.\n"그것은 질문이 아니라 발언이었습니다."\n30분의 침묵이\n가장 정확한 답이 됐다.',
    analysis: {
      insight: { icon: '💡', text: '정확함은 말하는 양과 무관하다 — 한 단어로도 진실은 말해진다.',
                 condition: '말하지 못했던 것이 침묵 속에서 말해질 때' },
      humor:   { icon: '😄', text: '"이 사람은 위그너의 여동생입니다." — "아니요, 디랙의 아내입니다." 그것이 그의 가장 따뜻한 말이었다.',
                 condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
      emotion: { icon: '❤️', text: '청중이 30분 기다렸다. 그가 침묵을 깨고 말한 것은 가짜를 만들지 않은 진실이었다.',
                 condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
    },
    source: {
      type: '실화',
      credit: '폴 디랙(Paul Dirac, 1902–1984) / Graham Farmelo 《The Strangest Man: The Hidden Life of Paul Dirac》(2009, Faber & Faber)을 바탕으로 재서술했습니다.',
    },
    curatorNote: '디랙은 거의 말하지 않았습니다. 그가 말한 것은 디랙 방정식이었습니다. 한 단어 한 단어를 아끼는 사람이 우주의 절반의 행동을 한 줄로 적었습니다. 말이 적었기 때문에 그 한 줄이 더 무거웠던 것 같습니다.',
    qna: {
      question: '누군가의 침묵이 가장 정확한 답이었던 적이 있나요? 그 침묵에서 무엇을 들었나요?',
      answer: '디랙은 30분간 침묵한 후 단 한 문장으로 답했습니다. 그것이 진실이었기 때문이었습니다. 가짜 답을 만들지 않기 위해서는 침묵이 필요할 때가 있습니다.'
    },
    publishedDate: '2026년 5월 12일',
  },

  /* ═══ 수요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
  3: {
    title: '페트라르카의 산',
    category: '역사·통찰',
    primaryType: '통찰',
    types: ['통찰', '감동'],
    image: null,
    svgKey: null,
    body: [
      '1336년 4월 26일 새벽, 프란체스코 페트라르카는 동생 게라르도와 함께 길을 나섰다. 목적지는 방투산. 프로방스에 우뚝 솟은 1,912미터 높이의 산이었다. 32세의 시인과 동생은 그날 산을 오르려 했다. 등산이라는 단어가 아직 발명되지 않은 시대였다.',
      '중세 사람들은 산을 오르지 않았다. 산은 두려운 곳이었다. 길 잃은 짐승, 강도, 영혼을 빼앗는 영적 위험. 산은 통과해야 할 장애물일 뿐 풍경이 아니었다. 페트라르카가 굳이 산을 오르려 한 이유는 단순했다. "그것이 저기 있기 때문이다." 그는 친구에게 보낸 편지에서 그렇게 썼다.',
      '출발 전에 그는 동행할 친구들을 떠올렸다. 너무 게으른 자, 너무 약한 자, 너무 신중한 자, 너무 산만한 자. 결국 같이 갈 만한 사람은 동생 하나였다. 게라르도는 페트라르카와 정반대 성격이었다. 망설이지 않고 직선으로 올라가는 사람이었다.',
      '산기슭의 노인이 그들을 말렸다. 50년 전 자신도 같은 산을 올랐다고 했다. 정상에서 얻은 것은 후회뿐이었다고 했다. 그 후로 50년 동안 어느 누구도 다시 시도하지 않았다고 했다. 페트라르카는 그 충고를 무시했다. 그러나 노인의 말이 마음에 남았다.',
      '등반은 어려웠다. 게라르도는 가장 가파른 길을 골라 곧장 위로 올라갔다. 페트라르카는 우회로를 택했다. 평탄한 길로 돌아가면서 정상에 도달하려 했다. 그러나 그 길은 결국 다시 가파른 곳으로 이어졌다. 몇 번이나 게라르도가 정상에 가까워지고, 페트라르카는 산기슭으로 미끄러져 내려왔다.',
      '그는 마침내 깨달았다. 정상에는 지름길로만 갈 수 있다. 우회로는 산을 오르지 않는다. 그는 동생을 따라 직선으로 올라갔다. 정오 무렵, 그들은 정상에 도착했다.',
      '정상에서 그는 멍하게 사방을 둘러봤다. 알프스 산맥이 동쪽에 보였다. 마르세유의 바다가 남쪽에. 거의 무한한 풍경이 펼쳐졌다. 페트라르카는 한참을 그렇게 서 있었다. 그러다 가방에서 책 한 권을 꺼냈다. 항상 가지고 다니던 작은 책. 아우구스티누스의 〈고백록〉이었다.',
      '그는 무작위로 책을 펼쳤다. 손가락이 닿은 페이지에 이런 구절이 있었다. "그리고 사람들은 산의 높이를, 바다의 거대한 물결을, 강의 넓은 흐름을, 별들의 운행을 우러러보러 가지만, 그러나 정작 자기 자신은 잊는다." 그는 멈췄다. 책을 덮었다. 동생 게라르도에게도 말하지 않았다.',
      '페트라르카는 그 자리에서 갑자기 부끄러움을 느꼈다. 자신이 산을 오른 것이 자랑스럽지 않았다. 외부의 풍경에 그렇게 매달려 있던 자신이, 정작 자기 안의 풍경은 한 번도 살펴본 적이 없다는 것을 깨달았다. 그는 침묵 속에서 산을 내려갔다. 그날 저녁, 친구 디오니지 디 보르고 산 세폴크로에게 긴 편지를 썼다.',
      '그 편지에 그는 적었다. "나는 그동안 외부의 것에 너무 많은 시간을 썼다." 인문학자들은 훗날 그날을 르네상스의 시작이라고 부르게 된다. 한 사람이 산을 오르고, 풍경을 보고, 그리고 자기 자신을 발견한 날. 중세에서 근대로 넘어가는 첫 발걸음.',
      '페트라르카는 이후 인간 내면의 연구에 일생을 바쳤다. 라우라에게 바친 시집 〈칸초니에레〉, 자기 검토의 일기 〈비밀〉, 고전 문헌의 발굴. 그는 자신을 "두 시대 사이의 사람"이라고 불렀다. 한 발은 중세에, 한 발은 르네상스에. 그날 방투산 정상에서 그는 그 두 발의 위치를 분명히 깨달았다.'
    ],
    closing: '"사람은 산을 우러러보러 가면서\n정작 자기 자신은 잊는다."\n정상에서 무작위로 펼친 책에서\n그는 자신을 발견했다.',
    analysis: {
      insight: { icon: '💡', text: '멀리 가는 것이 자기를 만나는 길이 된다 — 페트라르카는 산을 올라가서 자기 안을 봤다.',
                 condition: '작은 것이 사실 전부였음이 드러날 때' },
      humor:   { icon: '😄', text: '동행자 후보 평가 — 너무 게으른 자, 너무 약한 자, 너무 신중한 자, 너무 산만한 자. 32세 시인의 까다로움이 그대로 드러난다.',
                 condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
      emotion: { icon: '❤️', text: '〈고백록〉의 한 줄에 부딪힌 그가 산 정상에서 갑자기 침묵했다.',
                 condition: '아주 작은 순간이 사실 전부였던 이야기' }
    },
    source: {
      type: '실화',
      credit: '프란체스코 페트라르카(Francesco Petrarca, 1304–1374) / 페트라르카 〈가족 서신집(Familiares)〉 IV.1 (방투산 등반기)을 바탕으로 재서술했습니다.',
    },
    curatorNote: '페트라르카는 산을 오르고 자신을 만났습니다. 1336년 4월 26일 정오 그날을 후대 인문학자들은 르네상스의 시작이라 부릅니다. 외부를 끝까지 봤을 때 비로소 자기 안이 보이는 — 그런 기묘한 순서가 있는 것 같습니다.',
    qna: {
      question: '멀리까지 갔는데 결국 자기 자신을 만나게 된 경험이 있나요? 그때 풍경 대신 무엇이 먼저 보였나요?',
      answer: '페트라르카는 1,912미터를 올랐고, 그곳에서 자기를 발견했습니다. 가까이서는 안 보이는 것이 멀리서 보일 때가 있습니다. 떠나는 것은 도망이 아니라 돌아오기 위한 길입니다.'
    },
    publishedDate: '2026년 5월 13일',
  },

  /* ═══ 목요일 — 역사·감동 (PRIMARY: 감동) ═══ */
  4: {
    title: '이중섭의 은박지',
    category: '역사·감동',
    primaryType: '감동',
    types: ['감동', '통찰'],
    image: null,
    svgKey: null,
    body: [
      '1953년 부산. 이중섭은 가족과 떨어져 있었다. 한국전쟁의 피난길에서 그의 일본인 아내 이남덕(야마모토 마사코)과 두 아들은 일본으로 돌아갔다. 그는 한국에 남았다. 곧 따라가겠다고 했다. 그러나 그 곧이 영원이 됐다.',
      '그는 부산, 통영, 진주를 떠돌았다. 어디서나 가난했다. 하루 한 끼를 먹으면 다행이었다. 그림 도구가 없었다. 캔버스가 없었고, 그림물감이 비쌌고, 종이마저 부족했다. 그러나 그는 매일 무언가를 그렸다. 그것이 그의 호흡이었다.',
      '어느 날 그는 담배 갑을 뜯었다. 안쪽의 은박지를 발견했다. 매끈하고, 가볍고, 손으로 펴면 평평해졌다. 그는 송곳을 꺼냈다. 송곳으로 은박지를 긁었다. 긁힌 자리에 검은 선이 나타났다. 그는 그 선으로 그림을 그렸다.',
      '은박지화. 미술사에 없는 형식이었다. 종이도 캔버스도 아니었다. 그러나 손바닥만한 그 면 위에 이중섭은 가족을 그렸다. 두 아들이 게를 잡고 있었다. 아내가 옆에 누워 있었다. 가족 네 사람이 함께 자고 있었다. 그가 보지 못한 가족이 거기에 있었다.',
      '그는 70여 점을 만들었다. 어떤 것은 손가락 두 개 크기였다. 어떤 것은 우편엽서 정도였다. 가난해서 작은 것에 그려야 했지만, 그 작음이 형식이 됐다. 이중섭의 은박지화는 보는 사람이 가까이 다가서야 보이는 그림이었다. 멀찍이 서서는 보이지 않았다.',
      '1955년 1월, 서울 미공보원에서 개인전이 열렸다. 처음이자 마지막 개인전이었다. 그가 가진 모든 것을 걸었다. 출품작 중 일부가 팔렸다. 그러나 화상이 나중에 그림 값을 떼어먹었다. 친구들이 모금해 부족분을 채워주려 했지만 모자랐다. 그는 일본으로 갈 비행기 표를 끝내 사지 못했다.',
      '그는 점점 야위어갔다. 기력이 빠졌다. 그러나 은박지를 모으는 것은 멈추지 않았다. 길에 떨어진 은박지를 줍는 그를 친구들이 봤다. 그는 그것으로 또 가족을 그렸다. 식사 대신 그림이었다.',
      '1956년 9월 6일, 이중섭은 서울 적십자병원에서 숨졌다. 39세였다. 영양실조와 간염이라고 했다. 시신을 인수할 사람이 한동안 없었다. 친구 시인 구상이 사흘 후에야 그를 데려갔다. 화장한 그의 유골 절반은 일본의 가족에게 보냈다.',
      '그가 남긴 은박지화는 지금 국립현대미술관과 호암미술관 등에 보관되어 있다. 일부 작품은 뉴욕 현대미술관(MoMA)이 소장했다. 한국 화가의 작품이 그 미술관에 들어간 첫 사례였다. 손바닥 안의 가족이 박물관에 들어갔다.',
      '부산 시절 그는 친구에게 편지를 썼다. "은박지 위에 그릴 때만큼은 가족이 내 옆에 있는 것 같습니다. 송곳이 그들의 윤곽을 따라가는 동안 그들이 거기 있습니다." 그는 그것을 위해서만 그렸다.',
      '종이가 없어서 시작한 형식이었다. 그러나 끝까지 그것을 놓지 않은 것은 가난 때문이 아니었다. 그 손바닥 안에서 가족이 다시 함께 있을 수 있었기 때문이었다. 그것이 그가 가진 마지막 거처였다.'
    ],
    closing: '종이도 캔버스도 없어\n담배 은박지에 송곳으로 그렸다.\n손바닥 안에서만\n가족이 다시 함께 있었다.',
    analysis: {
      insight: { icon: '💡', text: '가난이 형식이 됐다 — 종이가 없어서 만든 화면이 그를 박물관으로 옮겼다.',
                 condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
      humor:   { icon: '😄', text: '길에 떨어진 은박지를 주워 모은 화가. 옷에 가득한 은박지가 그의 캔버스 창고였다.',
                 condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
      emotion: { icon: '❤️', text: '"송곳이 그들의 윤곽을 따라가는 동안 그들이 거기 있습니다." 못 만난 가족을 그렇게 만났다.',
                 condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
    },
    source: {
      type: '실화',
      credit: '이중섭(Lee Jung-seop, 1916–1956) / 최열 《이중섭 평전》(2014, 돌베개) 및 국립현대미술관 소장 자료를 바탕으로 재서술했습니다.',
    },
    curatorNote: '이중섭은 종이가 없어 은박지를 모았습니다. 그 안에 가족을 그렸습니다. 보지 못하는 가족을 그림으로만 만났습니다. 손바닥 안의 그림이 박물관에 들어간 것은, 그 안에 진짜 가족이 들어 있었기 때문이라고 생각합니다.',
    qna: {
      question: '가지지 못한 것을 다른 형태로 만나본 적이 있나요? 그것이 진짜를 어떻게 채워주었나요?',
      answer: '이중섭은 가족을 만나지 못해 그렸습니다. 송곳 끝의 가족이 그의 마지막 가족이었습니다. 못 만나는 것을 그리는 것이 만남보다 더 깊을 때가 있습니다.'
    },
    publishedDate: '2026년 5월 14일',
  },

  /* ═══ 금요일 — 역사·감동 (PRIMARY: 감동) — 스승의 날 ═══ */
  5: {
    title: '라마누잔의 편지',
    category: '역사·감동',
    primaryType: '감동',
    types: ['감동', '통찰'],
    image: null,
    svgKey: null,
    body: [
      '1913년 1월 16일, 케임브리지 대학의 G.H. 하디 교수가 우편물 한 통을 받았다. 발신지는 인도 마드라스. 발신자는 슈리니바사 라마누잔. 항만청 사무직원. 35세 하디는 케임브리지 트리니티 칼리지의 수학 교수였다. 그는 인도에서 온 편지를 가끔 받았다. 대부분이 무시할 만했다.',
      '편지의 첫 단락은 정중했다. "저는 마드라스 항만청에서 연봉 20파운드를 받는 사무직원입니다. 25세입니다. 정규 대학 교육은 받지 못했지만 학교를 마친 후 여가 시간에 수학을 공부했습니다. 다음 정리들을 검토해 주시기를 청합니다."',
      '9페이지의 공식이 따라왔다. 120개의 정리. 어떤 것은 하디가 처음 보는 것이었다. 어떤 것은 이미 알려진 것이었다. 그리고 어떤 것은 — 어떻게 받아들여야 할지 알 수 없는 것이었다. 하디가 처음 본 결과인데 너무 이상해서 진짜인지 가짜인지 즉각 판단할 수 없는 것들이었다.',
      '하디는 그날 저녁 동료 J.E. 리틀우드와 함께 그 편지를 검토했다. 두 시간 반이 지났다. 두 사람은 결론에 도달했다. 이 사람은 천재거나 사기꾼이었다. 그러나 사기꾼이라면 세계 최고 수준의 수학자여야 했다. 그런 사기꾼이 마드라스의 항만청에 있을 리 없었다. 결론은 하나였다.',
      '하디는 라마누잔에게 답장을 썼다. 케임브리지로 와줄 수 있겠냐고. 라마누잔은 망설였다. 그는 독실한 브라만이었고, 어머니는 아들이 바다를 건너는 것을 허락하지 않았다. 카스트의 규율로 금지된 일이었다. 그러나 어느 날 어머니가 꿈을 꾸었다. 아들이 영국인들에게 둘러싸여 강의하고 있었다. 그녀는 허락했다.',
      '1914년 4월, 라마누잔이 케임브리지에 도착했다. 26세였다. 학위가 없었지만 트리니티 칼리지가 그를 받아들였다. 하디와 라마누잔의 5년이 시작됐다.',
      '두 사람은 정반대였다. 하디는 무신론자였고, 증명을 신성시했다. 라마누잔은 신앙인이었고, 결과를 직관적으로 봤다. "방정식은 신의 생각을 표현하는 것이 아니라면 의미가 없습니다." 라마누잔이 말했다. 그가 어떻게 그 정리들에 도달했는지를 묻자 그는 답했다. "꿈에서 여신 나마기리가 보여줍니다."',
      '하디는 라마누잔의 결과들을 정식으로 증명하려 했다. 라마누잔은 다음 결과들을 발견하려 했다. 두 사람의 협력은 둘 다 혼자서는 도달할 수 없는 곳으로 갔다. 1916년, 라마누잔은 케임브리지에서 박사 학위를 받았다. 1918년, 30세에 영국 왕립학회 펠로우로 선출됐다. 인도인으로는 두 번째였다.',
      '그러나 영국의 기후는 그를 시들게 했다. 결핵 진단을 받았다. 1918년 그는 입원했다. 어느 날 하디가 병원을 찾아왔다. 자기가 타고 온 택시 번호가 1729라는 무미건조한 숫자였다고 말했다. 라마누잔이 즉답했다. "아니요, 매우 흥미로운 숫자입니다. 두 가지 방식으로 두 정수의 세제곱의 합으로 표현되는 가장 작은 수입니다." 1729 = 1³ + 12³ = 9³ + 10³. 그는 누워 있는 상태에서 바로 답했다.',
      '1919년 라마누잔은 인도로 돌아갔다. 회복하기를 바랐지만 병이 깊어졌다. 1920년 4월 26일, 마드라스에서 32세의 나이로 세상을 떠났다. 죽기 직전까지 그는 노트에 공식을 썼다. 그가 남긴 마지막 노트는 "잃어버린 노트(Lost Notebook)"라고 불리며, 1976년 발견된 후 지금도 연구되고 있다.',
      '하디는 평생 수학에 대해 한 가지 질문을 가장 많이 받았다. 어느 발견이 가장 중요했는지. 그는 늘 같은 답을 했다. "라마누잔을 발견한 것이 내 인생에서 단 하나의 낭만적 사건이었다." 1913년 1월의 우편물 한 통이 그가 평생 가르친 모든 학생들보다 그를 더 깊이 가르쳤다.'
    ],
    closing: '1913년 1월의 편지 한 통.\n"매우 흥미로운 숫자입니다."\n스승은 평생 그를 발견한 것이\n자기 인생에서 가장 중요한 일이라 했다.',
    analysis: {
      insight: { icon: '💡', text: '가르치는 사람이 가르침을 받기도 한다 — 하디는 라마누잔을 통해 자신이 모르는 수학을 봤다.',
                 condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
      humor:   { icon: '😄', text: '택시 번호 1729에 대해 — "아니요, 매우 흥미로운 숫자입니다." 결핵 환자가 누운 채로 즉답한 것.',
                 condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
      emotion: { icon: '❤️', text: '"라마누잔을 발견한 것이 내 인생에서 단 하나의 낭만적 사건이었다." 무신론자 수학자의 가장 시적인 문장.',
                 condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
    },
    source: {
      type: '실화',
      credit: '슈리니바사 라마누잔(Srinivasa Ramanujan, 1887–1920) / Robert Kanigel 《The Man Who Knew Infinity》(1991, Charles Scribner\'s Sons) 및 케임브리지 트리니티 칼리지 라마누잔 아카이브를 바탕으로 재서술했습니다.',
    },
    curatorNote: '5월 15일은 스승의 날입니다. 가르침이 한 방향으로만 흐르지 않을 때가 있습니다. 하디는 라마누잔을 발견했지만, 동시에 라마누잔에게 발견되었습니다. 자신이 모르는 수학을 본 것입니다. 가장 좋은 사제 관계는 두 사람 모두가 배우는 관계가 아닐까 싶습니다.',
    qna: {
      question: '가르치는 입장이었지만 오히려 더 많이 배우게 된 관계가 있었나요? 그 만남이 당신을 어떻게 바꿨나요?',
      answer: '하디는 라마누잔의 답을 받아 적었습니다. 그러나 그 과정에서 자신이 평생 모르고 있던 수학을 만났습니다. 진짜 스승은 자신이 모르는 것을 인정할 줄 아는 사람일지 모릅니다.'
    },
    publishedDate: '2026년 5월 15일',
  },


    },
  },
  {
    weekLabel: '2026년 5월 1주 (5/4–5/8)',
    weekStart: '2026-05-04',
    stories: {
      1: {
        title: '루이 브라유의 열다섯',
        category: '역사·감동',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: null,
        svgKey: null,
        body: [
          '1812년 어느 날, 세 살 루이는 아버지의 마구 작업대에 올라갔다. 쿠프레는 파리 동쪽의 작은 마을이었고, 시몽 르네 브라유는 마을의 마구 장인이었다. 루이는 송곳을 집어들었다. 손에서 미끄러졌다. 한쪽 눈을 찔렀다. 염증이 번졌다. 다섯 살이 되기 전, 루이는 두 눈을 모두 잃었다.',
          '실명은 당시 많은 것을 닫는 것을 뜻했다. 교육, 직업, 독립적인 삶. 그러나 루이의 부모는 포기하지 않았다. 마을 학교에서 수업을 따라갈 수 있도록 했다. 루이는 소리로 외우고, 손으로 더듬으며 다른 아이들보다 뒤처지지 않았다.',
          '열 살, 파리 국립맹인학교에 장학생으로 입학했다. 학교에는 당시 유일한 맹인 독서 체계가 있었다. 발명자 발랭탱 아위가 고안한 것으로, 종이에 로마자 모양의 돌기를 찍어 손끝으로 읽는 방식이었다. 읽을 수는 있었지만 느렸다. 손끝이 다음 단어로 넘어가기 전에 이미 앞 단어가 사라졌다.',
          '1821년, 군 장교 샤를 바르비에가 학교를 방문했다. 바르비에는 전쟁터에서 병사들이 불빛 없이 명령을 읽을 수 있도록 야간 문자 체계를 개발했다. 점과 선을 조합해 소리를 나타내는 방식이었고, 한 칸에 최대 열두 개의 점이 들어갔다. 열두 살 루이는 시연을 들으며 즉시 문제를 파악했다. 점이 너무 많아 손가락 하나로 한 칸을 다 느낄 수가 없었다.',
          '루이는 3년을 매달렸다. 열두 개의 점을 여섯 개로 줄였다. 가로 두 줄, 세로 세 줄. 이 여섯 자리의 점 배열로 만들 수 있는 조합은 64가지였다. 알파벳, 숫자, 악보 기호, 수학 기호를 모두 담기에 충분했다. 1824년, 루이 브라유는 열다섯 살에 점자 체계의 기초를 완성했다.',
          '그는 학교에서 계속 가르치면서 체계를 다듬었다. 음악을 위한 점자 기보법도 만들었다. 스물여섯 살에 《점자법》을 출판했다. 그러나 학교 당국은 공식 채택을 거부했다. 기존 방식이 더 친숙하다는 이유였다. 학생들은 수업 시간엔 기존 방식을 썼지만, 서로 쪽지를 주고받을 때는 점자를 썼다.',
          '건강이 나빠졌다. 결핵이었다. 강단에 서는 날이 줄었다. 고향 쿠프레와 파리를 오갔다. 1852년 1월 6일, 루이 브라유는 마흔두 살에 세상을 떠났다. 프랑스가 그의 점자를 공식 채택한 것은 그로부터 2년 뒤, 1854년이었다.',
          '어떤 이유에서인지, 루이를 앞 못 보게 한 것과 루이가 세상을 다시 읽게 해준 것은 같은 모양을 하고 있었다. 아버지의 작업대 위 송곳. 점자를 찍는 뾰족한 필기구. 그를 찌른 것이 그가 만든 것의 형태가 됐다.',
          '오늘날 점자는 200개 이상의 언어로 존재한다. 화폐에 새겨지고, 엘리베이터 버튼에 붙고, 약 포장지에 인쇄된다. 루이 브라유의 유해는 1952년 국립묘지 팡테옹으로 이장됐다. 발명 128년 만이었다. 이장될 때, 고향 쿠프레 사람들은 그의 손만은 보내지 않겠다고 했다. 그의 손은 지금도 쿠프레 교회에 있다.'
        ],
        closing: '그를 앞 못 보게 한 것과\n세상을 읽게 해준 것은\n같은 모양을 하고 있었다.\n그의 손은 지금도 쿠프레에 있다.',
        analysis: {
          insight: { icon: '💡', text: '결함이 도구가 됐다 — 실명한 소년이 맹인 독서의 한계를 가장 정확히 본 사람이 됐다.', condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
          humor:   { icon: '😄', text: '프랑스가 점자를 공식 채택한 것은 발명자 사후 2년 뒤였다. 세상은 늘 조금 늦는다.', condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '고향 사람들은 그의 손만은 팡테옹으로 보내지 않겠다고 했다. 그의 손은 지금도 쿠프레에 있다.', condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: { type: '실화', credit: '루이 브라유(Louis Braille, 1809–1852) / C. Michael Mellor 《Louis Braille: A Touch of Genius》(2006, National Braille Press) 및 파리 국립맹인학교 기록을 바탕으로 재서술했습니다.' },
        curatorNote: '루이 브라유는 자신을 위해 점자를 만들지 않았습니다. 이미 글을 읽을 방법이 있었거든요. 그는 더 잘 읽을 수 없는 다른 사람들을 위해 만들었습니다. 그를 다치게 한 것과 그가 만든 것이 같은 모양이었다는 사실이 내내 마음에 남습니다.',
        qna: { question: '당신의 결함이나 상처가 오히려 다른 사람을 이해하거나 돕는 자원이 된 적이 있나요?', answer: '루이 브라유는 송곳에 찔려 눈이 멀었습니다. 그리고 송곳 비슷한 도구로 점을 찍어 세상을 다시 읽게 했습니다. 가장 깊이 이해하는 것은 그것을 겪은 사람입니다. 상처가 지도가 됩니다.' },
        publishedDate: '2026년 5월 4일',
      },
      2: {
        title: '잭 런던의 생존',
        category: '역사·감동',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: null,
        svgKey: null,
        body: [
          '잭 런던은 1876년 1월 12일 샌프란시스코에서 태어났다. 출생 신고서에는 아버지 이름이 없었다. 어머니 플로라 웰먼은 미혼이었고, 아이의 아버지로 알려진 점성술사는 친자를 부인했다. 여덟 달 뒤 어머니는 존 런던이라는 남자와 재혼했다. 아이는 그의 성을 따랐다.',
          '집은 늘 가난했다. 오클랜드 이스트사이드, 부두 노동자들이 사는 동네였다. 열네 살에 학교를 그만뒀다. 통조림 공장, 황마 방적 공장, 발전소를 전전했다. 하루 열여섯 시간, 한 달에 10달러였다.',
          '열다섯 살, 그는 배를 샀다. 신용으로. 샌프란시스코만에서 양식 굴 밭을 밤마다 습격하는 굴 해적이 됐다. 금지된 일이었다. 그러나 하루치 공장 임금보다 하룻밤 습격이 더 많은 돈을 줬다. 그러다 스스로 캘리포니아 어업 순찰대에 취직했다. 굴 도둑을 잡는 쪽으로 건너갔다.',
          '열일곱 살, 물개잡이 범선에 올랐다. 일본 해역과 베링해까지 항해했다. 돌아왔을 때 오클랜드는 불황 속에 있었다. 1894년, 그는 실업자 대열 행진에 합류했다. 수천 명의 무리가 워싱턴으로 행진하는 코그세이 군대였다. 잭은 도중에 이탈했다가 뉴욕에서 부랑자로 체포됐다. 30일 구금. 에리 카운티 교도소에서 본 것들이 그를 다른 사람으로 만들었다.',
          '열아홉 살에 오클랜드 고등학교에 등록했다. 처음부터 다시였다. 낮에는 수업을 듣고, 밤에는 읽었다. 하루 열아홉 시간을 책과 씨름했다. 마르크스, 다윈, 허버트 스펜서, 키플링. 이듬해 UC 버클리에 합격했지만 장학금이 부족해 한 학기 만에 그만뒀다. 대신 도서관에서 계속 읽었다.',
          '1897년, 클론다이크 금광 러시가 일어났다. 잭은 북쪽으로 갔다. 영하 50도의 유콘 강. 금을 발견하지는 못했다. 그러나 스물한 살의 겨울을 탐험가들과 원주민들 사이에서 보내며 이야기를 모았다. 돌아올 때는 괴혈병으로 이가 흔들렸다.',
          '무일푼으로 돌아왔다. 양아버지 존 런던이 세상을 떠났다. 잭은 혼자 가족을 부양해야 했다. 그는 쓰기 시작했다. 잡지사에 투고했다. 반송됐다. 다시 보냈다. 다시 반송됐다. 그 사이에 세탁소에서 일했다. 밤에 이야기를 썼다.',
          '1899년, 《오버랜드 먼슬리》가 클론다이크 이야기를 실었다. 5달러였다. 같은 해 《애틀랜틱》도 한 편을 샀다. 10달러. 이야기가 팔리기 시작했다. 1900년, 첫 단편집 《늑대의 아들》이 출간됐다. 스물네 살이었다.',
          '1903년, 《야성의 부름》이 나왔다. 초판이 한 달 만에 소진됐다. 스물일곱 살의 잭 런던은 미국에서 가장 많이 읽히는 작가 중 한 명이 됐다. 굴 해적이, 부랑자가, 금광 채굴자가 쓴 소설이었다.',
          '그는 남은 생을 빠르게 살았다. 50권의 책을 썼고, 세계를 항해했고, 사회주의자가 됐고, 알코올을 마셨다. 마흔 살에 신장병으로 죽었다. 유고에서 발견된 글에 이런 문장이 있었다. "나는 재가 되는 것이 먼지가 되는 것보다 낫다고 생각한다. 불꽃이 꺼지는 것이 썩어 없어지는 것보다 낫다." 그는 그렇게 살았다.',
          '굴 해적, 어업 순찰, 선원, 부랑자, 금광 채굴자, 세탁부, 소설가. 잭 런던은 하나의 삶이 아니라 여러 개의 삶을 연속으로 살았다. 그 모든 삶이 《야성의 부름》 한 권에 들어가 있다.'
        ],
        closing: '굴 해적에서 세계적 작가까지.\n그 사이에 부랑자, 선원, 금광 채굴자가 있었다.\n하루 열아홉 시간 읽었고,\n그 모든 삶이 이야기가 됐다.',
        analysis: {
          insight: { icon: '💡', text: '경험이 자료가 됐다 — 잭 런던의 소설이 진짜처럼 느껴지는 이유는 전부 실제로 겪었기 때문이다.', condition: '완전히 다른 두 국면에서 같은 사람이 달라지는 이야기' },
          humor:   { icon: '😄', text: '굴 도둑을 잡는 어업 순찰에 취직한 전직 굴 도둑.', condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
          emotion: { icon: '❤️', text: '"불꽃이 꺼지는 것이 썩어 없어지는 것보다 낫다." — 마흔 살에 쓴 마지막 문장.', condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: { type: '실화', credit: '잭 런던(Jack London, 1876–1916) / Earle Labor 《Jack London: An American Life》(2013, Farrar, Straus and Giroux) 및 잭 런던 기념 재단 기록을 바탕으로 재서술했습니다.' },
        curatorNote: '잭 런던은 세상이 교과서라는 것을 증명했습니다. UC 버클리를 한 학기 만에 그만뒀지만, 유콘의 겨울과 교도소와 부두가 진짜 학교였습니다. 읽는 것과 사는 것이 같은 속도로 달렸을 때 《야성의 부름》이 나왔습니다.',
        qna: { question: '당신이 직접 겪은 일 중에서 언젠가 이야기가 될 것 같다고 느낀 순간이 있었나요?', answer: '잭 런던은 일부러 뭔가를 겪으러 간 것이 아니었습니다. 살아남기 위해 이 일 저 일을 했고, 그것들이 쌓여 이야기가 됐습니다. 경험은 모아두는 것이 아니라 통과하는 것입니다. 살아남은 자는 반드시 이야기를 갖게 됩니다.' },
        publishedDate: '2026년 5월 5일',
      },
      3: {
        title: '클로드 모네의 안개',
        category: '역사·통찰',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: null,
        svgKey: null,
        body: [
          '1908년, 모네가 처음 눈이 이상하다는 것을 느꼈다. 예순여덟 살. 지베르니 정원의 수련이 평소와 다르게 보였다. 윤곽이 흐릿했다. 색이 탁했다. 화가는 팔레트를 의심했다. 그런 다음 눈을 의심했다.',
          '진단은 백내장이었다. 양쪽 눈 모두. 의사들은 수술을 권했다. 모네는 거부했다. 수술 후 색이 달라 보일까 두려웠다. 평생 빛과 색을 보는 방식이 자신의 전부라고 생각했다. 그것이 바뀌면 무엇이 남는가.',
          '1911년 아내 알리스가 세상을 떠났다. 1914년 장남 장이 죽었다. 붓을 들 수 없는 시간이 이어졌다. 그러나 다시 시작했다. 시력이 나빠질수록 더 크게 그리기 시작했다. 캔버스가 거대해졌다.',
          '1916년, 총리 조르주 클레망소가 찾아왔다. 1차 대전이 끝나면 국가에 수련 그림을 기증하겠냐고 물었다. 모네는 동의했다. 파리 오랑주리 미술관에 설치될 대형 벽화 연작이었다. 가로 2미터, 세로 91미터. 전용 작업실을 새로 지었다. 일흔여섯 살의 반맹 화가가 국가 기념 작업을 시작했다.',
          '볼 수 없는 것들이 생겨났다. 파랑과 보라가 사라졌다. 노란 기운이 강해지고, 붉은 안개가 퍼졌다. 모네는 자신이 의도한 색이 아닌 것을 알았다. 물감 튜브에 직접 글씨를 써서 색을 구분했다. 그럼에도 손은 계속 움직였다.',
          '1923년, 마침내 오른쪽 눈 수술을 받았다. 일시적으로 시력을 회복했다. 처음 눈을 떴을 때, 세상이 너무 파랗게 보였다. 모든 것이 청색으로 물든 것 같았다. 이상했다. 그러나 사실 이상한 것이 아니었다.',
          '수술 후 알게 된 사실이 있었다. 사람의 수정체는 자외선을 차단한다. 그러나 수정체를 제거하면 자외선이 눈에 들어온다. 모네는 수술 이후 보통 사람이 볼 수 없는 자외선 파장을 인식하게 됐다. 그가 만년에 수련을 유독 청색으로 그린 것은 착각이 아니었다. 실제로 그렇게 보였다.',
          '수술 이후 공포가 왔다. 흐릿한 눈으로 완성한 작품들을 다시 보니 형태가 뭉개지고, 색이 어긋나 있었다. 모네는 여러 점을 스스로 폐기했다. 그러나 붓은 멈추지 않았다.',
          '1926년 12월 5일, 모네는 지베르니에서 세상을 떠났다. 여든여섯 살이었다. 오랑주리 미술관 대형 연작은 이듬해 공개됐다. 관람객들은 긴 타원형 방의 벽을 채운 수련 속에 들어서서 360도로 에워싸였다.',
          '훗날 미술사가들은 모네의 만년작을 다시 평가했다. 추상표현주의의 선조였다. 잭슨 폴록, 마크 로스코, 윌렘 드 쿠닝은 모네의 후기작에서 직접 영향을 받았다고 말했다. 시력을 잃어가며 그린 것들이 20세기 미술의 방향을 바꿨다. 백내장이 만든 안개 속에서 현대 미술이 시작됐다.'
        ],
        closing: '볼 수 없을수록 더 크게 그렸다.\n수술 후 그는 자외선을 봤다.\n백내장이 만든 안개 속에서\n20세기 미술이 시작됐다.',
        analysis: {
          insight: { icon: '💡', text: '결함이 양식이 됐다 — 시력 상실이 추상을 낳았고, 그 추상이 20세기 미술의 문을 열었다.', condition: '완전히 다른 두 국면에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '수정체를 제거하자 자외선이 보였다. 결과적으로 보통 사람보다 더 많이 본 화가.', condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '흐릿한 눈으로 완성한 작품을 수술 후 처음 봤을 때 — 그는 여러 점을 스스로 폐기했다.', condition: '아주 작은 순간이 사실 전부였던 이야기' }
        },
        source: { type: '실화', credit: '클로드 모네(Claude Monet, 1840–1926) / Sylvie Patin 《Monet: The Ultimate Impressionist》(1993, Harry N. Abrams) 및 파리 오랑주리 미술관 공식 기록을 바탕으로 재서술했습니다.' },
        curatorNote: '모네는 볼 수 없게 되면서 더 크게 그리기 시작했습니다. 캔버스가 커질수록 색은 더 대담해졌습니다. 지금 오랑주리 미술관에서 그 수련 앞에 서면 그림이 사람을 에워쌉니다. 시력을 잃은 사람이 관람객을 그림 속에 집어넣었습니다.',
        qna: { question: '무언가를 잃으면서 오히려 다른 것을 더 선명하게 보게 된 경험이 있나요?', answer: '모네는 색을 잃으면서 형태를 지웠습니다. 그 결과 20세기 미술이 열렸습니다. 잃는 것이 반드시 줄어드는 것은 아닙니다. 때로는 잃음이 새로운 눈을 열기도 합니다.' },
        publishedDate: '2026년 5월 6일',
      },
      4: {
        title: '폴 에르되시의 여행 가방',
        category: '역사·통찰',
        primaryType: '통찰',
        types: ['통찰', '유머'],
        image: null,
        svgKey: null,
        body: [
          '폴 에르되시는 집이 없었다. 자의로. 1913년 헝가리 부다페스트에서 태어나 수학자가 됐다. 1938년 반유대주의가 격화되면서 영국에 머물던 그는 헝가리로 돌아가지 않았다. 여행 가방 하나를 들고 세계를 떠돌기 시작했다. 이 상태가 평생 지속됐다.',
          '방식은 단순했다. 수학자를 찾아갔다. "내 뇌가 열렸소." 그것이 함께 연구할 준비가 됐다는 신호였다. 초청받지 않아도 찾아갔다. 새벽 4시에 문을 두드리는 일도 있었다. 그러나 대부분의 수학자들은 그를 받아들였다. 에르되시가 왔다는 것은 최상급 공동 연구의 기회였기 때문이었다.',
          '소지품은 거의 없었다. 여행 가방 두 개. 겉옷 몇 벌. 수학 노트. 상금은 받는 즉시 기부했다. 재정은 친구 로널드 그레이엄이 관리했다. 에르되시는 통장도 없었다. 집도 없었다. 그래서 오히려 아무 문제가 없었다.',
          '그는 독특한 언어를 사용했다. 어린이는 "엡실론" — 수학에서 아주 작은 수를 뜻하기 때문이었다. 아내는 "보스", 남편은 "노예". 술은 "독", 음악은 "소음". 신은 "SF", 즉 최고 파시스트(Supreme Fascist)였다. SF는 수학의 완벽한 증명들을 담은 책을 갖고 있는데 인간에게 보여주지 않는다고 믿었다. 수학을 한다는 것은 그 책에서 한 페이지씩 훔쳐보는 것이라고 했다.',
          '1955년, 미국 정부가 입국을 금지했다. 공산주의자와 접촉했다는 이유였다. 철의 장막 너머 헝가리 수학자들을 만났기 때문이었다. 5년간 미국 입국이 막혔다. 그 사이 그는 다른 나라들을 더 많이 다녔다. 1963년 입국이 재허가됐을 때, 에르되시는 FBI에 편지를 썼다. "당신들이 나를 감시했으니 나도 당신들을 감시하겠소."',
          '그가 공동 연구한 사람은 500명이 넘었다. 공동 저술한 논문은 1,500편을 넘겼다. 역사상 어떤 수학자도 달성한 적 없는 숫자였다. 이 현상은 나중에 "에르되시 수"라는 개념을 낳았다. 에르되시와 직접 논문을 쓴 사람은 에르되시 수 1. 그 사람과 논문을 쓴 사람은 2. 수학계의 6단계 분리 이론이었다.',
          '에르되시는 암페타민을 복용했다. 친구들이 걱정했다. 한 친구가 내기를 걸었다. 한 달간 끊으면 500달러를 주겠다고. 에르되시는 해냈다. 500달러를 받았다. 그리고 말했다. "이번 한 달 동안 수학이 얼마나 뒤처졌는지 당신은 모릅니다." 다음 날부터 다시 복용했다.',
          '나이가 들수록 더 많이 일했다. 70대에도 새벽 5시까지 연구하고 아침 9시에 다시 시작했다. 젊은 수학자들과의 공동 연구가 오히려 늘었다. 에르되시가 찾아오면 그 집의 수학적 생산성이 폭발했다.',
          '1996년 9월 20일, 폴란드 바르샤바에서 학술대회가 열렸다. 에르되시는 그날 오전까지 연구를 했다. 점심 식사 후 가슴에 통증을 느꼈다. 병원으로 옮겼지만 심장마비였다. 여든세 살이었다. 그는 수학 학술대회에서, 증명을 마친 날 죽었다.',
          '은퇴를 권하는 사람들에게 에르되시는 늘 같은 말을 했다. "무덤 속에서 쉬겠소." 그가 죽은 뒤에도 공동 논문들이 계속 발표됐다. 생전에 제출한 논문들이 학술지에 실리는 데 시간이 걸렸기 때문이다. 에르되시는 죽어서도 몇 년간 논문을 출판했다.'
        ],
        closing: '집도 없이, 통장도 없이.\n여행 가방 하나로 세계를 돌며\n500명과 논문을 썼다.\n"무덤 속에서 쉬겠소."',
        analysis: {
          insight: { icon: '💡', text: '소유를 줄이면 집중이 는다 — 에르되시는 집과 돈을 버리고 수학만 남겼다.', condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
          humor:   { icon: '😄', text: '한 달 금약으로 500달러를 받고 — "이 한 달간 수학이 얼마나 뒤처졌는지 모릅니다."', condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
          emotion: { icon: '❤️', text: '학술대회에서 오전에 증명을 마치고, 오후에 죽었다. 그것이 그가 원한 마지막이었다.', condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: { type: '실화', credit: '폴 에르되시(Paul Erdős, 1913–1996) / Paul Hoffman 《The Man Who Loved Only Numbers》(1998, Hyperion) 및 에르되시 기념 재단 기록을 바탕으로 재서술했습니다.' },
        curatorNote: '에르되시는 집이 없었습니다. 대신 500명의 공동 연구자가 있었습니다. 물건을 내려놓을수록 관계가 늘었습니다. 소유를 줄이면 사람이 남는다는 것을 그는 수학으로 증명한 셈입니다.',
        qna: { question: '당신이 내려놓았을 때 오히려 더 많은 것이 생긴 경험이 있나요?', answer: '에르되시는 집을 버렸지만 500명의 집이 생겼습니다. 통장을 버렸지만 수학 전체가 그의 것이 됐습니다. 소유는 때로 더 큰 것을 얻는 것을 막습니다.' },
        publishedDate: '2026년 5월 7일',
      },
      5: {
        title: '윌리엄 포크너의 노벨상 소감',
        category: '역사·유머',
        primaryType: '유머',
        types: ['유머', '통찰'],
        image: null,
        svgKey: null,
        body: [
          '1949년 11월, 스톡홀름에서 전보가 왔다. 수신인은 미국 미시시피 주 옥스퍼드. 윌리엄 포크너에게 노벨 문학상이 수여됐다. 포크너는 즉각 거절 의사를 밝혔다. 스웨덴에 가기 싫다고 했다. 딸 질이 아버지를 설득했다. 결국 가기로 했다.',
          '포크너는 당시 52세였다. 평생을 미시시피에서 보내며 소설을 썼다. 《소리와 분노》, 《내가 죽어가면서》, 《압살롬, 압살롬!》 — 모두 대작이었지만 미국 대중에게는 잘 알려지지 않았다. 1949년 당시 그의 책은 미국에서 대부분 절판 상태였다. 노벨상 발표 후 출판사들이 황급히 재인쇄에 들어갔다.',
          '12월 10일, 스톡홀름 시청사. 시상식 전날 연회에서 포크너는 술을 마셨다. 얼마나 마셨는지에 대해서는 여러 설이 있다. 다만 마이크 앞에 선 그의 음성이 빠르고 낮았다는 것은 기록에 남아 있다.',
          '연설은 짧았다. 569단어. 3분이 채 안 됐다. 그날 청중 대부분이 무슨 말인지 정확히 듣지 못했다. 포크너가 너무 작은 목소리로, 너무 빠르게 읽었기 때문이었다. 스웨덴 신문들은 이튿날 "인상적이지 않은 연설"이라고 썼다.',
          '그러나 원고가 배포됐다. 읽으면 달랐다. 포크너는 냉전의 한복판에서 핵전쟁의 공포를 정면으로 언급했다. 당시 젊은 작가들이 언제 폭발할지 모르는 세상 속에서 글을 쓰지 못하고 있다고 했다. 그리고 말했다. 그것은 잊어야 할 문제라고. 유일한 주제는 인간의 마음이라고.',
          '"나는 인간이 단순히 견딜 것이라고만 믿지 않는다. 인간은 승리할 것이다." 이 문장이 연설의 중심이었다. 두려움, 절망, 비겁함을 쓰는 것은 인간의 문학이 아니라고 했다. 진짜 질문들 — 사랑, 명예, 연민, 자존심, 희생, 공감 — 이것이 전부라고.',
          '"시인과 작가의 목소리는 인간이 승리하는 데 도움을 주는 것이다." 연단에서 내려올 때 포크너는 이미 흐릿했다. 그러나 원고에 있는 그 문장은 선명했다.',
          '며칠 뒤, 뉴욕타임스는 연설 전문을 실었다. 수천 통의 편지가 왔다. 학교 교과서에 실리기 시작했다. 대학 졸업식 연설에 인용됐다. "I decline to accept the end of man" — 나는 인간의 종말을 받아들이지 않는다 — 이 문장은 노벨상 역사에서 가장 많이 인용되는 수상 소감 문장 중 하나가 됐다.',
          '포크너는 1962년 7월 6일, 심장마비로 사망했다. 65세. 그해 《납도둑》으로 퓰리처상을 받았다. 케네디 대통령이 성명을 냈다. "미국은 최고의 작가 중 한 명을 잃었다."',
          '그날 스톡홀름에서 아무도 제대로 듣지 못한 연설이 나중에 그 모든 것 중 가장 오래 남았다. 청중이 듣지 못한 것을 종이가 들었다. 말이 닿지 않는 것처럼 보여도 사라지지 않는 방식이 있다는 것을, 그 연설이 스스로 증명했다.'
        ],
        closing: '569단어, 3분.\n아무도 제대로 듣지 못했다.\n그러나 종이가 들었다.\n"나는 인간의 종말을 받아들이지 않는다."',
        analysis: {
          insight: { icon: '💡', text: '말한 자리와 말이 남는 자리는 다르다 — 그날 아무도 듣지 못했지만 그 연설은 반세기를 넘어 살아남았다.', condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '연설 직후 스웨덴 신문 — "인상적이지 않은 연설". 이후 수십 년간 교과서에 실렸다.', condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
          emotion: { icon: '❤️', text: '"나는 인간의 종말을 받아들이지 않는다." — 냉전의 공포 속에서 읽힌 한 문장.', condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: { type: '실화', credit: '윌리엄 포크너(William Faulkner, 1897–1962) / Frederick Karl 《William Faulkner: American Writer》(1989, Weidenfeld & Nicolson) 및 노벨재단 공식 기록을 바탕으로 재서술했습니다.' },
        curatorNote: '그날 포크너의 목소리는 아무도 못 들었습니다. 그러나 원고는 살아남았습니다. 글이 말보다 멀리 간다는 것을 그 연설 자체가 증명했습니다. 인간의 종말을 받아들이지 않겠다는 말을 중얼거렸지만 — 그것이 이 세기에서 가장 선명한 문장 중 하나가 됐습니다.',
        qna: { question: '당신이 가장 진심을 담아 한 말이 상대에게 제대로 닿지 않았던 경험이 있나요? 그럼에도 그 말이 어딘가에 살아남았나요?', answer: '포크너의 연설은 그날 청중 대부분이 듣지 못했습니다. 그러나 신문이 실었고, 학교가 가르쳤고, 반세기가 지나도 인용됩니다. 말이 닿지 않는 것처럼 느껴질 때, 살아남는 방식은 예상과 다를 수 있습니다.' },
        publishedDate: '2026년 5월 8일',
      },
    }
  },
  {
    weekLabel: '2026년 4월 5주 (4/27–5/1)',
    weekStart: '2026-04-27',
    stories: {
      1: {
        title: '파블로 카잘스의 침묵',
        category: '역사·감동',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: null,
        svgKey: null,
        body: [
          '1939년 1월, 파블로 카잘스는 카탈루냐를 떠났다. 피레네 산맥을 넘어 프랑스 국경 마을 프라드에 도착했다. 짐 속에는 첼로 하나가 있었다. 그것이 마지막 짐이었다.',
          '카잘스는 그때 이미 예순두 살이었다. 스물세 살에 런던 데뷔 이후 반세기 동안 세계 무대를 누볐다. 요하네스 브람스, 표트르 차이콥스키와 같은 시대를 살았고, 바흐 무반주 첼로 모음곡을 세상에 되살린 사람이었다. 연주자로서 그의 이름은 베토벤이 피아노에 붙는 것처럼 첼로에 붙었다.',
          '스페인 내전이 끝났다. 프란코 장군이 권력을 잡았다. 카잘스의 고향 카탈루냐는 언어와 문화를 금지당했다. 그는 프라드에서 결정을 내렸다. 프란코 정권을 인정한 나라에서는 연주하지 않겠다는 것이었다. 당시 그 나라들이 전부였다.',
          '편지가 왔다. 공연 초청이었다. 뉴욕, 런던, 파리, 밀라노. 카잘스는 모두 거절했다. 서방 세계가 프란코를 인정하는 한, 무대에 서지 않겠다고 했다. 10년이 흘렀다. 20년이 흘렀다. 세계는 그를 기다렸다. 그는 프라드에 있었다.',
          '1950년, 바흐 서거 200주년이었다. 음악가들이 프라드로 찾아왔다. 카잘스가 나오지 않으면 자신들이 그에게 가겠다는 것이었다. 프라드 음악제가 열렸다. 카잘스는 자신의 마을을 떠나지 않고도 무대에 섰다. 세계가 산속 마을로 왔다.',
          '1961년, 미국 대통령이 바뀌었다. 존 F. 케네디였다. 케네디는 직접 편지를 썼다. 백악관에서 연주해줄 수 있겠냐고 했다. 카잘스는 오랫동안 미국을 거부해왔지만 이번만은 달랐다. 11월 13일 밤, 백악관 이스트룸에서 카잘스는 연주했다. 84세였다.',
          '1971년 10월 24일, 유엔의 날이었다. 뉴욕 유엔 본부 총회장. 카잘스가 무대에 앉았다. 94세였다. 활을 들었다. 첫 음이 흘렀다.',
          '카탈루냐 민요 \'새들의 노래(El Cant dels Ocells)\'였다. 새들이 날아오를 때 내는 소리를 닮은 선율이었다. 카잘스에게 그 곡은 단순한 민요가 아니었다. 프란코 정권이 금지한 카탈루냐 언어 대신, 첼로로 부르는 카탈루냐어였다.',
          '연주가 끝나고 카잘스가 말했다. "저는 아마도 세상에서 가장 오래된 음악가일 것입니다. 카탈루냐는 자유를 잃었습니다. 그러나 언젠가는 돌아올 것입니다." 총회장이 조용해졌다. 수백 명의 대사들이 자리에 앉아 있었다.',
          '카잘스는 1973년 10월 22일, 96세로 세상을 떠났다. 그가 끝내 돌아가지 못한 바르셀로나에서는 그해 프란코가 여전히 살아 있었다. 프란코가 사망한 것은 1975년이었다. 카잘스는 2년 차이로 끝을 보지 못했다. 그의 첼로는 지금 바르셀로나 카탈루냐 국립도서관에 있다.'
        ],
        closing: '그는 무대를 떠난 게 아니었다.\n무대가 그에게 오기를 기다렸다.\n94세, 유엔 총회장에서 울린 첫 음.\n새들의 노래는 국경을 넘는다.',
        analysis: {
          insight: { icon: '💡', text: '저항은 나타나지 않는 것으로도 가능하다 — 카잘스의 침묵이 세계를 그에게 오게 만들었다.', condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
          humor:   { icon: '😄', text: '세계 최고의 첼리스트가 20년간 거부하자, 세계가 산속 마을로 찾아왔다.', condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '94세에 유엔에서 연주한 카탈루냐 민요 — 그것은 악보가 아니라 금지된 언어였다.', condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: { type: '실화', credit: '파블로 카잘스(Pablo Casals, 1876–1973) / H.L. Kirk 《Pablo Casals: A Biography》(1974) 및 UN 공식 기록을 바탕으로 재서술했습니다.' },
        curatorNote: '20년 동안 카잘스가 한 것은 침묵이었습니다. 그런데 그 침묵이 세상을 움직였습니다. 94세에 UN 무대에서 연주한 곡은 악보가 아니라 프란코가 금지한 언어였습니다.',
        qna: { question: '당신이 무언가에 항의하기 위해 하지 않기로 결심한 것이 있나요? 그 침묵이 말보다 더 크게 들렸던 적이 있나요?', answer: '카잘스의 침묵은 포기가 아니었습니다. 나타나지 않음으로써 자신의 위치를 분명히 한 것이었습니다.' },
        publishedDate: '2026년 4월 27일',
      },
      2: {
        title: '엘리너 루스벨트의 두 번째 삶',
        category: '역사·감동',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: null,
        svgKey: null,
        body: [
          '1945년 4월 12일, 엘리너 루스벨트는 워싱턴에 있었다. 남편 프랭클린은 조지아 주 웜스프링스에서 수채화 초상화를 그리다 쓰러졌다. 뇌출혈이었다. 그녀는 연락을 받고 달려갔다. 도착했을 때 남편은 이미 없었다.',
          '그 자리에는 루시 머서가 있었다. 1918년, 엘리너가 남편의 서랍에서 발견했던 연애편지의 주인공이었다. 이혼을 원했지만 정치 생명 때문에 타협했다. 이후 27년을 부부로 살았다. 남편의 마지막 순간을 그 사람이 함께했다는 것을 엘리너는 그날 처음 알았다.',
          '엘리너의 어린 시절은 쓸쓸했다. 아홉 살에 어머니를 잃고, 열 살에 아버지를 잃었다. 아름다운 집안이었지만 자신이 못생겼다는 말을 늘 들었다. 자신감이 없었다. 스물한 살에 먼 친척 프랭클린 루스벨트와 결혼할 때도 그랬다.',
          '1921년, 프랭클린이 소아마비로 하반신이 마비됐다. 정치를 포기하라는 압박이 쏟아졌다. 엘리너가 나섰다. 남편 대신 집회에 가고, 연설을 하고, 보고서를 썼다. 처음에는 두려움에 떨면서도 했고, 점차 자신의 것이 됐다.',
          '1933년, 프랭클린이 대통령이 됐다. 엘리너는 이제껏 없던 퍼스트 레이디였다. 정기적으로 기자회견을 열되 여성 기자만 출입할 수 있게 했다. 신문사들이 여성 기자를 고용해야 했다. 탄광을 찾아가고, 빈민가를 걸었다.',
          '프랭클린이 죽고, 해리 트루먼이 대통령이 됐다. 트루먼은 엘리너에게 UN 대표단 자리를 제안했다. 엘리너는 망설였다. "저는 아무것도 할 줄 모릅니다." 트루먼은 물러서지 않았다. 그녀는 수락했다.',
          'UN 인권위원회 위원장이 됐다. 세계인권선언을 만드는 일이었다. 소련 대표, 중동 대표들과 협상하고 설득했다. 1948년 12월 10일, 세계인권선언이 채택됐다. 48개국이 찬성했다. 반대한 나라는 없었다.',
          '선언은 \'모든 인간은 태어날 때부터 자유로우며 존엄성과 권리에 있어 평등하다\'는 문장으로 시작했다. 훗날 엘리너는 이 선언이 어디서 시작되는지를 물었다. "보편적 인권은 어디서 시작됩니까? 지도에도 보이지 않는, 아주 가까운 작은 곳에서 시작됩니다. 개인이 사는 세계입니다."',
          '퍼스트 레이디 자리를 떠난 뒤에도 멈추지 않았다. 신문 칼럼을 매일 썼다. 강연을 다녔다. 케네디 대통령은 그녀를 자문위원으로 불렀고, 1961년에는 대통령 여성지위위원회 위원장이 됐다. 일흔일곱 살이었다.',
          '1962년 11월 7일, 엘리너 루스벨트는 78세로 세상을 떠났다. 애들레이 스티븐슨이 추모사에서 말했다. "그녀는 어둠을 저주하기보다 촛불을 켜는 쪽을 택했습니다." 그녀가 받은 편지 중에는 이런 것도 있었다. "당신은 처음으로 저도 인간이라는 것을 알게 해줬습니다."'
        ],
        closing: '남편이 죽고\n비로소 자신의 삶이 시작됐다.\n61세의 시작.\n세계인권선언은 그렇게 태어났다.',
        analysis: {
          insight: { icon: '💡', text: '가장 넓은 무대는 가장 고통스러운 상실 이후에 열리기도 한다.', condition: '완전히 다른 두 국면에서 같은 사람이 달라지는 이야기' },
          humor:   { icon: '😄', text: '"저는 아무것도 할 줄 모릅니다"라고 말한 사람이 세계인권선언을 만들었다.', condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
          emotion: { icon: '❤️', text: '48개국이 찬성했다. 반대한 나라는 없었다.', condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: { type: '실화', credit: '엘리너 루스벨트(Eleanor Roosevelt, 1884–1962) / Blanche Wiesen Cook 《Eleanor Roosevelt》Vol.1–3 및 UN 인권위원회 공식 기록을 바탕으로 재서술했습니다.' },
        curatorNote: '엘리너 루스벨트는 61세에 다시 시작했습니다. \'두 번째 삶\'이라고 불렀지만, 어쩌면 그것이 진짜 첫 번째 삶이었는지도 모릅니다.',
        qna: { question: '당신의 삶에서 "진짜 나"로 살기 시작한 순간이 언제였나요?', answer: '엘리너는 61세에 시작했습니다. 늦은 게 아니었습니다. 시작의 나이는 없습니다.' },
        publishedDate: '2026년 4월 28일',
      },
      3: {
        title: '볼테르의 임종',
        category: '역사·유머',
        primaryType: '유머',
        types: ['유머', '통찰'],
        image: null,
        svgKey: null,
        body: [
          '1778년 2월, 볼테르가 파리로 돌아왔다. 28년 만이었다. 마차가 도시에 들어서자 군중이 몰려들었다. 사람들은 마차 문을 잡고 따라 뛰었다. 여든세 살의 노인은 창밖으로 손을 내밀었다.',
          '볼테르는 반세기 동안 유럽을 뒤흔들었다. 필명 하나로 왕과 교회를 조롱했고, 두 번 바스티유에 갇혔으며, 두 번 망명했다. 《캉디드》를 쓰고, 《관용론》을 썼다. 그것들 때문에 파리에 있을 수 없었다. 그런데 그가 돌아온 것이다.',
          '파리는 들썩였다. 코메디프랑세즈에서 그의 신작 〈이렌〉이 상연됐다. 관객들은 그의 흉상에 월계관을 씌웠다. 프랑스 학사원이 그를 원장으로 선출했다. 벤저민 프랭클린도 찾아왔다. 두 노인이 손을 마주잡았다.',
          '몸이 버티질 않았다. 무리한 일정과 흥분이 쌓였다. 4월부터 심하게 기침했다. 피를 토했다. 침대에서 일어나지 못하게 됐다. 그 자리로 사람들이 몰려들었다. 그 중에 신부도 있었다.',
          '가톨릭 교회는 오랫동안 볼테르를 이단으로 간주했다. 죽기 전에 신앙을 고백하고 죄를 뉘우쳐야 했다. 신부가 침대 곁에 앉았다. "사탄과 그 모든 악행을 포기하겠습니까?" 볼테르는 눈을 떴다. "지금 이 순간에 새 원수를 만들 여유가 없군요."',
          '또 다른 날, 또 다른 신부가 왔다. 불꽃 지옥에 대해 말했다. 볼테르가 눈을 찡그리며 물었다. "불꽃이라고요? 이 나이에 불꽃이라니." 신부가 고집했다. 볼테르는 돌아누웠다. "내버려두시오. 나는 내 방식대로 죽겠소."',
          '5월 30일 밤, 볼테르는 숨을 거뒀다. 여든세 살이었다. 파리 교회는 장례를 거부했다. 조카가 시신을 마차에 실었다. 교회 관할이 아닌 샹파뉴 지방으로 밤새 달렸다. 시신은 그곳에 묻혔다.',
          '13년 뒤, 프랑스혁명이 일어났다. 혁명 정부는 볼테르를 되찾으러 갔다. 1791년 7월, 그의 유해가 파리로 돌아왔다. 수십만 명의 행렬이 도시를 가로질렀다. 볼테르의 관이 바스티유 감옥 터를 지났다. 그는 결국 파리에 묻혔다.',
          '팡테옹이었다. 그의 관 위에 이런 문구가 새겨졌다. "그는 인간의 정신을 일깨웠고, 관용을 위해 싸웠으며, 인권을 요구했다." 몇 해 뒤 루소도 그 맞은편에 묻혔다. 평생 사이가 나빴던 두 사람이 영원히 이웃이 됐다.',
          '볼테르가 임종에 남긴 말은 여럿이다. 방마다 찾아오는 신부들에게 던진 농담들, 그리고 조용히 닫힌 눈. 파리가 그를 거부했지만, 13년 뒤 파리가 직접 데리러 갔다.'
        ],
        closing: '지금 이 순간에\n새 원수를 만들 여유가 없다.\n그는 그렇게 말하고\n자신의 방식으로 눈을 감았다.',
        analysis: {
          insight: { icon: '💡', text: '죽음 앞에서도 농담을 할 수 있다면 — 평생 그 방식으로 살았다는 증거다.', condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '"사탄을 포기하겠느냐"는 질문에 "새 원수 만들 여유가 없다"고 답한 83세의 이단자.', condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
          emotion: { icon: '❤️', text: '파리가 그를 거부했지만, 13년 뒤 파리가 직접 데리러 갔다.', condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: { type: '실화', credit: '볼테르(Voltaire, 1694–1778) / Roger Pearson 《Voltaire Almighty》(2005) 및 동시대 기록을 바탕으로 재서술했습니다.' },
        curatorNote: '볼테르는 교회에 지지 않았습니다. 살아서도, 죽어서도. 신부가 사탄을 포기하라고 했을 때 그가 한 말은 평생 살아온 방식의 요약이었습니다.',
        qna: { question: '죽음 앞에서도 자신의 방식을 고집한다는 것, 당신에게는 어떤 의미인가요?', answer: '볼테르에게 유머는 무기가 아니었습니다. 그것이 그의 진심이었습니다. 죽는 방식은 살아온 방식의 마지막 문장입니다.' },
        publishedDate: '2026년 4월 29일',
      },
      4: {
        title: '새뮤얼 존슨의 사전',
        category: '역사·유머',
        primaryType: '유머',
        types: ['유머', '통찰'],
        image: null,
        svgKey: null,
        body: [
          '1746년 6월, 런던의 출판업자들이 새뮤얼 존슨을 불렀다. 영어 사전을 만들어달라는 의뢰였다. 보수는 1,575파운드였다. 존슨은 계약서에 서명했다. 혼자서 하겠다고 했다.',
          '프랑스 학술원은 40명의 학자가 55년에 걸쳐 프랑스어 사전을 완성했다. 존슨이 이 이야기를 들었을 때 대답했다. "40명 곱하기 55년이면 2,200인년이군요. 그렇다면 존슨 혼자 3년이면 되겠습니다." 나중에 그 기간을 9년으로 늘렸지만, 혼자서 했다는 것만은 사실이었다.',
          '작업실은 런던 가프 스퀘어의 다락방이었다. 보조원 여섯 명을 뒀다. 대부분 스코틀랜드 출신이었다. 그들은 존슨이 지정한 책에서 문장을 옮겨 적었다. 존슨은 그 수십만 장의 메모 쪽지들 사이에서 정의를 썼다.',
          '작업은 더뎠다. 돈은 선불로 받아 이미 써버렸다. 아내 엘리자베스가 1752년 세상을 떠났다. 존슨은 침대에서 일어나지 못했다. 다시 일어났을 때, 그는 더 빠르게 썼다.',
          '사전에는 4만 2,773개의 단어가 실렸다. 용례를 보여주는 문장이 11만 4,000개였다. 그 사이에 존슨 자신의 정의가 끼어들었다. 귀리(Oats): "영국에서는 일반적으로 말에게 먹이지만, 스코틀랜드에서는 사람이 먹는다."',
          '다른 정의들도 있었다. 어휘학자(Lexicographer): "말의 기원을 추적하고 의미를 상술하느라 바쁜, 해 없는 노역꾼." 후원자(Patron): "대개는 오만하게 지지하고 아첨으로 보답받는 한심한 자."',
          '체스터필드 경은 사전 작업 초기에 후원자를 자처했다. 10파운드를 줬다. 9년 동안 아무것도 하지 않았다. 사전이 출간될 무렵 신문에 지지 글을 기고했다. 존슨은 편지를 썼다. "경이시여, 제가 험난한 바다를 항해하는 동안 당신은 강가에서 구경하셨습니다. 이제 항구에 도착하니 도움을 주시겠다는 말씀이십니까." 후원을 거절했다.',
          '1755년 4월, 《영어 사전》이 두 권으로 출간됐다. 9년 만이었다. 완벽하지 않았다. 그러나 아무도 이런 것을 혼자서 해낸 적이 없었다.',
          '몇 년 뒤, 조지 3세가 존슨에게 연 300파운드의 연금을 줬다. 존슨이 사전에서 연금(Pension)을 "국가의 하수인에게 배신의 대가로 주는 돈"으로 정의했다는 것이 문제가 됐다. 누군가 물었다. "이제 연금을 받으시는데 그 정의를 바꾸실 겁니까?" 존슨이 답했다. "저는 영국의 하수인이 아닙니다."',
          '존슨은 1784년 세상을 떠났다. 그의 사전은 1928년 옥스퍼드 영어사전이 완성되기까지 170년간 영어의 기준이었다. 영국에서는 한동안 사전을 가리켜 "존슨"이라 불렀다. 귀리는 스코틀랜드에서 여전히 사람이 먹는다.'
        ],
        closing: '40명이 55년 걸린 일을\n혼자서 9년에 마쳤다.\n귀리는 스코틀랜드에서 사람이 먹는다.\n그는 그렇게 썼다. 혼자서.',
        analysis: {
          insight: { icon: '💡', text: '언어를 정의한다는 것은 권력이다 — 존슨은 그 권력을 유머로 행사했다.', condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
          humor:   { icon: '😄', text: '연금을 "배신의 대가"로 정의한 사람이 연금을 받고도 정의를 바꾸지 않았다.', condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
          emotion: { icon: '❤️', text: '체스터필드 경에게 보낸 편지 — 9년의 고독을 한 문단으로 말한 것.', condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: { type: '실화', credit: '새뮤얼 존슨(Samuel Johnson, 1709–1784) / Walter Jackson Bate 《Samuel Johnson》(1977) 및 《A Dictionary of the English Language》(1755) 초판을 바탕으로 재서술했습니다.' },
        curatorNote: '존슨은 언어를 만든 게 아니라 언어를 정리했습니다. 귀리 한 항목에서 잉글랜드와 스코틀랜드의 계급이 다 드러납니다. 사전은 그를 담은 자화상이었습니다.',
        qna: { question: '당신이 다시 정의하고 싶은 단어가 있나요?', answer: '존슨은 정의가 중립적일 수 없다는 것을 알았습니다. 언어를 정의하는 자가 세상을 정의합니다.' },
        publishedDate: '2026년 4월 30일',
      },
      5: {
        title: '헤이마켓의 5월',
        category: '역사·통찰',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: null,
        svgKey: null,
        body: [
          '1886년 5월 1일 아침, 시카고 노동자들이 거리로 나왔다. 주요 요구 사항은 하나였다. 하루 8시간 노동이었다. 당시 미국 공장 노동자들의 평균 노동 시간은 하루 10시간에서 16시간이었다. 시카고에서만 약 8만 명이 행진했다.',
          '"여덟 시간은 일하고, 여덟 시간은 쉬고, 여덟 시간은 우리 것이다." 구호는 단순했다. 하루 24시간을 셋으로 나눈 것이었다.',
          '사흘 뒤인 5월 3일, 맥코믹 수확기 공장 앞에서 경찰이 파업 노동자들을 향해 발포했다. 두 명이 숨졌다. 무정부주의자 신문 편집인 아우구스트 스파이즈는 다음 날 헤이마켓 광장에서 집회를 열겠다고 전단을 돌렸다.',
          '5월 4일 저녁, 헤이마켓 광장에 약 2,500명이 모였다. 연사들이 차례로 말했다. 남은 사람이 300명쯤 됐을 때, 경찰 180명이 해산을 명령하며 진입했다.',
          '그때 폭탄이 날아왔다. 누가 던졌는지는 지금도 모른다. 경찰 한 명이 즉사했다. 경찰이 군중을 향해 발포했다. 혼란 속에서 경찰끼리도 서로를 쐈다. 그 밤 경찰 7명과 시민 4명이 죽었다.',
          '다음 날부터 대대적인 체포가 시작됐다. 재판이 열렸다. 폭탄을 던진 사람은 끝내 밝혀지지 않았다. 그러나 8명이 기소됐다. 혐의는 폭탄을 던지도록 선동했다는 것이었다.',
          '1887년 11월 11일, 4명이 교수형에 처해졌다. 스파이즈는 밧줄이 목에 걸리기 직전 말했다. "오늘 우리를 죽임으로써 당신들은 불꽃을 밟아 끄려 합니다. 그러나 저 앞, 저 뒤, 사방에 불꽃이 있습니다." 6년 뒤, 일리노이 주지사는 재판이 불공정했다며 남은 3명을 사면했다.',
          '헤이마켓 사건 이후 오히려 노동운동은 한동안 위축됐다. 그러나 완전히 꺼지지 않았다. 1938년 미국은 공정노동기준법을 통과시켰다. 주당 40시간, 초과근무 수당 지급 의무. 1886년 거리에서 외쳤던 요구가 52년 만에 법이 됐다.',
          '1889년 파리에서 열린 제2인터내셔널은 헤이마켓 사건을 기리기 위해 5월 1일을 국제 노동절로 선언했다. 이후 유럽, 남미, 아시아 대부분의 나라에서 5월 1일을 노동자의 날로 기념하게 됐다.',
          '미국은 5월 1일을 노동절로 삼지 않았다. 1894년 의회는 9월 첫째 월요일을 레이버 데이로 지정했다. 그래서 전 세계가 5월 1일 노동절을 쉬는 날, 그 날을 만든 나라는 그날 일한다.'
        ],
        closing: '폭탄을 던진 사람은\n끝내 밝혀지지 않았다.\n그러나 하루 8시간 노동은\n52년 뒤에 법이 됐다.',
        analysis: {
          insight: { icon: '💡', text: '역사에서 원인과 결과는 예상한 방향으로 연결되지 않는다 — 탄압이 오히려 씨앗이 됐다.', condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
          humor:   { icon: '😄', text: '전 세계 노동절을 만든 나라가 그날 일한다.', condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '"불꽃을 밟아 끄려 한다. 그러나 사방에 불꽃이 있다." — 교수형 직전의 말.', condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: { type: '실화', credit: '헤이마켓 사건(Haymarket affair, 1886) / Paul Avrich 《The Haymarket Tragedy》(1984) 및 미국 노동부 공식 기록을 바탕으로 재서술했습니다.' },
        curatorNote: '5월 1일이 노동절인 이유를 오늘 처음 알았다면, 이 날이 달라 보일 것입니다. 누군가 목숨을 걸고 외친 "하루 8시간"이 지금 우리의 노동 시간을 만들었습니다.',
        qna: { question: '당신이 지금 당연하게 누리는 것 중에, 누군가 목숨 걸고 싸워서 얻어낸 것이 얼마나 될까요?', answer: '8시간 노동, 주말, 최저임금. 이것들은 처음부터 있지 않았습니다. 당연한 것들의 역사를 아는 것이 그것들을 더 단단하게 지키는 방법입니다.' },
        publishedDate: '2026년 5월 1일',
      },
    },
  },
  {
    weekLabel: '2026년 4월 4주 (4/20–4/24)',
    weekStart: '2026-04-20',
    stories: {
      1: {
        title: '오스카 쉰들러의 반지',
        category: '역사·감동',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: null,
        svgKey: null,
        body: [
          '1945년 5월 7일 밤, 체코 브뤼니츠 공장. 오스카 쉰들러가 노동자들 앞에 섰다. 전쟁이 끝나고 있었다. 그는 나치 당원이었고, 이제 도망가야 했다.',
          '공장에는 1,200명이 넘는 유대인 노동자들이 있었다. 쉰들러가 아우슈비츠 대신 자신의 공장으로 데려온 사람들이었다. "필수 전쟁 노동자"라는 명목이었다. 전쟁이 끝나는 이 순간, 그들은 살아있었다.',
          '유대인 회계사 이츠하크 슈테른이 앞으로 나왔다. 금반지를 내밀었다. 노동자 중 한 명이 뽑아준 치아 금을 녹여 만든 것이었다. 안쪽에 히브리어 탈무드 구절이 새겨져 있었다. "한 생명을 구하는 자는 온 세상을 구하는 것이다."',
          '쉰들러는 반지를 받아 들었다. 그리고 무너졌다. 자신이 달고 있던 나치 배지를 내려다봤다. "이것으로 한 명을 더 살릴 수 있었다." 파커 만년필을 꺼냈다. "이것으로 두 명을 더 살릴 수 있었다." 눈물이 흘렀다. "더 할 수 있었다. 더 할 수 있었는데."',
          '그 이전 2년 동안 쉰들러는 뇌물을 썼다. 아우슈비츠 지휘관 아몬 게트에게 샴페인을, 담당 관료들에게 현금과 다이아몬드를 줬다. 직원 명단 한 장을 얻기 위해, 명단에 이름을 올리기 위해. 그날 밤 만년필 하나가 두 명의 목숨이었다는 것을 그는 처음으로 실감했다.',
          '전쟁 전 쉰들러는 기회주의적 사업가였다. 1939년 독일의 폴란드 점령 직후 크라쿠프로 왔다. 유대인들의 공장을 헐값에 인수했다. 처음에는 이윤이 목적이었다. 그러나 아우슈비츠로 향하는 기차가 출발하는 날이 오면, 그는 직원 명단을 들고 뛰어갔다. "이 사람들은 내 공장에 없으면 안 됩니다."',
          '전후 쉰들러의 삶은 순탄하지 않았다. 아르헨티나에서 모피 농장을 시도했다가 실패했다. 독일로 돌아와 시멘트 사업을 했다가 1961년 파산했다. 그 이후로는 그가 구한 유대인들의 도움으로 살았다. 프랑크푸르트와 텔아비브를 오갔다. 그들은 매년 그를 초대했고, 매년 그를 안았다.',
          '1974년 10월 9일, 쉰들러는 독일 힐데스하임에서 사망했다. 그는 생전에 한 가지 바람을 말해뒀다. 예루살렘 시온 산에 묻히고 싶다고. 이스라엘은 그 요청을 받아들였다. 이방인으로서 시온 산에 묻히는 것은 매우 드문 일이었다.',
          '매년 수천 명의 사람들이 그 무덤을 찾아온다. 유대인 전통에 따라 꽃 대신 작은 돌멩이를 올려놓는다. 쉰들러가 구한 유대인들과 그 후손은 오늘날 약 8,500명으로 추산된다. 1939년 크라쿠프 전체 유대인 인구보다 많은 숫자다.',
          '반지는 쉰들러가 죽을 때까지 끼고 있었다. 뒷면에 새겨진 탈무드 구절 그대로였다. "한 생명을 구하는 자는 온 세상을 구하는 것이다."'
        ],
        closing: '"더 할 수 있었다. 더 할 수 있었는데."\n그 말을 남기고 그는 도망갔다.\n그가 구한 사람들은\n평생 그를 안았다.',
        analysis: {
          insight: { icon: '💡', text: '선의의 시작이 어디였는지는 중요하지 않다 — 결국 어디까지 갔는지가 남는다.',
                     condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
          humor:   { icon: '😄', text: '"이 만년필로 두 명을 더 살릴 수 있었다" — 나치 배지를 단 채 눈물을 흘린 사람.',
                     condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
          emotion: { icon: '❤️', text: '그가 죽자 그가 구한 사람들이 시온 산에 묻어줬다.',
                     condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: {
          type: '실화',
          credit: '오스카 쉰들러(Oskar Schindler, 1908–1974) / Thomas Keneally 《Schindler\'s Ark》(1982, Hodder & Stoughton) 및 야드 바솀 기록을 바탕으로 재서술했습니다.',
        },
        curatorNote: '"더 할 수 있었다." 전쟁이 끝나는 밤에 나온 말입니다. 1,200명을 살린 사람이 만년필 하나를 들고 무너진 것. 선의가 어떻게 시작됐는지는 알 수 없지만, 그가 끝내 어디까지 갔는지는 시온 산 무덤에 새겨져 있습니다.',
        qna: {
          question: '당신이 "더 할 수 있었는데"라고 느꼈던 순간이 있나요? 그때 무엇이 당신을 멈추게 했나요?',
          answer: '쉰들러는 1,200명을 살리고도 "더 할 수 있었다"고 했습니다. 그 기준은 외부에 있지 않았습니다. 만년필 하나, 배지 하나가 목숨이었다는 것을 그 순간 알았을 뿐입니다. 우리가 이미 가진 것으로 무엇을 할 수 있는지 — 그것을 마지막 날 밤에야 세는 사람들이 많습니다.'
        },
        publishedDate: '2026년 4월 20일'
      },
      2: {
        title: '프레드 로저스의 6분',
        category: '역사·감동',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: null,
        svgKey: null,
        body: [
          '1969년 5월 1일, 워싱턴 D.C. 미국 상원 소위원회 청문회장. 리처드 닉슨 대통령이 공영방송 예산 2천만 달러를 삭감하려 했다. 그 돈이 없으면 PBS가 문을 닫을 수도 있었다.',
          '소위원회 위원장은 로드아일랜드주 상원의원 존 파스토어였다. 그는 촉박한 일정을 강조하며 증인들의 말을 계속 끊었다. "짧게 하시오." 그날 이미 여러 명이 기술적 데이터를 들이밀다가 잘렸다.',
          '다음 증인이 자리에 앉았다. 부드러운 목소리의 남자였다. 카디건을 입고 있었다. 프레드 로저스였다. 1968년부터 PBS에서 《미스터 로저스의 동네》를 진행하는 어린이 프로그램 진행자였다.',
          '파스토어가 말했다. "10분 드리지요." 로저스는 준비한 원고를 집어넣었다. 그냥 말하기 시작했다. "저는 이 나라에 어린이 방송이 왜 필요한지 말씀드리러 왔습니다. 저는 아이들이 자신의 감정을 어떻게 다뤄야 할지 배우기를 원합니다. 화가 날 때도 있고, 두려울 때도 있지요. 다른 사람을 때리지 않아도 된다는 것을, 노래를 불러도 된다는 것을, 그냥 그 감정에 대해 이야기해도 된다는 것을 가르쳐주고 싶었습니다."',
          '로저스는 자신의 프로그램에서 쓰는 노래 가사를 읽기 시작했다. "당신은 특별한 하루를 만들어요, 그냥 있는 그대로의 당신으로. 당신은 당신이 되게 해준 모든 날들을 소중히 여기게 만들어요." 파스토어는 말을 끊지 않았다. 청문회장이 조용해졌다.',
          '로저스가 말을 마쳤다. 6분이었다. 파스토어는 잠시 침묵했다. 그러다 말했다. "저는 상당히 강인한 사람이라고 자부합니다. 그런데 지금 눈물이 나오려 하는군요." 잠시 후 덧붙였다. "당신의 말이 이 예산을 살린 것 같습니다." 예산안은 통과됐다.',
          '로저스는 원래 신학을 공부한 사람이었다. 처음 TV를 봤을 때 사람들이 서로에게 파이를 던지는 것을 보고 생각했다. 이 매체가 좋은 일을 할 수 있다면 어떨까. 그래서 방송국에 취직했다. 매 에피소드마다 시청자에게 직접 말했다. "있는 그대로의 당신이 소중합니다."',
          '2001년 9월 11일 이후, 방송 채널마다 폭발 장면을 반복 방영했다. 그때 로저스의 오래된 말이 인터넷에서 다시 돌았다. "위험한 것이 보일 때는, 항상 돕는 사람들을 찾으세요. 어디서나 돕는 사람들이 있습니다." 어린 시절 본 방송을 기억하는 수백만 명의 미국인이 그 문장을 공유했다.',
          '로저스는 2003년 2월 위암으로 사망했다. 죽기 몇 주 전까지 팬레터에 답장을 썼다. 전국 각지에서 수천 개의 추모가 이어졌다. 미국 우편청은 그의 얼굴이 담긴 우표를 발행했다. 카디건을 입은 얼굴이었다.',
          '1969년 청문회 영상은 지금도 인터넷에 있다. 파스토어가 눈물을 참으며 앉아 있는 장면. 로저스가 노래 가사를 읽는 목소리. 6분짜리 영상을 보고 나면 무언가 달라진다. 그가 아이들에게 하던 것을 상원의원 앞에서도 그대로 했을 뿐인데.'
        ],
        closing: '6분이었다.\n데이터도 수치도 없었다.\n그냥 항상 하던 말을\n그 자리에서도 했을 뿐이었다.',
        analysis: {
          insight: { icon: '💡', text: '설득은 논리가 아니라 일관성에서 온다 — 평생 해온 것을 그 자리에서도 하면 된다.',
                     condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '"강인하다고 자부하는데 지금 눈물이 나오려 합니다" — 예산 청문회에서 눈물을 참은 상원의원.',
                     condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
          emotion: { icon: '❤️', text: '"있는 그대로의 당신이 소중합니다" — 그 말을 평생 아이들에게 했고, 마지막까지 믿었다.',
                     condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: {
          type: '실화',
          credit: '프레드 로저스(Fred Rogers, 1928–2003) / 미국 상원 소위원회 청문회 기록(1969.5.1), Fred Rogers Center 공식 자료를 바탕으로 재서술했습니다.',
        },
        curatorNote: '"항상 하던 말을 그 자리에서도 했을 뿐이었다." 로저스는 청문회를 위해 특별히 준비하지 않았습니다. 그냥 자신의 방식대로 말했습니다. 그것이 됐습니다. 설득은 말 잘하는 것이 아니라 살아온 것에서 나온다는 것을 이 6분이 보여줍니다.',
        qna: {
          question: '당신이 평생 해온 것을 낯선 자리에서 그대로 했을 때, 그것이 통했던 적이 있나요?',
          answer: '로저스는 상원의원을 설득하려 하지 않았습니다. 그냥 아이들에게 하던 것을 했습니다. 진심은 장소를 가리지 않는다는 것 — 그것을 6분이 보여줬습니다.'
        },
        publishedDate: '2026년 4월 21일'
      },
      3: {
        title: '소로의 하룻밤',
        category: '역사·통찰',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: null,
        svgKey: null,
        body: [
          '1846년 7월 어느 저녁, 헨리 데이비드 소로는 신발 수선을 맡기러 콩코드 마을에 나갔다. 돌아오는 길에 세금 징수원 샘 스테이플스를 만났다. 스테이플스는 소로에게 6년치 밀린 인두세를 내라고 했다.',
          '소로는 거부했다. 단순한 회피가 아니었다. 미국이 멕시코와 전쟁을 벌이고 있었고, 텍사스에서는 노예제도가 확장되고 있었다. 그 전쟁과 그 제도를 지지하는 정부에 세금을 낼 수 없다는 것이었다.',
          '스테이플스는 소로를 콩코드 교도소로 데려갔다. 소로는 끌려가면서도 고집을 꺾지 않았다. 교도소 방에는 이미 헛간을 태운 혐의로 잡혀온 사람이 있었다. 두 사람은 그 밤을 함께 보냈다. 소로는 나중에 그 사람이 꽤 흥미로운 사람이었다고 썼다.',
          '다음 날 아침, 소로는 석방됐다. 누군가 몰래 세금을 내줬기 때문이었다. 소로의 고모 마리아였다는 설이 있다. 소로는 화가 났다. 그는 더 오래 있고 싶었다. 하룻밤만에 나온 것이 오히려 불만이었다. 신발을 찾아 집으로 돌아갔다. 그날 저녁 그는 월든 호수에서 열린 파티에 참석했다.',
          '랠프 월도 에머슨이 면회를 왔었다는 이야기가 전해진다. 에머슨이 창살 너머로 물었다. "헨리, 거기서 뭘 하는 건가?" 소로가 대답했다. "랄도, 당신은 밖에서 뭘 하는 건가?" 이 대화가 실제였는지는 확인되지 않는다. 그러나 두 사람의 차이를 정확히 보여주는 말이다.',
          '소로는 그 경험을 바탕으로 글을 썼다. 1849년 발표한 「저항, 또는 시민 불복종」이었다. 핵심은 하나였다. 불의한 법이 있을 때, 그 법을 따르는 것도 불의에 가담하는 것이다.',
          '50여 년 후, 인도 남아프리카에서 철도에서 쫓겨난 변호사가 이 글을 읽었다. 모한다스 간디였다. 그는 소로의 에세이를 구자라트어로 번역해 동료들에게 배포했다. "사티아그라하(비폭력 저항)"라는 개념이 거기서 자라났다.',
          '1955년 12월, 앨라배마 주 몽고메리. 로자 파크스가 버스 앞자리를 양보하지 않아 체포됐다. 25세의 마틴 루서 킹 주니어가 버스 보이콧을 이끌었다. 킹은 대학 시절 소로의 에세이를 읽었다고 했다. "불의에 협력하기를 거부한 개인의 의지. 나는 처음 읽을 때부터 이것을 실천하겠다고 마음먹었다."',
          '소로가 감옥에서 보낸 시간은 하룻밤이었다. 불편하지도 않았다. 마을 사람들은 그가 괴짜라고 생각했다. 그러나 그 하룻밤이 글이 됐고, 글이 간디에게 갔고, 간디의 방법이 킹에게 갔다.',
          '소로는 1862년 결핵으로 사망했다. 마흔네 살이었다. 임종 자리에서 누군가 물었다. "신과 화해했는가?" 소로가 답했다. "나는 신과 싸운 기억이 없습니다."'
        ],
        closing: '"당신은 밖에서 뭘 하는 건가?"\n하룻밤이었다.\n그 하룻밤이 간디에게 갔고\n킹 목사에게 갔다.',
        analysis: {
          insight: { icon: '💡', text: '불복종은 전파된다 — 혼자 하는 작은 거부가 어디까지 이어지는지 소로는 몰랐다.',
                     condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
          humor:   { icon: '😄', text: '고모가 몰래 세금을 내줘서 석방됐는데 오히려 화가 났다 — 더 오래 있고 싶었다.',
                     condition: '기대와 전혀 다른 방식으로 일이 풀릴 때' },
          emotion: { icon: '❤️', text: '"나는 신과 싸운 기억이 없습니다" — 마지막 말이 그가 살아온 방식을 담았다.',
                     condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: {
          type: '실화',
          credit: '헨리 데이비드 소로(Henry David Thoreau, 1817–1862) / 「시민 불복종」(Civil Disobedience, 1849), Walter Harding 《The Days of Henry Thoreau》(1965)를 바탕으로 재서술했습니다.',
        },
        curatorNote: '"당신은 밖에서 뭘 하는 건가?" 그 말이 오래 남습니다. 하룻밤을 감옥에서 보낸 것이 한 세기가 넘는 저항 운동의 씨앗이 됐다는 것. 소로 자신은 그것을 몰랐을 겁니다. 그냥 세금을 내기 싫었던 것입니다.',
        qna: {
          question: '당신이 "이건 아니다"라고 느꼈지만 그냥 따른 적이 있나요? 그때 따른 이유가 무엇이었나요?',
          answer: '소로의 논리는 단순했습니다. 불의한 법에 세금을 내는 것은 그 불의에 참여하는 것이다. 거창한 저항이 아니었습니다. 그냥 세금을 안 낸 것이었습니다. 그 단순함이 가장 멀리 갔습니다.'
        },
        publishedDate: '2026년 4월 22일'
      },
      4: {
        title: '체스터튼의 전보',
        category: '역사·유머',
        primaryType: '유머',
        types: ['유머', '통찰'],
        image: null,
        svgKey: null,
        body: [
          'G.K. 체스터튼은 몸이 컸다. 키 188센티미터에 몸무게가 130킬로그램이 넘었다. 넓은 챙 모자를 쓰고 지팡이를 짚었다. 어디서나 눈에 띄었다.',
          '그는 항상 길을 잃었다.',
          '1909년 무렵, 체스터튼은 영국 전역을 강연 여행 중이었다. 강연 도시를 잊어버리는 것은 흔한 일이었다. 그는 아내 프랜시스에게 전보를 쳤다. "지금 마켓 하버러에 있소. 내가 어디 있어야 하는지 알려주시오." 프랜시스의 답장은 한 단어였다. "집이오."',
          '체스터튼은 런던으로 돌아갔다.',
          '이 이야기는 여러 버전으로 전해진다. 버밍햄이라는 설도 있고, 엑서터라는 설도 있다. 정확한 도시는 알 수 없지만, 전보를 친 것 자체는 실제였다. 체스터튼 본인이 회고록에서 인정했다. "나는 강연 일정을 기억하지 못했다. 어디서 자야 하는지, 무슨 기차를 타야 하는지 항상 프랜시스에게 물었다."',
          '이 사람이 쓴 책이 80권이 넘는다. 소설, 시, 비평, 신학, 철학. 그 중에는 브라운 신부 추리 소설 시리즈도 있다. 교구 신부가 범죄 현장에서 범인을 꿰뚫어보는 이야기다. 브라운 신부는 항상 작은 것에서 전체를 본다. 그것을 쓴 작가가 자신이 어디 있어야 하는지 몰랐다.',
          '체스터튼은 친구가 많았다. 버나드 쇼와는 평생 공개 논쟁을 벌였다. 두 사람 모두 몸이 컸다. 어느 날 쇼가 농담했다. "자네를 보면 영국에 기근이 온 줄 알겠네." 체스터튼이 받아쳤다. "자네를 보면 그 기근이 왜 왔는지 알겠네." 두 사람의 설전은 영국 지식인 사회에서 수십 년간 이어진 구경거리였다.',
          '한 신문사가 지식인들에게 물었다. "세상에서 무엇이 잘못되었는가?" 저명한 인사들이 긴 답을 보냈다. 체스터튼의 답장은 짧았다. "친애하는 편집장께. 나입니다. G.K. 체스터튼 드림."',
          '체스터튼은 1922년 가톨릭으로 개종했다. 이유를 묻자 말했다. "나는 죄의 교리가 필요했다. 인간이 실제로 어떻게 행동하는지 설명하는 유일한 교리이기 때문에." 자신이 어디 있는지도 모르는 사람이 쓴 대답이었다.',
          '체스터튼은 1936년 사망했다. 그가 어디 있어야 했는지는, 결국 그가 쓴 80권이 말해주고 있다.'
        ],
        closing: '"지금 마켓 하버러에 있소.\n어디 있어야 하는지 알려주시오."\n아내의 답장: "집이오."\n80권을 쓴 사람의 이야기다.',
        analysis: {
          insight: { icon: '💡', text: '"세상에서 무엇이 잘못되었는가?" — "나입니다." 자기 인식이 이렇게까지 명확할 수 있다.',
                     condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '브라운 신부를 쓴 사람이 자기 집을 못 찾았다 — 탐정 이야기 작가가 자신이 어디 있는지 몰랐다.',
                     condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '강연 일정을 항상 아내에게 물었다 — 평생 그것이 작동했다.',
                     condition: '아주 작은 순간이 사실 전부였던 이야기' }
        },
        source: {
          type: '실화',
          credit: 'G.K. 체스터튼(G.K. Chesterton, 1874–1936) / Dale Ahlquist 《G.K. Chesterton: The Apostle of Common Sense》(2003) 및 체스터튼 자서전을 바탕으로 재서술했습니다.',
        },
        curatorNote: '"세상에서 무엇이 잘못되었는가?" — "나입니다." 이 짧은 답장이 오래 남습니다. 자신이 어디 있는지도 모르는 사람이 세상에서 가장 솔직한 답을 했습니다. 길 잃은 것이 결점이 아니라 그 사람의 일부였던 것처럼.',
        qna: {
          question: '당신이 스스로 "내가 문제다"라고 인정했던 순간이 있나요? 그 인정이 오히려 편했던 적이 있나요?',
          answer: '체스터튼은 "나입니다"라고 했습니다. 변명도 설명도 없이. 그것이 가장 정확한 답이기도 했습니다. 자기 인식이 충분히 깊으면, 그 인정 자체가 해방이 됩니다.'
        },
        publishedDate: '2026년 4월 23일'
      },
      5: {
        title: '막스 페루츠의 빙산 항공모함',
        category: '과학·역사',
        primaryType: '통찰',
        types: ['통찰', '유머'],
        image: null,
        svgKey: null,
        body: [
          '1942년, 북대서양에서 연합군 선박들이 계속 침몰하고 있었다. 독일 U보트의 공격이었다. 문제는 중간 대서양이었다. 육상 기지 전투기의 항속 거리 밖이었다. 그 공백을 메울 항공모함이 필요했다. 그러나 강철이 부족했다.',
          '영국의 발명가 제프리 나탈리 파이크가 아이디어를 냈다. 얼음으로 항공모함을 만들자. 길이 600미터, 폭 90미터. 갑판에 항공기 150대. 전통적인 강철 항공모함의 열 배 크기였다.',
          '처음 들으면 허무맹랑하게 들렸다. 그러나 파이크에게는 이유가 있었다. 얼음은 전 세계 어디서나 만들 수 있다. 총알에 맞아도 강철처럼 뚫리지 않는다. 피격돼도 바닷물로 채워 메우면 된다. 무엇보다 제작비가 강철의 수십 분의 일이었다.',
          '윈스턴 처칠이 이 계획에 흥미를 보였다. 1942년 가을, 공식 프로젝트가 됐다. 코드명 "합바쿡(Habbakuk)". 담당 과학자 중에 마흔 살도 안 된 오스트리아 출신 연구원이 있었다. 막스 페루츠였다. 그는 당시 캐번디시 연구소에서 단백질 분자 구조를 연구하고 있었다.',
          '페루츠에게 주어진 임무는 얼음의 물성 연구였다. 런던 스미스필드 시장 지하 냉동 창고가 실험실이 됐다. 영하 10도 방에서 며칠씩 작업했다. 얼음의 강도, 균열 패턴, 녹는 속도를 측정했다.',
          '문제가 생겼다. 순수 얼음은 충격에 너무 쉽게 부서졌다. 파이크가 해결책을 가져왔다. 얼음에 목재 펄프를 14퍼센트 섞는 것이었다. 이 복합재를 파이크리트(Pykrete)라고 불렀다. 테스트 결과는 놀라웠다. 일반 얼음보다 강도가 수배 높았다. 총알을 쏘면 튕겨 나왔다. 루이 마운트배튼 경은 퀘벡 회담에서 처칠과 루스벨트 앞에서 직접 시연했다. 파이크리트 블록에 권총을 쐈고, 총알이 방향을 바꿔 장군 한 명의 다리 근처를 스쳤다.',
          '1943년 여름, 캐나다 앨버타 주 패트리샤 호수에 60피트짜리 시제품이 만들어졌다. 냉각 파이프를 심은 얼음 구조물이었다. 그 여름 동안 녹지 않았다. 프로젝트는 가능성을 입증했다.',
          '그러나 프로젝트는 취소됐다. 이유는 기술이 아니었다. 1943년에 장거리 항공기 개발이 진전됐다. B-24 해방자 폭격기가 북대서양 전역을 커버하게 됐다. 강철 항공모함 생산도 늘어났다. 더 이상 빙산 항공모함이 필요 없었다.',
          '패트리샤 호수의 시제품은 해체되지 않았다. 그냥 가라앉도록 뒀다. 33년 후인 1976년, 잠수부들이 호수 바닥에서 이것을 다시 발견했다. 지금도 그 호수 바닥에 있다. 캐나다 역사 유적지로 지정돼 있다.',
          '막스 페루츠는 전쟁 후 캐번디시 연구소로 돌아갔다. 헤모글로빈 구조를 연구했다. 22년이 걸렸다. 1962년 노벨화학상을 받았다. 같은 해, 같은 캐번디시 연구소에서 왓슨과 크릭도 노벨상을 받았다. 페루츠는 빙산 항공모함 시절을 회고하는 글을 여러 편 남겼다. 그는 그것을 실패한 프로젝트라고 부르지 않았다. "아이디어가 틀렸던 게 아니었다. 상황이 바뀐 것이었다."'
        ],
        closing: '"아이디어가 틀렸던 게 아니었다.\n상황이 바뀐 것이었다."\n얼음 항공모함은 지금도\n캐나다 호수 바닥에 있다.',
        analysis: {
          insight: { icon: '💡', text: '"아이디어가 틀린 게 아니라 상황이 바뀐 것" — 실패와 포기는 다르다.',
                     condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '시연 중 총알이 장군 다리로 날아갔다 — 얼음 항공모함 홍보가 하마터면 사고를 낼 뻔했다.',
                     condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '33년 뒤 잠수부가 호수 바닥에서 발견했다. 가라앉은 것이 사라진 것은 아니었다.',
                     condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: {
          type: '실화',
          credit: '막스 페루츠(Max Perutz, 1914–2002) / 페루츠 에세이 모음 《Is Science Necessary?》(1989, E.P. Dutton) 및 Project Habbakuk 영국 국립문서보관소 자료를 바탕으로 재서술했습니다.',
        },
        curatorNote: '"아이디어가 틀린 게 아니라 상황이 바뀐 것이었다." 얼음으로 항공모함을 만들려 했다는 것이 우습게 들릴 수 있습니다. 그런데 실제로 됐습니다. 다만 더 이상 필요하지 않게 됐을 뿐이었습니다. 실패와 포기는 다르다는 것을 페루츠는 글로 남겼습니다.',
        qna: {
          question: '당신이 포기한 것이 틀렸기 때문이 아니라 상황이 바뀌었기 때문이었던 적이 있나요?',
          answer: '페루츠는 얼음 항공모함이 "실패"했다고 하지 않았습니다. 상황이 바뀌었다고 했습니다. 아이디어가 틀린 것과 더 이상 필요하지 않은 것은 다릅니다. 우리가 포기한 것들도 다시 봐야 할 이유가 있을지 모릅니다.'
        },
        publishedDate: '2026년 4월 24일'
      },
    }
  },
  {
    weekLabel: '2026년 4월 3주 (4/13–4/17)',
    weekStart: '2026-04-13',
    stories: {
      1: {
        title: '비트겐슈타인의 시골학교',
        category: '역사·통찰',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: null,
        svgKey: null,
        body: [
          '1919년, 루트비히 비트겐슈타인은 결정을 내렸다. 30세였고, 케임브리지에서 지도교수 버트런드 러셀과 결별한 상태였다. 1차 대전 중 오스트리아군 장교로 복무했고, 이탈리아 포로수용소에서 풀려나 빈으로 돌아왔다. 〈논리철학논고〉 원고는 거의 완성되어 있었다.',
          '그는 막대한 유산을 상속받았다. 빈에서 가장 부유한 가문 중 하나였다. 그러나 그는 모두 형제자매에게 나누어줬다. 가난해진 이유는 단순했다. "철학은 끝났다." 그는 〈논고〉가 철학의 모든 문제를 해결했다고 믿었다. 더 이상 할 말이 없었다.',
          '그는 무엇을 할지 고민했다. 정원사가 되는 것을 시도했다. 수도원에 들어가 보았다. 둘 다 자신과 맞지 않았다. 결국 빈의 사범학교에 등록했다. 11개월의 교사 양성 과정을 마쳤다. 1920년, 32세에 오스트리아 알프스 자락의 작은 마을 트라텐바흐로 갔다. 그는 시골 초등학교 교사가 됐다.',
          '마을은 그를 이해하지 못했다. 케임브리지에서 막 돌아온, 빈 대부호 가문 출신의 청년이 왜 이런 외딴 곳에 있는지 농민들은 의아해했다. 비트겐슈타인은 학교 사택에 살지 않았다. 학교 인근의 작은 부엌에 침대 하나를 놓고 살았다. 학생들의 말에 따르면 그는 항상 같은 옷을 입었다. 식사도 하루 한 끼였다.',
          '그는 6년을 그렇게 살았다. 트라텐바흐를 거쳐 푸흐베르크, 오테르탈로 옮겼다. 매일 새벽 5시에 일어나 학생들을 가르쳤다. 그는 자신만의 사전을 학생들과 함께 만들었다. 시골 아이들이 쓰는 사투리를 표준 독일어로 옮기는 작업이었다. 그 사전은 그가 죽고 26년 뒤에야 출간됐다.',
          '그러나 그의 교육은 강렬했다. 그는 학생들을 사랑했다. 그래서 잘 가르치고 싶었다. 너무. 멍청해 보이는 학생을 견딜 수 없었다. 1926년 4월, 11세 학생 요제프 하이트바우어가 수업 중에 이해하지 못하자 비트겐슈타인은 그의 머리를 여러 차례 때렸다. 학생은 그 자리에서 정신을 잃었다. 비트겐슈타인은 그를 의무실에 데려갔다.',
          '마을 사람들이 모였다. 비트겐슈타인은 사임했다. 다음 날 새벽 그는 트라텐바흐를 떠났다. 빈으로 돌아갔다. 누이의 저택 정원사로 잠깐 일했다. 한동안 그는 아무것도 하지 않았다. 자신의 6년을 어떻게 받아들여야 할지 모르는 사람 같았다.',
          '1929년, 그는 케임브리지로 돌아갔다. 〈논고〉를 박사 논문으로 제출했다. 18개월의 격렬한 토론 끝에 통과됐다. 트리니티 칼리지에서 강의를 시작했다. 그는 다른 사람이었다. 〈논고〉가 모든 것을 해결했다고 더는 믿지 않았다. 자신의 책이 틀렸다고 했다. 새로운 책을 시작했다. 후에 〈철학적 탐구〉가 됐다.',
          '1937년, 그는 트라텐바흐로 돌아갔다. 11년 만이었다. 자신이 때린 학생들을 한 명씩 찾아갔다. 사과했다. 어떤 학생은 그를 받아줬다. 어떤 학생은 그를 거절했다. 한 사람은 문을 닫고 그를 다시 보지 않았다. 비트겐슈타인은 그 모든 거절을 받아들였다.',
          '그는 일기에 적었다. "내가 그들에게 행한 일을 진정으로 이해하려면 시간이 더 필요하다." 그가 시골학교 시기를 어떻게 평가했는지는 분명하지 않다. 다만 그는 그것을 자신의 인생에서 가장 진지한 시기였다고 친구에게 말한 적이 있다. 진지함이 좋은 결과를 보장하지 않았다는 것을 그는 알았다.',
          '그는 1951년, 62세로 케임브리지에서 죽었다. 의사의 아내에게 마지막으로 한 말은 이것이었다. "사람들에게 전해주십시오. 나는 멋진 인생을 살았다고." 〈철학적 탐구〉는 그가 죽고 2년 뒤에 출판됐다. 시골학교에서 만든 사투리 사전은 그가 죽고 26년 뒤에 출판됐다. 두 책 모두 그의 생전에는 세상에 나오지 않았다.'
        ],
        closing: '세계적 철학자가\n시골 초등학교 교사로 6년을 보냈다.\n11년이 지난 후\n학생들을 한 명씩 찾아가 사과했다.',
        analysis: {
          insight: { icon: '💡', text: '진지함이 좋은 결과를 보장하지 않는다 — 비트겐슈타인은 학생들을 사랑했지만 그것으로 부족했다.',
                     condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '빈 대부호의 상속자가 시골학교 사택의 부엌에서 침대 하나로 살았다. 마을 사람들이 의아해할 만했다.',
                     condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '11년 후 시골 마을로 돌아가 학생들을 한 명씩 찾아 사과했다. 어떤 학생은 그를 거절했다.',
                     condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: {
          type: '실화',
          credit: '루트비히 비트겐슈타인(Ludwig Wittgenstein, 1889–1951) / Ray Monk 《Ludwig Wittgenstein: The Duty of Genius》(1990, Free Press) 및 트라텐바흐 학교 사료를 바탕으로 재서술했습니다.',
        },
        curatorNote: '비트겐슈타인은 〈논고〉로 철학을 끝냈다고 믿고 시골학교에 갔습니다. 그러나 그곳에서 자신이 가장 잘하지 못하는 것이 사람을 가르치는 것임을 알게 됐습니다. 학생을 다치게 한 후 11년 만에 다시 돌아가 사과한 것이 더 오래 남습니다. 받아주지 않은 학생이 있었다는 것도.',
        qna: {
          question: '가장 진지하게 한 일이 가장 큰 실수가 됐던 적이 있나요? 그것을 인정하기까지 얼마나 걸렸나요?',
          answer: '비트겐슈타인은 학생들에게 가장 진지했습니다. 그래서 견디지 못했습니다. 진지함이 부드러움을 대신할 수는 없다는 것을 그는 11년 후에 알았습니다. 그것을 인정하는 것이 그가 한 가장 어려운 일이었을 것입니다.'
        },
        publishedDate: '2026년 4월 13일'
      },
      2: {
        title: '악의 평범성',
        category: '철학·역사',
        primaryType: '통찰',
        types: ['통찰'],
        image: null,
        svgKey: null,
        body: [
          '1961년 4월, 예루살렘. 법정 한가운데 유리 부스가 있었다. 그 안에 아돌프 아이히만이 앉아 있었다.',
          '아이히만은 나치 친위대 중령이었다. 수백만 명을 아우슈비츠로 보낸 수송 작전의 실무 책임자. 이스라엘 정보기관 모사드가 1960년 아르헨티나에서 그를 찾아내 예루살렘으로 데려왔다.',
          '한나 아렌트는 《뉴요커》 특파원으로 재판을 참관했다. 그녀는 괴물을 볼 것이라 생각했다. 수백만 명의 죽음을 기획한 악마 같은 인물을.',
          '그러나 유리 부스 안에 있는 것은 평범한 중년 남자였다. 두꺼운 안경. 경직된 자세. 그는 말할 때마다 상투어를 늘어놓았다. "명령에 따랐을 뿐입니다." "저는 단지 기차 시간표를 관리했습니다." 자신의 언어로 생각하지 않는 사람이었다.',
          '아렌트는 주목했다. 아이히만은 거짓말하는 것이 아니었다. 그는 실제로 자신이 옳다고 느꼈다. 히틀러의 명령이 법이었고, 그는 법을 따른 것이었다. 자신의 행동이 어떤 결과를 낳는지 단 한 번도 스스로 생각해보지 않은 사람이었다.',
          '아렌트는 이것을 "악의 평범성(Banality of Evil)"이라 불렀다. 거대한 악은 반드시 거대한 악인을 필요로 하지 않는다. 그저 생각하지 않는 사람들이 있으면 된다.',
          '이 개념은 폭발적인 반응을 불러왔다. 유대인 지식인 사회가 격렬하게 반박했다. 아이히만을 평범한 인간으로 묘사함으로써 책임을 희석시켰다는 것이었다. 오랜 친구들과 절교하는 일도 생겼다.',
          '같은 해, 미국 예일대학교에서 심리학자 스탠리 밀그램이 한 실험을 설계하고 있었다. 아이히만 재판 소식을 신문에서 읽은 그는 한 가지 질문에 사로잡혔다. 평범한 사람이 "명령"이라는 이유만으로 타인에게 해를 가할 수 있는가. 밀그램은 피험자에게 다른 방의 "학생"이 오답을 낼 때마다 전기 충격을 가하라고 지시했다. 실제 충격은 없었지만 피험자들은 이것이 진짜라고 믿었다. 65퍼센트가 최대치인 450볼트까지 버튼을 눌렀다. 실험자가 "계속하세요"라고 말하는 것만으로.',
          '그러나 아렌트는 물러서지 않았다. "악의 평범성은 아이히만의 무죄를 뜻하는 것이 아닙니다. 그는 마땅히 처형되어야 했습니다. 그러나 그가 괴물이 아니라는 사실이 더 무섭습니다." 오랜 친구인 철학자 게르숌 숄렘이 편지를 보냈다. "당신의 글에는 유대 민족에 대한 사랑이 없습니다." 아렌트가 답했다. "나는 민족을 사랑한 적이 없습니다. 나는 개인들을 사랑합니다." 두 사람은 그것으로 절교했다.',
          '아이히만은 1962년 5월 31일 교수형에 처해졌다. 마지막 말도 상투어였다. "우리는 모두 죽어야 합니다. 이것이 삶의 법칙입니다."',
          '아렌트는 이후에도 "생각"에 대한 작업을 계속했다. 1975년 12월 4일, 그녀는 타자기 앞에 앉아 있었다. 심장마비로 쓰러졌다. 타자기에는 새 원고가 끼워져 있었다. 마지막 장의 제목은 "판단"이었다. 그 원고는 미완으로 남았다.',
          '아렌트의 질문은 지금도 유효하다. 생각하지 않는 것 — 그것이 어디까지 이어질 수 있는가.'
        ],
        closing: '괴물을 기다렸지만\n평범한 남자가 왔다.\n생각하지 않았을 뿐이라고\n그는 끝까지 말했다.',
        analysis: {
          insight: { icon: '💡', text: '사유의 거부가 가장 큰 악이 된다 — 생각하지 않는 것은 중립이 아니다.',
                     condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '역사상 최대의 범죄 재판에서 피고가 한 말 — "저는 기차 시간표를 관리했습니다."',
                     condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '그것이 괴물이 아니었다는 사실이 더 무섭다.',
                     condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: {
          type: '실화',
          credit: '한나 아렌트(Hannah Arendt, 1906–1975) / 《예루살렘의 아이히만》(Eichmann in Jerusalem, 1963, Viking Press)을 바탕으로 재서술했습니다.',
        },
        curatorNote: '"그가 괴물이 아니라는 사실이 더 무섭습니다." 아렌트의 이 말이 오래 남습니다. 우리가 악을 특별한 사람의 문제로 여기는 한, 우리 자신은 안전하다고 착각할 수 있습니다. 생각하지 않는 것 — 그것이 얼마나 무서운 것인지.',
        qna: {
          question: '당신이 "그냥 하라고 해서 했을 뿐"이라고 말한 적이 있나요? 그 말을 할 때 무언가를 멈추지 않은 것은 아닌가요?',
          answer: '아이히만은 명령을 따랐고, 법을 따랐습니다. 그러나 아렌트는 그 복종이 생각의 포기였다고 봤습니다. 스스로 생각하는 것 — 그것이 가장 기본적인 도덕적 행위일 수 있습니다.'
        },
        publishedDate: '2026년 4월 14일'
      },
      3: {
        title: '제 사망 보도는 과장되었습니다',
        category: '역사·유머',
        primaryType: '유머',
        types: ['유머', '통찰'],
        image: null,
        svgKey: null,
        body: [
          '1895년, 마크 트웨인은 파산했다. 그가 투자한 자동 식자기 회사가 무너진 것이었다. 부채는 당시 돈으로 10만 달러가 넘었다.',
          '57세에 빚을 갚기 위해 세계 강연 여행을 떠났다. 오스트레일리아, 뉴질랜드, 인도, 남아프리카. 1년 넘게 세계를 돌았다.',
          '그는 파산 신청을 할 수도 있었다. 당시 미국 법에 따르면 합법적이었다. 그러나 갚겠다고 했다. 이자까지, 아무도 요구하지 않은 이자까지 전부 갚았다. 61세였다.',
          '1896년 8월, 강연 중에 소식이 왔다. 딸 수지가 뇌막염으로 죽었다. 아버지가 바다 건너 있을 때였다. 트웨인은 런던 집에 칩거했다.',
          '수지는 트웨인이 가장 아끼던 딸이었다. 그녀는 열세 살 때부터 아버지의 전기를 쓰고 있었다. 첫 문장은 이것이었다. "아버지는 매우 불규칙적인 사람이다." 24살에 죽었다. 아버지가 배를 타고 대서양을 건너오는 동안.',
          '1897년 봄, 미국 신문들에 소문이 퍼졌다. 마크 트웨인이 런던에서 병들어 죽어가고 있다는 것. 일부 신문은 이미 사망했다고 보도했다.',
          '뉴욕 저널 기자 프랭크 마셜 화이트가 확인을 위해 트웨인의 런던 집을 찾아왔다. 문을 연 트웨인은 멀쩡했다.',
          '트웨인이 말했다. "제 사망 보도는 크게 과장되었습니다.(The report of my death was an exaggeration.)"',
          '이 문장은 다음 날 신문에 실렸다. 그리고 이후 100년 넘게 인용되는 역사상 가장 유명한 한 줄 중 하나가 됐다.',
          '그는 그 무렵 실제로 힘든 시간을 보내고 있었다. 딸을 잃었고, 빚을 갚으러 다니고 있었다. 그러나 자신의 부고 앞에서 그는 한 문장으로 끝냈다.',
          '트웨인은 그것이 유머라고 생각하지 않았을지 모른다. 그냥 사실을 말한 것이었다. 나는 살아있다. 보도는 틀렸다. 그러나 그 단호한 담담함이 유머가 됐다.',
          '가장 어두운 시간에 가장 가볍게 말할 수 있는 것 — 그것이 트웨인식 생존이었다.'
        ],
        closing: '"제 사망 보도는\n크게 과장되었습니다."\n딸을 잃고, 빚을 지고\n런던에 있던 그의 한 문장.',
        analysis: {
          insight: { icon: '💡', text: '유머는 현실을 부정하는 것이 아니라, 현실을 다르게 바라보는 것이다.',
                     condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '살아있는 사람이 자신의 부고에 반박하는 방법 — 한 문장.',
                     condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
          emotion: { icon: '❤️', text: '가장 힘든 시기에 나온 가장 가벼운 문장.',
                     condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: {
          type: '실화',
          credit: '마크 트웨인(Mark Twain, 1835–1910) / Frank Marshall White 인터뷰 기록(New York Journal, 1897)을 바탕으로 재서술했습니다.',
        },
        curatorNote: '"제 사망 보도는 크게 과장되었습니다." 딸을 잃고, 빚 때문에 세계를 돌고 있던 시기에 나온 말입니다. 힘든 상황을 감추거나 과장하지 않고, 그냥 한 문장으로 정리했습니다. 유머는 가벼움이 아니라 단단함에서 나오는 것 같습니다.',
        qna: {
          question: '힘든 상황에서 가볍게 말할 수 있었던 적이 있나요? 그 가벼움이 어디서 나왔는지 아시나요?',
          answer: '트웨인이 그 문장을 쓴 시기는 그의 가장 어두운 시간이었습니다. 그러나 그는 단 한 문장으로 자신이 살아있음을 증명했습니다. 유머가 현실 도피가 아닐 때, 그것은 살아있다는 신호입니다.'
        },
        publishedDate: '2026년 4월 15일'
      },
      4: {
        title: '절망적인 행동',
        category: '과학·역사',
        primaryType: '통찰',
        types: ['통찰'],
        image: null,
        svgKey: null,
        body: [
          '1900년 가을, 막스 플랑크는 막혀 있었다. 수십 년 동안 물리학자들을 괴롭혀 온 문제였다.',
          '뜨겁게 달궈진 물체는 빛을 낸다. 쇠를 달구면 처음에는 붉게, 더 뜨거워지면 노랗게, 흰빛으로 변한다. 왜 그런가. 고전물리학으로 설명하려 하면 이상한 결과가 나왔다. 짧은 파장에서 에너지가 무한히 커져야 한다는 것이었다. 물리학자들은 이것을 "자외선 파국(ultraviolet catastrophe)"이라 불렀다.',
          '플랑크는 고전물리학의 신봉자였다. 뉴턴과 맥스웰의 세계. 에너지는 연속적으로 흐른다고 그는 믿었다.',
          '그러나 수식이 맞지 않았다. 플랑크는 "수학적 속임수"를 써보았다. 에너지가 연속으로 흐르지 않고 작은 덩어리로 끊어서 나온다고 가정하면 어떨까. 아무 물리적 근거 없는 가정이었다. 그냥 해본 것이었다.',
          '수식이 맞았다. 완벽하게.',
          '플랑크는 이것을 "절망적인 행동(an act of desperation)"이라고 불렀다. 고전물리학으로 해결하려고 안간힘을 쓰다가, 도저히 안 되니까 물리적 의미도 모른 채 써본 숫자 조작이었다.',
          '1900년 12월 14일, 그는 베를린 물리학회에서 이 결과를 발표했다. 이 날이 훗날 "양자역학의 탄생일"로 기록되리라는 것을 그는 몰랐다. 그 숫자 — 6.626×10⁻³⁴ 줄·초 — 는 오늘날 "플랑크 상수"라 불리며 현대 물리학의 모든 양자 계산에 들어간다.',
          '그는 평생 이 "속임수"를 고전물리학으로 설명하려 노력했다. 누군가 제대로 설명해줄 것이라 믿었다. 그러나 아인슈타인이 광전 효과를 설명하면서 플랑크의 양자 개념을 가져다 썼다. 보어가 원자 구조에 적용했다. 하이젠베르크, 슈뢰딩거가 이어받았다.',
          '플랑크의 "속임수"는 양자역학이 됐다. 그가 평생 믿어온 고전물리학의 세계는 그 "속임수"에 의해 무너졌다. 자신이 발견하고 싶지 않았던 것을 발견한 것이었다.',
          '개인적 비극도 있었다. 2차 세계대전 말, 아들 에르빈이 히틀러 암살 모의에 연루됐다는 혐의로 체포됐다. 플랑크는 히틀러에게 직접 탄원서를 썼다. 거절됐다. 에르빈은 1945년 1월, 전쟁이 끝나기 석 달 전에 처형됐다. 88세의 플랑크는 아들의 죽음을 살아서 맞았다.',
          '플랑크는 1947년 89세로 죽었다. 양자역학의 시대가 완전히 열리는 것을 지켜보면서. 자신이 찾고 싶었던 세계는 오지 않았다. 대신 자신이 만든 세계가 왔다.',
          '"나는 혁명가가 아니었습니다. 나는 다만 막혔습니다."'
        ],
        closing: '"나는 혁명가가 아니었습니다.\n나는 다만 막혔습니다."\n그 막힌 자리에서\n양자역학이 태어났다.',
        analysis: {
          insight: { icon: '💡', text: '발견은 찾는 것에서 오지 않을 때가 있다 — 막혀서 아무렇게나 써본 것이 진실이 됐다.',
                     condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '20세기 물리학 혁명의 출발점 — "그냥 해본 것이었습니다."',
                     condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '자신이 믿어온 세계를 자신이 무너뜨린 것 — 그것을 안고 89년을 살았다.',
                     condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: {
          type: '실화',
          credit: '막스 플랑크(Max Planck, 1858–1947) / Abraham Pais 《Subtle is the Lord: The Science and the Life of Albert Einstein》(1982, Oxford University Press) 및 플랑크 자서전을 바탕으로 재서술했습니다.',
        },
        curatorNote: '"절망적인 행동." 플랑크가 자신의 발견을 직접 이렇게 불렀습니다. 자랑이 아니라 고백이었습니다. 막혔을 때 아무렇게나 써본 것이 세상을 바꾼 것이 됐다는 것. 혁명은 혁명가가 아니라 막힌 사람에게서 나올 때가 있습니다.',
        qna: {
          question: '막혀서 그냥 해본 것이 의외로 잘 됐던 적이 있나요? 그때 당신은 그것이 뭔지 알았나요?',
          answer: '플랑크는 자신이 발견한 것의 의미를 몰랐습니다. 그저 수식이 맞았을 뿐이었습니다. 의미는 나중에 왔습니다. 때로 가장 중요한 발견은 발견하는 순간에 발견인 줄 모릅니다.'
        },
        publishedDate: '2026년 4월 16일'
      },
      5: {
        title: '친애하는 갈취범에게',
        category: '역사·감동',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: null,
        svgKey: null,
        body: [
          '1991년 1월, 팔레르모. 리베로 그라씨의 전화가 울렸다. "우리를 압니다. 이번 달 안에 돈을 내놓으시오."',
          '피초(pizzo). 시칠리아에서 마피아에 내는 보호비였다. 팔레르모 상인의 80퍼센트 이상이 매달 갔다. 내지 않으면 가게가 불타거나 사람이 다쳤다. 모두가 알았다. 모두가 참았다.',
          '그라씨는 파자마 공장을 운영하고 있었다. 직원 100명. 그는 전화를 끊었다. 그리고 신문사에 전화를 걸었다.',
          '1991년 1월 10일, 팔레르모 지역 신문 《지오르날레 디 시칠리아》에 편지가 실렸다. 제목은 "친애하는 갈취범에게(Caro estortore)." 리베로 그라씨가 마피아에게 공개적으로 쓴 편지였다.',
          '편지는 정중하고 단호했다. "우리는 당신들의 요구에 따르지 않겠습니다. 우리 사업을 합법적으로 운영할 권리가 있습니다." 그는 다른 팔레르모 상인들도 함께해달라고 호소했다.',
          '아무도 나서지 않았다. 두려움이 더 컸다.',
          '그라씨는 계속 공장을 열었다. 경찰이 보호를 제안했다. 받았다. 그러나 협박 전화는 계속됐다.',
          '1991년 8월 29일 아침, 그라씨는 팔레르모 집 앞에서 총에 맞아 숨졌다. 59세였다. 팔레르모의 상인들은 여전히 피초를 냈다. 당장 바뀐 것은 없었다.',
          '당시 팔레르모는 코사 노스트라의 전성기였다. 그라씨가 죽은 이듬해인 1992년, 마피아를 추적하던 판사 조반니 팔코네가 고속도로 폭탄 테러로 사망했다. 두 달 후 동료 판사 파올로 보르셀리노도 차량 폭탄으로 숨졌다. 이탈리아 국가가 마피아와 전면전을 벌이던 그 시기에 그라씨 혼자 편지 한 통을 썼던 것이었다.',
          '2004년, 팔레르모의 청년 여덟 명이 밤새 도시 곳곳에 스티커를 붙였다. "피초를 내는 국민 전체는 존엄 없는 국민이다." 그들은 그라씨가 죽었을 때 중학생이었다. 자라면서 팔레르모를 떠나고 싶었다고 했다. 그러나 대신 밤에 스티커를 붙였다. 모임을 만들었다. 이름은 "아디오피초(Addiopizzo — 피초여 안녕)".',
          '2010년까지 500개 이상의 팔레르모 상점이 공개적으로 피초 거부를 선언했다. 수천 명의 시민이 그 상점에서만 물건을 샀다. 오늘날 아디오피초 목록에는 1,000개 이상의 상점이 있다.',
          '그라씨가 혼자 쓴 한 통의 편지가, 10년 후 1,000개의 문을 열었다.'
        ],
        closing: '혼자였다.\n아무도 함께하지 않았다.\n그가 죽고 10년 후\n1,000개의 문이 열렸다.',
        analysis: {
          insight: { icon: '💡', text: '"아니오"는 혼자 말할 때도 유효하다 — 혼자였기 때문에 더 오래 울렸다.',
                     condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
          humor:   { icon: '😄', text: '마피아에게 쓴 편지 제목 — "친애하는 갈취범에게."',
                     condition: '진지하게 믿고 있지만 밖에서 보면 황당한 것' },
          emotion: { icon: '❤️', text: '혼자였고, 죽었고, 10년 후에 1,000개가 됐다.',
                     condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: {
          type: '실화',
          credit: '리베로 그라씨(Libero Grassi, 1932–1991) / Addiopizzo 공식 기록 및 《지오르날레 디 시칠리아》 원문(1991.1.10)을 바탕으로 재서술했습니다.',
        },
        curatorNote: '"친애하는 갈취범에게." 이 제목이 오래 남습니다. 두려운 상대에게 정중하게, 그러나 공개적으로 쓴 편지. 아무도 따르지 않았고, 그는 죽었습니다. 그러나 10년 후 1,000개의 상점이 열렸습니다. 혼자라는 것이 마지막이 아닐 때가 있습니다.',
        qna: {
          question: '아무도 함께하지 않는데 혼자 "아니오"라고 말한 적이 있나요? 그때 무엇이 당신을 그 자리에 있게 했나요?',
          answer: '그라씨는 아무도 따르지 않는 것을 알면서도 편지를 썼습니다. 그 선택이 그를 죽게 했고, 10년 후 운동을 만들었습니다. 혼자 하는 "아니오"는 그 순간에는 외롭지만, 나중에 가장 큰 소리가 될 때가 있습니다.'
        },
        publishedDate: '2026년 4월 17일'
      },
    }
  },
  {
    weekLabel: '2026년 4월 2주 (4/6–4/10)',
    weekStart: '2026-04-06',
    stories: {
      1: {
        title: '마더 테레사의 어둠',
        category: '역사·감동',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: null,
        svgKey: null,
        body: [
          '1979년 12월 10일, 오슬로. 마더 테레사는 노벨평화상 수상 연설을 했다. "이 상을 가난한 사람들의 이름으로 받겠습니다."',
          '전 세계가 그녀를 보았다. 작은 체구, 흰 사리, 굳은 표정. 믿음의 화신. 흔들리지 않는 사람. 모두가 그렇게 생각했다.',
          '2007년, 테레사 수녀가 세상을 떠난 지 10년 후, 책 한 권이 출판됐다. 제목은 《Come Be My Light(나의 빛이 되어라)》. 브라이언 콜로디에이추크 신부가 편집했다. 테레사가 생전에 고해신부들에게 쓴 편지들을 모은 것이었다.',
          '세상은 충격을 받았다. "예수님이 나를 원하지 않는 것 같습니다." "믿음이 없습니다. 사랑도 느끼지 못합니다." "하느님은 어디 계십니까? 어둠뿐입니다."',
          '이 어둠은 일시적인 것이 아니었다. 1948년 수녀원을 떠나 캘커타 빈민가로 간 이후, 죽기 직전까지 거의 50년이었다. 테레사는 이것을 "내 영혼의 어두운 밤"이라고 불렀다. 편지에서 그녀는 신부들에게 말했다. "이것을 아무에게도 말하지 마세요."',
          '그 편지들을 받은 신부들은 공개를 만류했다. 테레사 본인도 "태워버려 달라"고 했다. 그러나 결국 "하느님의 뜻에 맡긴다"고 했다. 그 결정을 내리고 얼마 지나지 않아 세상을 떠났다.',
          '편지가 공개되자 사람들은 두 가지로 나뉘었다. "믿음도 없는 사람이 성인이 됐다"는 쪽과, "믿음이 없는데도 50년을 그렇게 살았다"는 쪽이었다.',
          '그러나 그 50년 동안 테레사는 매일 캘커타 빈민가로 나갔다. 죽어가는 사람들 곁에 앉았고, 손을 잡았고, 음식을 먹였다. 1950년 설립한 사랑의 선교회는 40년 후 전 세계 120개 나라에 610개 지부를 두게 됐다.',
          '믿음을 느끼지 못하면서, 사랑을 느끼지 못하면서 했다. 느끼지 못하는데도 갔다. 그것을 믿음이라고 불러야 할지, 의지라고 불러야 할지, 아니면 다른 무언가라고 불러야 할지 모르겠다.',
          '빛을 나눠주던 사람이 혼자 어둠 속에 있었다. 그리고 그 어둠을 아무에게도 말하지 않고, 매일 가난한 사람들 곁으로 나갔다.'
        ],
        closing: '빛을 나눠주던 사람이\n혼자 어둠 속에 있었다.\n그 어둠을 아무에게도 말하지 않고\n매일 가난한 사람들 곁으로 나갔다.',
        analysis: {
          insight: { icon: '💡', text: '믿음은 느끼는 것이 아니라 행하는 것이다 — 50년간 믿음을 느끼지 못하면서도 믿음의 삶을 살았다.', condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '세상이 가장 믿음 깊은 사람으로 알고 있던 수녀가 50년간 의심 속에 있었다.', condition: '진지하게 믿고 있지만 밖에서 보면 황당한 것' },
          emotion: { icon: '❤️', text: '"이것을 아무에게도 말하지 마세요" — 그 어둠을 혼자 안고 50년을 살았다.', condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: { type: '실화', credit: '마더 테레사(Mother Teresa, 1910–1997) / Brian Kolodiejchuk 편집 《Mother Teresa: Come Be My Light》(2007, Doubleday)를 바탕으로 재서술했습니다.' },
        curatorNote: '50년간 믿음을 느끼지 못했다고 썼습니다. 그러나 그 어둠 속에서도 매일 빈민가로 나갔습니다. 어쩌면 그것이 진짜 믿음의 모습인지 모릅니다. 느껴서 가는 것이 아니라, 느끼지 못해도 가는 것.',
        qna: { question: '당신이 확신 없이, 감각 없이 그냥 계속해온 것이 있나요? 느끼지 못하는데도 멈추지 않은 것.', answer: '테레사 수녀는 하느님을 느끼지 못하면서도 50년을 하느님의 일을 했습니다. 믿음이 사라진 자리에서도 행동이 남았습니다. 그것이 어쩌면 가장 순수한 형태의 헌신일 수 있습니다.' },
        publishedDate: '2026년 4월 6일',
      },
      2: {
        title: '몽테뉴의 탑',
        category: '철학·역사',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: null,
        svgKey: null,
        body: [
          '1571년 2월 28일, 미셸 드 몽테뉴의 38번째 생일. 그는 보르도 지방법원 판사직을 내려놓았다. 그리고 자신의 영지로 돌아갔다.',
          '몽테뉴 성의 탑 꼭대기에는 작은 원형 방이 있었다. 세 개의 창문이 각각 다른 방향을 향했다. 그는 벽과 천장 들보에 그리스 격언과 라틴 격언 54개를 직접 새겨 넣었다.',
          '그리고 썼다. 주제는 자신이었다. "나는 세상에서 내가 가장 잘 아는 것을 공부한다. 그것은 나다."',
          '그가 쓴 것들은 기묘했다. 말에서 떨어진 이야기, 고양이가 자신과 놀고 있는 건지 자신이 고양이와 놀고 있는 건지 모르겠다는 생각, 잠들면서 무엇을 느끼는지, 자신이 먹는 음식에 대한 감상. 이것이 《수상록(Essais)》이었다.',
          '"에세이(essay)"라는 단어는 프랑스어 "에세(essai, 시도)"에서 왔다. 몽테뉴가 사실상 만들어낸 장르였다. 결론을 내리지 않는 글. 생각이 흘러가는 대로 쓰는 글. 완성되지 않아도 되는 글.',
          '그는 탑 방에서 20년 넘게 썼다. 판결을 내리는 사람이 아니라 생각하는 사람으로. 그 방에서 움직이지 않으면서 시간, 고통, 우정, 죽음, 경험에 대해 썼다.',
          '그 기묘한 책은 이후 거의 모든 작가에게 영향을 미쳤다. 셰익스피어가 읽었고, 에머슨은 "이 책을 읽으면 내가 쓴 것 같다"고 했다. 파스칼은 몽테뉴를 평생 비판했다 — 그것 자체가 영향이었다.',
          '몽테뉴는 말년에 신장 결석으로 극심한 고통을 겪었다. 그러나 "고통도 내가 공부하는 주제 중 하나"라고 했다. 그는 글을 쓰면서 통증을 견뎠다.',
          '1592년, 59세에 미사 중에 세상을 떠났다. 탑 방은 지금도 남아 있다. 들보의 격언들도 남아 있다. 그가 38세에 혼자 앉아 자신을 들여다보던 그 방.',
          '"나의 주제는 나다. 그러나 그것은 자기중심이 아니다. 나를 들여다보면 인간이 보인다. 인간을 들여다보면 나를 만난다."'
        ],
        closing: '38세에 판사직을 내려놓고\n탑 꼭대기 방에 들어갔다.\n그가 탐구한 것은 자신이었다.\n그리고 그것이 인간이었다.',
        analysis: {
          insight: { icon: '💡', text: '나를 들여다보는 것이 인간을 들여다보는 것이다 — 가장 좁은 주제가 가장 넓은 탐구였다.', condition: '주체와 객체가 뒤바뀌는 순간' },
          humor:   { icon: '😄', text: '"내 주제는 나다" — 철학의 주제가 자기 자신이라고 선언한 철학자.', condition: '진지하게 믿고 있지만 밖에서 보면 황당한 것' },
          emotion: { icon: '❤️', text: '탑 방에서 20년. 그 방이 지금도 남아 있다.', condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: { type: '실화', credit: '미셸 드 몽테뉴(Michel de Montaigne, 1533–1592) / Sarah Bakewell 《How to Live: Or A Life of Montaigne》(2010, Other Press)를 바탕으로 재서술했습니다.' },
        curatorNote: '"내 주제는 나다"는 말이 오래 남습니다. 자기중심적으로 들리지만 실제로는 그 반대였습니다. 자신을 솔직하게 들여다볼수록 인간 전체가 보인다는 것. 몽테뉴는 그것을 탑 방에서 혼자 증명했습니다.',
        qna: { question: '자신에 대해 솔직하게 들여다본 적이 있나요? 부끄럽거나 불편한 것도 포함해서.', answer: '몽테뉴는 자신의 게으름, 두려움, 모순을 숨기지 않고 썼습니다. 그것이 500년이 지난 후에도 읽히는 이유입니다. 인간은 자신의 부끄러운 부분까지 솔직하게 드러낼 때, 비로소 다른 인간과 연결됩니다.' },
        publishedDate: '2026년 4월 7일',
      },
      3: {
        title: '가우디의 마지막 전차',
        category: '예술·역사',
        primaryType: '유머',
        types: ['유머', '감동'],
        image: null,
        svgKey: null,
        body: [
          '1926년 6월 7일 오후, 바르셀로나 그란 비아 거리. 늙은 노인 하나가 전차에 치였다. 낡은 검은 옷에 헝클어진 수염. 신발은 다 닳아 있었다. 지갑도 없었다.',
          '택시 세 대가 그를 태우기를 거부했다. 돈 없는 노인처럼 보였기 때문이다. 결국 행인들이 들쳐업고 가까운 산크루 빈민 병원으로 데려갔다.',
          '병원에서도 처음에는 거지 환자로 취급됐다. 의사들은 대충 봤다. 나중에야 사람들이 그의 얼굴을 알아봤다. 안토니 가우디. 40년 이상 사그라다 파밀리아를 짓고 있는 건축가였다.',
          '카탈루냐 지방 정부와 성당 위원회가 달려왔다. 더 나은 병원으로 옮기겠다고 했다. 가우디가 말했다. "나는 가난한 사람들 곁에서 죽겠소." 거부했다. 3일 후, 6월 10일에 숨을 거뒀다.',
          '가우디는 말년에 모든 것을 사그라다 파밀리아에 쏟아붓고 있었다. 보수도 거의 받지 않았다. 직접 거리에서 기부금을 모았다. 낡은 옷을 입고 돌아다닌 것은 검소해서가 아니라, 그것이 그의 생활 방식이었다.',
          '그는 성당 지하에서 생활하기도 했다. 작업실을 성당 안에 차렸다. 마지막 몇 년은 거의 성당 안에서만 살았다. 그가 죽기 직전 관리인이 물었다. "선생님, 오늘은 무엇을 드셨습니까?" 가우디는 잠시 생각하다가 말했다. "빵 한 조각이었나. 아니면 어젯저녁이었나."',
          '사그라다 파밀리아는 1882년 착공됐다. 가우디가 프로젝트를 이어받은 것은 이듬해였다. 그는 43년을 이 성당에 바쳤다. 사망할 때도 완성되지 않았다. 지금도 짓고 있다.',
          '바르셀로나 시민들이 장례식에 거리로 쏟아져 나왔다. 수만 명이 행렬을 이뤘다. 그는 자신이 짓던 성당의 지하 경당에 묻혔다.',
          '가우디가 남긴 설계 도면 대부분은 1936년 스페인 내전 때 불탔다. 지금의 건축가들은 남은 조각들과 모형을 바탕으로 그의 뜻을 복원하고 있다. 완공 예정은 그의 사망 100주기인 2026년이다.',
          '세계에서 가장 기묘하고 아름다운 건물을 짓던 사람이, 거지로 오해받아 택시도 못 탄 채 빈민 병원에서 죽었다.'
        ],
        closing: '세계에서 가장 아름다운 건물을 짓던 사람이\n거지로 오해받아 택시도 못 탔다.\n그는 빈민 병원에서 죽겠다고 했다.\n가난한 사람들 곁에서.',
        analysis: {
          insight: { icon: '💡', text: '창조자와 피조물이 같은 자리에 있을 때 — 성당을 짓고 성당에서 죽은 사람.', condition: '주체와 객체가 뒤바뀌는 순간' },
          humor:   { icon: '😄', text: '세계적인 건축가가 거지로 오인돼 택시를 못 탔다.', condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
          emotion: { icon: '❤️', text: '"나는 가난한 사람들 곁에서 죽겠소" — 더 나은 병원을 거부했다.', condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: { type: '실화', credit: '안토니 가우디(Antoni Gaudí, 1852–1926) / Gijs van Hensbergen 《Gaudí: The Biography》(2001, HarperCollins)를 바탕으로 재서술했습니다.' },
        curatorNote: '"나는 가난한 사람들 곁에서 죽겠소." 더 좋은 병원을 거부하고 한 말입니다. 거지로 오해받아 죽음을 맞이하게 된 건축가가 스스로 그 병원을 선택했습니다. 가우디가 만든 것과 가우디가 선택한 것이 같은 방향을 향하고 있었습니다.',
        qna: { question: '자신이 만들어온 것과 자신이 살아온 방식이 같은 방향을 향하고 있다고 느낀 적이 있나요?', answer: '가우디는 아름다움을 위해 살았지만 자신의 마지막은 아름답지 않았습니다. 그러나 그가 선택한 마지막은 그가 평생 지어온 것과 같은 방향이었습니다. 가난한 사람들을 위해, 가난한 사람들 곁에서.' },
        publishedDate: '2026년 4월 8일',
      },
      4: {
        title: '앨런 튜링의 사과',
        category: '역사·통찰',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: null,
        svgKey: null,
        body: [
          '1940년, 영국 블레츨리 파크. 앨런 튜링은 독일군의 에니그마 암호 해독 팀을 이끌고 있었다. 매일 바뀌는 암호. 경우의 수는 천문학적이었다.',
          '튜링은 전기기계식 해독 장치 "봄베(Bombe)"를 설계했다. 봄베는 수백만 가지 가능성을 빠르게 걸러냈다. 독일 잠수함의 위치가 파악됐다. 수송선이 살아남았다. 전쟁의 흐름이 바뀌었다.',
          '역사가들은 튜링의 작업이 2차 세계대전을 최소 2년 앞당겨 끝냈다고 평가한다. 구한 목숨을 수백만으로 추산하는 연구도 있다. 그러나 그 작업은 비밀이었다. 30년 이상 기밀로 분류됐다.',
          '전쟁이 끝나고 튜링은 맨체스터 대학으로 돌아갔다. 그는 컴퓨터의 개념을 발전시켰다. "기계가 생각할 수 있는가"라는 질문을 제기했다. 그 답을 검증하는 방법을 "튜링 테스트"라 불렀다.',
          '1952년, 그는 동성애 혐의로 기소됐다. 당시 영국에서는 불법이었다. 그는 사실을 부인하지 않았다. 재판에서 감옥 대신 화학적 거세 처치를 선택해야 했다. 여성 호르몬 주사를 맞았다.',
          '2년 후인 1954년 6월 7일, 그는 41세에 사망했다. 침대 옆에 반 쪽이 베어 먹힌 사과가 있었다. 사과에서 시안화물이 검출됐다. 검시관은 자살로 결론 냈다. 그의 어머니는 죽을 때까지 사고사였다고 믿었다.',
          '1966년, 미국 컴퓨터학회는 컴퓨터 과학의 노벨상이라 불리는 "튜링상"을 제정했다. 그러나 그것이 영국 정부의 공식 사과는 아니었다.',
          '2009년, 영국 총리 고든 브라운이 처음으로 공식 사과를 발표했다. 2013년, 엘리자베스 2세가 사면을 발표했다. 튜링이 죽은 지 59년이 지나 있었다.',
          '2021년, 영국 50파운드 지폐의 인물이 바뀌었다. 앨런 튜링이었다. 지폐 뒷면에는 봄베 설계도와 함께 그가 쓴 문장이 실렸다. "우리는 짧은 거리밖에 볼 수 없다. 그러나 해야 할 일이 많이 보인다."',
          '전쟁을 이긴 나라가 전쟁을 이긴 사람을 그렇게 대했다. 그리고 반세기가 지나, 그 사람의 얼굴을 지폐에 새겼다.'
        ],
        closing: '"우리는 짧은 거리밖에 볼 수 없다.\n그러나 해야 할 일이 많이 보인다."\n전쟁을 이긴 나라가 전쟁을 이긴 사람을\n그렇게 대했다.',
        analysis: {
          insight: { icon: '💡', text: '기여의 크기와 대우의 크기가 다를 수 있다 — 수백만 명을 구한 사람이 법에 의해 무너졌다.', condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '검시관 기록에 "직업: 수학자"라고만 적혀 있는 죽음.', condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '50파운드 지폐에 새겨진 얼굴 — 사면이 59년 뒤에 왔다.', condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: { type: '실화', credit: '앨런 튜링(Alan Turing, 1912–1954) / Andrew Hodges 《Alan Turing: The Enigma》(1983, Simon & Schuster)를 바탕으로 재서술했습니다.' },
        curatorNote: '"우리는 짧은 거리밖에 볼 수 없다. 그러나 해야 할 일이 많이 보인다." 지폐에 새겨진 문장이 그의 삶 전체를 설명하는 것 같습니다. 전쟁을 이겼지만 알아주는 사람이 없었을 때도, 법정에서도, 그는 해야 할 일을 계속했습니다.',
        qna: { question: '당신이 한 일이 제대로 인정받지 못한 적이 있나요? 그 상황에서 어떻게 계속할 수 있었나요?', answer: '튜링의 작업은 30년 이상 비밀이었고, 그에게 돌아온 것은 기소였습니다. 그러나 그는 계속 일했습니다. 인정이 있어야 할 수 있는 것과 인정 없이도 해야 하는 것이 있다면, 후자가 더 중요한 것인지도 모릅니다.' },
        publishedDate: '2026년 4월 9일',
      },
      5: {
        title: '버트런드 러셀의 체포',
        category: '철학·유머',
        primaryType: '유머',
        types: ['유머', '통찰'],
        image: null,
        svgKey: null,
        body: [
          '1961년 9월 17일, 런던. 버트런드 러셀은 경찰에 체포됐다. 혐의는 집회 및 행진에 관한 법률 위반이었다. 그는 89세였다.',
          '러셀은 핵무기 반대 시위대와 함께 런던 방위부 앞에 앉아 있었다. 경찰이 해산을 요구했다. 러셀은 움직이지 않았다.',
          '법정에서 판사가 물었다. "재범하지 않겠다고 서약하면 석방하겠소." 러셀은 말했다. "아니오. 나는 다시 할 것입니다." 1주일 수감됐다. 브릭스턴 교도소였다.',
          '러셀은 논리학, 수학 기초론, 인식론, 윤리학, 정치철학에서 20세기 철학의 가장 중요한 업적들을 남긴 사람이었다. 1950년 노벨문학상을 받았다. 케임브리지에서 수십 년을 가르쳤다.',
          '그런데 89세에 교도소에 갔다. 수감 서류 직업란에는 "철학자"라고 적혔다.',
          '이것이 처음이 아니었다. 러셀은 1918년에도 수감된 적 있었다. 1차 세계대전 반전 운동 때문이었다. 당시 46세였다. 그는 수감 중에 책을 썼다. 《수리철학 입문(Introduction to Mathematical Philosophy)》이었다.',
          '영국 외무부가 그에게 편지를 보낸 적이 있다. "귀하의 활동이 외교적으로 불편합니다." 러셀이 답했다. "나는 불편한 것이 직업입니다."',
          '러셀은 1970년 97세에 죽었다. 마지막 공식 성명은 이스라엘-팔레스타인 분쟁에 관한 것이었다. 발표된 것은 그가 죽은 다음 날이었다.',
          '러셀이 90세 전후에 남긴 말이 있다. "나이가 든다는 것은 불편하다. 그러나 나이가 들지 않는 유일한 방법은 더 불편하다."',
          '20세기 가장 중요한 철학자가 89세에 교도소에 갔다. "다시 할 것입니다"라고 말하면서.'
        ],
        closing: '"다시 할 것입니다."\n89세 철학자가 교도소에서 한 말.\n그는 97세까지\n불편한 것이 직업이었다.',
        analysis: {
          insight: { icon: '💡', text: '지식인의 의무는 사후에 결산되지 않는다 — 89세에 체포된 철학자가 보여주는 것.', condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
          humor:   { icon: '😄', text: '노벨상 수상자의 교도소 수감 서류 직업란: "철학자".', condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '"나이가 든다는 것은 불편하다. 그러나 나이가 들지 않는 방법은 더 불편하다."', condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: { type: '실화', credit: '버트런드 러셀(Bertrand Russell, 1872–1970) / Ray Monk 《Bertrand Russell: The Ghost of Madness》(2000, Free Press)를 바탕으로 재서술했습니다.' },
        curatorNote: '"나는 불편한 것이 직업입니다." 이 문장이 오래 남습니다. 90세에 가까운 사람이 교도소에서 "다시 할 것"이라고 말한 것. 철학을 쓰는 것으로 끝내지 않고, 몸으로 살아낸 것이 인상적입니다.',
        qna: { question: '나이가 들수록 더 조용해지고 싶은 마음과, 더 크게 말하고 싶은 마음이 동시에 있지 않나요?', answer: '러셀은 나이가 들수록 더 직접 행동했습니다. 46세에 처음 수감됐고, 89세에 다시 수감됐습니다. 그에게 나이는 조용해지는 이유가 아니었습니다. 오래 살수록 더 많은 것이 걸려 있다고 느꼈던 것 같습니다.' },
        publishedDate: '2026년 4월 10일',
      },
    },
  },
  {
    weekLabel: '2026년 4월 1주 (3/30–4/3)',
    weekStart: '2026-03-30',
    stories: {
      1: {
        title: '넬슨 만델라의 정원',
        category: '역사·감동',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: null,
        svgKey: null,
        body: [
          '만델라는 1964년 종신형을 선고받았다. 로벤섬 교도소. 남아프리카공화국의 아파르트헤이트 체제가 그를 가둔 곳이었다.',
          '섬의 생활은 가혹했다. 수감자들은 매일 석회석 채굴장으로 끌려갔다. 눈부신 흰 석회 가루가 눈을 손상시켰다. 만델라는 나중에 그 시절 때문에 눈이 약해졌다고 회고했다. 감방은 좁았다. 담요 두 장뿐이었다.',
          '그는 교도소 마당에 텃밭을 만들어도 되겠느냐고 요청했다. 처음에는 거부당했다. 몇 년 뒤, 허락이 떨어졌다. 마당의 작은 구석이었다.',
          '만델라는 토마토, 양파, 시금치, 딸기를 심었다. 매일 물을 주고, 잡초를 뽑고, 수확했다. 수확한 채소는 동료 수감자들과 나눴다. 심지어 교도관들에게도 나눠줬다.',
          '텃밭은 점점 넓어졌다. 결국 900개가 넘는 식물을 키우게 됐다. 채소를 받은 교도관들 중 일부는 그를 대하는 방식이 조금씩 달라졌다. 철조망을 사이에 두고 건네는 그 순간, 그것은 이미 채소 이상이었다.',
          '"씨앗이 자라는 것을 보는 것이 내가 살아 있다는 증거였다. 땅에 무언가를 심고 거두는 행위가 내 자유였다."',
          '만델라는 어린 시절 트란스케이의 농촌에서 자랐다. 템부 왕가의 후손으로 태어났지만 땅과 씨앗에 익숙한 환경이었다. 수십 년을 감방에 가두어도 그 기억까지 빼앗아갈 수는 없었다.',
          '27년이 지났다. 1990년, 그는 걸어나왔다. 1994년, 남아프리카공화국 최초의 흑인 대통령이 됐다.',
          '대통령 취임 연설에서 그는 말했다. "우리를 가두는 것은 증오가 아니라 두려움입니다."',
          '텃밭에서 그는 기다리는 법을 배웠다. 씨앗도, 역사도, 시간이 필요하다는 것을. 그리고 심는 행위 자체가, 결과를 믿는다는 선언이었다.'
        ],
        closing: '"씨앗이 자라는 것을 보는 것이\n내가 살아 있다는 증거였다."\n텃밭에서 그는 기다리는 법을 배웠다.',
        analysis: {
          insight: { icon: '💡', text: '자유는 조건이 아니라 행위다 — 심고 거두는 것이 가능한 한, 그는 갇히지 않았다.', condition: '주체와 객체가 뒤바뀌는 순간' },
          humor:   { icon: '😄', text: '채소를 교도관에게도 나눠줬다 — 수감자가 교도관에게 선물을 준 텃밭.', condition: '기대와 전혀 다른 방식으로 일이 풀릴 때' },
          emotion: { icon: '❤️', text: '27년을 기다렸다 — 텃밭을 가꾼 것은 희망을 포기하지 않은 것이었다.', condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: { type: '실화', credit: '넬슨 만델라(Nelson Mandela, 1918–2013) / 《자유를 향한 긴 여정》(Long Walk to Freedom, 1994, Little, Brown and Company)을 바탕으로 재서술했습니다.' },
        curatorNote: '교도관에게도 채소를 나눠줬다는 것이 오래 남습니다. 27년을 가둔 체제의 일부인 사람에게. 그것이 그를 지키는 방법이었을 것입니다.',
        qna: { question: '가장 좁은 공간에서 가장 크게 자란 것이 있나요? 제약이 오히려 뿌리를 내리게 해준 경험.', answer: '만델라의 텃밭은 저항의 상징이 아니었습니다. 그것은 그냥 텃밭이었습니다. 그러나 씨앗을 심고 기다리는 행위가 그를 지켰습니다. 자유는 때로 거창한 선언이 아니라, 매일 물을 주는 것입니다.' },
        publishedDate: '2026년 3월 30일',
      },
      2: {
        title: '니체의 포옹',
        category: '철학·역사',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: 'images/니체의 포옹.webp',
        svgKey: null,
        body: [
          '1889년 1월 3일, 이탈리아 토리노. 프리드리히 니체는 호텔 방에서 나와 광장으로 걸어 나왔다.',
          '그 무렵 토리노는 니체에게 행복한 도시였다. 전해 여름부터 머물며 자신이 쓴 것들이 드디어 유럽에서 주목받기 시작했다. 편지에서 그는 "내 건강이 완벽하다", "나는 믿을 수 없을 만큼 좋은 상태"라고 썼다. 그러나 같은 시기 편지들에는 이미 과대한 서명이 끼어들기 시작했다.',
          '광장 한쪽에서 마부가 말을 채찍질하고 있었다. 말은 움직이지 않았다. 마부는 계속 때렸다.',
          '니체는 달려갔다. 말의 목을 두 팔로 껴안았다. 그리고 그 자리에서 쓰러졌다.',
          '하숙집 주인이 달려와 그를 방으로 데려갔다. 이틀 동안 그는 침대에서 일어나지 못했다. 간간이 의식이 돌아오면 피아노 앞에 앉아 소리를 질렀다. 오랜 친구 야코프 부르크하르트에게 보낸 편지에는 이렇게 씌어 있었다. "나는 사실 황제보다 낫습니다."',
          '그가 쓰러지기 전 마지막으로 남긴 편지들에는 과대한 서명이 적혀 있었다. "디오니소스", "십자가에 못 박힌 자." 무언가가 이미 무너지고 있었다.',
          '친구 오버벡이 토리노로 달려왔다. 그를 바젤로 데려갔다. 이후 예나의 정신병원에 입원했다. 어머니가 데려와 집에서 돌봤고, 어머니가 세상을 떠난 뒤에는 여동생 엘리자베트가 그를 바이마르로 옮겼다. 이후 11년을 거의 아무것도 쓰지 않았다. 1900년에 죽었다.',
          '니체는 힘에의 의지를 썼다. 초인을 말했다. 신의 죽음을 선언했다. 그러나 채찍 맞는 말 앞에서 그는 달려갔다.',
          '후날 학자들은 그 순간의 원인을 두고 논쟁했다. 매독, 뇌종양, 유전적 요인. 그러나 어떤 진단도 그 광장의 장면을 설명하지 못했다. 왜 그는 달려갔는가. 왜 그것이 마지막 행위였는가.',
          '철학이 말해준 것은 하나였다. 그러나 몸이 한 것은 달랐다.'
        ],
        closing: '힘에의 의지를 썼던 사람이\n채찍 맞는 말을 껴안고 쓰러졌다.\n철학이 말해준 것과\n몸이 한 것은 달랐다.',
        analysis: {
          insight: { icon: '💡', text: '사람은 자신의 철학대로 살지 않는다 — 초인을 논한 사람이 약한 것 앞에서 무너졌다.', condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '"디오니소스"라고 서명한 편지들 — 세상에서 가장 냉철한 철학자의 마지막 서명.', condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
          emotion: { icon: '❤️', text: '말의 목을 껴안고 쓰러졌다 — 그 포옹이 그의 마지막 완전한 행위였다.', condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: { type: '실화', credit: '프리드리히 니체(Friedrich Nietzsche, 1844–1900) / Julian Young 《Friedrich Nietzsche: A Philosophical Biography》(2010, Cambridge University Press)를 바탕으로 재서술했습니다.' },
        curatorNote: '힘에의 의지를 쓴 사람이 채찍 맞는 말을 껴안았다는 것. 그 장면이 오래 남습니다. 우리가 가장 강하게 주장한 것이 사실 우리가 가장 두려워한 것이었는지 모릅니다.',
        qna: { question: '당신이 이성적으로 맞다고 알면서도, 몸이 다른 방향으로 간 적이 있나요?', answer: '니체의 철학은 일관됐습니다. 그러나 그 순간 그의 몸은 달랐습니다. 우리가 쓰는 것과 우리가 사는 것 사이의 거리. 그 거리가 때로 가장 솔직한 자화상입니다.' },
        publishedDate: '2026년 3월 31일',
      },
      3: {
        title: '처칠의 낮잠',
        category: '역사·유머',
        primaryType: '유머',
        types: ['유머', '통찰'],
        image: null,
        svgKey: null,
        body: [
          '윈스턴 처칠은 매일 낮잠을 잤다.',
          '습관은 1895년 쿠바에서 시작됐다고 전해진다. 스물한 살의 육군 장교 시절, 그는 스페인 식민 정부와 반군 사이의 전쟁을 취재하러 갔다. 그곳에서 낮의 더위를 피해 쉬는 시에스타 문화를 경험했다. 이후 그것은 평생의 습관이 됐다.',
          '전시 수상이었을 때도 마찬가지였다. 점심 후 침실로 들어가, 옷을 모두 갈아입고, 제대로 잤다. 1~2시간. 참모들이 급한 보고를 위해 들어오려 해도 거절했다. 잠든 처칠의 침실 문 앞에서 대기하는 것이 전시 내각의 일상이었다.',
          '그는 낮잠을 자고 일어나 다시 한 번 완전한 하루를 시작했다. 자정을 넘겨 새벽 서너 시까지 일했다. 문서를 검토하고, 전보를 보내고, 연설을 썼다. 그가 가장 왕성하게 일한 시간은 낮잠 이후였다.',
          '"낮잠은 약점이 아닙니다. 나는 낮잠 덕분에 하루에 두 번 일합니다."',
          '그리고 덧붙였다. "히틀러는 낮잠을 자지 않습니다. 그래서 실수를 합니다."',
          '어느 날 하원에서 처칠이 눈을 감고 있었다. 한 의원이 긴 연설 중에 힐끗 보더니 말했다. "수상, 주무시는 겁니까?"',
          '처칠은 눈을 뜨지 않은 채 대답했다. "그랬으면 얼마나 좋겠소."',
          '그는 그날도 낮잠을 잔 뒤 돌아와서 연설을 했다. 그 연설은 지금도 인용된다.',
          '처칠은 91세까지 살았다. 주치의 모런 경은 그의 장수 비결을 묻는 질문에 잠시 생각하다가 답했다. "절대 서두르지 않았습니다. 그리고 절대 낮잠을 거르지 않았습니다."'
        ],
        closing: '"히틀러는 낮잠을 자지 않습니다.\n그래서 실수를 합니다."\n눈을 감은 채로 이긴 전쟁이 있다.',
        analysis: {
          insight: { icon: '💡', text: '회복이 전략이다 — 쉬는 것이 더 오래, 더 잘 싸우는 방법이었다.', condition: '반대로 해야 더 잘 되는 것' },
          humor:   { icon: '😄', text: '"그랬으면 얼마나 좋겠소" — 자고 있었느냐는 질문에 자고 싶었다는 대답.', condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
          emotion: { icon: '❤️', text: '2차 세계대전 중에도 낮잠을 포기하지 않았다 — 자신을 지키는 방법을 알았다.', condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: { type: '실화', credit: '윈스턴 처칠(Winston Churchill, 1874–1965) / Roy Jenkins 《Churchill: A Biography》(2001, Farrar Straus & Giroux)를 바탕으로 재서술했습니다.' },
        curatorNote: '"히틀러는 낮잠을 자지 않아서 실수한다"는 말이 오래 남습니다. 농담처럼 들리지만 진지한 말입니다. 충분히 쉬는 것이 더 잘 싸우는 방법이라는 것을 그는 알고 있었습니다.',
        qna: { question: '당신에게 꼭 지키는 회복의 방식이 있나요? 아무리 바빠도 포기하지 않는 습관.', answer: '처칠은 낮잠이 사치가 아니라 전략이라고 믿었습니다. 가장 바쁜 시간에 쉬는 것이 더 오래 갈 수 있게 해줍니다. 회복하지 않는 것은 더 빠른 길이 아니라 더 짧은 길입니다.' },
        publishedDate: '2026년 4월 1일',
      },
      4: {
        title: '다윈의 지렁이',
        category: '과학·통찰',
        primaryType: '통찰',
        types: ['통찰', '유머'],
        image: null,
        svgKey: null,
        body: [
          '찰스 다윈의 마지막 책 주제는 지렁이였다.',
          '《지렁이의 작용으로 형성된 식물성 부식토》. 1881년 출판됐다. 다윈이 죽기 1년 전이었다. 진화론을 발표하고 22년이 지난 뒤였다.',
          '그는 40년 동안 지렁이를 연구했다. 서재에 지렁이를 두었다. 빛에 반응하는지 알기 위해 램프를 비췄다. 소리에 반응하는지 알기 위해 바순을 불었다. 아들에게 피아노를 치게 했다. 담배 연기도 내뿜어봤다. 지렁이는 아무 반응이 없었다.',
          '그러나 땅에서는 달랐다.',
          '다윈은 영국 스톤헨지를 직접 방문했다. 수천 년 된 거대한 돌들이 얼마나 깊이 땅속으로 가라앉았는지 측정했다. 원인은 지렁이였다. 돌 아래의 흙을 지렁이들이 파내면서 돌이 서서히 묻혀 들어간 것이었다. 로마 시대의 도로와 건물 잔해가 땅속에서 보존된 것도 같은 이치였다.',
          '다윈의 결론은 이것이었다. 지렁이들이 수천 년에 걸쳐 지구 표층 전체를 뒤집어 놓았다. 고대 건물의 잔해가 땅 아래로 가라앉는 것은 지렁이가 그 아래 흙을 파냈기 때문이다. 문명의 유물이 보존된 것도 지렁이 덕분이었다.',
          '"지구상에서 지렁이만큼 세계 역사에서 중요한 역할을 한 동물은 거의 없을 것입니다."',
          '이 책은 출판 첫 해에 6,000부 이상 팔렸다. 《종의 기원》 초판이 1,200부 팔린 것과 비교하면 놀라운 숫자였다. 빅토리아 시대 독자들도 다윈의 지렁이에 매혹됐다.',
          '그는 다운하우스 정원에서 평생 실험을 계속했다. 아들 프랜시스와 함께 데이터를 기록하고, 측정하고, 계산했다. 지렁이는 그에게 마지막 논문이 아니라, 40년을 이어온 조용한 관심의 결실이었다.',
          '《종의 기원》을 쓴 사람이 마지막으로 남긴 말이었다.'
        ],
        closing: '"지렁이만큼 세계 역사에서\n중요한 역할을 한 동물은 거의 없을 것입니다."\n《종의 기원》을 쓴 사람의 마지막 말이었다.',
        analysis: {
          insight: { icon: '💡', text: '위대한 것은 보이지 않는 곳에서 쌓인다 — 지렁이가 문명을 보존했다.', condition: '작은 것이 사실 전부였던 이야기' },
          humor:   { icon: '😄', text: '지렁이에게 바순을 불었다 — 지구에서 가장 유명한 과학자가 지렁이와 보낸 40년.', condition: '진지하게 믿고 있지만 밖에서 보면 황당한 것' },
          emotion: { icon: '❤️', text: '죽기 1년 전까지 지렁이를 연구했다 — 마지막까지 가장 작은 것에 집중했다.', condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: { type: '실화', credit: '찰스 다윈(Charles Darwin, 1809–1882) / 《지렁이의 작용으로 형성된 식물성 부식토》(1881), Janet Browne 《Charles Darwin: The Power of Place》(2002, Alfred A. Knopf)를 바탕으로 재서술했습니다.' },
        curatorNote: '《종의 기원》 이후 마지막 책이 지렁이였다는 것. 진화론의 거대한 틀을 완성한 뒤, 마지막으로 집중한 것이 땅속 가장 작은 동물이었습니다. 다윈에게는 큰 것과 작은 것 사이에 서열이 없었던 것 같습니다.',
        qna: { question: '가장 보잘것없어 보이는 것이 사실은 가장 중요했다는 것을 알게 된 적이 있나요?', answer: '다윈은 지렁이가 보잘것없다고 생각하지 않았습니다. 40년을 연구한 결과, 지렁이가 문명을 보존했다는 것을 밝혔습니다. 우리가 무시하는 것들이 사실 가장 묵묵히 세상을 유지하고 있는 것들일 수 있습니다.' },
        publishedDate: '2026년 4월 2일',
      },
      5: {
        title: '베케트의 친절',
        category: '문학·감동',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: null,
        svgKey: null,
        body: [
          '사뮈엘 베케트는 파리에서 혼자 살았다. 《고도를 기다리며》를 쓴 사람이었다. 그는 글을 마치면 카페에 가거나 혼자 걸었다.',
          '전쟁 중에도 그는 파리를 떠나지 않았다. 나치 점령기에 레지스탕스에 가담했다. 지하 조직이 발각되자 남쪽으로 피신했다. 전쟁이 끝나고 돌아왔다. 그리고 남은 평생을 파리에서 보냈다.',
          '어느 날 이웃 여성이 부탁을 해왔다. 아들을 학교에 데려다줄 수 있겠느냐고. 그녀가 새벽 일찍 출근해야 했기 때문이었다.',
          '베케트는 매일 아침 소년을 학교에 데려다줬다. 수 년 동안.',
          '두 사람은 별로 말이 없었다. 베케트는 말이 많은 편이 아니었다. 소년도 아침에 말이 많지 않았다.',
          '어머니가 거듭 감사를 표했다. 베케트는 어깨를 으쓱했다. "길이 같아서요."',
          '길이 같지는 않았다.',
          '베케트는 1969년 노벨 문학상을 받았다. 수상식에는 가지 않았다. 그는 스톡홀름이 아니라 튀니지에서 낚시를 하고 있었다. 세상의 주목을 그는 조용히 피했다. 그러나 편지는 달랐다. 세계 각지의 독자들에게서 온 수백 통의 편지에 직접 손으로 답장을 썼다. 무명의 작가가 격려를 구해도, 아픈 사람이 그의 글에 대해 써 보내도. 그는 대부분에게 답했다.',
          '소년은 나중에 회고했다. "그분은 아무것도 기대하지 않았습니다. 그냥 왔습니다."',
          '《고도를 기다리며》에서 두 인물은 아무것도 오지 않는 것을 기다린다. 그러나 매일 아침, 베케트는 실제로 어딘가에 도착했다.'
        ],
        closing: '"그냥 왔습니다."\n아무것도 오지 않는 것을 기다리는 이야기를 쓴 사람이\n매일 아침 약속 장소에 나타났다.',
        analysis: {
          insight: { icon: '💡', text: '철학과 삶이 다를 때, 삶이 더 진실하다 — 절망을 쓴 작가가 매일 아침 나타났다.', condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '"길이 같아서요" — 길이 같지 않았다. 베케트의 친절은 설명을 거부했다.', condition: '기대와 전혀 다른 방식으로 일이 풀릴 때' },
          emotion: { icon: '❤️', text: '"그냥 왔습니다" — 아무것도 기대하지 않고, 매일 왔다.', condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: { type: '실화', credit: '사뮈엘 베케트(Samuel Beckett, 1906–1989) / James Knowlson 《Damned to Fame: The Life of Samuel Beckett》(1996, Simon & Schuster)를 바탕으로 재서술했습니다.' },
        curatorNote: '"그냥 왔습니다"라는 말이 오래 남습니다. 《고도를 기다리며》에서는 아무도 오지 않지만, 실제로 베케트는 매일 왔습니다. 작품과 삶이 이렇게 다를 때, 어느 쪽이 그 사람인지 생각하게 됩니다.',
        qna: { question: '당신이 아무 말 없이 꾸준히 해온 것이 있나요? 이유를 설명하지 않고 그냥 해온 것.', answer: '베케트는 이유를 설명하지 않았습니다. "길이 같아서요"라고만 했습니다. 가장 순수한 친절은 설명을 필요로 하지 않습니다. 그냥 온 것, 그냥 있어준 것. 그것이 전부일 때가 있습니다.' },
        publishedDate: '2026년 4월 3일',
      },
    }
  },
  {
    weekLabel: '2026년 3월 1주 (3/2–3/5)',
    weekStart: '2026-03-02',
    stories: {
      1: {
        title: '이그나즈 제멜바이스의 손',
        category: '의학·역사',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: 'images/story-semmelweis.webp',
        svgKey: 6,
        body: [
          '1847년 봄, 빈 종합병원. 이그나즈 제멜바이스는 숫자를 들여다보고 있었다. 같은 건물 안의 두 산부인과 병동이었다. 1병동의 산모 사망률은 10~35%였다. 2병동은 4%였다.',
          '이유를 아무도 몰랐다. 산모들은 1병동에 배정된다는 말을 들으면 울며 간청했다. "제발 2병동에 넣어주세요." 의사들은 고개를 저었다. 원인을 몰랐다.',
          '차이는 딱 하나였다. 1병동은 의대생과 의사들이 담당했다. 그들은 아침마다 시체 해부를 하고, 손을 씻지 않은 채로 곧바로 산모를 진찰했다. 2병동은 해부를 하지 않는 조산사들이 담당했다.',
          '어느 날 제멜바이스의 동료 야코프 콜레츠카가 해부 실습 중 학생의 메스에 손을 베였다. 며칠 뒤 그는 사망했다. 증상이 산모들이 죽어가던 것과 똑같았다.',
          '제멜바이스는 깨달았다. 의사의 손이 시체에서 무언가를 옮기고 있다. 그는 병동에 염화석회 용액으로 손 씻기를 의무화했다. 사망률은 즉시 1~2%로 떨어졌다.',
          '그러나 아무도 믿지 않았다.',
          '동료 의사들은 분노했다. 의사가 환자를 죽이고 있다는 뜻이냐고. 제멜바이스는 세균의 존재를 설명할 수 없었다. 파스퇴르의 세균론은 아직 세상에 없었다. 그는 효과는 보였지만, 이유를 설명할 언어가 없었다.',
          '그는 점점 절박해졌다. 동료들에게 편지를 보냈다. "당신들이 산모를 죽이고 있습니다." 학회에서 소리쳤다. 사람들은 그를 미쳤다고 했다.',
          '1865년, 그는 정신병원에 강제로 보내졌다. 그리고 14일 만에 사망했다. 아이러니하게도, 그가 평생 막으려 했던 그 감염으로.',
          '그가 죽고 나서야 파스퇴르가 세균론을 완성했다. 리스터가 무균 수술을 도입했다. 세상은 손을 씻기 시작했다. 제멜바이스의 발견이 옳았다는 것이 증명됐다.',
          '그의 이름은 이제 의학 역사에 남아 있다. "제멜바이스 반사"라는 말도 생겼다. 새로운 발견이 기존 믿음을 위협할 때, 사람들이 증거보다 저항을 먼저 택하는 현상을 가리킨다.'
        ],
        closing: '그는 옳았다. 그리고 그 이유로 죽었다.\n진실이 환영받기까지 시간이 걸린다는 것, 그것도 진실의 일부다.',
        analysis: {
          insight: { icon: '💡', text: '새로운 진실은 기존 믿음을 위협할 때 저항에 먼저 부딪힌다 — 제멜바이스 반사.',
                     condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '손만 씻으면 된다는 말에 19세기 최고의 의사들이 분노했다는 사실.',
                     condition: '너무 단순해서 오히려 받아들이기 어려운 진실' },
          emotion: { icon: '❤️', text: '그는 자신이 옳다는 것을 알면서, 증명할 언어가 없어 홀로 싸우다 세상을 떠났다.',
                     condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: {
          type: '실화',
          credit: '이그나즈 제멜바이스 (Ignaz Semmelweis, 1818–1865) / 빈 종합병원 산부인과, 1847년',
        },
        curatorNote: '제멜바이스가 정신병원에서 숨진 날로부터 딱 14일이었다는 것이 계속 마음에 걸렸습니다. 그리고 그가 죽은 원인이 그가 막으려 했던 그 감염이었다는 것도. 역사에는 가끔 이렇게 잔인하게 아이러니한 장면이 있습니다.',
        qna: {
          question: '지금 내 주변에서 "손을 씻으면 됩니다"처럼 단순하지만 받아들여지지 않는 진실이 있다면 무엇입니까?',
          answer: '제멜바이스의 비극은 그가 틀렸기 때문이 아니었습니다. 진실이 너무 단순했고, 기존 믿음을 너무 직접적으로 건드렸기 때문이었습니다. 우리 주변에도 "그것은 말이 안 된다"고 무시당하는 단순한 진실들이 있을 수 있습니다. 때로 가장 중요한 발견은 가장 먼저 조용히 묻힙니다.'
        },
        publishedDate: '2026년 3월'
      },
      2: {
        title: '도스토예프스키의 4분',
        category: '역사·문학',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: null,
        svgKey: null,
        body: [
          '1849년 12월 22일, 상트페테르부르크. 영하의 새벽, 세메노프스키 광장.',
          '27세의 표도르 도스토예프스키는 동료들과 함께 총살형 기둥 앞에 섰다. 반정부 서클에 참여했다는 혐의였다. 8개월을 감옥에서 보낸 뒤였다. 이제 끝이었다.',
          '첫 번째 조가 눈가리개를 쓰고 기둥에 묶였다. 도스토예프스키는 두 번째 조였다. 앞에 서 있는 동료들을 바라봤다. 군인들이 총을 들었다.',
          '그 순간 그는 생각했다. 저 교회 지붕 위에서 햇빛이 반짝이고 있다. 아름답다. 5분 후면 나는 없다. 저 빛이 마지막 빛이다.',
          '총성이 울리지 않았다.',
          '황제의 사면 명령이 담긴 봉투가 전령의 손에 들려 광장으로 달려왔다. 처형은 처음부터 연극이었다. 황제 니콜라이 1세는 사형을 선고하고 집행 직전 사면하는 것으로 교훈을 주려 했다. 도스토예프스키는 대신 시베리아 유형 4년을 선고받았다.',
          '그는 형에게 편지를 썼다. "나는 그 4분 동안 살았습니다. 나머지 시간은 어떻게 살아야 하는지 배웠습니다."',
          '시베리아에서 돌아온 뒤, 그는 완전히 다른 작가가 됐다. 《죄와 벌》, 《백치》, 《악령》, 《카라마조프의 형제들》. 그의 모든 소설 속 인물들은 죽음 앞에 서 있다. 자기 자신의 죄와 대면한다. 그 안에서 인간이 무엇인지를 찾는다.',
          '한 문학평론가는 말했다. "도스토예프스키의 소설은 전부 세메노프스키 광장에서 시작됐다."',
          '그는 생의 마지막 날까지 그 4분을 기억했다. 교회 지붕 위의 빛을 기억했다. 그리고 소설 속 인물들에게 그 빛을 줬다. 죽음 바로 앞에서야 보이는 빛을.'
        ],
        closing: '죽음 앞에서 4분을 살고 난 뒤, 그는 인간을 다르게 보기 시작했다.\n우리가 그토록 오래 살면서도 보지 못하는 것들을.',
        analysis: {
          insight: { icon: '💡', text: '한계가 시야를 만든다 — 끝을 본 사람만이 볼 수 있는 것이 있다.',
                     condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '처형이 연극이었다는 것을 알고도, 그 4분이 진짜 삶을 만들었다.',
                     condition: '진지하게 믿고 있지만 밖에서 보면 황당한 것' },
          emotion: { icon: '❤️', text: '"나는 그 4분 동안 살았습니다" — 가장 짧은 시간이 가장 긴 삶을 만들었다.',
                     condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: {
          type: '실화',
          credit: 'Fyodor Dostoevsky (1821–1881) / 세메노프스키 광장, 상트페테르부르크, 1849년 12월 22일',
        },
        curatorNote: '그 4분 동안 교회 지붕 위의 빛을 봤다는 것이 계속 마음에 걸렸습니다. 그리고 그 빛이 이후 그의 소설 전체에 스며있다는 것도. 죽음 바로 앞에서야 보이는 것이 있다면, 우리는 그것을 어떻게 볼 수 있을까요.',
        qna: {
          question: '오늘이 마지막 날이라면, 당신은 무엇을 가장 아쉬워할까요? 그리고 그 4분 동안 무엇을 바라보겠습니까?',
          answer: '도스토예프스키는 "나는 그 4분 동안 살았다"고 썼습니다. 끝을 본 사람만이 볼 수 있는 빛이 있다는 것. 우리는 그 빛을 기다리지 않고도 볼 수 있을까요. 매일의 끝을 잠깐 상상하는 것, 그 자체가 시야를 넓혀줄 수 있습니다.'
        },
        publishedDate: '2026년 3월'
      },
      3: {
        title: '에픽테토스와 주인의 대화',
        category: '철학·심리',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: null,
        svgKey: null,
        body: [
          '로마 시대. 한 주인에게 절름발이 노예가 있었다. 에픽테토스. 주인은 재산이 많았지만 행복하지 못했다. 노예는 가진 것이 없었지만 마음이 평온했다.',
          '어느 날 주인이 말했다. "행복해지는 법을 가르쳐주면 자유를 주겠다."',
          '에픽테토스는 대답했다. "당신이 원할 때 어떤 일이 벌어지기를 바라지 말고, 어떤 일이 벌어졌을 때 그게 바로 당신이 원하는 일이라고 생각하시오."',
          '주인은 잠시 말이 없었다. 그리고 감동하여 그를 노예 신분에서 해방시켰다.',
          '에픽테토스는 소아시아에서 노예로 태어났다. 다리를 저는 장애를 얻었고, 아무 저서도 남기지 않았다. 제자 아리아노스가 그의 강의를 정리한 《담론》과 《엥케이리디온》이 전해진다.',
          '그의 핵심 가르침은 하나였다. 통제할 수 있는 것과 통제할 수 없는 것을 구별하라. 판단, 욕망, 행동은 내 것이고, 신체, 재산, 평판은 내 것이 아니다. 진정한 자유는 외부 조건이 아니라 내면의 태도에서 온다.',
          '로마 병사들은 출정할 때 그의 책을 읽고 용기를 얻었다고 전해진다. 베트남전 포로 스톡데일 제독은 7년 반의 감금 생활에서 생존한 것이 에픽테토스 철학 덕분이라고 증언했다.',
          '현대 심리학은 그를 뒷받침한다. 행복은 유전 50%, 환경 10%, 태도 40%로 구성된다. 유전과 환경은 의지와 무관하다. 오직 태도만이 개인이 바꿀 수 있는 것이다.'
        ],
        closing: '노예가 주인에게 행복을 가르쳤다.\n그리고 그 말에 주인이 자유를 줬다.\n통제할 수 없는 것에 집착하지 않을 때, 통제할 수 있는 것이 보인다.',
        analysis: {
          insight: { icon: '💡', text: '통제할 수 있는 것(태도)과 통제할 수 없는 것(외부 사건)을 구분하는 것이 스토아 철학의 핵심.',
                     condition: '주체와 객체가 뒤바뀌는 순간' },
          humor:   { icon: '😄', text: '재산 많은 주인이 가진 것 없는 노예에게 행복을 배우는 역설.',
                     condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
          emotion: { icon: '❤️', text: '한 마디에 감동한 주인이 노예에게 자유를 준 — 말의 무게가 신분을 넘어선 순간.',
                     condition: '취약함을 숨기지 않고 마주하는 순간' }
        },
        source: {
          type: '재서술',
          credit: '에픽테토스(Epictetus, 55–135년경) / 아리아노스 정리 《담론》《엥케이리디온》 및 Diogenes Laërtius 《철학자들의 생애》에 전해지는 일화를 바탕으로 재서술했습니다.',
          url: 'https://en.wikipedia.org/wiki/Epictetus'
        },
        curatorNote: '"벌어졌을 때 그게 바로 당신이 원하는 일이라고 생각하시오." 이 한 문장이 며칠째 머릿속에서 맴돌았습니다. 원하는 대로 되지 않을 때, 그대로 받아들이는 것이 포기인지 지혜인지 — 에픽테토스는 후자라고 말합니다.',
        qna: {
          question: '지금 당신이 통제할 수 없는 것에 에너지를 쓰고 있지는 않나요? 통제할 수 있는 것은 무엇인가요?',
          answer: '에픽테토스는 외부 사건이 아니라 그것에 대한 우리의 판단이 고통을 만든다고 했습니다. 통제할 수 없는 것에 집착을 줄일 때, 통제할 수 있는 것 — 우리의 반응과 태도 — 에 집중할 여유가 생깁니다.'
        },
        publishedDate: '2026년 3월'
      },
      4: {
        title: '창백한 푸른 점',
        category: '과학·문화',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: 'images/story-pale-blue-dot.webp',
        svgKey: 4,
        body: [
          '보이저 1호가 지구를 떠났다. 해는 1977년 가을이었다. 탐사 목적은 목성과 토성이었다. 임무가 끝나면 태양계 밖으로 나가게 되어 있었다. 더 이상 돌아볼 이유가 없었다.',
          '십이 년이 지났다. 칼 세이건이 나사에 요청했다. 보이저가 태양계 끝에 다다르기 전에, 카메라를 뒤로 돌려달라고. 사진을 한 장 찍어달라고.',
          '나사 내부에서 반대가 있었다. 그 거리에서 찍은 사진은 아무것도 담기지 않을 것이다. 태양 빛이 카메라를 손상시킬 수도 있다. 과학적 가치가 없다. 세이건은 포기하지 않았다. 설득에 십 년이 걸렸다.',
          '발렌타인데이인 이듬해 2월 14일, 보이저 1호는 카메라를 돌렸다. 지구로부터 60억 킬로미터 떨어진 곳에서. 그리고 60장의 사진을 찍었다.',
          '사진을 받아보니 거의 아무것도 없었다. 광활한 검은 우주. 그 안에 태양 빛이 산란하며 만든 줄기들. 그리고 그 줄기 중 하나 위에 먼지처럼 걸린 점 하나. 그게 지구였다. 사진 속 지구의 크기는 화소 하나의 12분의 1이었다.',
          '세이건은 그 사진을 보고 이런 글을 썼다.',
          '"저것을 보라. 저게 여기다. 저게 집이다. 저게 우리다. 우리가 사랑했던 모든 사람, 우리가 알고 있던 모든 사람, 우리가 들어봤던 모든 사람, 존재했던 모든 인간이 저 위에서 살았다."',
          '"우리의 기쁨과 고통, 수천 개의 자신만만한 종교들과 이데올로기들, 모든 사냥꾼과 약탈자, 모든 영웅과 겁쟁이, 모든 문명의 창조자와 파괴자, 모든 왕과 농부, 사랑에 빠진 모든 젊은 커플들, 모든 아버지와 어머니, 모든 희망찬 아이, 발명가와 탐험가, 모든 도덕의 스승, 모든 부패한 정치인, 인류 역사 속의 모든 성인과 죄인이 저 햇빛 속에 부유하는 먼지 한 점 위에 살았다."',
          '세이건은 그 사진을 창백한 푸른 점이라고 불렀다. Pale Blue Dot.',
          '우주의 거대한 어둠 속에서 지구는 점이었다. 그 점 위에 우리가 다 있었다. 우리가 서로를 미워하고 사랑하고 전쟁을 벌이고 음악을 만들고 밥을 지어 먹던 모든 시간이 들어있었다.',
          '세이건이 그 사진을 요청한 이유를 이렇게 말했다. "우리의 거만함, 우리의 자기 중요성에 대한 망상, 우주 속에서 우리가 특별한 위치를 차지한다는 착각에 이 사진만큼 날카로운 도전을 하는 것은 없다."',
          '그것은 과학 사진이 아니었다. 철학 사진이었다.',
          '보이저 1호는 아직 달리고 있다. 매초 17킬로미터. 1990년에 찍은 그 카메라는 지금도 그 안에 있다. 더 이상 켜지지 않는 카메라로.'
        ],
        closing: '세이건은 1996년에 세상을 떠났다.\n그가 마지막으로 남긴 말들 중 이런 것이 있다.\n\n"우리 행성은 광대한 우주의 어둠 속에 있는 외로운 점이다. 이 어둠 속에서, 우리가 서로에게 더 친절해야 한다는 것보다 더 설득력 있는 것은 없다."',
        analysis: {
          insight: { icon: '💡', text: '거리가 시야를 바꾼다 — 60억 킬로미터 밖에서 보면 우리의 갈등이 먼지 위의 일이다.',
                     condition: '관점이나 입장을 바꾸면 의외의 결과가 생길 때' },
          humor:   { icon: '😄', text: '발렌타인데이에 우주에서 찍은 사진이 인류 역사상 가장 겸손하게 만드는 사진이 됐다.',
                     condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '"우리가 서로에게 더 친절해야 한다" — 우주에서 돌아온 가장 단순하고 가장 어려운 결론.',
                     condition: '아주 작은 순간이 사실 전부였던 이야기' }
        },
        source: {
          type: '재서술',
          credit: 'Carl Sagan의 《Pale Blue Dot》(1994, Random House)과 Voyager 1 임무(NASA, 1977-현재) 역사적 사실을 바탕으로 재서술했습니다.',
          url: 'https://www.planetary.org/worlds/pale-blue-dot'
        },
        curatorNote: '세이건이 말한 "서로에게 더 친절해야 한다"는 결론이 과학 책에서 나왔다는 것이 좋았습니다. 가장 먼 곳에서 보고 와서 한 말이, 가장 가까운 곳의 이야기였습니다.',
        qna: {
          question: '60억 킬로미터 밖에서 지구를 바라본다면, 오늘 당신이 화났던 일은 얼마나 작아 보일까요?',
          answer: '창백한 푸른 점 사진이 말하는 것은 겸손입니다. 우리의 갈등과 자부심이 한 픽셀의 12분의 1에 불과하다는 것. 그 거리감이 오히려 가까운 사람에게 더 친절해질 이유를 줍니다. 세이건이 우주에서 돌아와 한 말이 "서로에게 더 친절해야 한다"였다는 것이 좋습니다.'
        },
        publishedDate: '2026년 3월'
      },
      5: {
        title: '파인만의 O링',
        category: '과학·정치',
        primaryType: '유머',
        types: ['유머', '통찰'],
        image: 'images/story-feynman.webp',
        svgKey: 5,
        body: [
          '1986년 1월 28일, 챌린저 우주왕복선이 발사 73초 만에 공중에서 분해됐다. 승무원 7명이 전원 사망했다. 미국 역사상 가장 충격적인 우주 사고였다.',
          '레이건 대통령은 조사위원회를 꾸렸다. 전직 국무장관, 최초의 달 착륙자 닐 암스트롱, 최초의 여성 우주비행사 샐리 라이드. 그리고 노벨물리학상을 받은 리처드 파인만.',
          '위원회는 수개월 동안 청문회를 열었다. 나사가 제출한 보고서는 수백 페이지였다. 엔지니어들이 줄지어 증언했다. 기술 용어가 가득한 슬라이드가 이어졌다.',
          '파인만은 따로 움직였다. 나사 청사를 돌아다니며 현장 엔지니어들을 직접 만났다. 회의실이 아니라 복도에서, 점심 식사를 하며. 그리고 한 가지를 알아냈다. 발사 당일 기온이 영하에 가까웠다. 고체로켓부스터의 이음새를 막는 고무 링 — O링 — 이 추위에 굳으면 탄성을 잃는다.',
          '청문회 당일, 파인만은 준비물을 하나 가져왔다. 얼음물 한 컵.',
          '증언 순서가 됐다. 그는 나사로부터 받은 O링 샘플 조각을 꺼냈다. C자 집게로 집어 얼음물에 담갔다. 몇 초 기다렸다. 꺼냈다. 집게를 놓자 — O링이 원래 모양으로 돌아오지 않았다.',
          '그는 마이크를 향해 말했다. "이것이 우리 문제와 관련이 있다고 생각합니다."',
          '회의장이 조용해졌다.',
          '수백 페이지 보고서와 수개월 청문회가 있었다. 그리고 한 물리학자가 얼음물 한 컵으로 30초 만에 원인을 보여줬다.',
          '파인만은 최종 보고서에 서명하지 않았다. 대신 독립 의견을 부록으로 달았다. 그 안에 이런 문장이 있었다. "기술이 성공하려면 현실이 홍보보다 앞서야 한다. 자연은 속일 수 없기 때문이다."',
          '그는 그 청문회가 있던 해 이미 신장암 진단을 받은 상태였다. 2년 후 세상을 떠났다. 마지막까지 그는 복잡한 것을 단순하게 보는 사람이었다.'
        ],
        closing: '진실은 대개 단순하다.\n복잡한 것은 진실이 아니라, 진실을 가리는 것들이다.',
        analysis: {
          insight: { icon: '💡', text: '복잡한 언어 뒤에 진실이 숨는다 — 단순하게 보여줄 수 있어야 진짜 이해다.',
                     condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '수백 페이지 보고서와 수개월 청문회를 얼음물 한 컵이 이겼다.',
                     condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '"자연은 속일 수 없다" — 암 투병 중에도 진실 앞에서 타협하지 않은 마지막 문장.',
                     condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: {
          type: '실화',
          credit: 'Richard Feynman (1918–1988) / 대통령 우주왕복선사고조사위원회 청문회, 1986년 2월',
        },
        curatorNote: '파인만이 청문회에 얼음물 한 컵을 들고 나타났다는 장면이 자꾸 생각납니다. 준비물이 그것뿐이었다는 것. 수백 페이지 보고서를 읽은 사람들 앞에서, 그는 30초짜리 실험을 했습니다.',
        qna: {
          question: '지금 당신이 복잡하게 느끼는 문제가 있다면, 그것을 얼음물 한 컵으로 보여줄 수 있을 만큼 단순하게 말할 수 있습니까?',
          answer: '파인만이 보여준 건 물리 실험이 아니라 사고방식이었습니다. 진짜 이해는 단순하게 말할 수 있어야 한다는 것. 복잡한 언어 뒤에 숨어있는 것이 무지인지 진실인지, 그 질문을 계속 가져가는 것이 파인만식 사고입니다.'
        },
        publishedDate: '2026년 3월'
      },
    }
  },
  {
    weekLabel: '2026년 3월 2주 (3/9–3/13)',
    weekStart: '2026-03-09',
    stories: {
      1: {
        title: '헬렌 켈러의 "water"',
        category: '사랑·감동',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: 'images/story-mon.webp',
        svgKey: null,
        body: [
          '1887년 4월 5일 아침. 앨라배마 주 터스컴비아의 작은 우물가. 앤 설리번이 손잡이를 돌렸다. 물이 흘러내렸다.',
          '헬렌 켈러는 일곱 살이었다. 열아홉 달에 열병을 앓은 뒤, 보이지도 들리지도 않았다. 세계는 어둡고 소리 없는 혼돈이었다. 언어가 없었다. 이름이 없었다. 감정이 있었지만 담을 그릇이 없었다.',
          '스물한 살의 교사 앤 설리번이 몇 주째 헬렌의 손에 물건을 쥐여주고, 다른 손바닥에 철자를 손가락으로 써줬다. 헬렌은 따라 했지만 이해하지 못했다. 그것이 기호라는 것, 모든 것에 이름이 있다는 것을 몰랐다.',
          '그날, 설리번은 헬렌을 우물가로 데려갔다. 한 손에 물을 흘려보내며, 다른 손바닥에 천천히 썼다. w-a-t-e-r.',
          '그 순간을 헬렌은 나중에 이렇게 썼다. "어떤 것이 내 안에서 깨어났다. 언어의 신비가 드러났다. 나는 w-a-t-e-r가 내 손 위로 흐르는 차갑고 놀라운 바로 그것임을 알았다."',
          '그날 하루 헬렌은 서른 개의 단어를 배웠다. 우물에서 집까지 걸어오면서 닿는 것마다 이름을 물었다. 땅, 나무, 어머니, 아버지. 처음으로 모든 것이 이름을 가진 세계로 들어온 아이처럼.',
          '앤 설리번은 그로부터 27년간 헬렌의 곁에 있었다. 래드클리프 대학 강의를 헬렌의 손에 통역하며, 헬렌이 졸업할 때까지. 두 사람은 평생 손으로 말하고, 손으로 들었다.',
          '헬렌은 작가가 됐다. 열두 권의 책을 썼다. 전 세계를 돌며 강연했다. 여성 참정권, 노동권, 시각장애인 복지를 위해 싸웠다. 마크 트웨인은 말했다. "이 세기의 진짜 위대한 사람은 둘이다. 나폴레옹과 헬렌 켈러."',
          '헬렌이 그 모든 이야기 앞에 언제나 먼저 꺼낸 것은, 1887년 4월 아침 우물가 이야기였다.'
        ],
        closing: '언어가 없을 때 세계는 혼돈이었다.\n언어가 생기자 세계가 열렸다.\n이름을 배운다는 것은 단어를 아는 것이 아니다.\n연결되는 것이다.',
        analysis: {
          insight: { icon: '💡', text: '언어는 정보가 아니라 연결이다 — 이름이 생기는 순간 세상이 의미를 갖는다.',
                     condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
          humor:   { icon: '😄', text: '수십 번 반복해도 이해 못 하던 것이 어느 날 갑자기 켜진다 — 학습의 임계점.',
                     condition: '기대와 전혀 다른 방식으로 일이 풀릴 때' },
          emotion: { icon: '❤️', text: '어둠과 침묵 속 일곱 살이 처음으로 세상과 연결된 그 아침.',
                     condition: '아주 작은 순간이 사실 전부였던 이야기' }
        },
        source: {
          type: '실화',
          credit: '헬렌 켈러(Helen Keller, 1880–1968) / 《나의 이야기》(The Story of My Life, 1903, Doubleday) — 실제 경험을 바탕으로 재서술했습니다.',
        },
        curatorNote: '설리번이 수십 번 반복했는데도 헬렌은 이해하지 못하다가, 그날 갑자기 "켜졌습니다". 무엇이 달랐을까 자꾸 생각하게 됩니다. 준비가 됐을 때 연결이 일어나는 것인지, 아니면 연결이 일어나야 준비가 되는 것인지.',
        qna: {
          question: '당신이 처음으로 어떤 것의 "이름"을 알게 된 순간이 있나요? 몰랐다가 알게 되면서 세상이 달리 보이기 시작한 그 순간.',
          answer: '헬렌에게 "water"는 단순한 단어가 아니었습니다. 존재와 이름이 연결되는 순간이었습니다. 우리도 매일 새로운 언어를 배웁니다 — 슬픔에 이름을 붙이면 덜 무섭고, 기쁨에 이름을 붙이면 더 오래 남습니다. 이름 짓기는 세상을 여는 일입니다.'
        },
        publishedDate: '2026년 3월',
      },
      2: {
        title: '세르반테스의 감옥',
        category: '문학·역사',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: 'images/story-tue.webp',
        svgKey: null,
        body: [
          '미겔 데 세르반테스는 스물네 살에 처음 감옥에 갔다. 싸움에 연루된 혐의였다. 그러나 진짜 감옥은 그보다 훨씬 더 길었다.',
          '1571년, 세르반테스는 레판토 해전에서 오스만 제국과 싸웠다. 왼팔에 세 발의 화승총을 맞았다. 왼팔을 영원히 잃었다. 그래도 그는 그 전투가 자신이 살아서 겪은 가장 위대한 일이었다고 썼다.',
          '귀환하던 배에서 알제리 해적에게 붙잡혔다. 5년간 알제리에서 노예로 살았다. 네 번 탈출을 시도했다. 네 번 다 실패했다. 가족이 모든 재산을 팔아 몸값을 치르고서야 돌아올 수 있었다.',
          '스페인으로 돌아온 세르반테스는 세금 징수원이 됐다. 생계를 위해서였다. 그러나 회계 처리에서 문제가 생겼다. 1597년, 다시 감옥에 갔다.',
          '세비야 감옥에서 세르반테스는 이야기를 하나 구상했다. 기사 소설을 너무 많이 읽어 현실과 환상을 구분 못 하는 한 남자의 이야기. 돈키호테.',
          '1605년 《돈키호테》 1부가 출판됐다. 즉시 베스트셀러가 됐다. 유럽 전역에서 해적판이 나돌았다. 세르반테스에게 저작권 수입은 없었다.',
          '그는 계속 가난했다. 1615년 2부를 쓰면서 이미 몸이 약해져 있었다. 완성하고 한 해 뒤인 1616년 세상을 떠났다. 같은 해, 같은 날에 셰익스피어도 세상을 떠났다.',
          '후세 사람들은 《돈키호테》를 인류 최초의 근대 소설이라고 부른다. 내면을 가진 인물, 현실과 이상의 갈등, 독자를 향해 직접 말을 거는 서술자 — 근대 소설의 모든 장치가 이 책에서 시작됐다.',
          '세르반테스는 왜 풍차를 거인으로 봤던 돈키호테를 비웃지 않았다. 어쩌면 포로로 보낸 5년, 감옥에서 보낸 세월을 통해 알고 있었을 것이다. 세상에서 가장 굳건한 것은 이미 잃을 것이 없는 사람의 용기라는 것을.'
        ],
        closing: '그는 왼팔을 잃고, 5년을 포로로 살고, 감옥을 두 번 거쳤다.\n그리고 감옥에서 세계 최초의 근대 소설을 구상했다.\n실패의 시간이 걸작의 재료였다.',
        analysis: {
          insight: { icon: '💡', text: '막힌 시간이 창작의 조건이 된다 — 세르반테스가 돈키호테를 쓸 수 있었던 것은 감옥이 있었기 때문이다.',
                     condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '기사 소설을 너무 읽어 현실을 착각하는 남자를 쓴 사람이, 평생 현실에 치인 사람이었다는 역설.',
                     condition: '진지하게 믿고 있지만 밖에서 보면 황당한 것' },
          emotion: { icon: '❤️', text: '가족이 모든 재산을 팔아 몸값을 치렀다. 돌아온 뒤에도 계속 가난했다. 그래도 썼다.',
                     condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: {
          type: '실화',
          credit: '미겔 데 세르반테스(Miguel de Cervantes, 1547–1616) / 《돈키호테》(Don Quixote, 1605·1615) — 역사적 사실을 바탕으로 재서술했습니다.',
        },
        curatorNote: '"이미 잃을 것이 없는 사람의 용기." 세르반테스가 돈키호테를 비웃지 않았다는 것이 내내 마음에 남습니다. 포로 5년, 감옥 두 번을 겪은 사람이 풍차에 돌진하는 사람을 어떻게 우습게 볼 수 있었을까요.',
        qna: {
          question: '지금 당신에게 막혀 있는 시간이 있다면, 그 시간이 나중에 무엇의 재료가 될 수 있을까요?',
          answer: '세르반테스의 감옥은 그를 멈추게 했지만, 동시에 이야기를 만들게 했습니다. 막힌 시간이 반드시 낭비는 아닙니다. 다만 그 시간 안에서 무엇을 구상하느냐는 각자의 몫입니다.'
        },
        publishedDate: '2026년 3월',
      },
      3: {
        title: '융과 프로이트의 결별',
        category: '철학·심리',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: null,
        svgKey: null,
        body: [
          '1907년 2월, 카를 구스타프 융이 빈으로 프로이트를 찾아갔다. 두 사람은 처음 만나자마자 이야기를 시작했다. 13시간 동안 멈추지 않았다.',
          '프로이트는 융을 즉시 알아봤다. 유대인이 아닌 스위스 출신, 젊고 명석하고 이미 취리히에서 저명한 정신과 의사. 프로이트는 그를 후계자로 정했다. 정신분석학을 세상에 퍼뜨릴 사람.',
          '융도 프로이트를 존경했다. 아버지처럼. 꿈과 무의식, 인간의 내면에 관한 생각이 일치했다. 6년 동안 300통이 넘는 편지를 주고받았다.',
          '그러나 균열은 처음부터 있었다. 프로이트에게 모든 것의 뿌리는 성욕이었다. 리비도(libido)는 성적 에너지였다. 융은 동의하지 않았다. 인간의 욕동은 성 이상의 것이라고 생각했다.',
          '1909년, 두 사람은 함께 미국으로 배를 타고 건너갔다. 여행 중 매일 아침 꿈을 해석했다. 어느 날 프로이트가 꿈 이야기를 하다가 멈췄다. 융이 더 물어보자 프로이트는 고개를 저었다. "그 부분은 말하기 어렵다. 내 권위가 손상될 수 있다." 융은 충격을 받았다. 진실보다 권위를 택하는 사람.',
          '1912년, 융은 《리비도의 변환》을 출판했다. 리비도를 성욕이 아닌 일반적 생명 에너지로 재정의했다. 프로이트는 배신으로 받아들였다.',
          '편지가 왔다. 프로이트가 썼다. "우리의 개인적 관계가 필요 없어졌으니, 끝내기를 제안합니다." 융이 답했다. "당신의 전술을 인정하겠습니다. 분석가는 환자의 감정 전이를 이겨낼 준비가 돼 있어야 합니다. 잘 지내십시오."',
          '두 사람은 다시 만나지 않았다. 프로이트는 끝까지 융을 배신자라고 불렀다. 융은 끝까지 프로이트를 아버지라고 불렀다.',
          '그러나 결별 이후 두 사람은 각자 더 멀리 갔다. 프로이트는 자아와 무의식의 구조를 완성했다. 융은 집단무의식, 원형, 내향과 외향, 개인화 과정을 만들었다. 심리학의 두 가지 언어가 생겼다.',
          '지금도 심리학자들은 묻는다. 둘이 헤어지지 않았다면 더 멀리 갔을까, 아니면 한 사람이 다른 한 사람에게 지워져 덜 멀리 갔을까.'
        ],
        closing: '13시간 대화로 시작해, 한 통의 편지로 끝났다.\n두 사람이 함께였다면 하나의 학문이 됐을지 모른다.\n갈라섰기 때문에 두 개의 언어가 생겼다.',
        analysis: {
          insight: { icon: '💡', text: '결별이 더 풍요로운 결과를 만들 때가 있다 — 동의가 아니라 긴장이 지식을 확장한다.',
                     condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '꿈을 전문적으로 해석하는 두 사람이, 상대의 꿈은 끝까지 이해하지 못했다.',
                     condition: '전문가가 자신과 관련된 문제는 해결 못 할 때' },
          emotion: { icon: '❤️', text: '프로이트는 "배신자"라고, 융은 끝까지 "아버지"라고 불렀다 — 같은 관계의 다른 기억.',
                     condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: {
          type: '실화',
          credit: '카를 구스타프 융(C.G. Jung, 1875–1961) / 지크문트 프로이트(Sigmund Freud, 1856–1939) — 《프로이트-융 편지》(The Freud/Jung Letters, 1974, Princeton University Press)를 바탕으로 재서술했습니다.',
        },
        curatorNote: '"내 권위가 손상될 수 있다"는 한 마디에 융이 돌아섰다는 것. 진실보다 권위를 택하는 순간을 목격할 때의 그 실망감 — 융이 느낀 것이 그것이었을 것 같습니다.',
        qna: {
          question: '당신이 존경하던 사람에게서 처음으로 실망했던 순간이 있나요? 그 실망이 이후 당신을 어디로 이끌었나요?',
          answer: '융은 프로이트에게 실망한 뒤, 혼자만의 방향으로 갔습니다. 집단무의식, 원형 — 프로이트가 결코 가지 않았을 영역으로. 실망이 독립을 만들 때가 있습니다. 의존이 깨지면서 자신만의 목소리가 생기는 것입니다.'
        },
        publishedDate: '2026년 3월',
      },
      4: {
        title: '허블의 밤',
        category: '과학·문화',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: 'images/story-thu.webp',
        svgKey: null,
        body: [
          '1923년 10월, 캘리포니아 윌슨산 정상. 에드윈 허블은 세계에서 가장 큰 망원경 앞에 앉아 있었다. 100인치 후커 망원경. 그날 밤 그는 안드로메다 성운을 촬영했다.',
          '당시 천문학자들은 안드로메다가 우리 은하 안에 있다고 믿었다. 우주 = 우리 은하. 그 너머에 무엇이 있는지 아무도 몰랐다. 사실 아무도 그 너머가 있다고 생각하지 않았다.',
          '허블은 사진 건판에서 특별한 별 하나를 발견했다. 밝기가 주기적으로 변하는 별 — 세페이드 변광성. 이 별은 밝기 변화 주기를 알면 실제 밝기를 계산할 수 있고, 실제 밝기와 보이는 밝기를 비교하면 거리를 알 수 있었다.',
          '허블이 계산했다. 안드로메다까지의 거리는 약 90만 광년이었다. 우리 은하의 지름은 약 10만 광년. 안드로메다는 우리 은하 밖에 있었다.',
          '허블은 사진 건판 위에 적어두었던 "N" (성운, Nebula) 표시를 지웠다. 그리고 세 글자를 썼다. "VAR!" 변광성이라는 표시와 함께 느낌표를 하나 찍었다.',
          '1924년 1월, 허블은 이 발견을 편지로 미국천문학회에 보냈다. 당시 "우주는 우리 은하 하나뿐"이라는 주장을 이끌던 섀플리는 편지를 받고 동료에게 말했다. "이 편지가 내 우주를 파괴했다."',
          '하룻밤 사이에 우주의 크기가 수억 배로 커졌다. 안드로메다 하나만이 아니었다. 우주에는 수천억 개의 은하가 있었다. 우리 은하는 그중 하나에 불과했다.',
          '허블은 계속 망원경을 들여다봤다. 은하들이 서로 멀어지고 있다는 것을 발견했다. 우주가 팽창하고 있었다. 이 발견은 빅뱅 이론의 토대가 됐다.',
          '그가 발견한 것은 별의 위치만이 아니었다. 인간이 어디에 있는지였다. 수천억 개 은하 중 하나, 그 은하 가장자리 어딘가의 작은 행성 위에.'
        ],
        closing: '전날까지 우주는 우리 은하였다.\n다음 날 우주는 수천억 개의 은하가 됐다.\n한 사람이 밤새 망원경을 들여다보고\n"VAR!"이라고 썼기 때문에.',
        analysis: {
          insight: { icon: '💡', text: '우리가 알고 있다고 생각하는 세계의 경계 너머에는 언제나 더 큰 세계가 있다.',
                     condition: '관점이나 입장을 바꾸면 의외의 결과가 생길 때' },
          humor:   { icon: '😄', text: '"이 편지가 내 우주를 파괴했다" — 문자 그대로 우주가 파괴된 사람이 실재했다.',
                     condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '"VAR!" 느낌표 하나 — 우주가 바뀌는 순간에 허블이 쓴 것은 세 글자뿐이었다.',
                     condition: '아주 작은 순간이 사실 전부였던 이야기' }
        },
        source: {
          type: '실화',
          credit: '에드윈 허블(Edwin Hubble, 1889–1953) / 윌슨산 천문대, 1923년 10월 — NASA 허블 우주망원경 역사 아카이브 및 Marcia Bartusiak, 《Einstein\'s Telescope》(2009)를 바탕으로 재서술했습니다.',
        },
        curatorNote: '허블이 "VAR!"이라고 쓴 그 사진 건판이 실제로 남아 있습니다. 캘리포니아 카네기 천문대 아카이브에. 우주가 바뀐 순간의 필체가 남아 있다는 것이 이상하게 감동적이었습니다.',
        qna: {
          question: '당신이 알고 있다고 믿었던 세계의 경계가 무너진 순간이 있나요? 그 이후 세계가 어떻게 달라졌나요?',
          answer: '허블의 발견이 충격적인 것은 숫자가 아닙니다. 어제까지 진실이었던 것이 오늘 지도를 다시 그려야 할 이유가 됐다는 것입니다. 우리의 지도도 언제든 다시 그려질 수 있습니다. 그것이 두렵기보다 흥미로운 일일 수도 있습니다.'
        },
        publishedDate: '2026년 3월',
      },
      5: {
        title: '김홍도의 마당',
        category: '예술·한국',
        primaryType: '유머',
        types: ['유머', '통찰'],
        image: 'images/story-fri.webp',
        svgKey: null,
        body: [
          '조선 영조 21년인 1745년, 경기도 어딘가에서 화가 한 명이 태어났다. 이름은 홍도, 호는 단원. 어릴 때부터 그림이 남달랐다.',
          '왕실 도화서 화원이 됐다. 임금의 얼굴을 그리고, 나라의 행사를 기록하는 자리였다. 정조가 즉위하자 단원은 왕의 총애를 받았다. 정조는 그를 보물처럼 아꼈다.',
          '그런데 단원이 그린 것은 왕실과 산수만이 아니었다.',
          '그는 마당으로 나갔다. 씨름판, 서당, 빨래터, 대장간, 주막. 이름 없는 사람들이 살아가는 장면들을 그렸다. 양반이 아니라 씨름꾼을, 임금이 아니라 서당 아이들을.',
          '《씨름》을 보면 구경꾼들의 표정이 각자 다르다. 이기는 선수를 보는 사람, 지는 선수를 보는 사람, 옆 사람과 내기하는 사람. 씨름보다 구경꾼이 더 재미있다. 18세기 조선의 마당이 그대로 거기 있다.',
          '《서당》에는 훈장이 회초리를 들고 있다. 혼이 난 아이가 눈물을 글썽이고 있다. 그런데 옆에 앉은 친구들이 웃음을 참고 있다. 훈장 눈치를 보면서 입을 틀어막고. 그 모습을 300년 전 사람이 그렸는데, 지금 봐도 그 자리에 있는 것 같다.',
          '당시 조선 회화의 관례는 산수화와 문인화였다. 이름 없는 백성의 일상을 그림의 주제로 삼는 것은 파격이었다. 그러나 정조는 단원의 풍속화를 아꼈다. 백성의 삶을 보여주는 그림이라고.',
          '단원은 그림을 팔아 생계를 이어가야 했다. 만년에는 가난하게 살았다. 언제 어디서 세상을 떠났는지도 불분명하다. 1806년이라는 기록이 있지만 확실하지 않다.',
          '지금 그의 풍속화 대부분은 국립중앙박물관에 있다. 씨름꾼도, 울다가 들킨 서당 아이도, 빨래터 여인들도 — 모두 300년을 건너와 거기 있다. 이름 없던 사람들이 이름 없는 화가 덕에 영원해졌다.'
        ],
        closing: '왕실을 그리는 화가가 마당으로 나갔다.\n이름 없는 사람들을 그렸다.\n그 이름 없는 사람들이 300년을 살아남았다.',
        analysis: {
          insight: { icon: '💡', text: '역사에 남는 것은 권력자의 얼굴이 아니라 평범한 사람의 순간이다.',
                     condition: '관점이나 입장을 바꾸면 의외의 결과가 생길 때' },
          humor:   { icon: '😄', text: '서당 아이들이 훈장 눈치 보며 웃음 참는 모습 — 300년 전이나 지금이나 같은 표정.',
                     condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '이름 없는 사람들을 그림에 남긴 이름 없는 화가 — 덕분에 둘 다 영원해졌다.',
                     condition: '아주 작은 순간이 사실 전부였던 이야기' }
        },
        source: {
          type: '실화',
          credit: '김홍도(金弘道, 단원 檀園, 1745–1806?) / 《풍속도 화첩》(보물 제527호, 국립중앙박물관 소장) — 오주석 《단원 김홍도》(1998, 열화당)를 바탕으로 재서술했습니다.',
          url: 'https://www.museum.go.kr/site/main/relic/search/view?relicId=395'
        },
        curatorNote: '《서당》에서 훈장 몰래 웃음 참는 아이들을 보면, 300년이 순식간에 사라집니다. 그 표정이 너무 익숙해서. 김홍도가 그 순간을 남겨두지 않았으면 영원히 없었을 장면입니다.',
        qna: {
          question: '오늘 당신 주변에서 기록할 만한 "마당"의 장면이 있다면 무엇입니까? 지금 있는 그 자리의 이름 없는 순간들.',
          answer: '김홍도는 왕의 행사를 그리는 일을 하면서도, 마당의 씨름판을 그렸습니다. 역사에 남을 거라고 생각해서가 아니라 그것이 살아있는 장면이었기 때문에. 우리도 매일 마당에 있습니다. 무엇을 볼 것인지는 우리가 선택합니다.'
        },
        publishedDate: '2026년 3월',
      },
    }
  },
  {
    weekLabel: '2026년 3월 3주 (3/16–3/20)',
    weekStart: '2026-03-16',
    stories: {
      1: {
        title: '존 키츠의 마지막 편지',
        category: '사랑·감동',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: 'images/story-keats.webp',
        svgKey: null,
        body: [
          '1820년 2월, 런던. 존 키츠는 잠에서 깨다가 기침을 했다. 손수건에 붉은 얼룩이 생겼다. 그는 의대를 다닌 사람이었다. 한눈에 알아봤다. 폐에서 나온 피. 그는 스물네 살이었다.',
          '형제 중 막내인 톰이 결핵으로 죽었다. 2년 전이었다. 키츠는 그 임종을 곁에서 지켰다. 이제 자신이 같은 피를 보고 있었다.',
          '옆집에 패니 브론이 살았다. 키츠가 사랑한 사람이었다. 그들은 약혼했지만 결혼하지 못했다. 키츠에게 돈이 없었다. 아픈 몸에 돈도 없는 시인을 패니의 어머니가 달가워하지 않았다.',
          '의사들은 따뜻한 곳으로 가라고 했다. 이탈리아. 로마의 겨울이 런던보다 낫다고. 키츠는 알고 있었다. 이것이 마지막이라는 것을. 패니를 두고 떠나는 것이 무엇을 의미하는지.',
          '1820년 9월, 키츠는 화가 친구 조지프 세번과 함께 배에 올랐다. 영국을 떠났다. 다시 돌아오지 못했다.',
          '로마에서 패니에게 편지를 썼다. "나는 당신 없이는 존재할 수 없습니다. 당신을 잊으려 하면 더 생생하게 떠오릅니다." 보내지 못한 편지도 있었다. 보내는 것이 오히려 그녀를 더 힘들게 할 것 같아서.',
          '1821년 2월, 병이 깊어졌다. 세번이 밤마다 곁에 있었다. 키츠는 음식을 거의 못 먹었다. 로마의 스페인 광장 계단 옆 작은 방에 누워, 광장의 소리를 들었다.',
          '2월 23일 밤, 키츠는 세번에게 말했다. "세번, 이제 편하게 죽을 것 같아." 그리고 숨을 거뒀다. 스물다섯 살이었다.',
          '그는 생전에 자신의 묘비명을 정해뒀다. 이름도 새기지 말라고 했다. 그 대신 이렇게 써달라고. "여기 물 위에 이름이 쓰였던 자가 누워 있다." 자신의 시가 남지 않을 것이라고 생각했다.',
          '패니 브론은 평생 그 편지들을 간직했다. 60세가 넘어서야 결혼했다. 키츠의 편지는 지금도 남아 있다. 《오드》는 영어 시 중 가장 많이 읽히는 작품 중 하나가 됐다.'
        ],
        closing: '스물다섯 살에 세상을 떠났다.\n자신의 이름이 물 위에 쓰였다고 생각했다.\n지금 그의 시는 200년 뒤에도 읽힌다.',
        analysis: {
          insight: { icon: '💡', text: '사라진다고 생각하고 쓴 것이 남는다 — 키츠는 자신이 잊힐 것이라 믿었다.',
                     condition: '아주 작은 순간이 사실 전부였던 이야기' },
          humor:   { icon: '😄', text: '죽기 전 자신의 묘비명을 직접 정했다 — "이름도 새기지 말라"는 이름 없는 시인.',
                     condition: '진지하게 믿고 있지만 밖에서 보면 황당한 것' },
          emotion: { icon: '❤️', text: '"나는 당신 없이는 존재할 수 없습니다" — 보내지 못한 편지들이 남아 있다.',
                     condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: {
          type: '실화',
          credit: '존 키츠(John Keats, 1795–1821) / 패니 브론에게 보낸 편지들(Letters to Fanny Brawne, 1878년 출판) 및 Andrew Motion 《Keats》(1997, Farrar Straus & Giroux)를 바탕으로 재서술했습니다.',
        },
        curatorNote: '"여기 물 위에 이름이 쓰였던 자가 누워 있다." 키츠가 직접 정한 묘비명입니다. 자신이 잊힐 것이라 생각했다는 것. 그런데 200년이 지났습니다.',
        qna: {
          question: '사라진다고 생각하면서도 남겨둔 것이 있나요? 잊힐 것을 알면서도 쓴 말, 보낸 편지, 한 행동.',
          answer: '키츠는 자신의 시가 남지 않을 것이라 믿었습니다. 그러나 그것이 그를 멈추지 않았습니다. 남는다는 확신이 없어도 쓸 수 있다는 것. 사라진다고 생각하고 한 것이 오히려 오래 남을 때가 있습니다.'
        },
        publishedDate: '2026년 3월',
      },
      2: {
        title: '프루스트의 마들렌',
        category: '문학·역사',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: null,
        svgKey: null,
        body: [
          '1909년 겨울, 파리. 마르셀 프루스트는 홍차 한 잔을 받았다. 어머니가 내온 것이었다. 마들렌 한 조각이 함께 왔다. 조개 모양의 작은 케이크.',
          '그는 무심코 마들렌 한 조각을 홍차에 적셔 입에 넣었다. 그 순간 무언가가 일어났다.',
          '갑자기, 어린 시절 여름 방학을 보내던 콩브레가 돌아왔다. 이모할머니 레오니의 집. 아침마다 홍차에 마들렌을 적셔 주시던 그분. 집 앞 정원의 꽃들. 마을 광장. 성당. 그 여름의 빛과 냄새와 소리가 한꺼번에 밀려왔다. 기억이 돌아온 것이 아니었다. 그 시절 자체가 돌아왔다.',
          '프루스트는 이것을 기억이 아니라 시간이라고 불렀다. 의식이 불러온 기억은 생각으로만 존재한다. 그러나 감각이 불러온 기억은 몸으로 돌아온다. 잃어버린 시간을 되찾는 유일한 방법은 의지가 아니라 우연이었다.',
          '그는 여기서 소설의 단초를 잡았다. 7권짜리 소설. 제목은 《잃어버린 시간을 찾아서》.',
          '프루스트는 파리 오스만 대로의 아파트에 살았다. 천식이 심했다. 소음에도 예민했다. 침실 벽 전체를 코르크로 덧댔다. 소리가 차단됐다. 그 방에서 주로 밤에 글을 썼다.',
          '1913년 1권이 출판됐다. 거절이 먼저였다. 앙드레 지드가 편집자로 있던 출판사에서 거절했다. 지드는 나중에 이것을 평생 가장 후회한 결정이라고 했다. 결국 자비로 출판됐다.',
          '소설은 4,000페이지가 넘는다. 한 문장이 페이지를 넘기는 경우도 있다. 프루스트는 마지막 3권을 완성하고 5주 뒤 세상을 떠났다. 1922년이었다.',
          '마들렌 장면은 1권 첫 부분에 있다. 전체 4,000페이지의 씨앗이다. 홍차에 적신 과자 한 조각이 없었다면 20세기 최대의 소설도 없었다.'
        ],
        closing: '기억은 의지로 부를 수 없다.\n냄새가, 맛이, 질감이 불러온다.\n잃어버린 시간은 감각 속에 잠들어 있다.',
        analysis: {
          insight: { icon: '💡', text: '의식적 기억과 감각적 기억은 다르다 — 몸이 기억하는 것은 마음이 지울 수 없다.',
                     condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '지드가 거절한 원고가 20세기 최대의 소설이 됐다 — 평생의 후회.',
                     condition: '기대와 전혀 다른 방식으로 일이 풀릴 때' },
          emotion: { icon: '❤️', text: '홍차에 적신 마들렌 한 조각이 잃어버린 여름 전체를 돌려줬다.',
                     condition: '아주 작은 순간이 사실 전부였던 이야기' }
        },
        source: {
          type: '재서술',
          credit: '마르셀 프루스트(Marcel Proust, 1871–1922) / 《잃어버린 시간을 찾아서》(À la recherche du temps perdu, 1913–1927) 및 Edmund White 《Proust》(1999, Penguin Lives)를 바탕으로 재서술했습니다.',
        },
        curatorNote: '마들렌 장면을 처음 읽었을 때, 저도 비슷한 것을 떠올렸습니다. 냄새나 맛으로 갑자기 오래전 장면이 완전히 살아 돌아오는 경험. 그것이 기억이 아니라 시간이 돌아오는 것이라는 말이 정확하게 느껴졌습니다.',
        qna: {
          question: '어떤 냄새나 맛이나 소리가 당신에게 잃어버린 시간을 돌려주나요? 그것이 데려가는 곳은 어디인가요?',
          answer: '프루스트가 발견한 것은 시간을 되찾는 방법이 의지가 아니라는 것이었습니다. 억지로 기억하려 해도 생각만 떠오릅니다. 그러나 감각은 그 시절의 몸을 그대로 데려옵니다. 지금 당신의 마들렌은 무엇입니까.'
        },
        publishedDate: '2026년 3월',
      },
      3: {
        title: '윌리엄 제임스의 일기',
        category: '철학·심리',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: null,
        svgKey: null,
        body: [
          '1870년 4월, 보스턴. 윌리엄 제임스는 스물여덟 살이었다. 하버드 의대를 졸업했고, 독일에서 생리학을 공부했고, 다윈을 읽었고, 헬름홀츠를 읽었다. 그리고 완전히 무너져 있었다.',
          '원인은 명확하지 않았다. 신체 질환도 있었다. 눈이 좋지 않았고 등이 아팠다. 그러나 더 깊은 곳에 무언가가 있었다. 삶의 의미를 찾지 못하는 감각. 아무것도 진짜가 아닌 것 같은 느낌. 지금이라면 우울증이라고 불렀을 상태였다.',
          '그는 당시 지배적인 철학인 결정론에 사로잡혀 있었다. 모든 것은 원인과 결과로 연결되어 있다. 인간의 선택도 뇌의 화학적 상태가 만드는 필연이다. 자유의지는 환상이다. 그렇다면 내가 무언가를 노력한다는 것이 무슨 의미가 있는가.',
          '1870년 4월 30일, 그는 일기에 한 문장을 썼다.',
          '"오늘부터, 내 자유의지의 첫 번째 행위는 자유의지를 믿는 것으로 한다."',
          '철학적 주장이 아니었다. 증명도 아니었다. 실험이었다. 자유의지가 있다고 믿어보고, 그렇게 살아보기로 했다. 결과가 달라지면 믿음이 맞는 것이다.',
          '그것이 그의 철학이 됐다. 프래그머티즘. 진리는 그것이 참인지 거짓인지로 판단하는 것이 아니라, 그것이 삶에서 어떻게 작동하는지로 판단한다는 생각.',
          '그는 하버드에서 심리학 강의를 시작했다. 미국 최초의 심리학 실험실을 만들었다. 1890년 《심리학의 원리》를 출판했다. 1,400페이지짜리 책이었다. 지금도 심리학 교과서로 읽힌다.',
          '그는 말했다. "우리 세대의 가장 위대한 발견은, 인간이 마음의 태도를 바꿈으로써 삶을 바꿀 수 있다는 것이다."',
          '일기의 그 한 문장이 출발이었다. 믿어보기로 했기 때문에, 믿을 수 있게 됐다.'
        ],
        closing: '자유의지를 믿겠다는 첫 번째 자유의지.\n증명해서 믿은 것이 아니라,\n믿어보기로 해서 증명하게 됐다.',
        analysis: {
          insight: { icon: '💡', text: '행동이 믿음을 만든다 — 증명한 뒤에 믿는 것이 아니라, 믿어보기로 할 때 증명이 시작된다.',
                     condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
          humor:   { icon: '😄', text: '자유의지의 첫 번째 행위로 자유의지를 믿기로 했다 — 논리적으로 묘한 문장.',
                     condition: '진지하게 믿고 있지만 밖에서 보면 황당한 것' },
          emotion: { icon: '❤️', text: '완전히 무너진 스물여덟 살이 일기에 한 문장을 쓰고, 그것이 철학이 됐다.',
                     condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: {
          type: '실화',
          credit: '윌리엄 제임스(William James, 1842–1910) / 1870년 4월 30일 일기 및 Louis Menand 《The Metaphysical Club》(2001, Farrar Straus & Giroux)을 바탕으로 재서술했습니다.',
        },
        curatorNote: '"오늘부터, 내 자유의지의 첫 번째 행위는 자유의지를 믿는 것으로 한다." 이 문장이 한동안 마음에 걸렸습니다. 증명하고 나서 믿는 것이 아니라, 믿어보기로 한 것이 출발이었다는 것.',
        qna: {
          question: '지금 당신이 믿어보기로 결심하면 달라질 수 있는 것이 있나요? 증명을 기다리지 않고 먼저 믿어보는 것.',
          answer: '제임스의 일기는 철학이 아니라 처방이었습니다. 우울한 스물여덟이 자신에게 쓴 처방. 믿어보기로 하는 것이 때로 유일한 출구입니다. 행동이 믿음을 기다리지 않아도 될 때, 믿음이 행동을 따라옵니다.'
        },
        publishedDate: '2026년 3월',
      },
      4: {
        title: '보어와 아인슈타인의 논쟁',
        category: '과학·문화',
        primaryType: '통찰',
        types: ['통찰', '유머'],
        image: null,
        svgKey: null,
        body: [
          '1927년 10월, 브뤼셀. 솔베이 회의장. 세계 물리학자 29명이 모였다. 아인슈타인도 있었다. 보어도 있었다. 그 자리에서 논쟁이 시작됐고, 30년이 지나도 끝나지 않았다.',
          '주제는 양자역학이었다. 전자는 관측하기 전에는 위치가 정해져 있지 않다. 확률로만 존재한다. 관측하는 순간 하나의 상태로 결정된다. 보어와 하이젠베르크가 이끄는 코펜하겐 해석이었다.',
          '아인슈타인은 동의하지 않았다. "신은 주사위를 던지지 않는다." 우주는 근본적으로 결정론적이어야 한다. 우리가 모르는 것뿐이지, 실재는 확정되어 있다.',
          '보어가 받아쳤다. "아인슈타인, 신에게 무엇을 해야 한다고 지시하지 마시오."',
          '아인슈타인은 매년 사고 실험을 들고 왔다. "이런 상황을 설명할 수 있겠소?" 보어는 매년 밤을 새워 답을 찾아냈다. 다음 날 아침 반박했다.',
          '1935년, 아인슈타인은 동료 두 명과 함께 논문을 발표했다. EPR 논문. 양자역학이 불완전하다는 것을 이론적으로 보이려 했다. 두 입자를 얽히게 한 뒤 하나를 측정하면 다른 하나가 즉시 영향을 받는다는 것은 말이 되지 않는다. 빛보다 빠른 것은 없으니까.',
          '보어가 답했다. 그것이 오히려 양자역학이 옳다는 증거라고. 얽힌 두 입자는 거리가 아무리 멀어도 하나처럼 행동한다.',
          '두 사람은 서로를 깊이 존중했다. 논쟁 중에도 편지를 주고받았다. 1955년 아인슈타인이 세상을 떠났다. 보어의 책상 위에는 아인슈타인의 사진이 있었다.',
          '1964년, 존 벨이 이론을 제시했다. 실험으로 판가름할 수 있다고. 1970년대부터 실험이 진행됐다. 결과는 보어 쪽이었다. 신은 주사위를 던지고 있었다.',
          '보어도 그때는 세상을 떠난 뒤였다.'
        ],
        closing: '두 사람은 30년간 논쟁했다.\n둘 다 죽은 뒤에 실험이 판결을 내렸다.\n우주는 그동안 줄곧 주사위를 던지고 있었다.',
        analysis: {
          insight: { icon: '💡', text: '가장 좋은 논쟁은 둘 다 더 날카로워지게 한다 — 보어와 아인슈타인은 서로 덕분에 더 정밀해졌다.',
                     condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '"신은 주사위를 던지지 않는다" vs "신에게 지시하지 마시오" — 신이 가장 많이 등장한 물리학 논쟁.',
                     condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '보어 책상 위에 있던 아인슈타인의 사진 — 30년 논쟁 상대가 가장 존경하는 사람이었다.',
                     condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: {
          type: '실화',
          credit: '닐스 보어(Niels Bohr, 1885–1962) / 알베르트 아인슈타인(Albert Einstein, 1879–1955) / 솔베이 회의 1927·1930, EPR 논문 1935 — Abraham Pais 《Niels Bohr\'s Times》(1991, Oxford University Press)를 바탕으로 재서술했습니다.',
        },
        curatorNote: '보어의 책상 위에 아인슈타인 사진이 있었다는 것이 이 이야기에서 가장 오래 남습니다. 30년간 틀렸다고 주장한 사람의 사진을 책상 위에 두는 것. 그게 논쟁이 아니라 대화였다는 증거 같습니다.',
        qna: {
          question: '당신이 오랫동안 틀렸다고 생각한 사람에게서 배운 것이 있나요? 논쟁이 오히려 서로를 날카롭게 만든 경험.',
          answer: '아인슈타인과 보어의 논쟁이 30년 동안 생산적이었던 것은 둘 다 틀릴 수 있다는 것을 전제했기 때문입니다. 아인슈타인은 결국 틀렸지만, 그 덕분에 보어의 이론은 더 정밀해졌습니다. 가장 좋은 반론은 우리를 더 선명하게 만들어줍니다.'
        },
        publishedDate: '2026년 3월',
      },
      5: {
        title: '오스카 와일드의 마지막 말',
        category: '예술·문화',
        primaryType: '유머',
        types: ['유머', '감동'],
        image: null,
        svgKey: null,
        body: [
          '1895년, 런던. 오스카 와일드는 잉글랜드에서 가장 유명한 작가였다. 〈진지함의 중요성〉이 무대에 오르고 있었다. 〈이상적인 남편〉도 마찬가지였다. 두 편이 동시에 웨스트엔드에서 공연 중이었다. 객석은 매일 찼다.',
          '그해 2월, 어리석은 결정을 했다. 퀸즈베리 후작을 명예훼손으로 고소한 것이었다. 후작의 아들 앨프레드 더글러스와 사귀는 것을 안 후작이 와일드를 공개적으로 비난했다. 와일드는 소송으로 맞섰다.',
          '재판이 뒤집혔다. 오히려 와일드가 기소됐다. 동성 관계에 대한 혐의였다. 1895년 5월, 유죄 판결을 받았다. 징역 2년, 중노동.',
          '레딩 감옥. 와일드는 날마다 돌을 깼다. 런던에서 가장 번뜩이는 대화를 나누던 사람이 감방에 있었다. 건강이 무너졌다. 귀 안쪽에 감염이 생겼고, 그것이 이후 그를 계속 괴롭혔다.',
          '1897년 5월, 풀려났다. 영국으로 돌아갈 수 없었다. 파리로 갔다. 세바스찬 멜모스라는 가명을 썼다. 아무도 속지 않았다.',
          '파리에서 3년을 살았다. 돈이 없었다. 친구들이 조금씩 도왔다. 글을 쓰려 했지만 잘 쓰이지 않았다. 레딩 감옥 체험을 바탕으로 쓴 시 〈레딩 감옥의 노래〉가 마지막 작품이 됐다.',
          '1900년 가을, 오스카 와일드는 파리의 작은 호텔 방에 누웠다. 알자스 호텔. 방은 좁고 벽지는 낡았다. 귀의 감염이 뇌로 번졌다.',
          '임종이 가까워졌다. 친구 로버트 로스가 곁에 있었다. 와일드는 한마디를 남겼다.',
          '"나와 이 벽지 중 하나는 죽어야 한다."',
          '11월 30일, 세상을 떠났다. 마흔여섯 살이었다. 파리 페르 라셰즈 묘지에 묻혔다. 지금도 그의 무덤에는 전 세계에서 찾아온 사람들의 립스틱 자국이 남아 있다.'
        ],
        closing: '잉글랜드 최고의 재치가\n낡은 파리 호텔 방에서 마지막 농담을 남겼다.\n죽는 순간에도 그는 와일드였다.',
        analysis: {
          insight: { icon: '💡', text: '유머는 고통을 부정하는 것이 아니라 고통보다 크게 서는 방식이다.',
                     condition: '주체와 객체가 뒤바뀌는 순간' },
          humor:   { icon: '😄', text: '"나와 이 벽지 중 하나는 죽어야 한다" — 임종 직전 와일드의 마지막 비평.',
                     condition: '기대와 전혀 다른 방식으로 일이 풀릴 때' },
          emotion: { icon: '❤️', text: '두 편을 동시에 웨스트엔드에 올린 사람이 5년 뒤 이름도 바꾸고 파리 허름한 방에서 죽었다.',
                     condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: {
          type: '실화',
          credit: '오스카 와일드(Oscar Wilde, 1854–1900) / 알자스 호텔, 파리, 1900년 11월 30일 — Richard Ellmann 《Oscar Wilde》(1988, Alfred A. Knopf)를 바탕으로 재서술했습니다.',
        },
        curatorNote: '"나와 이 벽지 중 하나는 죽어야 한다." 농담이지만 농담이 아닙니다. 그 방이 어떤 방이었는지 알면서 읽으면, 웃음과 안타까움이 동시에 옵니다. 죽는 순간까지 자신이었다는 것이 오히려 위대해 보입니다.',
        qna: {
          question: '당신이 가장 힘든 순간에도 잃지 않은 것이 있나요? 무너지는 상황에서도 변하지 않은 당신다운 것.',
          answer: '와일드는 감옥에서도, 이름을 바꾸고 파리에서 가난하게 살 때도 재치를 잃지 않았습니다. 그것이 그의 남은 존엄이었습니다. 가장 자신다운 것이 가장 마지막까지 남습니다. 그것이 무엇인지 아는 사람은 어떤 상황에서도 완전히 무너지지 않습니다.'
        },
        publishedDate: '2026년 3월',
      },
    }
  }
  ,
  {
    weekLabel: '2026년 3월 4주 (3/23–3/27)',
    weekStart: '2026-03-23',
    stories: {

  /* ═══ 월요일 — 문학·역사 (PRIMARY: 통찰) ═══ */
  1: {
    title: '제인 오스틴의 "By a Lady"',
    category: '문학·역사',
    primaryType: '통찰',
    types: ['통찰', '감동'],
    image: 'images/제인 오스틴의 by a lady.webp',
    svgKey: null,
    body: [
      '1811년 런던. 서점에 새 소설이 들어왔다. 《이성과 감성》. 저자란에는 이름이 없었다. "By a Lady(한 숙녀가 지음)"라고만 적혀 있었다.',
      '그 숙녀는 제인 오스틴이었다. 그녀는 서른다섯 살이었다.',
      '오스틴은 20대 초반부터 소설을 썼다. 1797년, 아버지가 그녀의 원고를 출판사에 보냈다. 제목은 《첫인상》이었다. 나중에 《오만과 편견》이 되는 소설이었다. 출판사는 원고를 읽지도 않고 돌려보냈다.',
      '10년이 넘는 시간이 흘렀다. 오스틴은 계속 썼다. 가족들의 거실 한쪽 구석에서, 서랍장에 원고를 숨기며, 방문객이 오면 글쓰기를 멈추며 썼다. 당시 여성에게 글쓰기는 공적인 일이 될 수 없었다. 특히 소설은.',
      '1811년, 드디어 출판됐다. 그러나 이름은 쓸 수 없었다. 여성의 이름이 붙은 소설은 진지하게 읽히지 않는다는 것을 오스틴은 알고 있었다. "By a Lady." 그 두 단어가 타협이었다.',
      '1813년 《오만과 편견》이 출판됐다. 이번에는 "《이성과 감성》의 저자가 지음"이라고 적혔다. 그래도 이름은 없었다.',
      '오스틴이 살아 있는 동안 그녀의 이름은 단 한 번도 소설 표지에 오르지 않았다. 그녀가 죽은 뒤, 오빠 헨리가 《노생거 사원》의 서문에 처음으로 "제인 오스틴"이라고 썼다.',
      '그녀가 태어나고 200년이 지났다. 그녀의 얼굴은 영국 10파운드 지폐에 새겨져 있다.'
    ],
    closing: '"By a Lady."\n이름을 쓸 수 없었던 시대에 쓴 소설이\n200년이 지나 지폐에 새겨졌다.',
    analysis: {
      insight: { icon: '💡', text: '익명이 오히려 작품을 남겼다 — 이름을 지운 것이 이름을 지키는 방법이었다.',
                 condition: '주체와 객체가 뒤바뀌는 순간' },
      humor:   { icon: '😄', text: '"By a Lady" — 이름 대신 성별로만 표시된 작가. 그 작가가 영국 문학의 대표가 됐다.',
                 condition: '기대와 전혀 다른 방식으로 일이 풀릴 때' },
      emotion: { icon: '❤️', text: '방문객이 오면 글쓰기를 멈추며, 거실 구석에서 썼다. 그 원고가 오만과 편견이었다.',
                 condition: '아주 작은 순간이 사실 전부였던 이야기' }
    },
    source: {
      type: '실화',
      credit: '제인 오스틴(Jane Austen, 1775–1817) / 《이성과 감성》(Sense and Sensibility, 1811) 초판 기록, Claire Tomalin 《Jane Austen: A Life》(1997, Alfred A. Knopf)를 바탕으로 재서술했습니다.',
    },
    curatorNote: '"By a Lady." 두 단어가 긴 이야기를 담고 있습니다. 진지하게 읽히기 위해 이름을 지운 것. 그 타협 덕분에 우리가 오스틴을 읽을 수 있게 됐는지도 모릅니다.',
    qna: {
      question: '당신이 하고 싶은 것을 하기 위해 무언가를 감춰야 했던 적이 있나요? 인정받기 위해 조건을 받아들인 경험.',
      answer: '오스틴은 이름을 포기함으로써 작품을 남겼습니다. 때로 인정받는 방법은 자신을 숨기는 것입니다. 그러나 결국 남는 것은 작품이고, 작품이 이름을 되찾아줍니다.'
    },
    publishedDate: '2026년 3월 23일',
  },

  /* ═══ 화요일 — 문학·역사 (PRIMARY: 감동) ═══ */
  2: {
    title: '가르시아 마르케스의 첫 문장',
    category: '문학·역사',
    primaryType: '감동',
    types: ['감동', '통찰'],
    image: null,
    svgKey: null,
    body: [
      '1965년 어느 여름날, 멕시코시티. 가브리엘 가르시아 마르케스는 가족과 함께 아카풀코로 휴가를 떠나고 있었다. 차를 몰고 있었다. 아내 메르세데스와 두 아들이 뒤에 타고 있었다.',
      '고속도로 어딘가에서 한 문장이 왔다.',
      '"여러 해가 지난 뒤, 총살 집행 부대 앞에 선 아우렐리아노 부엔디아 대령은 아버지가 처음으로 얼음을 구경시켜 주던 그 먼 오후를 떠올리게 될 것이다."',
      '가르시아 마르케스는 핸들을 꺾었다. 차를 돌렸다. 멕시코시티로 돌아갔다.',
      '집에 돌아온 그는 서재에 들어갔다. 그리고 18개월간 거의 나오지 않았다.',
      '아내 메르세데스가 나머지를 처리했다. 집세가 밀렸다. 전기세가 밀렸다. 식료품을 외상으로 샀다. 믹서기를 전당포에 맡겼다. 헤어드라이어도 맡겼다. 전기다리미도 맡겼다. 가르시아 마르케스에게는 아무것도 말하지 않았다. 집필이 끊겨서는 안 됐다.',
      '18개월 후, 원고가 완성됐다. 부에노스아이레스의 편집자에게 원고를 보내려고 했다. 우편 요금이 82페소 필요했는데 돈이 53페소뿐이었다. 원고 절반만 보냈다. 나중에 나머지 절반을 보냈다.',
      '편집자는 원고를 받자마자 답장을 썼다. "이 소설은 노벨문학상을 받을 것입니다."',
      '1967년, 《백년의 고독》이 출판됐다. 1982년, 가르시아 마르케스는 노벨문학상을 받았다.',
      '메르세데스는 나중에 말했다. "나는 항상 우리가 될 것이라는 걸 알았어요. 하지만 그 믹서기는 아직도 아쉬워요."'
    ],
    closing: '한 문장이 왔을 때, 차를 돌렸다.\n그리고 그 문장은 18개월이 됐다.\n믹서기를 전당포에 맡긴 아내가 없었다면,\n그 문장은 아무것도 아니었을 것이다.',
    analysis: {
      insight: { icon: '💡', text: '창작의 순간은 혼자 오지만 실현은 혼자 되지 않는다 — 위대한 작품 뒤에는 맡겨진 믹서기가 있다.',
                 condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
      humor:   { icon: '😄', text: '노벨상 원고를 돈이 없어 절반만 보냈다 — 나머지 절반은 나중에.',
                 condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
      emotion: { icon: '❤️', text: '"믹서기는 아직도 아쉬워요" — 남편의 노벨상보다 믹서기를 기억하는 아내.',
                 condition: '아주 작은 순간이 사실 전부였던 이야기' }
    },
    source: {
      type: '실화',
      credit: '가브리엘 가르시아 마르케스(Gabriel García Márquez, 1927–2014) / Gerald Martin 《Gabriel García Márquez: A Life》(2009, Alfred A. Knopf)를 바탕으로 재서술했습니다.',
    },
    curatorNote: '메르세데스가 믹서기를 전당포에 맡겼다는 것. 그리고 "믹서기는 아직도 아쉬워요"라고 말했다는 것이 오래 남습니다. 《백년의 고독》 뒤에는 전당포에 맡긴 믹서기와 그것을 아무 말 없이 맡긴 사람이 있었습니다.',
    qna: {
      question: '당신 뒤에서 말없이 버텨준 사람이 있나요? 그 사람이 맡긴 믹서기는 무엇이었나요?',
      answer: '《백년의 고독》은 가르시아 마르케스 혼자 쓴 것이 아니었습니다. 메르세데스가 없었다면 그 18개월은 불가능했습니다. 위대한 창작 뒤에는 항상 그 창작을 지키기 위해 다른 무언가를 포기한 사람이 있습니다.'
    },
    publishedDate: '2026년 3월 24일',
  },

  /* ═══ 수요일 — 예술·감동 (PRIMARY: 감동) ═══ */
  3: {
    title: '프리다 칼로의 천장 거울',
    category: '예술·감동',
    primaryType: '감동',
    types: ['감동', '통찰'],
    image: 'images/프리다 칼로의 천장 거울.webp',
    svgKey: null,
    body: [
      '1925년 9월 17일, 멕시코시티. 열여덟 살의 프리다 칼로는 버스를 타고 있었다. 버스가 전차와 충돌했다.',
      '뼈가 부러졌다. 척추가 세 곳에서 골절됐다. 쇄골이 부러졌다. 오른쪽 다리가 열한 군데 골절됐다. 금속 손잡이가 몸을 관통했다.',
      '의사들은 살기 어렵다고 했다. 살았다. 그러나 침대에 누워 있어야 했다. 한 달이 지나고, 두 달이 지났다.',
      '어머니가 무언가를 만들었다. 누울 수 있는 자세에서도 그림을 그릴 수 있도록 이젤을 개조했다. 그리고 침대 천장에 거울을 달았다.',
      '칼로는 위를 바라봤다. 거울 속에 자신이 있었다. 그녀는 그 얼굴을 그리기 시작했다.',
      '"나는 자주 혼자 있고, 내가 가장 잘 아는 주제가 나 자신이기 때문에 나를 그린다."',
      '55점의 자화상이 이렇게 시작됐다. 고통이 주제가 됐다. 부러진 척추가 캔버스에 그려졌다. 꿰뚫린 몸이 그려졌다. 그러나 눈은 항상 정면을 향했다.',
      '그녀는 평생 35번의 수술을 받았다. 그 사이에도 그렸다. 석고 코르셋을 입은 채 그렸다. 서 있을 수 없을 때는 누워서 그렸다.',
      '1953년, 멕시코시티에서 칼로의 첫 개인전이 열렸다. 의사들은 참석을 금지했다. 그녀는 구급차로 이동해 침대째 전시장으로 들어왔다. 그리고 침대에 누운 채로 자신의 전시를 봤다.',
      '천장 거울 앞에 누웠던 열여덟 살이, 28년 후 자신의 전시장에 침대째 들어왔다.'
    ],
    closing: '천장 거울이 없었다면,\n세상은 55점의 자화상을 갖지 못했을 것이다.\n고통이 그림이 됐고,\n침대가 화실이 됐다.',
    analysis: {
      insight: { icon: '💡', text: '한계가 형식을 만든다 — 누울 수밖에 없었기에 천장을 봤고, 자신을 봤다.',
                 condition: '주체와 객체가 뒤바뀌는 순간' },
      humor:   { icon: '😄', text: '의사가 전시 참석을 금지했다 — 그녀는 침대째 전시장으로 들어왔다.',
                 condition: '기대와 전혀 다른 방식으로 일이 풀릴 때' },
      emotion: { icon: '❤️', text: '"나를 그린다" — 55점의 자화상이 담긴 것은 얼굴이 아니라 고통과 의지였다.',
                 condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
    },
    source: {
      type: '실화',
      credit: '프리다 칼로(Frida Kahlo, 1907–1954) / Hayden Herrera 《Frida: A Biography of Frida Kahlo》(1983, Harper & Row)를 바탕으로 재서술했습니다.',
    },
    curatorNote: '어머니가 천장에 거울을 달아줬다는 것이 오래 남습니다. 딸이 무언가를 할 수 있도록 만든 어머니. 칼로는 그 거울을 통해 자신을 봤고, 그것이 55점이 됐습니다.',
    qna: {
      question: '당신의 한계가 오히려 방향을 만든 적이 있나요? 할 수 없었기 때문에 오히려 하게 된 것.',
      answer: '칼로는 일어날 수 없었기 때문에 천장을 봤고, 자신을 봤습니다. 제약이 없었다면 그 방향은 없었을 것입니다. 우리가 불가능하다고 느끼는 조건이 때로 가장 새로운 형식을 만들어냅니다.'
    },
    publishedDate: '2026년 3월 25일',
  },

  /* ═══ 목요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
  4: {
    title: '레오나르도 다빈치의 할 일 목록',
    category: '역사·통찰',
    primaryType: '통찰',
    types: ['통찰', '유머'],
    image: null,
    svgKey: null,
    body: [
      '레오나르도 다빈치는 7,000페이지가 넘는 노트를 남겼다. 해부도, 비행기 설계도, 물의 흐름, 인체 비율, 지도. 르네상스의 모든 지식이 그 안에 있다.',
      '그 중에 할 일 목록이 있다.',
      '"수학자 선생님에게 삼각형을 정사각형으로 만드는 방법을 배울 것."',
      '"밀라노의 수로 전문가에게 수문, 운하, 수차를 수리하는 법을 물어볼 것."',
      '"의학 그림에 대해 조반니에게 물어볼 것."',
      '"솔방울을 구할 것."',
      '"산술 책을 찾아볼 것."',
      '다빈치는 당대 모든 분야를 섭렵한 천재였다. 그러나 그도 여전히 배워야 할 것이 있었고, 찾아봐야 할 것이 있었고, 물어봐야 할 사람이 있었다.',
      '그는 목록을 썼다. 그리고 아마도 미루기도 했다. 그는 미완성 작품으로도 유명하다. 《최후의 만찬》을 완성하는 데 3년이 걸렸고, 발주자가 끊임없이 재촉했다. 《모나리자》는 죽을 때까지 옆에 두고 손을 댔다.',
      '그는 평생 호기심이 많았고, 평생 배움이 부족하다고 느꼈다. 그 불완전함이 7,000페이지를 만들었다.'
    ],
    closing: '"솔방울을 구할 것."\n천재의 메모도 이런 문장으로 가득했다.\n그 불완전함이 7,000페이지를 만들었다.',
    analysis: {
      insight: { icon: '💡', text: '천재도 할 일 목록을 쓴다 — 호기심이 많다는 것은 부족하다는 것을 계속 인식한다는 뜻이다.',
                 condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
      humor:   { icon: '😄', text: '"솔방울을 구할 것" — 7,000페이지 르네상스 노트에 솔방울 메모가 있다.',
                 condition: '진지하게 믿고 있지만 밖에서 보면 황당한 것' },
      emotion: { icon: '❤️', text: '죽을 때까지 모나리자 옆에 두고 손을 댔다 — 완성이 아니라 지속이었다.',
                 condition: '아주 작은 순간이 사실 전부였던 이야기' }
    },
    source: {
      type: '실화',
      credit: '레오나르도 다빈치(Leonardo da Vinci, 1452–1519) / Codex Arundel, Codex Atlanticus 등 다빈치 노트북, Walter Isaacson 《Leonardo da Vinci》(2017, Simon & Schuster)를 바탕으로 재서술했습니다.',
    },
    curatorNote: '할 일 목록에 "수학 배울 것"이 있다는 것. 다빈치도 수학을 배워야 했습니다. 천재는 모든 것을 아는 사람이 아니라, 모르는 것을 계속 추적하는 사람이라는 생각이 들었습니다.',
    qna: {
      question: '오늘 당신의 할 일 목록에 있는 것 중, 오래 미뤄온 것이 있나요? 다빈치도 그것을 목록에 썼을 것입니다.',
      answer: '다빈치의 목록은 그가 완전하지 않았다는 증거입니다. 그리고 그것이 그를 멈추지 않았습니다. 미완성과 미루기는 천재의 조건이 아니라 인간의 조건입니다. 중요한 것은 목록을 계속 쓴다는 것입니다.'
    },
    publishedDate: '2026년 3월 26일',
  },

  /* ═══ 금요일 — 철학·유머 (PRIMARY: 유머) ═══ */
  5: {
    title: '소크라테스와 크산티페',
    category: '철학·유머',
    primaryType: '유머',
    types: ['유머', '통찰'],
    image: null,
    svgKey: null,
    body: [
      '소크라테스에게는 악처로 유명한 아내가 있었다. 크산티페. 고대 그리스에서 그 이름은 잔소리하는 여자의 대명사가 됐다.',
      '어느 날 크산티페가 소크라테스에게 한바탕 잔소리를 퍼부었다. 소크라테스는 아무 말도 하지 않고 집 밖으로 나갔다. 크산티페는 화가 더 났다. 창문에서 물을 끼얹었다.',
      '소크라테스는 물을 맞고 말했다. "천둥 뒤에는 비가 오는 법이지."',
      '누군가 물었다. "왜 크산티페 같은 아내와 사느냐?" 소크라테스가 답했다. "말을 잘 타려는 사람은 가장 거친 말을 고릅니다. 나는 사람을 상대하는 법을 익히고 싶어서 크산티페를 고른 것입니다. 그녀를 견딜 수 있다면 누구든 견딜 수 있습니다."',
      '이것이 사실인지 확인하기 어렵다. 소크라테스는 글을 남기지 않았다. 우리가 아는 소크라테스는 플라톤이 쓴 소크라테스다.',
      '그러나 플라톤의 《파이돈》에서 소크라테스가 죽던 날의 기록은 남아 있다. 크산티페는 어린아이를 안고 감옥에 왔다. 소크라테스를 보자마자 울었다. "이것이 당신과 친구들이 함께하는 마지막 날이에요." 소크라테스는 친구 크리톤에게 그녀를 데려가 달라고 부탁했다.',
      '악처의 이야기인 줄 알았는데, 그날 가장 먼저 울었던 것은 크산티페였다.',
      '소크라테스는 독배를 마시기 전까지 친구들과 영혼 불멸에 대해 이야기했다. 크리톤이 물었다. "어떻게 묻어야 합니까?" 소크라테스는 웃으며 말했다. "그것이 나를 묻는 것이 아니라는 것만 기억한다면, 원하는 대로."'
    ],
    closing: '악처와의 삶이 철학자를 만들었다고 했다.\n그러나 그가 죽던 날\n가장 먼저 울었던 것은 그 악처였다.',
    analysis: {
      insight: { icon: '💡', text: '전해지는 이야기와 실제 기록 사이 — 크산티페는 악처가 아니라 먼저 슬퍼한 아내였을 수 있다.',
                 condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
      humor:   { icon: '😄', text: '"천둥 뒤에는 비가 오는 법" — 물벼락을 맞고 남긴 말.',
                 condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
      emotion: { icon: '❤️', text: '죽기 전날 아이를 안고 찾아와 울었다 — 가장 먼저 슬퍼한 사람.',
                 condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
    },
    source: {
      type: '실화',
      credit: '소크라테스(Socrates, 470–399 BC) / 플라톤 《파이돈》(Phaedo) 기록, 크세노폰 《향연》(Symposium) 기록을 바탕으로 재서술했습니다.',
    },
    curatorNote: '악처 이야기인 줄 알고 읽다가, 죽던 날 가장 먼저 운 사람이 크산티페였다는 것에서 멈췄습니다. 전해지는 이야기가 때로 실제를 가립니다.',
    qna: {
      question: '당신이 오랫동안 오해했거나 한 면만 봤던 사람이 있나요? 다른 면을 보게 된 순간이 있었나요?',
      answer: '크산티페는 2,400년간 악처의 대명사였습니다. 그러나 《파이돈》의 그 장면을 보면 다른 사람이 보입니다. 우리가 아는 사람에 대한 이야기는 항상 전부가 아닙니다.'
    },
    publishedDate: '2026년 3월 27일',
  },

    }
  }
];

/* ──────────────────────────────────────────────────────────
   표시용 계산 — 다음 주가 게재일(직전 일요일)을 지났으면 맨 앞에 끼운다.
   STORIES        = 현재 게재 중인 주(가장 최신 게재 주)의 stories
   STORY_ARCHIVE  = 그 뒤의 지난 주들 (앱의 '지난 이야기' 섹션)
   ────────────────────────────────────────────────────────── */
const _published = _nextLive ? [NEXT_WEEK_STORIES].concat(PAST_WEEKS) : PAST_WEEKS.slice();
const STORIES = _published[0].stories;
const STORY_ARCHIVE = _published.slice(1);

/* ──────────────────────────────────────────────────────────
   SOURCES  ·  69개 소스 탐색 풀
   type: website | youtube | podcast | newsletter | reddit
   cats: 이 소스에서 잘 찾아지는 IHE 카테고리 (최대 2)
   days: 관련 요일 (1=월 … 5=금)
   ────────────────────────────────────────────────────────── */
const SOURCES = [

  /* ── 월요일 ── 사랑 ── */
  { id:'s01', name:'Humans of New York',       url:'https://www.humansofnewyork.com',
    type:'website',    cats:['감동','통찰'],  days:[1],
    desc:'뉴욕 시민들의 일상 이야기. 누구나 담고 있는 감동의 원석. 사랑·상실·용기가 교차한다.' },
  { id:'s02', name:'NYT Modern Love',           url:'https://www.nytimes.com/column/modern-love',
    type:'website',    cats:['감동','통찰'],  days:[1],
    desc:'독자 투고 기반의 현대인 사랑 이야기. 예상을 벗어나는 반전과 감동이 가득하다.' },
  { id:'s03', name:'StoryCorps',                url:'https://storycorps.org',
    type:'podcast',    cats:['감동'],         days:[1,2],
    desc:'평범한 미국인들이 서로에게 들려주는 짧은 인생 이야기. 인류의 보편 감동 창고.' },
  { id:'s04', name:'The Moth',                  url:'https://themoth.org',
    type:'podcast',    cats:['감동','유머'],  days:[1,2,3],
    desc:'무대 위에서 직접 들려주는 개인 이야기. 감동과 유머가 교차하는 최고의 스토리텔링.' },
  { id:'s05', name:'SoulPancake',               url:'https://www.youtube.com/@SoulPancake',
    type:'youtube',    cats:['감동'],         days:[1],
    desc:'인간의 선함과 연결에 관한 짧은 영상들. "사랑"과 "친절"이 실제로 작동하는 모습.' },
  { id:'s06', name:'On Being (Krista Tippett)', url:'https://onbeing.org',
    type:'podcast',    cats:['통찰','감동'],  days:[1,3],
    desc:'사랑·삶·의미에 관한 심층 인터뷰. 통찰과 감동이 모두 깊고 오래 남는다.' },
  { id:'s07', name:'Poetry Foundation',         url:'https://www.poetryfoundation.org/poems/browse#topic=love',
    type:'website',    cats:['감동'],         days:[1,2],
    desc:'고전과 현대 사랑시 아카이브. 언어로 담은 감정의 가장 정제된 형태.' },
  { id:'s08', name:'Aeon — Love & Relationships', url:'https://aeon.co/topics/love',
    type:'website',    cats:['통찰','감동'],  days:[1,3],
    desc:'철학·심리학적 관점의 사랑 탐구. 사랑이 왜, 어떻게 작동하는지 깊이 파고든다.' },
  { id:'s09', name:'r/wholesomestories',        url:'https://www.reddit.com/r/wholesomestories/',
    type:'reddit',     cats:['감동'],         days:[1],
    desc:'Reddit의 따뜻한 이야기 모음. 작은 친절과 예상 밖 감동이 넘친다.' },
  { id:'s10', name:'The Marginalian',           url:'https://www.themarginalian.org',
    type:'website',    cats:['통찰','감동'],  days:[1,2,3],
    desc:'마리아 포포바의 문학·과학·철학 큐레이션. 사랑과 삶에 관한 깊고 아름다운 에세이.' },

  /* ── 화요일 ── 역사·문학 ── */
  { id:'s11', name:'Literary Hub',              url:'https://lithub.com',
    type:'website',    cats:['통찰','감동'],  days:[2],
    desc:'세계 문학 에세이와 단편. 작가들의 창작 이야기와 문학적 통찰의 보고.' },
  { id:'s12', name:"Lapham's Quarterly",        url:'https://www.laphamsquarterly.org',
    type:'website',    cats:['통찰','감동'],  days:[2],
    desc:'역사 원문과 현대 에세이의 독창적 병치. "역사가 지금을 어떻게 설명하는가".' },
  { id:'s13', name:'Letters of Note',           url:'https://lettersofnote.com',
    type:'website',    cats:['감동','통찰'],  days:[2],
    desc:'역사 속 인물들의 실제 편지 모음. 거장들의 인간적 면모와 예상 밖 감동.' },
  { id:'s14', name:"Dan Carlin's Hardcore History", url:'https://www.dancarlin.com/hardcore-history-series/',
    type:'podcast',    cats:['통찰','감동'],  days:[2,4],
    desc:'방대하지만 스토리텔링이 탁월한 역사 팟캐스트. 역사의 드라마가 살아있다.' },
  { id:'s15', name:'JSTOR Daily',               url:'https://daily.jstor.org',
    type:'website',    cats:['통찰'],         days:[2,4],
    desc:'학술 연구를 일반인 눈높이로 풀어쓴 역사·문화 이야기. 무료 접근 가능.' },
  { id:'s16', name:'The Paris Review',          url:'https://www.theparisreview.org',
    type:'website',    cats:['통찰','감동'],  days:[2],
    desc:'세계 최고 작가들의 인터뷰와 단편소설. 문학의 정수를 담은 아카이브.' },
  { id:'s17', name:'Crash Course History',      url:'https://www.youtube.com/@crashcourse',
    type:'youtube',    cats:['통찰','유머'],  days:[2],
    desc:'역사를 유머와 속도감 있게 전달하는 채널. 10분 안에 핵심 통찰 획득.' },
  { id:'s18', name:'r/AskHistorians',           url:'https://www.reddit.com/r/AskHistorians/',
    type:'reddit',     cats:['통찰'],         days:[2],
    desc:'역사학자들이 직접 답변하는 Reddit 커뮤니티. 깊고 신뢰할 수 있는 역사 해설.' },
  { id:'s19', name:'History Today',             url:'https://www.historytoday.com',
    type:'website',    cats:['통찰'],         days:[2],
    desc:'역사 속 숨겨진 이야기들. 학술적이지만 읽기 쉬운 형식으로 제공.' },
  { id:'s20', name:'Overheard at Nat Geo',      url:'https://www.nationalgeographic.com/podcasts/overheard/',
    type:'podcast',    cats:['통찰','감동'],  days:[2,4],
    desc:'내셔널 지오그래픽 탐험가들의 비하인드 스토리. 역사·과학·문화의 생생한 교차점.' },

  /* ── 수요일 ── 철학·심리 ── */
  { id:'s21', name:'Philosophize This!',        url:'https://www.philosophizethis.org',
    type:'podcast',    cats:['통찰'],         days:[3],
    desc:'철학사를 스토리텔링으로. 입문부터 심화까지. 통찰의 연속. 무료.' },
  { id:'s22', name:'The School of Life',        url:'https://www.youtube.com/@theschooloflifeofficial',
    type:'youtube',    cats:['통찰','감동'],  days:[3],
    desc:'철학을 삶의 언어로 번역한 채널. 10분 영상 하나에 깊은 통찰이 담긴다.' },
  { id:'s23', name:'Hidden Brain',              url:'https://hiddenbrain.org',
    type:'podcast',    cats:['통찰','감동'],  days:[3],
    desc:'인간 심리의 숨겨진 면. NPR 팟캐스트. 예상 밖 연구 결과와 감동 스토리.' },
  { id:'s24', name:'Greater Good Magazine',     url:'https://greatergood.berkeley.edu',
    type:'website',    cats:['통찰','감동'],  days:[3],
    desc:'버클리 대학의 행복·감사·공감 연구 기반 에세이. 과학과 감동의 교차.' },
  { id:'s25', name:'Farnam Street',             url:'https://fs.blog',
    type:'newsletter', cats:['통찰'],         days:[3,5],
    desc:'정신 모델과 의사결정에 관한 깊은 글. 매주 뉴스레터로도 구독 가능. 통찰의 보고.' },
  { id:'s26', name:'Kurzgesagt',                url:'https://www.youtube.com/@kurzgesagt',
    type:'youtube',    cats:['통찰','감동'],  days:[3,4],
    desc:'과학·철학·심리 주제를 아름다운 애니메이션으로. 짧고 깊고 아름답다.' },
  { id:'s27', name:'Radiolab',                  url:'https://radiolab.org',
    type:'podcast',    cats:['통찰','감동'],  days:[3,4],
    desc:'과학과 철학이 만나는 팟캐스트. 예상치 못한 관점 전환이 탁월. 감동도 깊다.' },
  { id:'s28', name:'r/philosophy',              url:'https://www.reddit.com/r/philosophy/',
    type:'reddit',     cats:['통찰'],         days:[3],
    desc:'철학 토론과 큐레이션. Top Posts에서 핵심 통찰 이야기 발굴 가능.' },
  { id:'s29', name:'Big Think',                 url:'https://www.youtube.com/@bigthink',
    type:'youtube',    cats:['통찰'],         days:[3,4],
    desc:'세계 석학들의 짧은 강연 영상. 한 번에 하나의 통찰. 무료.' },
  { id:'s30', name:'Psychology Today',          url:'https://www.psychologytoday.com',
    type:'website',    cats:['통찰','유머'],  days:[3],
    desc:'심리학 연구를 실생활에 연결한 짧고 실용적인 글. 인간 심리의 의외성.' },

  /* ── 목요일 ── 과학·문화 ── */
  { id:'s31', name:'Quanta Magazine',           url:'https://www.quantamagazine.org',
    type:'website',    cats:['통찰'],         days:[4],
    desc:'최첨단 수학·과학 연구를 아름다운 스토리텔링으로. 무료, 광고 없음. 강력 추천.' },
  { id:'s32', name:'Veritasium',                url:'https://www.youtube.com/@veritasium',
    type:'youtube',    cats:['통찰','유머'],  days:[4],
    desc:'반직관적 과학 실험과 유머로 통찰을 전달하는 채널. 고퀄리티.' },
  { id:'s33', name:'99% Invisible',             url:'https://99percentinvisible.org',
    type:'podcast',    cats:['통찰','감동'],  days:[4],
    desc:'우리 주변 사물과 디자인의 숨겨진 이야기. 문화와 과학의 교차점에서 통찰 발굴.' },
  { id:'s34', name:'Atlas Obscura',             url:'https://www.atlasobscura.com',
    type:'website',    cats:['통찰','감동'],  days:[4],
    desc:'세계의 이상하고 놀라운 장소와 현상. 문화와 과학의 경계에서 의외의 이야기.' },
  { id:'s35', name:'Smarter Every Day',         url:'https://www.youtube.com/@SmarterEveryDay',
    type:'youtube',    cats:['통찰'],         days:[4],
    desc:'Destin Sandlin의 과학 탐구 채널. 일상 현상의 원리를 깊이 파고드는 접근.' },
  { id:'s36', name:'Nautilus',                  url:'https://nautil.us',
    type:'website',    cats:['통찰','감동'],  days:[4],
    desc:'과학과 인문학의 교차점. 깊은 통찰이 담긴 과학 에세이. 읽는 재미가 있다.' },
  { id:'s37', name:'r/todayilearned',           url:'https://www.reddit.com/r/todayilearned/',
    type:'reddit',     cats:['통찰','유머'],  days:[4],
    desc:'매일 새로운 반직관적 사실들. "아무도 몰랐던 것"의 보고. 통찰+유머의 원석.' },
  { id:'s38', name:'Science Friday',            url:'https://www.sciencefriday.com',
    type:'podcast',    cats:['통찰'],         days:[4],
    desc:'과학 뉴스와 심층 탐구. 전문적이지만 친근한 형식. 과학과 사회의 교점.' },
  { id:'s39', name:'Smithsonian Magazine',      url:'https://www.smithsonianmag.com',
    type:'website',    cats:['통찰','감동'],  days:[4],
    desc:'과학·역사·문화를 넘나드는 잡지. 풍부한 시각자료와 흥미로운 이야기.' },
  { id:'s40', name:'The Conversation',          url:'https://theconversation.com',
    type:'website',    cats:['통찰'],         days:[4,5],
    desc:'전 세계 학자들이 직접 쓴 시사 해설. 전문적이지만 접근하기 쉬운 형식.' },

  /* ── 금요일 ── 경제·정치 ── */
  { id:'s41', name:'Planet Money',              url:'https://www.npr.org/podcasts/510289/planet-money',
    type:'podcast',    cats:['유머','통찰'],  days:[5],
    desc:'NPR의 경제 팟캐스트. 복잡한 경제를 유머와 스토리텔링으로. 최고의 통찰+유머 조합.' },
  { id:'s42', name:'Freakonomics',              url:'https://freakonomics.com',
    type:'podcast',    cats:['통찰','유머'],  days:[5],
    desc:'경제학으로 세상의 숨겨진 진실 파헤치기. 유머와 통찰의 완벽한 조합. 강력 추천.' },
  { id:'s43', name:'Morning Brew',              url:'https://www.morningbrew.com',
    type:'newsletter', cats:['유머','통찰'],  days:[5],
    desc:'유머러스한 톤으로 전달하는 경제·비즈니스 뉴스레터. 딱딱한 경제를 재미있게.' },
  { id:'s44', name:'Not Just Bikes',            url:'https://www.youtube.com/@notjustbikes',
    type:'youtube',    cats:['통찰','감동'],  days:[5],
    desc:'도시 계획·정치·문화의 교차. "왜 우리 도시는 이렇게 됐을까?" 의외의 통찰.' },
  { id:'s45', name:'Marginal Revolution',       url:'https://marginalrevolution.com',
    type:'website',    cats:['통찰','유머'],  days:[5],
    desc:'경제학자 Tyler Cowen의 블로그. 일상의 경제학적 관점. 유머와 통찰이 가득.' },
  { id:'s46', name:'The Indicator (Planet Money)', url:'https://www.npr.org/podcasts/510325/the-indicator-from-planet-money',
    type:'podcast',    cats:['통찰','유머'],  days:[5],
    desc:'Planet Money의 짧은 버전. 10분 안에 경제의 한 단면을 깊이 파고드는 팟캐스트.' },
  { id:'s47', name:'r/Economics',               url:'https://www.reddit.com/r/economics/',
    type:'reddit',     cats:['통찰'],         days:[5],
    desc:'경제학 연구와 시사 분석. Top Posts에서 반직관적 경제 통찰 발굴 가능.' },
  { id:'s48', name:'Project Syndicate',         url:'https://www.project-syndicate.org',
    type:'website',    cats:['통찰'],         days:[5],
    desc:'세계 석학들의 경제·정치 분석. 노벨상 수상자들도 기고하는 신뢰할 수 있는 플랫폼.' },
  { id:'s49', name:'Odd Lots (Bloomberg)',       url:'https://www.bloomberg.com/oddlots',
    type:'podcast',    cats:['통찰'],         days:[5],
    desc:'Bloomberg의 독특한 경제 관점. 비주류 경제학자들의 의외의 분석. 통찰의 보고.' },
  { id:'s50', name:'Foreign Affairs',           url:'https://www.foreignaffairs.com',
    type:'website',    cats:['통찰'],         days:[5],
    desc:'국제 정치와 외교 정책의 심층 분석. 무게감 있는 시각. 무료 기사 제공.' },

  /* ── 한국어 소스 ── */
  { id:'s51', name:'브런치',                      url:'https://brunch.co.kr',
    type:'website',    cats:['통찰','감동'],  days:[1,2,3,4,5],
    desc:'국내 작가·일반인의 고품질 에세이 플랫폼. 통찰과 감동의 원석이 풍부하다. 큐레이터 추천 채널 탐색 가능.' },
  { id:'s52', name:'오늘의 유머',                 url:'https://www.todayhumor.co.kr',
    type:'website',    cats:['유머'],         days:[1,2,3,4,5],
    desc:'한국 인터넷 유머의 원천. 베스트 게시판에서 시대를 반영한 유머 감성 발굴 가능.' },
  { id:'s53', name:'시사IN',                      url:'https://www.sisain.co.kr',
    type:'website',    cats:['통찰'],         days:[5],
    desc:'국내 최고 수준의 심층 탐사 저널리즘. 경제·정치·사회의 구조적 통찰을 제공한다.' },
  { id:'s54', name:'딴지일보',                    url:'https://www.ddanzi.com',
    type:'website',    cats:['유머','통찰'],  days:[5],
    desc:'한국의 대표 풍자·패러디 미디어. 사회·정치 이슈를 유머로 비틀어 통찰을 만들어낸다.' },

  /* ── 유머 전담 소스 ── */
  { id:'s55', name:"McSweeney's Internet Tendency", url:'https://www.mcsweeneys.net/tendencies',
    type:'website',    cats:['유머'],         days:[1,2,3,4,5],
    desc:'문학적 수준의 미국 유머·풍자. 지성과 웃음이 동시에 터지는 품격 있는 코미디.' },
  { id:'s56', name:'The Onion',                   url:'https://www.theonion.com',
    type:'website',    cats:['유머'],         days:[5],
    desc:'세계 최고의 풍자 뉴스. 시사를 비트는 방식이 통찰과 웃음을 동시에 만들어낸다.' },
  { id:'s57', name:'Existential Comics',          url:'https://existentialcomics.com',
    type:'website',    cats:['유머','통찰'],  days:[3],
    desc:'철학자들을 코믹하게 그린 만화 시리즈. 철학 개념을 유머로 풀어 수요일(철학) 최적.' },
  { id:'s58', name:'Wait But Why',                url:'https://waitbutwhy.com',
    type:'website',    cats:['유머','통찰'],  days:[3,4],
    desc:'Tim Urban의 긴 형식 유머+통찰 에세이. 인류 문명·심리·과학을 독보적 스타일로 파고든다.' },

  /* ── 비서구권·다양성 ── */
  { id:'s59', name:'Sapiens',                     url:'https://www.sapiens.org',
    type:'website',    cats:['통찰','감동'],  days:[4],
    desc:'인류학 전문 무료 잡지. 비서구 문화·역사의 시각을 제공하는 보기 드문 소스.' },
  { id:'s60', name:'Emergence Magazine',          url:'https://emergencemagazine.org',
    type:'website',    cats:['통찰','감동'],  days:[4],
    desc:'생태·자연·인간문화의 교차. 아름다운 산문과 깊은 감동. 목요일(과학·문화) 최적.' },
  { id:'s61', name:'Public Domain Review',        url:'https://publicdomainreview.org',
    type:'website',    cats:['통찰','감동'],  days:[2],
    desc:'역사 속 기묘하고 아름다운 문서·이미지·텍스트 발굴. 화요일(역사) 최적의 원석 창고.' },
  { id:'s62', name:'Cabinet Magazine',            url:'https://cabinetmagazine.org',
    type:'website',    cats:['통찰'],         days:[2],
    desc:'역사·문화의 틈새를 파고드는 독창적 학술 잡지. 아무도 다루지 않는 이야기를 다룬다.' },

  /* ── 서브스택 뉴스레터 ── */
  { id:'s63', name:'Astral Codex Ten',            url:'https://www.astralcodexten.com',
    type:'newsletter', cats:['통찰','유머'],  days:[3],
    desc:'Scott Alexander의 인지과학·철학·사회 분석. 엄밀하고 유머러스한 독보적 글쓰기.' },
  { id:'s64', name:'Works in Progress',           url:'https://worksinprogress.news',
    type:'newsletter', cats:['통찰'],         days:[4],
    desc:'문명·기술·진보에 관한 깊은 분석. "왜 더 나아지고 있는가"를 과학적으로 탐구.' },
  { id:'s65', name:'Construction Physics',        url:'https://www.construction-physics.com',
    type:'newsletter', cats:['통찰'],         days:[5],
    desc:'제조업·경제·기술의 교차점. 의외의 구체적 사실로 경제의 숨겨진 면을 드러낸다.' },
  { id:'s66', name:'Noahpinion',                  url:'https://www.noahpinion.blog',
    type:'newsletter', cats:['통찰','유머'],  days:[5],
    desc:'경제학자 Noah Smith의 낙관론적 경제·정치 분석. 논쟁적이지만 근거가 탄탄하다.' },

  /* ── 아카이브·발굴형 소스 ── */
  { id:'s67', name:'Damn Interesting',            url:'https://www.damninteresting.com',
    type:'website',    cats:['통찰','유머'],  days:[2,4],
    desc:'"진짜로 흥미로운" 역사·과학 이야기만 선별. 제목 그대로의 퀄리티 보장. 강력 추천.' },
  { id:'s68', name:'Futility Closet',             url:'https://www.futilitycloset.com',
    type:'website',    cats:['통찰','감동'],  days:[2],
    desc:'역사 속 기묘하고 감동적인 이야기 전문. 화요일(역사·문학) 최적의 발굴 소스.' },
  { id:'s69', name:'Open Culture',                url:'https://www.openculture.com',
    type:'website',    cats:['통찰','감동'],  days:[2,3],
    desc:'거장들의 육성이 담긴 무료 강의·책·영상 큐레이션. 역사·철학·문학의 1차 자료 접근.' },

  /* ── SCJ 블로그 (6개월에 1회, 모든 요일) ── */
  { id:'scj', name:'SCJ 블로그',               url:'https://blog.naver.com/scjoe',
    type:'website',    cats:['통찰','유머','감동'], days:[1,2,3,4,5],
    freq:'semi-annual',
    desc:'큐레이터 SCJ의 개인 블로그. 요일별 주제에 맞는 글을 6개월에 1편 기준으로 선택. 출처: SCJ의 블로그.' }
];

/* ──────────────────────────────────────────────────────────
   IHE CONDITIONS  ·  큐레이터가 관찰한 조건 태깅용 마스터 목록
   2개월간 어떤 조건에서 좋은 이야기가 나오는지 추적
   ────────────────────────────────────────────────────────── */
const IHE_CONDITIONS = {
  '통찰': [
    '오랫동안 당연했던 것이 사실이 아닐 때',
    '반대 입장에서 보면 오히려 더 맞는 이야기일 때',
    '오류나 실패가 더 깊은 이해의 문을 열어줄 때',
    '완전히 다른 두 분야에서 같은 구조가 보이는 이야기',
    '아무도 아직 이름 붙이지 않은 것에 이름을 붙일 때',
    '보이지 않는 것 속에 진짜가 있을 때',
    '아주 작은 것이 사실 전부를 담고 있을 때',
    '주체와 객체가 뒤바뀌는 순간'
  ],
  '유머': [
    '기대를 만들었다가 완전히 다른 방향으로 어긋날 때',
    '진지하게 믿고 있지만 밖에서 보면 황당한 것',
    '거대한 것이 작게, 또는 작은 것이 거대하게 다뤄질 때',
    '위엄 없는 순간이 오히려 가장 인간적이었을 때',
    '해결책이 오히려 문제를 만들어낸 경우',
    '가장 하찮아 보이는 것이 가장 중요한 것이었을 때'
  ],
  '감동': [
    '말하지 못했던 것이 침묵 속에서 말해질 때',
    '취약함을 숨기지 않고 마주하는 순간',
    '아무도 보지 않을 때도 멈춰서 행동한 사람',
    '아주 구체적이지만 사실 모두의 이야기인 것',
    '아주 작은 순간이 사실 전부였던 이야기',
    '기대하지 않았던 곳에서 연결이 생길 때'
  ]
};

/* ──────────────────────────────────────────────────────────
   SEARCH GUIDE
   이야기를 찾기 전에 묻는 질문들 — 카테고리별 탐색 렌즈
   각 질문은 통찰/유머/감동이 생기는 '조건'에서 도출
   ────────────────────────────────────────────────────────── */
const SEARCH_GUIDE = {

  '통찰': {
    intro: '이 사이트에서 이런 이야기를 찾아보세요',
    questions: [
      {
        q: '아무도 아직 이름 붙이지 않은 것을 다루는 이야기',
        hint: '당연한 것에 처음으로 "왜?"를 물었을 때 보이는 것 — 체호프의 법칙이 삶의 법칙이 된 것처럼'
      },
      {
        q: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기',
        hint: '과학의 발견이 철학적 통찰이 되거나, 문학의 법칙이 경제를 설명할 때'
      },
      {
        q: '실패나 오류가 나중에 더 깊은 이해를 열어준 이야기',
        hint: '버리기 직전이 발견의 순간이 된 경우 — 페니실린처럼'
      },
      {
        q: '반대 입장에서 보면 오히려 맞는 이야기',
        hint: '관점을 180도 돌렸을 때 전혀 다른 진실이 보이는 것 — 깨진 유리창의 논리처럼'
      },
      {
        q: '오랫동안 당연했던 것이 사실이 아닌 이야기',
        hint: '상식이 조용히 뒤집히는 순간 — 자기인식 테스트처럼'
      }
    ]
  },

  '유머': {
    intro: '이 사이트에서 이런 이야기를 찾아보세요',
    questions: [
      {
        q: '진지하게 믿고 있지만 밖에서 보면 황당한 이야기',
        hint: '내부에서는 심각하지만 외부의 눈으로 보면 웃긴 것 — 황당한 경제 논리처럼'
      },
      {
        q: '기대를 만들었다가 전혀 다른 방향으로 어긋나는 이야기',
        hint: '웃으려다 웃을 수 없게 되는 반전 — 헤밍웨이 내기처럼'
      },
      {
        q: '해결책이 오히려 문제를 만들어낸 경우',
        hint: '자기 논리가 스스로를 무너뜨리는 것 — 선의가 반대 결과를 낳을 때'
      },
      {
        q: '거대한 것이 작게, 또는 작은 것이 거대하게 다뤄지는 이야기',
        hint: '스케일이 뒤집힐 때 생기는 웃음 — 침팬지가 인간보다 자기인식을 잘하는 것처럼'
      },
      {
        q: '위엄 있어 보이지만 사실 굉장히 인간적인 이야기',
        hint: '권위가 무너지는 순간의 솔직함 — 커피값 못 낸 사람이 나중에 배우자가 된 것처럼'
      }
    ]
  },

  '감동': {
    intro: '이 사이트에서 이런 이야기를 찾아보세요',
    questions: [
      {
        q: '아주 구체적이지만 사실 모두의 이야기인 것',
        hint: '한 사람의 특별한 이야기 속에서 나 자신을 발견하는 순간 — 영수증 한 장처럼'
      },
      {
        q: '아무도 보지 않을 때도 그것을 한 사람의 이야기',
        hint: '관객 없는 헌신이 드러나는 순간 — 플레밍이 "왜?"를 물은 것처럼'
      },
      {
        q: '취약함이 숨겨지지 않고 품위 있게 다뤄지는 순간',
        hint: '약함을 인정하는 것이 오히려 강함이 되는 것 — 거울 앞에 서는 용기처럼'
      },
      {
        q: '말하지 못했던 것이 이야기 속에서 말해지는 순간',
        hint: '침묵이 말보다 더 많이 말하는 경우 — 헤밍웨이의 여섯 단어처럼'
      },
      {
        q: '아주 작은 순간이 사실 전부였던 이야기',
        hint: '커피 한 잔의 기억이 결혼의 이유가 되는 것처럼 — 디테일이 의미의 전부일 때'
      }
    ]
  }
};

/* ──────────────────────────────────────────────────────────
   MONTHLY_OBJECTS
   매월 하나씩 바뀌는 "그리운 오브제" — 하단 띠 이미지 + 이야기 소재 참조
   각 항목: { name, desc, ihe, svgId, storyHints[] }
   ────────────────────────────────────────────────────────── */
const MONTHLY_OBJECTS = [
  /* 1월 */ {
    name: '손으로 감는 필름 카메라',
    desc: '셔터를 누르기 전 한 번 더 생각하게 만들던 물건',
    ihe: '통찰',
    storyHints: [
      '36컷이 전부였던 시절, 무엇을 남길지 고르는 일의 의미',
      '현상소에서 사진을 받아오던 두근거림 — 기다림이 감정을 키우던 방식',
      '흔들린 사진 한 장이 완벽한 사진보다 더 오래 기억되는 이유'
    ]
  },
  /* 2월 */ {
    name: '연탄 집게와 연탄',
    desc: '새벽에 연탄을 갈아주던 사람의 손끝에 담긴 온기',
    ihe: '감동',
    storyHints: [
      '새벽 4시에 일어나 연탄을 갈아주던 부모의 이야기',
      '연탄 구멍 19개 — 구멍이 뚫려 있어야 불이 붙는다는 것',
      '몸을 써서만 전달할 수 있었던 사랑의 형식들'
    ]
  },
  /* 3월 */ {
    name: '교실 칠판 분필과 지우개',
    desc: '틀리면 지우고 다시 쓸 수 있었던, 가장 관대한 매체',
    ihe: '유머',
    storyHints: [
      '선생님 흉내를 내다 들켰을 때의 그 정적',
      '칠판 앞에 나가는 것이 왜 그렇게 두려웠는지',
      '분필 가루 속에서 가장 오래 기억되는 수업 한 장면'
    ]
  },
  /* 4월 */ {
    name: '빨간 공중전화 박스',
    desc: '동전 하나로 세상과 연결되던 작은 유리 방',
    ihe: '감동',
    storyHints: [
      '동전이 다 떨어지기 전에 하고 싶었던 말',
      '기다리는 사람과 전화하는 사람, 그 거리의 온도',
      '연결되지 않는 신호음을 듣던 것이 지금의 "읽음" 표시와 같은 감정인가'
    ]
  },
  /* 5월 */ {
    name: '운동회 달리기 결승선 테이프',
    desc: '1등이 아니어도 끊고 싶었던 하얀 실 한 가닥',
    ihe: '유머',
    storyHints: [
      '계주에서 바통을 놓친 아이와 다시 줍는 아이',
      '꼴찌로 들어왔는데 박수가 가장 크게 나왔던 이유',
      '이기기 위해서가 아니라 달리기 위해 뛴 사람들'
    ]
  },
  /* 6월 */ {
    name: '모기향 코일',
    desc: '여름 저녁 마루 끝에서 피어오르던 연기와 향',
    ihe: '감동',
    storyHints: [
      '모기장 안에서 가족이 함께 누워 이야기를 나누던 밤',
      '더위보다 그 냄새가 먼저 떠오르는 여름의 기억',
      '불편함이 오히려 가까움을 만들었던 공간들'
    ]
  },
  /* 7월 */ {
    name: '팥빙수 기계',
    desc: '얼음을 갈아 만들던 소리, 그 여름의 사운드트랙',
    ihe: '유머',
    storyHints: [
      '빙수 한 그릇에 팥 더 달라고 싸웠던 형제자매의 이야기',
      '소복하게 쌓인 얼음이 무너지는 순간의 허무와 기쁨',
      '지금 빙수는 왜 그때보다 비싸고 왜 그때보다 맛이 없는가'
    ]
  },
  /* 8월 */ {
    name: '삐삐(무선호출기)',
    desc: '숫자로만 마음을 전했던, 암호 같은 사랑의 언어',
    ihe: '통찰',
    storyHints: [
      '"0821(빨리와)" "1004(천사)" — 숫자가 언어가 된 시절',
      '응답 없는 숫자를 반복해서 보내던 밤의 감정',
      '즉각 연결이 없었을 때 오히려 기다림이 관계를 단단하게 했는가'
    ]
  },
  /* 9월 */ {
    name: '드럼통 군고구마',
    desc: '골목 어귀에서 피어오르던 연기와 달콤한 냄새',
    ihe: '감동',
    storyHints: [
      '빈 주머니를 탈탈 털어 고구마 하나를 사줬던 사람',
      '식어도 맛있었던 이유 — 온기를 나눠 가진 것이기 때문에',
      '사라진 것들이 남긴 냄새에 대하여'
    ]
  },
  /* 10월 */ {
    name: '다이얼 라디오',
    desc: '잡음 사이에서 좋아하는 노래를 찾아내던 집중의 시간',
    ihe: '통찰',
    storyHints: [
      '주파수를 맞추는 것이 대화와 닮아 있다는 것',
      '노이즈 속에서만 들리는 신호들 — 완벽한 수신의 역설',
      '밤 11시 라디오 DJ가 모르는 청취자에게 보내던 위로의 형식'
    ]
  },
  /* 11월 */ {
    name: '브라운관 TV (토끼귀 안테나)',
    desc: '온 가족이 같은 걸 보던 시절, 채널은 하나였지만 이야기는 더 많았다',
    ihe: '감동',
    storyHints: [
      '명절에 온 가족이 둘러앉아 같은 화면을 보던 것의 의미',
      '채널이 세 개뿐일 때 더 많이 이야기했던 이유',
      '안테나 방향을 잡아주던 아버지의 뒷모습'
    ]
  },
  /* 12월 */ {
    name: '손 편지와 우표',
    desc: '쓰는 사람의 손 온기가 종이에 남아있던 통신의 시절',
    ihe: '감동',
    storyHints: [
      '보내고 나면 수정할 수 없었던 말들의 무게',
      '우표를 붙이는 것이 마음을 봉인하는 의식이었던 이유',
      '지금도 서랍 어딘가에 남아있을 그 편지의 의미'
    ]
  }
];

/* ──────────────────────────────────────────────────────────
   FILM_SOURCES — 영화·드라마·도서 참조 소스 (AI 프롬프트용)
   카테고리: 'book' | 'web' | 'journal' | 'film' | 'drama'
   ────────────────────────────────────────────────────────── */
const FILM_SOURCES = [
  /* 글·도서 */
  { id: 'src-01', cat: 'book',   ihe: ['통찰','감동'], name: '체호프 단편전집',          url: 'https://www.gutenberg.org/ebooks/author/195',       note: '말하지 않는 것 속에 진실 — 침묵의 통찰' },
  { id: 'src-02', cat: 'book',   ihe: ['통찰','유머'], name: '마크 트웨인 단편',          url: 'https://www.gutenberg.org/ebooks/author/53',        note: '아이러니와 풍자로 빚은 미국적 유머의 원형' },
  { id: 'src-03', cat: 'book',   ihe: ['감동'],        name: '생텍쥐페리 - 어린왕자',     url: 'https://www.gutenberg.org/ebooks/61',               note: '어른이 잊은 것을 아이의 시선으로 되찾는 이야기' },
  { id: 'src-04', cat: 'book',   ihe: ['통찰','감동'], name: 'O. 헨리 단편집',            url: 'https://www.gutenberg.org/ebooks/author/142',       note: '반전이 감동이 되는 순간 — 마지막 잎새의 구조' },
  { id: 'src-05', cat: 'book',   ihe: ['통찰'],        name: '말콤 글래드웰 저작',        url: 'https://www.gladwellbooks.com',                     note: '통계와 일화가 만나 통찰이 되는 논픽션' },
  { id: 'src-06', cat: 'book',   ihe: ['감동','통찰'], name: '빅터 프랭클 - 죽음의 수용소',url: 'https://archive.org/details/manssearchformea00fran', note: '극한에서 발견하는 의미 — 감동과 통찰의 원천' },

  /* 웹·저널 */
  { id: 'src-11', cat: 'web',    ihe: ['통찰','유머'], name: 'Aeon Essays',               url: 'https://aeon.co',                                   note: '철학·과학·문화를 아우르는 깊이 있는 에세이' },
  { id: 'src-12', cat: 'web',    ihe: ['통찰'],        name: 'Farnam Street Blog',         url: 'https://fs.blog',                                   note: '사고방식과 멘탈 모델에 관한 통찰 중심 글' },
  { id: 'src-13', cat: 'web',    ihe: ['유머','통찰'], name: 'The Onion (풍자)',           url: 'https://www.theonion.com',                          note: '현실을 비틀어 진실을 드러내는 풍자 뉴스' },
  { id: 'src-14', cat: 'web',    ihe: ['감동'],        name: 'Humans of New York',         url: 'https://www.humansofnewyork.com',                   note: '평범한 사람의 이야기에서 모두의 이야기를 보는 방식' },
  { id: 'src-15', cat: 'journal',ihe: ['통찰'],        name: 'Harvard Business Review',    url: 'https://hbr.org',                                   note: '경제·조직·리더십의 반전과 통찰' },

  /* 영화 */
  { id: 'src-21', cat: 'film',   ihe: ['통찰','감동'], name: '봉준호 영화 (기생충·마더·살인의 추억)', url: 'https://www.imdb.com/name/nm0094435/',    note: '계급·구조·인간 본성을 날카롭게 포착 — 장면 하나로 전체가 뒤집힘' },
  { id: 'src-22', cat: 'film',   ihe: ['통찰','감동'], name: '이창동 영화 (버닝·시·오아시스)',        url: 'https://www.imdb.com/name/nm0227016/',    note: '언어로 설명 안 되는 것을 필름으로 — 통찰의 영화' },
  { id: 'src-23', cat: 'film',   ihe: ['감동'],        name: '미야자키 하야오 (이웃집 토토로·센과 치히로)', url: 'https://www.ghibli.jp',              note: '상실·성장·사랑의 보편적 감동 — 어른을 위한 어린이 이야기' },
  { id: 'src-24', cat: 'film',   ihe: ['감동','통찰'], name: '시네마 천국 (1988)',                    url: 'https://www.imdb.com/title/tt0095765/',   note: '기억과 시간, 사랑과 이별 — 그리움이 이야기의 전부인 영화' },
  { id: 'src-25', cat: 'film',   ihe: ['유머','통찰'], name: '찰리 채플린 단편 (퍼블릭 도메인)',      url: 'https://www.charliechaplin.com',          note: '몸으로 말하는 보편적 유머 — 웃음 뒤에 오는 날카로움' },
  { id: 'src-26', cat: 'film',   ihe: ['통찰','유머'], name: '홍상수 영화',                           url: 'https://www.imdb.com/name/nm0388215/',    note: '반복과 어긋남 — 일상의 황당함이 철학이 되는 순간' },
  { id: 'src-27', cat: 'film',   ihe: ['감동'],        name: '인생은 아름다워 (1997)',                url: 'https://www.imdb.com/title/tt0118799/',   note: '극한의 상황에서도 아이에게 유머로 세상을 보여준 아버지' },
  { id: 'src-28', cat: 'film',   ihe: ['통찰'],        name: '메멘토 / 인셉션 (놀란)',                url: 'https://www.imdb.com/name/nm0634240/',    note: '기억과 현실의 경계 — 구조 자체가 통찰인 영화' },

  /* 드라마 */
  { id: 'src-31', cat: 'drama',  ihe: ['감동','통찰'], name: '나의 아저씨 (2018)',         url: 'https://www.imdb.com/title/tt7952842/',              note: '말 없는 위로, 존재만으로의 감동 — 인간의 무게를 다루는 방식' },
  { id: 'src-32', cat: 'drama',  ihe: ['감동'],        name: '나의 해방일지 (2022)',       url: 'https://www.imdb.com/title/tt17468750/',             note: '평범한 일상에서 해방의 의미를 묻는 — 조용한 감동' },
  { id: 'src-33', cat: 'drama',  ihe: ['감동','유머'], name: '응답하라 시리즈 (2012-2016)',url: 'https://www.imdb.com/title/tt2361509/',              note: '시대와 기억에 대한 감동 — 그리운 오브제와 직결' },
  { id: 'src-34', cat: 'drama',  ihe: ['통찰'],        name: '미생 (2014)',                url: 'https://www.imdb.com/title/tt4032482/',              note: '바둑판 위 인생의 불완전함 — 조직과 인간에 대한 통찰' },
  { id: 'src-35', cat: 'drama',  ihe: ['유머','감동'], name: '무한도전 명장면',            url: 'https://namu.wiki/w/무한도전',                       note: '한국인의 집단 유머 DNA — 진지함과 황당함의 경계' },
  { id: 'src-36', cat: 'drama',  ihe: ['통찰','감동'], name: 'The Office (미국판)',        url: 'https://www.imdb.com/title/tt0386676/',              note: '일상의 어긋남 — 직장이라는 공간의 유머와 통찰' },
  { id: 'src-37', cat: 'drama',  ihe: ['감동','통찰'], name: 'Breaking Bad',               url: 'https://www.imdb.com/title/tt0903747/',              note: '평범한 인간이 선택의 무게로 변해가는 과정 — 통찰의 드라마' },
  { id: 'src-38', cat: 'drama',  ihe: ['감동'],        name: '이상한 변호사 우영우 (2022)',url: 'https://www.imdb.com/title/tt19850606/',             note: '다름이 통찰이 되는 순간 — 세상을 보는 새로운 렌즈' }
];

/* ── Exploration start date (2025년 1월 6일, 월요일) ── */
const EXPLORE_START = new Date('2025-01-06');
const EXPLORE_WEEKS = 8;
