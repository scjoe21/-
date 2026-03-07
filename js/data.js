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
const STORIES = {

  /* ═══ 월요일 — 사랑·감동 (PRIMARY: 감동) ═══ */
  1: {
    title: '헬렌 켈러의 "water"',
    category: '사랑·감동',
    primaryType: '감동',
    types: ['감동', '통찰'],
    image: 'images/story-mon.png',
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
      url: 'https://www.britannica.com/biography/Helen-Keller'
    },
    curatorNote: '설리번이 수십 번 반복했는데도 헬렌은 이해하지 못하다가, 그날 갑자기 "켜졌습니다". 무엇이 달랐을까 자꾸 생각하게 됩니다. 준비가 됐을 때 연결이 일어나는 것인지, 아니면 연결이 일어나야 준비가 되는 것인지.',
    qna: {
      question: '당신이 처음으로 어떤 것의 "이름"을 알게 된 순간이 있나요? 몰랐다가 알게 되면서 세상이 달리 보이기 시작한 그 순간.',
      answer: '헬렌에게 "water"는 단순한 단어가 아니었습니다. 존재와 이름이 연결되는 순간이었습니다. 우리도 매일 새로운 언어를 배웁니다 — 슬픔에 이름을 붙이면 덜 무섭고, 기쁨에 이름을 붙이면 더 오래 남습니다. 이름 짓기는 세상을 여는 일입니다.'
    },
    publishedDate: '2026년 3월',
    imagePrompt: 'A young blind and deaf girl of about 7, her face turning toward the sky in sudden wonder, one hand under a water pump, the other held by a young teacher writing on her palm, Alabama farm 1887, morning light, moment of awakening, line drawing watercolor style'
  },

  /* ═══ 화요일 — 문학·역사 (PRIMARY: 통찰) ═══ */
  2: {
    title: '세르반테스의 감옥',
    category: '문학·역사',
    primaryType: '통찰',
    types: ['통찰', '감동'],
    image: 'images/story-tue.png',
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
      url: 'https://www.britannica.com/biography/Miguel-de-Cervantes'
    },
    curatorNote: '"이미 잃을 것이 없는 사람의 용기." 세르반테스가 돈키호테를 비웃지 않았다는 것이 내내 마음에 남습니다. 포로 5년, 감옥 두 번을 겪은 사람이 풍차에 돌진하는 사람을 어떻게 우습게 볼 수 있었을까요.',
    qna: {
      question: '지금 당신에게 막혀 있는 시간이 있다면, 그 시간이 나중에 무엇의 재료가 될 수 있을까요?',
      answer: '세르반테스의 감옥은 그를 멈추게 했지만, 동시에 이야기를 만들게 했습니다. 막힌 시간이 반드시 낭비는 아닙니다. 다만 그 시간 안에서 무엇을 구상하느냐는 각자의 몫입니다.'
    },
    publishedDate: '2026년 3월',
    imagePrompt: 'A middle-aged man with a withered left arm writing by candlelight in a Spanish prison cell, straw on the floor, barred window letting in evening light, his face calm and focused, 16th century Spain, line drawing watercolor style'
  },

  /* ═══ 수요일 — 철학·심리 (PRIMARY: 통찰) ═══ */
  3: {
    title: '융과 프로이트의 결별',
    category: '철학·심리',
    primaryType: '통찰',
    types: ['통찰', '감동'],
    image: 'images/story-wed.png',
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
      url: 'https://www.britannica.com/biography/Carl-Jung'
    },
    curatorNote: '"내 권위가 손상될 수 있다"는 한 마디에 융이 돌아섰다는 것. 진실보다 권위를 택하는 순간을 목격할 때의 그 실망감 — 융이 느낀 것이 그것이었을 것 같습니다.',
    qna: {
      question: '당신이 존경하던 사람에게서 처음으로 실망했던 순간이 있나요? 그 실망이 이후 당신을 어디로 이끌었나요?',
      answer: '융은 프로이트에게 실망한 뒤, 혼자만의 방향으로 갔습니다. 집단무의식, 원형 — 프로이트가 결코 가지 않았을 영역으로. 실망이 독립을 만들 때가 있습니다. 의존이 깨지면서 자신만의 목소리가 생기는 것입니다.'
    },
    publishedDate: '2026년 3월',
    imagePrompt: 'Two men in early 20th century European suits sitting across a table covered with books and papers, one older with a beard looking away, one younger staring directly, Vienna study 1912, warm lamp light, tension in body language, line drawing watercolor style'
  },

  /* ═══ 목요일 — 과학·문화 (PRIMARY: 통찰) ═══ */
  4: {
    title: '허블의 밤',
    category: '과학·문화',
    primaryType: '통찰',
    types: ['통찰', '감동'],
    image: 'images/story-thu.png',
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
      url: 'https://www.britannica.com/biography/Edwin-Hubble'
    },
    curatorNote: '허블이 "VAR!"이라고 쓴 그 사진 건판이 실제로 남아 있습니다. 캘리포니아 카네기 천문대 아카이브에. 우주가 바뀐 순간의 필체가 남아 있다는 것이 이상하게 감동적이었습니다.',
    qna: {
      question: '당신이 알고 있다고 믿었던 세계의 경계가 무너진 순간이 있나요? 그 이후 세계가 어떻게 달라졌나요?',
      answer: '허블의 발견이 충격적인 것은 숫자가 아닙니다. 어제까지 진실이었던 것이 오늘 지도를 다시 그려야 할 이유가 됐다는 것입니다. 우리의 지도도 언제든 다시 그려질 수 있습니다. 그것이 두렵기보다 흥미로운 일일 수도 있습니다.'
    },
    publishedDate: '2026년 3월',
    imagePrompt: 'An astronomer at a massive telescope eyepiece on a mountaintop observatory at night, star-filled sky visible through the dome opening, the man writing "VAR!" on a glass photographic plate, expression of quiet awe, 1923 California, line drawing watercolor style'
  },

  /* ═══ 금요일 — 예술·한국 (PRIMARY: 유머) ═══ */
  5: {
    title: '김홍도의 마당',
    category: '예술·한국',
    primaryType: '유머',
    types: ['유머', '통찰'],
    image: 'images/story-fri.png',
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
    imagePrompt: 'Joseon dynasty Korea, a lively scene like Kim Hongdo\'s genre painting — villagers watching a ssireum wrestling match, spectators with varied expressions of excitement and laughter, traditional hanbok clothing, ink brush and watercolor style, warm earthy tones, 18th century Korean folk scene'
  }
};

