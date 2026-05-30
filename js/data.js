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
/* (지난 주 5/18–5/23 — STORY_ARCHIVE 로 이동됨) */
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

  /* ═══ 토요일 — 에세이·일상 (PRIMARY: 통찰) ═══ */
  6: {
    title: '시간의 체크메이트',
    category: '에세이·일상',
    primaryType: '통찰',
    types: ['통찰', '감동'],
    image: 'images/시간의 체크메이트.jpg',
    svgKey: null,
    body: [
      '"체크메이트(Checkmate)!"',
      '또 당했다. 막내에게 쓰라린 패배를 다시 맛보았다. 분명 앞서고 있었는데, 막내가 나이트(Knight)와 루크(Rook)로 급소를 파고들더니 어느새 "체크메이트"를 외쳤다. 아무리 초보자이고 체스에 별 관심이 없다 하더라도, 내가 초등학교 2학년에게 진다는 것은 받아들이기 힘들다. 인정하자니 스스로가 한심하고, 부정하자니 벌써 한 두 번 진 게 아니다. 사실 막내가 나의 퀸즈갬빗(Queen\'s Gambit)을 거절하고 캐슬링(Castling)을 구사할 때부터 심상치 않았다. 이제 막내가 \'한 수 위\'란 걸 솔직히 인정할 때가 된 것이다.',
      '어쩔 수 없이 인정해야 것이 또 있다. 바로 시간의 흐름이다. 벌써 3년이 흘러 이제 나는 시드니를 떠난다. 싫어도 정들었던 동료들과 헤어져야 하고, 아무리 좋아도 깨끗한 공기와 아름다운 해변을 남겨두고 떠나야 한다.',
      '이렇게 시간이 던지는 체크메이트는 나를 꼼짝달싹 못하게 한다.',
      '체스야 다시 두면 그만이지만, 시간의 체크메이트에 대해서는 도무지 할 수 있는 게 없는 듯하다. 더 잘 이별하는 방법이라도 있으면 좋으련만…….',
      '하지만 다시 생각해 보면, 체스에서 체크메이트를 당한 것은 반가운 일이기도 하다. 애가 집중력이 좋고 똑똑하다는 뜻이다. 졌다고 한탄할 게 아니라 오히려 기뻐할 일인 것이다.',
      '시간의 체크메이트도 그렇다. 살면서 가장 행복했던 시드니 생활이 멋지게 마무리되는 매듭이고, 좋은 사람들과의 나눔이 아름다운 추억이 되는 전환점이다. 더 나아가 그리운 세종으로 향하는 새 출발이고, 보고 싶은 사람들을 다시 만나는 설렘이다. 이렇듯 시간의 체크메이트는 시드니에서 세종으로 나를 데려다주고, 간직하고 싶은 기억과 앞으로의 기대를 이어준다.',
      '어쩌면 시간의 체크메이트는 나에게 이런 가르침을 주는 듯하다. 어쩔 수 없이 받아들여야 하는 것에 대해서는 그저 감사하면 된다고. 좋아했던 사람들을 축복하며 아름다웠던 추억을 그리워하면 된다고.',
      '아참, 그러고 보니 체크메이트에서 배울 수 있는 게 하나 더 있다.',
      '나는 막내에게 체스를 가르쳐 준 적이 없다. 막내 실력은 방과 후 특별활동에 참여하고 형이나 책을 통해 혼자 배운 결과다. 체스 실력뿐 아니라 재능이나 성격 등도 부모가 관여한 게 거의 없고, 그저 애 혼자 자라온 듯하다. 부모가 자녀를 키운 것 같아도 오히려 자녀가 부모를 자라게 한다더니만 정말 그렇다.',
      '시간의 체크메이트도 마찬가지다. 내가 수고한 것 같아도 사실은 직원들이 함께 마음을 합해줘서 지금까지 잘 지내온 거다. 못난 나를 동료들이 잘 봐주어서 그저 봐줄 만한 사람으로 살아온 거다. 동료들의 섬김과 사랑이 없었다면 나는 아무것도 아니었다. 온전히 동료들 덕택에 이나마 지금의 내가 된 것이라고 고백할 수밖에 없다.',
      '그리고 마지막으로 체크메이트는 시간의 흐름에 따라 춤출 수 있는 지혜를 선사한다. \'춤추라, 아무도 보지 않는 것처럼\' 그리고 \'살라, 오늘이 마지막인 것처럼\'이라고 하더니만, 정말 그렇다. 그렇게 살고 싶다.'
    ],
    closing: '초등학교 2학년 막내에게 또 졌다.\n3년의 시드니가 끝나고 세종으로 간다.\n시간의 체크메이트 앞에서\n나는 그저 춤추기로 했다.',
    analysis: {
      insight: { icon: '💡', text: '받아들여야 하는 것에는 감사로 답하면 된다 — 졌다는 것이 곧 잘 키웠다는 뜻일 수 있다.',
                 condition: '작은 것이 사실 전부였음이 드러날 때' },
      humor:   { icon: '😄', text: '초등학교 2학년에게 퀸즈갬빗을 거절당하고 캐슬링에 당한 아빠 — 한심함과 자랑이 한 판에 같이 들어 있다.',
                 condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
      emotion: { icon: '❤️', text: '"동료들의 섬김과 사랑이 없었다면 나는 아무것도 아니었다." 시드니를 떠나며 내려놓은 한 줄.',
                 condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
    },
    source: {
      type: '에세이',
      credit: 'SCJ / blog.naver.com/scjoe',
    },
    curatorNote: '체스에서 진 것을 받아들이고 나면, 시간에서 진 것도 받아들일 수 있게 됩니다. 받아들이고 나면 감사가 남고, 감사 위에서 춤이 시작됩니다. 시드니에서 세종으로 떠나는 한 사람이 시간의 체크메이트 앞에서 그렇게 결심합니다.',
    publishedDate: '2026년 5월 23일',
  },
};

/* ──────────────────────────────────────────────────────────
   STORIES  ·  이번 주 이야기 (5/25–5/30, 2026년 5월 4주)
   ────────────────────────────────────────────────────────── */
const STORIES = {

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

  /* ═══ 토요일 — 에세이·일상 (PRIMARY: 통찰) ═══ */
  6: {
    title: '빨리빨리 안 다닐래',
    category: '에세이·일상',
    primaryType: '통찰',
    types: ['통찰', '감동'],
    image: 'images/빨리 빨리 안 다닐래.png',
    svgKey: null,
    body: [
      '"인간의 힘으로는 과거도 타인도 바꿀 수 없다. 그러나 미래와 자신은 바꿀 수 있다." — 에릭 번',
      '온 가족이 필립 아일랜드로 여행을 갔다. 이 섬은 멜버른에서 차로 한 시간 반 거리에 있는데 펭귄 구경으로 유명하다. 펭귄 무리는 아침에 테즈마니아로 갔다가 해 질 녘에 섬으로 돌아오는데, 이 펭귄들을 보려고 수많은 사람들이 방문한다.',
      '관람석에 앉아 40분을 기다렸더니 해변으로 올라오는 펭귄 한 마리가 눈에 들어왔다. 근데 이 녀석이 자기의 등장에 환호하는 수천 명의 사람들에게 놀랐는지 아니면 부끄러웠는지 바다로 다시 들어가 버리는 게 아닌가? 학수고대하던 펭귄은 사라져버리고, 바닷바람도 많이 차가워져서 조바심이 생겼다.',
      '참다못한 첫째가 한마디 했다. "빨리빨리 안 다닐래?"',
      '애꿎은 펭귄을 혼내는 게 재밌었다. 안 그래도 온 가족을 여기까지 데려온 게 민망해질 찰나에, 그리고 추운데 계속 기다려야 되는지 확신이 없는 순간에, 비난의 화살이 펭귄한테로 가버려서 맘 편히 웃을 수 있었다.',
      '근데 사실 "빨리빨리 안 다닐래?"라는 말은 첫째가 주로 나나 집사람에게 듣던 말이다. 공부하고는 거리가 먼 첫째는 고등학생이 되자 야간자율학습을 당당히 거부했다. 그런데 친구들과 어울리려 하니, 밤공부가 끝나야 아이들을 만날 수 있었다. 결국 첫째는 친구들과 놀다가 야밤에 귀가하는 게 일쑤였다.',
      '\'뭐 하고 다니냐\'라고 물으면, 인생상담, 진로상담 심지어 연애상담까지 친구들에게 해 준단다. 더 답답해지는 지점이다. 내가 보기에 상담이 필요한 사람은 오히려 자신 같은데……. 주제 파악 못하는 첫째가 걱정돼서, "빨리빨리 안 다닐래?"로 대표되는 훈계들을 하곤 했다.',
      '한편, \'빨리빨리\'는 나나 기성세대들이 우리 부모님들에게도 수없이 들은 말이기도 하다. 돈도 백도 없이 성실함만으로 일어서야 했던 세대가 붙잡았던 일종의 구호 같은 것이다.',
      '그러나 \'잘 살아보세\'를 향한 전력질주가 개인을 그럭저럭 살게 했을지 몰라도, 함께 잘 사는 사회를 만들지는 못한 것 같다. 그러다 보니 요즘 청년들이 마주한 세상은 변변한 직장 잡기가 그렇게 힘들고, 아무리 열심히 일해도 집 한 채 장만하기 어렵다.',
      '어찌 보면 늦다고 젊은이들을 탓할 일이 아닌 거다. \'빨리빨리\'보다 \'좀 늦어도 괜찮아\'라고 말할 수 있는 세상을 만들 책임이 우리에게 있다.'
    ],
    closing: '펭귄에게 화가 났다.\n"빨리빨리 안 다닐래?"\n그 말이 한때 내 말이었다.\n이제는 내가 들어야 하는 말이다.',
    analysis: {
      insight: { icon: '💡', text: '\'빨리빨리\'가 한 세대를 일으켰지만, 같이 잘 사는 사회를 만들지는 못했다. 늦다고 탓할 일이 아니다.',
                 condition: '작은 것이 사실 전부였음이 드러날 때' },
      humor:   { icon: '😄', text: '펭귄에게 "빨리빨리 안 다닐래?"라고 외친 아들이, 사실은 자기가 평생 들어온 말을 외친 것이었다.',
                 condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
      emotion: { icon: '❤️', text: '"\'빨리빨리\'보다 \'좀 늦어도 괜찮아\'라고 말할 수 있는 세상을 만들 책임이 우리에게 있다." 한 세대가 다음 세대에게 미안해하는 한 줄.',
                 condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
    },
    source: {
      type: '에세이',
      credit: 'SCJ / blog.naver.com/scjoe',
    },
    curatorNote: '펭귄에게 외친 한마디가 결국 자기에게 돌아옵니다. 한 세대가 다음 세대에게 했던 말이, 사실은 자기 세대가 받았어야 했던 말이었다는 깨달음. "빨리빨리"의 자리에 "좀 늦어도 괜찮아"를 놓을 수 있는 세상은, 누구도 펭귄을 혼내지 않는 세상이기도 합니다.',
    publishedDate: '2026년 5월 30일',
  },
};

/* ──────────────────────────────────────────────────────────
   NEXT_WEEK_STORIES  ·  다음 주 예고 (다음 주 글을 여기에 채운 뒤,
   주가 바뀌면 stories를 STORIES로 옮기고 현재 STORIES는 STORY_ARCHIVE로 이동시킨다.)
   ────────────────────────────────────────────────────────── */
const NEXT_WEEK_STORIES = {
  weekLabel: '2026년 6월 1주 (6/1–6/6)',
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
};

/* ──────────────────────────────────────────────────────────
   STORY_ARCHIVE  ·  지난 주 이야기 모음
   새 주 시작 시: 이번 주 STORIES 내용을 복사해 새 항목으로 추가 후 배포
   형식: { weekLabel: '2026년 3월 첫째 주', stories: { 1:{...}, 2:{...}, ... } }
   ────────────────────────────────────────────────────────── */
const STORY_ARCHIVE = [
  {
    weekLabel: '2026년 5월 3주 (5/18–5/23)',
    weekStart: '2026-05-18',
    stories: WEEK_MAY3_STORIES,
  },
  {
    weekLabel: '2026년 5월 2주 (5/11–5/16)',
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

  /* ═══ 토요일 — 에세이·일상 (PRIMARY: 유머) ═══ */
  6: {
    title: '섬세한 취향',
    category: '에세이·일상',
    primaryType: '유머',
    types: ['유머', '통찰'],
    image: 'images/블랙노디의 둥지.jpg',
    svgKey: null,
    body: [
      '고풍스러운 건축물부터 풍미 있는 커피까지 섬세한 취향은 문명의 발전에 크게 기여해 왔다.',
      '다채로운 스테인드글라스나 화려한 조명은 물론이고 수없이 많은 조각상 하나하나의 디테일까지 온갖 정성을 기울인 파리의 노트르담 성당을 보라. 원두가 어디서 왔는지, 로스팅과 원액 추출은 어떻게 했는지 또 무슨 첨가물을 넣었는지에 따라 온갖 브랜드의 커피를 만들어내는 스타벅스를 보라. 섬세한 취향에 부응하고자 하는 간절한 노력 없이 도저히 다다를 수 없는 경지다.',
      '이처럼 섬세한 취향으로 얽힌 복잡한 세상은 나같이 단순하게 살고 싶은 사람에게는 만족스럽지 못하다. 하지만 이 섬세한 취향이 우리가 보고 듣고 느끼는 모든 감각을 활용해서 건축물, 패션, 자동차 등 일상생활 곳곳에 스며들어 있다는 걸 깨닫고 나면, 나의 불만은 한 걸음 뒤로 물러난다. 하긴 소비자의 섬세한 취향을 얼마나 빨리 만족시킬 수 있느냐가 휴대폰이나 컴퓨터로 대표되는 디지털 세계에서도 핵심 경쟁력이 된지 오래란 걸 생각하면, 더 이상의 불만은 나를 시대에 뒤떨어진 사람으로 몰아갈 뿐이다.',
      '최근에 이 섬세한 취향이 얼마나 나와 가까운 데서 일어나고 있는지 그리고 얼마나 폭넓게 적용되고 있는지를 새삼 깨닫는 일이 있었다.',
      '대규모 할인 판매가 있는 성탄절 다음 날인 복싱데이(Boxing Day)였다. 아내는 샌들을 하나 사기 위해 나를 브리스반의 한 쇼핑센터로 데리고 갔다. 한 시간 즘 둘러본 뒤, 아내는 드디어 마음에 드는 걸 골랐다. 그리고 점원에게 가서 한 치수 작은 걸로 달라고 했는데, 한참 후에 돌아온 점원은 재고가 없다고 했다.',
      '한 시간이 훌쩍 지난 시점에서 다시 신발고르기가 시작되었다. 나는 이미 지쳐서 한적한 의자에 자리 잡고 쉬고 있었다. 한참 뒤 신발을 고르는데 성공한 아내는 나를 데리고 다시 점원한테 갔다. 이번에는 네댓 명이 대기를 하고 있어서 나와 아내도 줄을 서야 했다. 그 와중에 아내는 다른 신발을 더 찾아본다고 줄에서 이탈해 버렸다. 아무것도 모르고 신발을 들고 있던 나는 내 차례가 되자 전화로 황급히 아내를 불러들였다.',
      '아내는 또다시 한 치수 작은 신발을 요구했고, 한참 뒤 돌아온 점원은 아무리 찾아도 재고가 없다고 말했다. 결국 두 시간가량의 쇼핑이 헛수고가 되었다.',
      '며칠 뒤 우리 가족은 그레이트 배리어 리프(Great Barrier Reef) 여행 중에 레이디 무스그라브 섬(Lady Musgrave Island)에 들렀다. 이 섬은 퀸즐랜드 주총독 아내의 이름을 따서 지어졌다고 하는데, 제비갈매기 일종인 블랙 노디(Black Noddy)가 많이 살고 있다.',
      '가이드가 블랙 노디는 끈적끈적한 열매로 새를 잡아먹는 피아니아 나무 위에 둥지를 짓고 사는데, 수컷은 가지와 잎사귀를 가져오고 암컷은 그것을 이용해 둥지를 짓는다고 했다.',
      '설명 중 흥미를 끈 것은 수컷이 둥지를 짓기 위해 나뭇가지나 잎사귀를 수십 번 가져와도 암컷은 대부분 거절한다는 것이었다. 마음에 안 드니 다른 걸로 가져오라는 뜻이란다. 아주 튼실하고 쓸모 있는 나뭇가지나 잎사귀를 가져와도 깐깐한 암컷에게 통과될 확률은 10%도 안 된다. 아무리 암컷의 섬세한 취향이 온 가족을 위한 것이라고 믿더라도 수컷의 무수한 헛수고가 신경 쓰이고 불쌍하게 느껴지는 것은 왜일까?',
      '수컷 블랙 노디에게서 나 자신을 발견한 건가?',
      '수컷 블랙 노디와 나는 \'섬세한 취향의 희생자\'일까? 아니면 더 좋게 봐서 \'현실이 불만스럽지만 뒤처지지 않으려고 부단히 애쓰는 가족이나 문명 발전의 일꾼\'일까? 억지로 긍정적으로 해석하려니 수식어가 길어졌다고 지적한다면 인정할 수밖에. 어쨌든 수컷 블랙 노디와 나는 무척 닮은 것 같다.'
    ],
    closing: '복싱데이의 두 시간이 헛수고였다.\n며칠 뒤 외딴 섬에서\n수컷 블랙 노디를 만났다.\n그도 나처럼 한 치수 더 찾고 있었다.',
    analysis: {
      insight: { icon: '💡', text: '섬세한 취향은 문명을 만든다 — 그러나 그 옆에는 늘 헛수고하는 누군가가 있다.',
                 condition: '작은 것이 사실 전부였음이 드러날 때' },
      humor:   { icon: '😄', text: '수컷 블랙 노디는 가져온 나뭇가지의 90% 이상이 거절당한다. 글쓴이가 그에게서 자기를 발견한 것이 결정적이다.',
                 condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
      emotion: { icon: '❤️', text: '두 시간 헛수고한 남편이 며칠 뒤 외딴 섬에서 같은 처지의 새를 만났다. 위로가 거기 있었다.',
                 condition: '아주 작은 순간이 사실 전부였던 이야기' }
    },
    source: {
      type: '에세이',
      credit: 'SCJ / blog.naver.com/scjoe',
    },
    curatorNote: '섬세한 취향은 문명을 만들었습니다. 그러나 그 취향에 부응하는 사람은 늘 옆에 있었습니다. 두 시간 헛걸음한 남편과 통과 확률 10%의 수컷 블랙 노디. 외딴 섬에서 만난 두 사람의 동지 의식이 이 글을 따뜻하게 합니다.',
    publishedDate: '2026년 5월 16일',
  }

    },
  },
  {
    weekLabel: '2026년 5월 1주 (5/4–5/9)',
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
      6: {
        title: '나의 살던 고향은',
        category: '에세이·일상',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: 'images/나의 살던 고향은.png',
        svgKey: null,
        body: [
          '매주 일요일 아침 노래연습을 위해 찬양대가 모인다. 마침 그날따라 목을 가다듬기 위해 지휘자는 먼저 「고향의 봄」을 부르자 했다.',
          '\'나의 살던 고향은 꽃 피는 산골\' 첫 줄을 부르기도 전에 앞줄에 있던 여 장로님이 눈물을 터트렸다. 오랫동안 외국에서 지낸 사람들에게는 「고향의 봄」이 그렇게도 짠하게 다가온다 하셨다. 덩달아 여러 사람들이 눈물을 훔치고 나도 금방 눈가가 붉어졌다.',
          '아마 장로님은 온갖 궂은 일을 마다않고 생계를 위해 수십 년을 한결같이 버텼고, 머나먼 이국땅에서 말 못 할 수모를 당할 때도 있었을 것이다. 하다 하다 안될 때는 그냥 포기하고 싶고, 다 집어치우고 고향으로 돌아가고 싶을 때도 많았겠다 싶다.',
          '나도 그랬다. 아예 고향으로 돌아가 버린 적도 있다. 초등학교 1학년 때 갑작스러운 전염병으로 양계장의 닭이 몰살한 뒤에 우리 집은 대구로 이사를 했다. 그 해 겨울 방학 때, 낯선 곳에 적응도 안 되고 친구도 없고 고향이 그리워 부모님을 졸라 마냥 고향으로 내려가 버린 적이 있다.',
          '이처럼 고향은 우리에게 어디에 속해 있었는지 또 어디로 가고 있는 건지 묻는다. 고향은 왜 이런 근본적인 질문을 던지는 걸까? 고향의 의미를 다시 짚어보자.',
          '우선, 고향은 나를 낳아주고 길러준 것들이 함께 모여 있는 곳 그러나 이미 사라져서 더 그리운 곳이다. 단지 장소만이 아니라 어린 시절 나를 둘러싼 모든 환경들 그러니까 가족, 정서, 친구, 동물, 들판, 냇가 등 모든 게 고향이겠다. 그러나 나는 벌써 커버리고 시간은 흘러 환경도 바뀌니 그 모든 게 따라 변했고 사라졌거나 희미해졌다.',
          '또 고향은 끔찍한 현실 속에 살아가는 사람들이 다시 찾고 싶고 또 간절히 원하는데도 결국에는 붙잡을 수 없는 그런 곳이기도 하다. 고향은 옛날에 살았던 곳일 뿐 아니라 다시 일구고 싶은 미래의 새로운 안식처이기도 한 것이다. \'고향으로 돌아가고 싶다\'고 말할 때, 그 의미는 이미 사라진 것들에게로 돌아간다기 보다 그때의 아름다웠던 것들이 가득한 곳에 다시 있고 싶다는 뜻이다.',
          '\'울긋불긋 꽃 대궐 차린 동네\'처럼 아름다운 것들로 가득한 게 고향이라면 \'고향 같은 사람\'도 있겠다 싶다. 새로운 사람들을 그렇게 따뜻하게 대해주고, 모두가 돌아간 뒤에도 정성스럽게 교회를 청소하는 장로님은 분명 \'고향 같은 분\'이다.',
          '한편, 옛날의 사라진 고향이 던지는 슬픔만큼이나 앞으로의 새 고향에 대한 궁금증도 우리를 애타게 하는 것은 마찬가지다. 우리 하나하나가 새로운 고향이 되고, 우리가 사는 세상을 멋진 곳으로 만들어 간다면, 아름다움에 더하여 경이로움으로 가득할 궁극적 본향이 그렇게 멀게만 느껴지지는 않겠다는 소망을 가져본다.'
        ],
        closing: '\'나의 살던 고향은 꽃 피는 산골\'\n첫 줄을 부르기도 전에\n눈물이 먼저 왔다.\n고향은 장소가 아니라 마음이다.',
        analysis: {
          insight: { icon: '💡', text: '고향은 장소가 아니다 — 과거의 아름다움이 다시 있고 싶다는 마음이 고향을 만든다.', condition: '작은 것이 사실 전부였음이 드러날 때' },
          humor:   { icon: '😄', text: '연습 첫 줄도 못 부르고 눈물 먼저 — 지휘자의 워밍업 계획이 전혀 다른 방향으로 흘렀다.', condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
          emotion: { icon: '❤️', text: '수십 년을 이국땅에서 버텨온 장로님의 눈물 한 방울이 합창단 전체를 적셨다.', condition: '아주 작은 순간이 사실 전부였던 이야기' }
        },
        source: { type: '에세이', credit: 'SCJ / blog.naver.com/scjoe' },
        curatorNote: '고향의 봄 첫 소절을 제대로 부르지도 못했습니다. 그런데 그 울컥함이 오히려 고향이 무엇인지 가장 정확하게 말해줬습니다. 장소가 그리운 게 아니라, 그곳에서 내가 속해 있었다는 느낌이 그리운 것입니다.',
        publishedDate: '2026년 5월 9일',
      }
    }
  },
  {
    weekLabel: '2026년 4월 5주 (4/27–5/2)',
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
      6: {
        title: '날벼락',
        category: '에세이·일상',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: 'images/날벼락.png',
        svgKey: null,
        body: [
          '그 청년이 사고를 쳤다. 내가 횡단보도에서 기다리고 있는데, 맞은편에서 관광객 청년 하나가 두리번거리더니 실수로 길가에 있던 노숙자 할머니의 돈 통을 걷어찬 것이었다.',
          '돈 통은 둔탁한 소리를 내며 저 멀리 굴러가 버리고, 오전 내도록 모았을 동전 열댓 개도 온 사방으로 흩어져 버렸다. 웬 날벼락 같은 일에 깜짝 놀라기는 청년이나 할머니나 마찬가지였다.',
          '불편해졌다. 노숙자 할머니의 마지막 자존심이라고 할 수 있는 돈 통을 그것도 발로 걷어차 버린 것이다. 마치 정지화면처럼 이 장면이 내 눈을 가득 채우면서 동시에 마음도 얼음처럼 꽁꽁 굳어버렸다.',
          '화도 났다. 여유 있어 외국으로 관광 다니는 청년과 가난해서 거리로 내몰린 할머니는 극명한 대조를 이룬다. 도와주지는 못할망정 얼마 들어있지도 않은 돈 통을 걷어찼는데도, 할머니는 아무 말 없이 동전만 주웠다.',
          '잊고 싶었다. 목적지에 이른 후에도 나의 머릿속은 정지화면 구석구석을 옮겨 다니느라 바빴다. 도대체 이 청년은 정신을 어디 두고 다니는 건가? 할머니는 칠십 평생 넘게 사셨으면 돈도 좀 모아뒀어야 할 것 같은데, 다시 주워 모은 동전 열댓 개가 혹시 전 재산인 걸까?',
          '결국 당황스러워졌다. 출퇴근길에 노숙자들이 여럿 있지만, 나는 어느새 그들을 시설물 취급하듯 지나치고 있다. 청년이 실수로 돈 통을 차지 않았더라면, 노숙자가 내 시선을 끄는 데는 오늘도 실패했을 게 분명하다.',
          '가난과 질병으로 힘든 사람들은 주변에 널려 있다. 이 사실에 주목하면 할수록 우리는 슬퍼진다. 우리가 할 수 있는 게 특별히 없어 더 우울해진다. 그래서 우리는 손쉽게 우리 몫의 한계를 정한 후에 이 어두운 현실로부터 도망치듯 재빨리 뛰쳐나온다.',
          '자칫 이러다가 노숙자들은 우리에게 성가신 사람들이 되어 버리고, 눈길 한 번 받지 못하는 사람들로 변해 갈 수도 있다.',
          '이런 식으로 다른 사람들에게 무관심하며 유한 책임의 삶에 머무르고 싶어 한들, 우리를 둘러싼 사람들과 환경은 이를 가만히 내버려 두지 않는다. 우리는 어쩔 수 없이 함께 살아가야 하는 공동운명체이고, 조화롭게 살아가야 하는 창조물들로 서로 엮여 있는 것이다.',
          '그렇다면 오늘 마주친 장면은 우리 안에 있는 연민과 공감의 별에 다시 불을 켜는 날벼락이어도 좋겠다. \'별을 사랑한 나머지 밤을 두려워하지 않게 되었다\'는 어느 천문관측가의 말처럼…….'
        ],
        closing: '연민과 공감의 별에\n다시 불을 켜는 날벼락이어도 좋겠다.\n별을 사랑한 나머지\n밤을 두려워하지 않게 되었다.',
        analysis: {
          insight: { icon: '💡', text: '무감각은 의도가 아니다 — 날벼락처럼 갑작스러운 장면이 얼어붙은 공감을 깨운다.', condition: '작은 것이 사실 전부였음이 드러날 때' },
          humor:   { icon: '😄', text: '발로 차인 돈 통, 사방으로 흩어진 동전 — 황당함이 먼저 왔다가 불편함이 찾아온다.', condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '침묵을 지키며 동전만 줍는 할머니 — 익숙해진 듯한 그 모습이 가장 아프다.', condition: '아주 작은 순간이 사실 전부였던 이야기' }
        },
        source: { type: '에세이', credit: 'SCJ / blog.naver.com/scjoe' },
        curatorNote: '\'날벼락\'이 좋은 날벼락이 됐습니다. 동전을 되줍는 할머니의 침묵이 오래 남습니다.',
        publishedDate: '2026년 5월 2일',
      },
    },
  },
  {
    weekLabel: '2026년 4월 4주 (4/20–4/25)',
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
      6: {
        title: '아래로 남쪽으로',
        category: '에세이·일상',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: 'images/브루니 아일랜드.png',
        svgKey: null,
        body: [
          '베르나르 베르베르는 「상상력 사전」에서 콜럼버스, 마르코 폴로 등을 예로 들면서 인류는 서쪽으로는 모험을 하며 동쪽으로 근원을 찾는다고 말했다. 그리고 북쪽으로는 자신을 시험하며 남쪽에서 휴식을 찾는다고 했다.',
          '휴식을 위해 남쪽으로 떠났다. 갈 수 있는 한 남쪽으로 가 본 셈이었다. 남쪽의 인기 좋은 휴양지 제주도를 지나면 아래에는 대만과 필리핀이 있고, 여기서 더 남쪽으로 가면 인도네시아, 파푸아뉴기니 그리고 호주가 나온다. 호주 아래쪽의 시드니에 사는 우리는 호주의 남쪽 섬 태즈메이니아로 가족여행을 갔고, 태즈메이니아의 남쪽 섬 브루니 아일랜드에 들렀으며 또 그 섬에서도 남섬을 방문했으니 아래쪽 끝까지 가 본 거였다.',
          '베르나르의 말대로 최대한 남쪽이었으니까 최고의 휴식을 누린 걸까? 잘 쉰 건 사실이지만, 그 이유가 남쪽이기 때문이라고 할 수만은 없다. 오히려 제대로 휴식을 만끽할 수 있었던 것은 아름다운 자연, 맛있는 먹거리와 쾌적한 숙소 덕이 크다. 특히 "한 사람이 온다는 것은 실로 어마어마한 일이다"라고 말하는 정현종의 방문객처럼 우리를 환대해 주는 친절한 사람들이 아주 인상 깊었다.',
          '인류 역사의 방향을 돌아보면서 개인의 삶은 어느 쪽을 향하면 좋을지 생각해 보게 된다.',
          '인류 역사와 달리 개인의 인생은 마치 원을 그리며 판 위를 여기저기 돌아다니는 팽이와 비슷하다. 살다 보면 모험을 선택할 때가 있으며 근원을 궁금해할 때가 있고, 자신을 시험해 보기도 하며 때로는 휴식을 갈구하면서 계속 돌고 또 돈다. 그렇다면 인생은 방향 하나하나에 의미가 있다기보다 끝없이 도는 것을 그 특징으로 한다.',
          '이렇듯 인생이 돌고 도는 것이라면 그 방향은 동서남북 중에 어느 하나가 아니라 아래로 향하면 좋겠다. 사방팔방을 끝도 없이 돌기에는 삶이 짧고, 돈도 체력도 충분치 않다. 그리고 돌아다니는 것 자체가 삶의 목적이 아니라 인생여정 가운데 경험하는 만남과 사귐이 중요하다고 보면, 팽이가 돌아다니다 한 곳에 자리 잡듯이 인생도 결국에는 한 자리에 머물러야 하지 않을까? 팽이처럼 원하는 만큼 실컷 돈 후에 나한테 가장 잘 어울리는 아래쪽을 찾아 신나게 돌면 되는 것이겠다.',
          '또 하나 주목할 것은 계속 돌아다니는 특징 때문에 나와 부딪히는 남을 튕겨낼 수 있다는 점이다. 나만 생각하고 나의 이익만 앞세우다 보면 자연스레 남들은 나를 어려워하고 멀리한다. 반대로 내가 남에게 먼저 다가가 환대하고, 남들이 잘 되도록 도우면 어느새 나는 가까이하고 싶은 사람이 되어 있다. \'나\'쪽이 아니라 \'남\'쪽을 선택하면 아래쪽에 머물러 가만히 있어도 다른 사람들이 즐겨 찾아오고 깊은 사귐을 나누고 싶은 그런 사람이 될 수 있다.',
          '그러므로 인생의 방향은 \'아래로 그리고 남쪽으로\'이면 좋겠다. \'아래로 남쪽으로\' 향하는 사람은 남을 밀치고 윗자리로 올라가지 않고, 나와 내 가족만 잘 되겠다고 남들에게 피해 주지 않는다. 또 이들은 한 곳에 머물러도 만남의 설렘을 간직하고, 자신이 드러나지 않아도 삶의 기쁨을 잃지 않는다.',
          '그러고 보면 태즈메이니아와 브루니 아일랜드의 사람들은 아래에 자리 잡고 남들을 맞이할 줄 아는 이 비결을 이미 알고 있는 듯하다. 이처럼 \'아래로 남쪽으로\' 향하는 삶은 언젠가 또 하나의 동서남북을 지탱하는 새롭고 아름다운 세상을 만들어 수많은 사람들에게 선사한다.'
        ],
        closing: '동서남북을 돌아다니다\n결국 아래로, 남쪽으로.\n\'나\'쪽이 아니라 \'남\'쪽을 선택하면\n사람들이 찾아온다.',
        analysis: {
          insight: { icon: '💡', text: '방향은 동서남북이 아니라 아래와 남쪽 — 낮아지고 남을 향할 때 비로소 머무는 자리가 생긴다.',
                     condition: '작은 것이 사실 전부였던 이야기' },
          humor:   { icon: '😄', text: '갈 수 있는 한 남쪽으로 가 봤더니 — 호주 남쪽 섬의 남쪽 섬의 남섬이었다.',
                     condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '정현종의 시처럼 환대해준 사람들 — 남쪽이 좋았던 것은 방향이 아니라 사람 때문이었다.',
                     condition: '아주 작은 순간이 사실 전부였던 이야기' }
        },
        source: {
          type: '에세이',
          credit: 'SCJ / blog.naver.com/scjoe',
        },
        curatorNote: '\'아래로 남쪽으로.\' 팽이처럼 돌다가 결국 한 자리에 머무는 것이 인생이라면, 그 자리는 아래쪽이어야 한다는 말이 오래 남습니다. \'나\'쪽이 아니라 \'남\'쪽을 선택하면 사람들이 찾아온다는 것. 브루니 아일랜드까지 가서 얻어온 이야기입니다.',
        publishedDate: '2026년 4월 25일'
      }
    }
  },
  {
    weekLabel: '2026년 4월 3주 (4/13–4/18)',
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
      6: {
        title: '집 안의 집',
        category: '에세이·일상',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: 'images/집 안의 집.png',
        svgKey: null,
        body: [
          '집 안에 집이 하나 더 생겼다.',
          '좁긴 해도 이불, 베개뿐만 아니라 벽과 문도 있고 심지어 조명도 갖추었으니 집이 확실하다. 게다가 과자, 장난감, 책, 카드, 인형 등 나름 소중한 것들이 가득한 걸 보니, 막내가 딴 살림 차린 게 분명하다. 막내가 거실 한구석에 자기만의 집을 지은 것이다.',
          '그대로 떠서 길거리로 옮겨놓으면 영락없는 노숙자 살림이 될 것처럼 지저분하게 보인다. 그 위치도 딱 거실과 현관의 중간 그러니까 여길 지나야 화장실을 들락날락할 수 있기 때문에 성가시기 짝이 없다. 집 청소도 해야 하고 가끔씩 손님도 오는데, 막내 집이 얼마나 오래 버틸 수 있을지 걱정이 앞선다.',
          '그래도 온 가족이 불편을 참으며 막내의 집을 부수지 않는 이유는 우선 철거민의 완강한 저항이 눈에 선하기 때문이다.',
          '그대로 내버려 두는 또 다른 이유는 이제 막내도 자기만의 공간을 가질 때가 된 것 같다고 여기기 때문이다. 첫째도 둘째도 자기 방이 있는데, 초등학교 1학년인 막내는 아직 그렇지가 못하다. 방이 주어진다 한들 잠잘 때는 무서워서 엄마 아빠한테 달려올 게 뻔하지만, 자기만의 공간을 갖기 위한 탐색기로 접어든 것만큼은 분명해 보인다.',
          '이런 식으로 우리 모두는 어릴 때 자기만의 공간을 가꾸어 본 기억이 있다. 널따란 천이나 이불을 이용해서 덮개를 만들고 박스를 잘라서 문도 만든다. 그런 후에 내가 아끼는 물건들로 그곳을 가득 채워 보고, 친한 친구들을 초대하기도 한다. 이곳은 내가 하고 싶은 모든 것이 허용되는 곳이고, 아무나 들어올 수 없는 곳이다. 철저하게 비밀스러운 곳은 아닐지라도, 남들이 모르는 것들이 간직되는 곳이다. 완전히 독립적이진 않더라도, 독립성에 기초한 개인의 정체성이 비로소 생겨나는 곳이다.',
          '막내의 집은 비밀번호를 말해야 들어갈 수 있을 정도로 다른 곳과 뚜렷이 단절되어 있고, 워낙 좁다 보니 자신 말고는 누구도 들어갈 수 없을 정도로 출입이 제한되어 있다. 그리고 이곳에서는 다른 가족이 알 수 없는 그만의 자유와 비밀이 싹튼다. 그야말로 이곳은 또 다른 하나의 세계다.',
          '그렇다. 이 집은 막내에게 또 다른 세계를 선사한다. 따라서 이 집을 함부로 부수면 안 된다.',
          '우리는 자라면서 집 안에서 집을 짓든지 또는 내 방을 얻든지 하며 나만의 세계를 경험하다가, 커서는 집 밖에 또 다른 집을 지어 자기만의 세계를 구축한다. 그리고 다음에 더 크게 되면 그러니까 내 집뿐만 아니라 이 세계가 우리의 안식처라는 걸 인식하게 되면, 내 집과 남의 집이 잘 어울리면 좋겠다고 생각하게 되고, 이 세상을 아름답게 만드는 것도 내 집을 멋지게 짓는 것만큼이나 값지다는 걸 깨닫게 된다.',
          '결국 이 세상이 우리의 집과 같다면, 어려서 집 안에 집 짓기와 커서 집 밖에 집 짓기가 일맥상통하는 일이다. 그래서 집 안에 집을 멋지게 지어본 아이가 그 이후의 일들도 잘 해내리라는 기대를 해보게 된다.',
          '그렇다면 막내 집을 더더욱 부수면 안 된다. 더 아름답고 조화로운 집을 짓도록 격려하지는 못할망정…….'
        ],
        closing: '막내가 거실에 집을 지었다.\n비밀번호가 있고, 소중한 것들이 가득하다.\n이 세상이 우리의 집이라면\n그 집을 함부로 부수면 안 된다.',
        analysis: {
          insight: { icon: '💡', text: '집 안의 집은 정체성이 싹트는 곳 — 내 공간을 가져야 비로소 내 세계가 생긴다.',
                     condition: '작은 것이 사실 전부였음이 드러날 때' },
          humor:   { icon: '😄', text: '거실 한구석 노숙자 살림 같은 집 — 비밀번호 없이는 들어갈 수 없다.',
                     condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '막내의 집을 부수지 못하는 것 — 그것이 더 큰 세계를 향한 첫 번째 집이기 때문에.',
                     condition: '아주 작은 순간이 사실 전부였던 이야기' }
        },
        source: {
          type: '에세이',
          credit: 'SCJ / blog.naver.com/scjoe',
        },
        curatorNote: '\'이 집을 함부로 부수면 안 된다.\' 거실 한구석에 이불 몇 장으로 지은 집 앞에서 한 말입니다. 그 작은 공간이 비밀번호가 있고, 자유가 있고, 나만의 세계가 싹트는 곳이라는 것. 어릴 때 지어본 집 안의 집이 커서 짓는 집의 시작이라는 생각이 오래 남습니다.',
        publishedDate: '2026년 4월 18일'
      }
    }
  },
  {
    weekLabel: '2026년 4월 2주 (4/6–4/11)',
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
      6: {
        title: 'Jolie Laide를 찾아서',
        category: '에세이·일상',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: 'images/jolie laide.webp',
        svgKey: null,
        body: [
          '서로 모순되는 두 단어가 만나 또 다른 멋진 말이 되기도 하는데, 프랑스어 ‘Jolie Laide’가 그렇다. 이 말을 직역하면 ‘아름다운 못난이’로 말이 안 되는 것 같지만, 자신만의 개성으로 더 아름답게 보이는 사람을 가리키는 말이다.',
          '이 단어와 같은 방식으로 ‘Jolie Laide’들만이 갖는 특징을 들여다보자.',
          '‘Jolie Laide’들의 매력은 다른 세계에 사는 듯한 이질감으로 멀게만 느껴지는 아이돌스타와 다르다. 언뜻 보면 평범하기 그지없지만 자세히 보면 아주 매력적이다. 가장 좋은 것을 먼저 보여준 다음에 실망을 안겨주는 게 아니라 알아갈수록 점점 더 빛나는 모습을 선사한다. 한마디로 이들의 매력은 ‘친밀한 거리감’이다.',
          '또 이들은 못난이 취급받던 시절을 딛고 지금의 성공을 일구었기 때문에 내면이 수줍어하는 듯하면서도 자신감이 넘쳐난다. 스스로 삶을 꾸려갈 수 있을 만큼 자존감이 높고, 때로는 다른 사람들을 앞세우는 수줍음도 있다. 이들의 내면을 ‘당당한 수줍음’으로 불러도 좋겠다.',
          '그리고 ‘Jolie Laide’들은 자신의 약점과 한계를 극복하는 과정을 거쳤기 때문에 모순과 갈등 속에서만 발견되는 삶의 진실에 가까이 있다. 나침반의 바늘이 떨리면서도 항상 북쪽을 가리키듯, 이들의 삶은 흔들릴 때도 있지만 어느새 진실을 가리키고 있는 ‘고정된 흔들림’이다.',
          '끝으로 이들은 자신의 부족함을 강점으로 바꿀 수 있는 독창성을 갖고 있다. 줄이 그어진 종이가 주어져도 대각선으로 글을 쓸 수 있고, 틀 속에 가두려고 하면 어느새 빠져나가 버린다. 주어진 한계를 자유롭게 넘나들고, 더 멋진 뭔가를 향해 뛰어들고 넘어지고 다시 일어선다. 세상이 볼 때 이들은 언제 뚫릴지 모르는 ‘도발적 경계선’과 같다.',
          '‘Jolie Laide’들만이 갖는 나름의 매력, 성숙한 내면, 고집스러운 진실됨 그리고 남다른 독창성은 내 안에 그리고 우리 가운데 ‘Jolie Laide’를 찾아 나서라고 초청한다. 최고의 외모와 스펙으로 똑같은 성공을 찾아 질주하는 현 시대가 진정 필요로 하는 것은 또 한 명의 스타가 아니다. 나와 다르지 않고 우리도 얼마든지 될 수 있는 ‘Jolie Laide’인 것이다.',
          '나만 두드러지게 하는 외모나 돈이 아니라 내면과 인성 같은 보이지 않으나 분명한 것들에 다시 눈을 돌려야 한다. 나만 잘 되면 그만인 출세나 명예가 아니라 사랑과 공동체처럼 누린 적 있지만 기억할 수 없는 것들을 거듭 붙잡아야 한다.',
          '이럴 때 나와 우리는 ‘오래된 미래’처럼 ‘Jolie Laide’로 가득 찬 세상을 만나게 될 것이다. 그렇다면 ‘Jolie Laide’ 세상은 ‘이미와 아직 사이’에 있다.'
        ],
        closing: '‘아름다운 못난이.’\n알아갈수록 점점 더 빛나는 사람.\n‘Jolie Laide’ 세상은\n‘이미와 아직 사이’에 있다.',
        analysis: {
          insight: { icon: '💡', text: '약점이 개성이 되는 순간 — 부족함을 강점으로 바꾼 사람이 가장 오래 빛난다.', condition: '주체와 객체가 뒤바뀌는 순간' },
          humor:   { icon: '😄', text: '‘아름다운 못난이’ — 말이 안 되는 것 같지만 가장 정확한 표현이다.', condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '알아갈수록 점점 더 빛나는 사람 — 처음에는 평범해 보였지만 가까워질수록 아름다운.', condition: '아주 작은 순간이 사실 전부였던 이야기' }
        },
        source: { type: '에세이', credit: 'SCJ / blog.naver.com/scjoe' },
        curatorNote: '‘고정된 흔들림.’ 이 표현이 오래 남습니다. 나침반 바늘처럼 떨리면서도 북쪽을 가리키는 사람. 흔들리는 것이 약점이 아니라, 흔들리면서도 방향을 잃지 않는 것이 그 사람의 본질이라는 것.',
        qna: { question: '당신 주변의 Jolie Laide는 누구입니까? 처음에는 평범해 보였지만, 알아갈수록 빛났던 사람.', answer: 'Jolie Laide는 완벽한 스펙이 아니라 자신만의 결을 가진 사람입니다. 못난이 시절을 딛고 왔기 때문에 내면이 더 깊습니다. 줄 그어진 종이에 대각선으로 글을 쓰는 사람 — 그런 사람이 우리 안에 있습니다.' },
        publishedDate: '2026년 4월 11일',
      },
    },
  },
  {
    weekLabel: '2026년 4월 1주 (3/30–4/4)',
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
      6: {
        title: '0번',
        category: '에세이·일상',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: 'images/0번.webp',
        svgKey: null,
        body: [
          '‘선하다는 게 도대체 무엇입니까?’라는 질문에 맹자는 ‘선하다는 것은 가까이하고 싶다는 뜻이다’라고 답했다. 정말 와닿는 말이 아닐 수 없다. 가까이하고 싶은 사람이 있고, 멀리 떨어져 있고 싶은 사람도 있다.',
          '막내한테도 그렇다. 막내에게 1번은 엄마, 2번은 아빠, 3번은 둘째 형, 4번은 큰 형이다. 가끔 막내가 엄마나 둘째 형과 다투기라도 한 날에는 2번이 1번이 되고 4번이 3번이 되기도 한다.',
          '도무지 넘볼 수 없는 순위도 있는데, 0번 할머니다. 엄마 아빠가 잘해줘서 엄청 기분 좋은 날에 혹시 순위가 변했는지 물어봐도 0번은 꼼짝도 안 한다. 가까운 거리로 따지자면, 1번은 1m 2번은 2m인데 0번은 아예 딱 달라붙은 거다.',
          '잠잘 때 그렇게 아빠와 붙어 있으려 하고 레슬링 할 때도 몸을 아끼지 않고 뒹굴어 줬건만, 나는 마냥 2번에 머물러 있다.',
          '돌아보니 나도 그랬다.',
          '딸 셋 다음 태어난 아들이라는 이유로 할머니는 나를 마음에 쏙 들어 했다. 언제나 곁에 있었던 할머니 덕에, 나는 가족 중에서 제일 먼저 밥상을 받았고 가장 따뜻한 방에서 잤다. 동네에서도 제일 어른이었던 할머니는 나를 괴롭히는 형들이나 친구들을 아주 매섭게 혼내곤 했다. 기세등등해진 나는 할머니를 괴롭히기도 했는데, 허리가 약해져서 앉을 때도 아주 느리게 몸을 일으켰던 할머니를 장난삼아 자꾸 밀치곤 했다. 둘 사이에 수많은 말다툼도 있었겠지만, 언제나 내가 승자였던지 전혀 기억이 나질 않는다.',
          '이렇게 손주는 할머니를 통해 한없는 사랑과 아낌없는 보살핌을 누리고, 할머니는 손주를 통해 온갖 어려움을 뚫고 기필고 얻어낸 삶의 열매를 맛본다. 할머니와 손주는 산 날은 큰 차이가 있지만, 힘이 없다는 점에서는 같고 상대만 있다면 세상 무서울 게 없고 그 누구도 부럽지 않다는 점에서 동일하다. 이래서 어린 시절만큼은 할머니와 손주는 서로서로 가장 소중한 관계인 0번이 될 수밖에 없다.',
          '할머니에게 버릇없이 굴던 내 나이 때와 같은 시기의 우리집 막내도 0번과 말다툼이 있었다. 막내가 ‘왜 내 마음을 지워!!!’라는 독특한 말을 하면서 울부짖었다. 뭔가 억울한 일이 생겼는데, 0번이 그 마음을 몰라주고 서둘러 마무리를 하려고 하니, 막내는 마음을 지운다고 느꼈던 것이다.',
          '그러나 서운한 마음을 표현도 않고 먼저 지우는 쪽은 늘 할머니다.',
          '내 할머니는 일제 강점기와 625 전쟁을 겪었고 먼저 떠난 할아버지를 대신해 자식들을 먹여 살리기 위해 밀주를 팔기도 했다. 캄캄한 새벽에 무거운 술독을 등에 지고 1,000m가 넘는 황악산을 넘나들었다. 이런 천신만고를 견뎌낸 아프고 사연 많은 허리를 어린 손주는 알 리가 없었다.',
          '그래서 0번의 또 다른 의미는 이렇다. 아무리 섭섭한 일이 있어도 할머니는 손주의 잘못을 기억하지 않는다. 엄청나게 큰 수라도 0을 곱하면 그 값이 0이 되듯 할머니는 손주의 모든 허물을 생기기도 전에 잊는다. 가장 소중한 손주에게 가장 좋은 추억만 남기고 싶기 때문이다.',
          '그렇게 보면 0은 없는 게 아니다. 계속 기억되고 이어질 뿐…….'
        ],
        closing: '1번은 1m, 2번은 2m.\n0번은 아예 딱 달라붙은 거다.\n그리고 0은 없는 게 아니다.\n계속 기억되고 이어질 뿐…….',
        analysis: {
          insight: { icon: '💡', text: '선함은 가까이하고 싶은 것 — 0번은 순위 밖의 순위, 측정할 수 없는 가까움이다.', condition: '작은 것이 사실 전부였던 이야기' },
          humor:   { icon: '😄', text: '엄마 아빠가 아무리 잘해줘도 0번은 꼼짝 안 한다 — 도무지 넘볼 수 없는 순위.', condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '서운한 마음을 먼저 지우는 쪽은 늘 할머니다 — 0번의 진짜 의미.', condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: { type: '에세이', credit: 'SCJ / blog.naver.com/scjoe' },
        curatorNote: '"0번은 아예 딱 달라붙은 거다." 이 문장이 오래 남습니다. 그리고 맹자의 말 — 선하다는 것은 가까이하고 싶다는 뜻이라는 것. 할머니는 숫자 이전의 자리에 있었습니다.',
        qna: { question: '당신의 0번은 누구입니까? 아무리 싸워도, 아무리 시간이 지나도 꼼짝 않는 그 자리.', answer: '0을 곱하면 무엇이든 0이 됩니다. 할머니는 손주의 허물에 0을 곱합니다. 그래서 0번은 비어 있는 자리가 아닙니다. 가장 꽉 찬 자리입니다.' },
        publishedDate: '2026년 4월 4일'
      }
    }
  },
  {
    weekLabel: '2026년 3월 1주 (3/2–3/6)',
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
      6: {
        title: '대담한 장난감 장만',
        category: '에세이·일상',
        primaryType: '유머',
        types: ['유머', '감동'],
        image: 'images/story-sat-w1.webp',
        svgKey: null,
        body: [
          '어느 날 텔레비전 뒤에 처음 보는 장난감이 여러 개 있었다. 못 보던 장난감에 놀란 가족이 모두 나서 조사한 결과, 남동생이 엄마 돈을 훔쳐 산 걸로 결론났다. 당연한 수순대로 동생은 따끔히 혼이 났다. 그 많은 장난감을 살려면 나도 경험 못한 꽤 큰 돈이 필요했을 텐데, 그에 비하면 덜 혼난 거였다.',
          '혼나는 걸 지켜보다가 이러다 엄마가 장난감을 다시 돌려주는 건 아닌지 걱정되었다. 내가 갖고 놀고 싶은 장난감도 그 가운데 있었기 때문이었다. 동생이 혼 나서 안됐긴 해도 장난감이 갑자기 생겨버린 대놓고 웃지 못할 일이었다.',
          '동심 가득한 동생이 장난감을 얼마나 갖고 싶었을까 생각해 보면, 대담한 장난감 장만은 도둑질이라기보다 일종의 항거였다. 그리고 장난감을 사긴 했는데, 여섯 식구가 방 두 칸짜리에 사는 터라 훤히 보이는 텔레비전 뒤 외에는 숨길 곳을 따로 찾지 못한 안타까운 사고였다. 나한테 상의라도 했으면 좋았을 걸.',
          '누나들은 어땠을까? 누나들도 엄마 돈을 종종 가져갔었을 게 뻔하므로 대신 들켜버린 동생이 고맙고 불쌍한 한편, 엄마한테는 미안했을 거다. 엄마가 채소장사를 하면서 하루 벌어 하루 먹고사는 상황이라 아이들에게 용돈이란 게 따로 없었고, 떳떳하게 말 못 할 돈 쓸 일이 생기면 엄마 앞치마에 몰래 손을 넣는 것 외에 다른 방도가 없었다.',
          '엄마는 마음이 더 복잡했겠다는 생각이 든다. 안 그래도 자주 돈이 없어져서 의심하던 차에 범인 잡았다고 기뻐할 수 없었다. 딸 둘, 아들 둘에게 마음껏 못 먹이고 갖고 싶은 것 못 사주는 게 오히려 한탄스러웠을 거다. 그래서 그런지 어머니는 필요할 때 언제든지 가져가라는 긋, 앞치마를 특별히 간수하지 않으셨다.',
          '어느새, 세 아들의 아빠가 되어있다. 집사람한테 돈 쓰는 게 헤프다고 한 소릴 들어도 아이들한테는 어쩔 수 없는 것 같다. 엄마를 닮아 그런가? 그게 아니라, 세상 모든 부모들이 자식 대하는 게 똑 같을 게다.'
        ],
        closing: '동생은 텔레비전 뒤가 최선이었다.\n엄마는 앞치마를 특별히 간수하지 않으셨다.\n각자의 방식으로, 가족은 사랑을 숨겼다.',
        analysis: {
          insight: { icon: '💡', text: '용돈이 없던 시절의 앞치마 — 말 못 할 것이 생기면 손이 먼저 갔다.',
                     condition: '작은 것이 사실 전부였던 이야기' },
          humor:   { icon: '😄', text: '동생이 훔쳐 온 장난감이 형한테는 뜻밖의 선물 — 안됐긴 해도 장난감이 생겼다.',
                     condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '범인 잡았다고 기뻐할 수 없었던 엄마 — 앞치마를 특별히 간수하지 않으셨다.',
                     condition: '아주 작은 순간이 사실 전부였던 이야기' }
        },
        source: {
          type: '에세이',
          credit: 'SCJ / blog.naver.com/scjoe',
          url: 'https://blog.naver.com/scjoe'
        },
        curatorNote: '동생이 텔레비전 뒤밖에 생각 못 했다는 것이 가장 웃기면서 가장 안타깝습니다. 장난감은 샀는데 숨길 데가 없었던 것. 그리고 엄마가 앞치마를 특별히 간수하지 않으셨다는 마지막 문장이 오래 남습니다.',
        publishedDate: '2026년 3월'
      }
    }
  },
  {
    weekLabel: '2026년 3월 2주 (3/9–3/14)',
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
      6: {
        title: '작아지다',
        category: '에세이·일상',
        primaryType: '유머',
        types: ['유머', '감동', '통찰'],
        image: 'images/story-sat.webp',
        svgKey: null,
        body: [
          '중학교 때 학교 가는 버스를 탔는데, 모든 좌석이 꽉 차있고 혼자 서 있게 됐다. 앉아 있는 사람들이 \'조금만 일찍 타지 그랬니?\'라고 놀리는 것 같은 기분이 들었다.',
          '언짢은 기분을 견디며 앞쪽에 서 있는데, 다음 정류장에서 할머니 한 분이 타셨다. 서 있는 사람이 이제 두명이 됐으니, 덜 외로울 법했다. 근데 버스가 갑자기 출발하는 바람에 할머니가 나를 껴안더니 바깥다리 후리기로 나를 넘어 뜨렸다. 순식간에 할머니는 내 위에 올라타 있었고, 내 등은 버스 바닥에 쫙 붙어 버렸으니 완벽한 \'한 판\'이었다.',
          '놀리는 듯한 눈길들은 이제 커다란 웃음까지 동원해서 엉겁결에 가까워진 나와 할머니를 지켜보고 있었다. 오랜만에 재미난 구경이라도 한 것처럼, 기력이 없는 할머니는 아주 천천히 일어섰는데, 그동안 나는 꼼짝없이 가만히 누워있어야 했다. 일어서더니 한 마디 하셨다.',
          '\'아니 너는 남자애가 뭐 그리 힘이 없노?\'',
          '한창 클 나이였는데, 그렇게 작아지는 느낌이 들었다.',
          '커서도 작아진 적이 또 있다.',
          '어린 첫째를 데리고 목욕탕을 갔는데, 이것은 아주 손쉬우면서도 남자아이를 가진 사람만 할 수 있는 아빠노릇이었다. 즐겁게 목욕을 마치고 옷장으로 돌아와 아이 옷을 입히고 있는데, 온몸에 용 문신한 덩치 큰 사람이 옆에 서는 거였다.',
          '난생처음 보는 용 그림에 겁이 난 첫째는 해서는 안될 질문을 했다.',
          '\'아빠, 저 용 그림은 왜 하는 거야?\'',
          '험악한 덩치를 바로 곁에 두고, \'글쎄 나도 왜 하는지 모르겠다\', 또는 \'저런 거는 절대 하면 안 돼!\'라고 말할 수 없었다. 말 못 하고 머뭇거리는 시간이 길어지자, 그 덩치는 내가 뭐라 답하나 귀를 쫑긋 세우는 듯했다.',
          '\'응, 멋있어 보이라고 하는 거야\'',
          '이건 분명 내가 하고 싶은 말이 아니라, 덩치가 날 쳐다보기라도 하기 전에 생존본능에 따라 억지로 밀려나온 거짓말이었다.',
          '아들 앞이라 더욱 작아지는 경험이었다.',
          '근데 따지고 보면, 이 모두가 나만 작아질 일이 아니다. 갑자기 차를 출발시킨 기사나, 노약자에게 자리를 양보하지 않은 사람들도 부끄러워할 일이다. 그리고 전신 문신으로 공포 분위기를 조성했거나 이를 관리하지 못한 사람들도 반성해야 할 일인 것이다.',
          '한편, 이 이야기 속에는 우리를 작아지게 하는 것들이 시기에 따라 달리 그 얼굴을 드러내는 것 같다. 어린아이일 때는 두려움이 우리를 작게 하고, 청소년 시기에는 다른 사람들의 눈길이 우리를 위축시킨다. 어른이 돼서는 부모 노릇 못할 때 주눅이 들고, 노인이 되면 아무 데도 기댈 데가 없을 때 처량해진다.',
          '길게 보면 결국 우리 모두는 작은 자다. 문신으로 가리고 안 그런 척해도, 웃음으로 선행을 외면해도 작기는 마찬가지다. 우리 모두가 작다는 것을 받아들일 때, 스스로를 크게 여기는 자는 상대가 더 작지 않다는 것을 알게 되고, 스스로를 작게 여기는 자는 커질 수 있는 용기를 갖게 되지 않을까?',
          '작은 사람들끼리는 서로를 탓하기보다 함께 도우며 넘어지지 않도록 특히나 작게 느껴지지 않도록 격려할 일이다.'
        ],
        closing: '버스에서, 목욕탕에서, 아들 앞에서.\n우리는 각자의 방식으로 작아진다.\n모두가 작다는 것을 알 때, 더 이상 혼자 작지 않다.',
        analysis: {
          insight: { icon: '💡', text: '우리를 작아지게 하는 것은 나이마다 다르다 — 두려움, 눈길, 부모 노릇, 기댈 곳 없음.',
                     condition: '작은 것이 사실 전부였던 이야기' },
          humor:   { icon: '😄', text: '할머니한테 씨름 한 판 지고, 용 문신 앞에서 "멋있어 보이라고"라고 말한 아빠.',
                     condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '아들 앞에서 가장 작아진다 — 그 순간이 사실 가장 솔직한 순간이다.',
                     condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: {
          type: '에세이',
          credit: 'SCJ / blog.naver.com/scjoe',
          url: 'https://blog.naver.com/scjoe'
        },
        curatorNote: '용 문신 앞에서 "멋있어 보이라고 하는 거야"라고 말했을 때, 그 말이 얼마나 빠르게 나왔을지 생각하면 웃음이 납니다. 생존본능이 부모 역할보다 빠릅니다. 그리고 그걸 솔직하게 쓸 수 있다는 것이 오히려 용기입니다.',
        publishedDate: '2026년 3월'
      }
    }
  },
  {
    weekLabel: '2026년 3월 3주 (3/16–3/21)',
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
      6: {
        title: '긁기 자격증',
        category: '에세이·일상',
        primaryType: '유머',
        types: ['유머', '감동'],
        image: 'images/story-sat-w3.webp',
        svgKey: null,
        body: [
          '며칠 전에 막내가 긁기자격증을 할머니에게 발급해 주었다.',
          '자세히 보면, 이 자격증에는 파마머리의 할머니가 그려져 있다. 유효기간도 2067년까지로 표시된 걸로 보니, 막내는 할머니가 127세까지 살기를 바라는 것 같다.',
          '온몸 구석구석을 두드리거나 만지면서 피로를 풀어주는 마사지도 자격증이 있는데, 긁기라고 자격증이 없으란 법은 없다.',
          '긁기는 마사지보다 훨씬 더 개인적이며 손톱 각도와 가려운 위치 파악이 관건이고, 돈을 받을 정도로 숙련된 기술을 필요로 하진 않는다. 개인적인 만큼 더 친밀한 관계에서 이루어지고, 요금은 받지 않지만 애정이 듬뿍 담겨 있다.',
          '특히, 어린시절 아토피를 심하게 겪는 집안내력을 감안하면, 긁기자격증을 받을 정도라는 것은 수년간 함께 밤잠 설치면서 실천하지 않으면 도무지 불가능한 일이다.',
          '삶으로 온전히 뒷받침되어야만 받을 수 있는 긁기자격증은 그 어떤 국가공인자격증도 갖추지 못한 희귀성과 신뢰도를 자랑한다. 어찌 보면 긁기자격증 같은 것은 자격증이 남발될 뿐 아니라 그에 대한 불신마저 팽배한 현시대가 잃어버리고 있는 그 무엇인지 모른다. 또한, 이 자격은 돈을 내고 받는 서비스가 결코 주지 못하는 울림과 기억도 동반한다.',
          '긁기자격증은 이런 생각을 갖게 한다.',
          '우리가 상업화와 전문화를 외치면서 경제성장만을 논할 게 아니라, 순수한 아이와 조건 없이 사랑을 베푸는 할머니와 이들이 함께 엮어 가는 삶의 이야기에 주목해야 하는 건 아닐까? 미래세대가 기성세대에게 감사의 표시로 무슨 자격증 같은 거라도 줄만큼 미래는 과연 전망이 밝은가? 천진난만한 순수함과 온전한 사랑, 그리고 이들이 만드는 기발함과 유쾌함이 우리가 살면서 그토록 바랐지만 놓쳐버렸던 소중한 것들이 아닐까?',
          '그나저나 막내의 기발함은 계속되고 있다. 의자로 바닥에 앉기, 마스크를 브래지어로 재활용하기, 냉동실 열어 엉덩이 식히기, 커텐으로 초콜렛처럼 되기 그리고 공중부양까지……'
        ],
        closing: '자격증은 돈으로 딸 수 있다.\n긁기자격증은 수년의 밤잠으로 딴다.\n그 어떤 국가공인자격증도 갖추지 못한\n희귀성과 신뢰도.',
        analysis: {
          insight: { icon: '💡', text: '상업화 시대가 잃어버린 것 — 돈을 내고 받는 서비스가 결코 줄 수 없는 울림과 기억.',
                     condition: '작은 것이 사실 전부였던 이야기' },
          humor:   { icon: '😄', text: '유효기간 2067년 — 막내는 할머니가 127세까지 살기를 바란다.',
                     condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '아토피로 함께 밤잠 설치던 수년 — 그게 자격이 됐다.',
                     condition: '아주 작은 순간이 사실 전부였던 이야기' }
        },
        source: {
          type: '에세이',
          credit: 'SCJ / blog.naver.com/scjoe',
          url: 'https://blog.naver.com/scjoe/222651987009'
        },
        curatorNote: '유효기간 2067년이라는 숫자가 오래 남습니다. 막내가 의식했는지 모르겠지만, 할머니가 127살까지 살기를 바라는 마음이 그 숫자 안에 있습니다. 그리고 아토피로 밤잠 설치며 쌓인 세월이 자격증이 됐다는 것. 어떤 시험도 이것을 줄 수 없습니다.',
        publishedDate: '2026년 3월 21일'
      }
    }
  }
  ,
  {
    weekLabel: '2026년 3월 4주 (3/23–3/28)',
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

  /* ═══ 토요일 — 에세이·일상 (PRIMARY: 감동) ═══ */
  6: {
    title: '발',
    category: '에세이·일상',
    primaryType: '감동',
    types: ['감동', '통찰'],
    image: 'images/발.webp',
    svgKey: null,
    body: [
      '사랑스러운 발이다.',
      '광주의 펭귄마을에 구경 갔는데, 길거리 바닥에 거울 하나가 눈에 들어왔다. 우연히 거울 앞에 멈춰 섰더니, 온 가족의 발들이 거울에 반사되었다. 나중에 다시 사진을 열어보니, 발들이 참 정겹게 다가왔다.',
      '막내 발은 아직 새로운 땅을 만나기 부끄러운 듯이 한 쪽이 젖혀져 있고, 둘째 발은 당당하게 벌린 것이 왠지 자신감이 느껴진다. 첫째 발의 운동화에서는 청소년의 멋스러움이 깃들어 있고, 아내 발은 아들 셋 키우느라 예전보다 더 야무지게 변한 것 같다.',
      '많은 사람들은 아기가 태어나면 발 사진을 찍는다. 아마 얼마나 작고 예쁜 발이었는지 기억하면서 동시에 그 여림을 딛고 일어서서 앞으로 크고 멋진 발을 가진 사람으로 자라길 바라는 마음이겠다.',
      '발은 정말 삶 전체를 통해 이런 변화의 과정을 거친다. 아무것도 할 수 없는 귀여운 발에 근육이 생기면서 드디어 일어선다. 그러다 걷게 되고 뛰기도 하면서 조금씩 자란다. 축구를 하고 춤도 추고 발차기도 하면서 발은 점점 강해진다.',
      '어른이 되면 발은 성장을 멈추고 그 기능도 변한다. 지금까지는 스스로를 세우는 발이었다면, 이제부터는 가족들을 떠받치는 발이 된다. 아이를 안기도 하며 업고 다니기도 하고, 발로 아이를 들어 비행기도 태워준다. 또 생계를 위해 먼 거리를 마다 않고 걸어 다니고, 무거운 짐을 들고서도 거뜬히 버텨낸다. 심지어 여성들은 불편한 하이힐을 신고서도 직장 일을 하며 장도 본다.',
      '참 고마운 발이 아닐 수 없다.',
      '노인이 되면 발은 그동안 혹사당한 티를 내기 시작한다. 걸음이 느려지고 몸은 무거워진다. 혹시 무릎이나 허벅지의 관절까지 나빠지기라도 하면 펭귄처럼 뒤뚱뒤뚱 걷게 된다. 이제 발도 좀 쉴 때가 온 거고, 마침내 아기 발처럼 다시 여린 상태로 되돌아가면 이제는 머나먼 여행을 채비할 때가 된 것이다.',
      '정말 힘든 여행은 머리에서 가슴으로 그리고 가슴에서 발로 내려가는 것이라고 신영복 교수는 말했다. 아무리 머리에 지식이 가득해도 그것을 가슴으로 다른 사람들과 공감하며 사는 게 어렵고, 더 나아가 발로 대표되는 현장과 실천의 삶을 살아내기가 그렇게 힘들다는 이야기였다.',
      '실제로 나의 발을 통해 내가 어디로 향하고 있었는지, 어디를 그렇게 많이 오갔는지, 누구를 만나고 다녔는지 그리고 무엇을 떠받들고 있었는지를 살펴본다면, 거기에 내 삶이 고스란히 담겨있겠다 싶다. 아무리 많은 지식과 경험도 결국에는 발로 수렴되고, 다른 사람과 어울리고 서로 섬기는 인격과 사랑도 마지막에는 발을 통해 드러나게 된다.',
      '그렇다면 발을 사진 찍는 이유가 어린 시절 발에 대한 추억보다 삶의 흔적이 발을 통해 새겨진다는 것을 기억하길 바란 게 아닐까?',
      '발은 그야말로 우리의 삶을 말해주고 있다.'
    ],
    closing: '머리에서 가슴으로, 가슴에서 발로.\n가장 힘든 여행은 그 방향이다.\n발은 우리의 삶을 말해주고 있다.',
    analysis: {
      insight: { icon: '💡', text: '발은 삶의 궤적이다 — 어디로 향했는지, 무엇을 떠받쳤는지가 발에 새겨진다.',
                 condition: '작은 것이 사실 전부였던 이야기' },
      humor:   { icon: '😄', text: '펭귄마을의 거울에 비친 온 가족의 발 — 각자 다른 성격이 발에 그대로 담겨 있다.',
                 condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
      emotion: { icon: '❤️', text: '아기 발 사진을 찍는 이유 — 그 여림을 기억하며 크고 멋진 발로 자라길 바라는 마음.',
                 condition: '아주 작은 순간이 사실 전부였던 이야기' }
    },
    source: {
      type: '에세이',
      credit: 'SCJ / blog.naver.com/scjoe',
      url: 'https://blog.naver.com/scjoe/221551121353'
    },
    curatorNote: '"정말 힘든 여행은 머리에서 가슴으로, 그리고 가슴에서 발로 내려가는 것이다." 신영복 교수의 말이 이 글에서 오래 남습니다. 발을 보면 그 사람의 삶이 보인다는 것.',
    qna: {
      question: '당신의 발은 지금 어디를 향하고 있나요? 그리고 무엇을 오랫동안 떠받쳐 왔나요?',
      answer: '발을 들여다보는 것은 삶을 들여다보는 것입니다. 어디를 많이 오갔는지, 무엇을 위해 오래 서 있었는지. 그 흔적이 발에 고스란히 남아 있습니다.'
    },
    publishedDate: '2026년 3월 28일'
  }
    }
  }
];

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