/* ──────────────────────────────────────────────────────────
   STORY_ARCHIVE  ·  지난 주 이야기 모음
   새 주 시작 시: 이번 주 STORIES 내용을 복사해 새 항목으로 추가 후 배포
   형식: { weekLabel: '2026년 3월 첫째 주', stories: { 1:{...}, 2:{...}, ... } }
   ────────────────────────────────────────────────────────── */
const STORY_ARCHIVE = [
  {
    weekLabel: '2026년 3월 1주 (3/2–3/6)',
    stories: {
      1: {
        title: '이그나즈 제멜바이스의 손',
        category: '의학·역사',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: 'images/story-mon.png',
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
          url: 'https://www.britannica.com/biography/Ignaz-Semmelweis'
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
        image: 'images/story-tue.png',
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
          url: 'https://www.britannica.com/biography/Fyodor-Dostoyevsky'
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
        image: 'images/story-wed.png',
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
        image: 'images/story-thu.png',
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
        image: 'images/story-fri.png',
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
          url: 'https://www.britannica.com/biography/Richard-Feynman'
        },
        curatorNote: '파인만이 청문회에 얼음물 한 컵을 들고 나타났다는 장면이 자꾸 생각납니다. 준비물이 그것뿐이었다는 것. 수백 페이지 보고서를 읽은 사람들 앞에서, 그는 30초짜리 실험을 했습니다.',
        qna: {
          question: '지금 당신이 복잡하게 느끼는 문제가 있다면, 그것을 얼음물 한 컵으로 보여줄 수 있을 만큼 단순하게 말할 수 있습니까?',
          answer: '파인만이 보여준 건 물리 실험이 아니라 사고방식이었습니다. 진짜 이해는 단순하게 말할 수 있어야 한다는 것. 복잡한 언어 뒤에 숨어있는 것이 무지인지 진실인지, 그 질문을 계속 가져가는 것이 파인만식 사고입니다.'
        },
        publishedDate: '2026년 3월'
      }
    }
  }
];

/* ──────────────────────────────────────────────────────────
   SOURCES  ·  50개 소스 탐색 풀
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
