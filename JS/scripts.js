const COUNTRY_TOOLTIPS = {
  '🇦🇫': 'Афганистан',
  '🇦🇱': 'Албания',
  '🇩🇿': 'Алжир',
  '🇦🇩': 'Андорра',
  '🇦🇴': 'Ангола',
  '🇦🇬': 'Антигуа и Барбуда',
  '🇦🇷': 'Аргентина',
  '🇦🇲': 'Армения',
  '🇦🇺': 'Австралия',
  '🇦🇹': 'Австрия',
  '🇦🇿': 'Азербайджан',
  '🇧🇸': 'Багамы',
  '🇧🇭': 'Бахрейн',
  '🇧🇩': 'Бангладеш',
  '🇧🇧': 'Барбадос',
  '🇧🇾': 'Беларусь',
  '🇧🇪': 'Бельгия',
  '🇧🇿': 'Белиз',
  '🇧🇯': 'Бенин',
  '🇧🇹': 'Бутан',
  '🇧🇴': 'Боливия',
  '🇧🇦': 'Босния и Герцеговина',
  '🇧🇼': 'Ботсвана',
  '🇧🇷': 'Бразилия',
  '🇧🇳': 'Бруней',
  '🇧🇬': 'Болгария',
  '🇧🇫': 'Буркина-Фасо',
  '🇧🇮': 'Бурунди',
  '🇰🇭': 'Камбоджа',
  '🇨🇲': 'Камерун',
  '🇨🇦': 'Канада',
  '🇨🇻': 'Кабо-Верде',
  '🇨🇫': 'ЦАР',
  '🇹🇩': 'Чад',
  '🇨🇱': 'Чили',
  '🇨🇳': 'Китай',
  '🇨🇴': 'Колумбия',
  '🇰🇲': 'Коморы',
  '🇨🇬': 'Конго',
  '🇨🇩': 'ДР Конго',
  '🇨🇷': 'Коста-Рика',
  '🇨🇮': 'Кот-д\'Ивуар',
  '🇭🇷': 'Хорватия',
  '🇨🇺': 'Куба',
  '🇨🇾': 'Кипр',
  '🇨🇿': 'Чехия',
  '🇩🇰': 'Дания',
  '🇩🇯': 'Джибути',
  '🇩🇲': 'Доминика',
  '🇩🇴': 'Доминикана',
  '🇪🇨': 'Эквадор',
  '🇪🇬': 'Египет',
  '🇸🇻': 'Сальвадор',
  '🇬🇶': 'Экв. Гвинея',
  '🇪🇷': 'Эритрея',
  '🇪🇪': 'Эстония',
  '🇸🇿': 'Эсватини',
  '🇪🇹': 'Эфиопия',
  '🇫🇯': 'Фиджи',
  '🇫🇮': 'Финляндия',
  '🇫🇷': 'Франция',
  '🇬🇦': 'Габон',
  '🇬🇲': 'Гамбия',
  '🇬🇪': 'Грузия',
  '🇩🇪': 'Германия',
  '🇬🇭': 'Гана',
  '🇬🇷': 'Греция',
  '🇬🇩': 'Гренада',
  '🇬🇹': 'Гватемала',
  '🇬🇳': 'Гвинея',
  '🇬🇼': 'Гвинея-Бисау',
  '🇬🇾': 'Гайана',
  '🇭🇹': 'Гаити',
  '🇭🇳': 'Гондурас',
  '🇭🇺': 'Венгрия',
  '🇮🇸': 'Исландия',
  '🇮🇳': 'Индия',
  '🇮🇩': 'Индонезия',
  '🇮🇷': 'Иран',
  '🇮🇶': 'Ирак',
  '🇮🇪': 'Ирландия',
  '🇮🇱': 'Израиль',
  '🇮🇹': 'Италия',
  '🇯🇲': 'Ямайка',
  '🇯🇵': 'Япония',
  '🇯🇴': 'Иордания',
  '🇰🇿': 'Казахстан',
  '🇰🇪': 'Кения',
  '🇰🇮': 'Кирибати',
  '🇰🇵': 'КНДР',
  '🇰🇷': 'Южная Корея',
  '🇽🇰': 'Косово',
  '🇰🇼': 'Кувейт',
  '🇰🇬': 'Киргизия',
  '🇱🇦': 'Лаос',
  '🇱🇻': 'Латвия',
  '🇱🇧': 'Ливан',
  '🇱🇸': 'Лесото',
  '🇱🇷': 'Либерия',
  '🇱🇾': 'Ливия',
  '🇱🇮': 'Лихтенштейн',
  '🇱🇹': 'Литва',
  '🇱🇺': 'Люксембург',
  '🇲🇬': 'Мадагаскар',
  '🇲🇼': 'Малави',
  '🇲🇾': 'Малайзия',
  '🇲🇻': 'Мальдивы',
  '🇲🇱': 'Мали',
  '🇲🇹': 'Мальта',
  '🇲🇭': 'Маршалловы Острова',
  '🇲🇷': 'Мавритания',
  '🇲🇺': 'Маврикий',
  '🇲🇽': 'Мексика',
  '🇫🇲': 'Микронезия',
  '🇲🇩': 'Молдова',
  '🇲🇨': 'Монако',
  '🇲🇳': 'Монголия',
  '🇲🇪': 'Черногория',
  '🇲🇦': 'Марокко',
  '🇲🇿': 'Мозамбик',
  '🇲🇲': 'Мьянма',
  '🇳🇦': 'Намибия',
  '🇳🇷': 'Науру',
  '🇳🇵': 'Непал',
  '🇳🇱': 'Нидерланды',
  '🇳🇿': 'Новая Зеландия',
  '🇳🇮': 'Никарагуа',
  '🇳🇪': 'Нигер',
  '🇳🇬': 'Нигерия',
  '🇲🇰': 'Северная Македония',
  '🇳🇴': 'Норвегия',
  '🇴🇲': 'Оман',
  '🇵🇰': 'Пакистан',
  '🇵🇼': 'Палау',
  '🇵🇸': 'Палестина',
  '🇵🇦': 'Панама',
  '🇵🇬': 'Папуа — Новая Гвинея',
  '🇵🇾': 'Парагвай',
  '🇵🇪': 'Перу',
  '🇵🇭': 'Филиппины',
  '🇵🇱': 'Польша',
  '🇵🇹': 'Португалия',
  '🇶🇦': 'Катар',
  '🇷🇴': 'Румыния',
  '🇷🇺': 'Россия',
  '🇷🇼': 'Руанда',
  '🇰🇳': 'Сент-Китс и Невис',
  '🇱🇨': 'Сент-Люсия',
  '🇻🇨': 'Сент-Винсент и Гренадины',
  '🇼🇸': 'Самоа',
  '🇸🇲': 'Сан-Марино',
  '🇸🇹': 'Сан-Томе и Принсипи',
  '🇸🇦': 'Саудовская Аравия',
  '🇸🇳': 'Сенегал',
  '🇷🇸': 'Сербия',
  '🇸🇨': 'Сейшелы',
  '🇸🇱': 'Сьерра-Леоне',
  '🇸🇬': 'Сингапур',
  '🇸🇰': 'Словакия',
  '🇸🇮': 'Словения',
  '🇸🇧': 'Соломоновы Острова',
  '🇸🇴': 'Сомали',
  '🇿🇦': 'ЮАР',
  '🇸🇸': 'Южный Судан',
  '🇪🇸': 'Испания',
  '🇱🇰': 'Шри-Ланка',
  '🇸🇩': 'Судан',
  '🇸🇷': 'Суринам',
  '🇸🇪': 'Швеция',
  '🇨🇭': 'Швейцария',
  '🇸🇾': 'Сирия',
  '🇹🇼': 'Тайвань',
  '🇹🇯': 'Таджикистан',
  '🇹🇿': 'Танзания',
  '🇹🇭': 'Таиланд',
  '🇹🇱': 'Восточный Тимор',
  '🇹🇬': 'Того',
  '🇹🇴': 'Тонга',
  '🇹🇹': 'Тринидад и Тобаго',
  '🇹🇳': 'Тунис',
  '🇹🇷': 'Турция',
  '🇹🇲': 'Туркменистан',
  '🇹🇻': 'Тувалу',
  '🇺🇬': 'Уганда',
  '🇺🇦': 'Украина',
  '🇦🇪': 'ОАЭ',
  '🇬🇧': 'Великобритания',
  '🇺🇸': 'США',
  '🇺🇾': 'Уругвай',
  '🇺🇿': 'Узбекистан',
  '🇻🇺': 'Вануату',
  '🇻🇦': 'Ватикан',
  '🇻🇪': 'Венесуэла',
  '🇻🇳': 'Вьетнам',
  '🇾🇪': 'Йемен',
  '🇿🇲': 'Замбия',
  '🇿🇼': 'Зимбабве'
};


class PlayersDatabase {
  constructor() {
    this.sortFilters = {hack: '', description: '', alpha: '', country: ''};
    this.exactSteamIdMatch = true;
    this.currentQuery = '';
    this.openGroupId = null;

    this.waitForDatabase()
        .then(() => {
          this.players = DATABASE_JSON.players;
          this.filteredPlayers = [...this.players];
          this.init();
        })
        .catch(err => {
          console.error('Ошибка загрузки database.js:', err);
          document.getElementById('playersTableBody').innerHTML =
              '<tr><td colspan="5" style="text-align:center;padding:50px;color:var(--danger);">Ошибка загрузки database.js</td></tr>';
        });
  }

  waitForDatabase(attempts = 50) {
    return new Promise((resolve, reject) => {
      let count = 0;
      const check = () => {
        if (typeof DATABASE_JSON !== 'undefined' && DATABASE_JSON.players) {
          resolve();
        } else if (count++ > attempts) {
          reject(new Error('database.js не загрузился'));
        } else {
          setTimeout(check, 100);
        }
      };
      check();
    });
  }

  init() {
    this.initThemeToggle();
    this.initSearch();
    this.initSortControls();
    this.initResetSortTable();
    this.initStatsModal();
    this.initCollapseHandlers();
    this.initCountriesList();
    this.applySorting();
  }

  initCountriesList() {
    const countrySelect = document.getElementById('countryFilter');
    if (!countrySelect) return;

    const uniqueCountries = new Set();
    this.players.forEach(p => {
      const c = (p['country residence'] || '').toString().trim();
      if (c && c !== '—') {
        uniqueCountries.add(c);
      }
    });

    const sortedCountries = Array.from(uniqueCountries).sort((a, b) => {
      const nameA = COUNTRY_TOOLTIPS[a] || a;
      const nameB = COUNTRY_TOOLTIPS[b] || b;
      return nameA.localeCompare(nameB, 'ru');
    });

    sortedCountries.forEach(c => {
      const option = document.createElement('option');
      option.value = c;
      option.textContent =
          `${c} ${COUNTRY_TOOLTIPS[c] || 'Неизвестная страна'}`;
      countrySelect.appendChild(option);
    });
  }

  /* ===== TWINK GROUPING ===== */

  isTwink(player) {
    return (player.description || '').toLowerCase().includes('twink');
  }

  buildGroups(players) {
    const groupsMap = new Map();

    players.forEach(p => {
      const nick = (p.nickname || '').trim().toLowerCase();
      const isTwink = this.isTwink(p);
      const desc = p.description || '';
      let key = null;

      if (isTwink) {
        const mainBySid = players.find(main => {
          if (this.isTwink(main)) return false;
          const sid = (main.steamID || '').trim();
          return sid && sid !== '—' && desc.includes(sid);
        });

        if (mainBySid) {
          const mainNick = (mainBySid.nickname || '').trim().toLowerCase();
          key =
              mainNick ? `nick_${mainNick}` : `sid_${mainBySid.steamID.trim()}`;
        }
      }

      if (!key) {
        if (nick) {
          key = `nick_${nick}`;
        } else if (!isTwink && p.steamID && p.steamID.trim() !== '—') {
          key = `sid_${p.steamID.trim()}`;
        } else {
          key = `__empty_${Math.random()}`;
        }
      }

      if (!groupsMap.has(key)) {
        groupsMap.set(key, []);
      }
      groupsMap.get(key).push(p);
    });

    const result = [];
    let groupId = 0;

    groupsMap.forEach((group) => {
      if (group.length === 1) {
        result.push({player: group[0], type: 'main', twinks: [], groupId: -1});
        return;
      }

      let mainIndex = group.findIndex(p => !this.isTwink(p));
      if (mainIndex === -1) mainIndex = 0;

      const main = group[mainIndex];
      const twinks = group.filter((_, i) => i !== mainIndex);

      result.push({
        player: main,
        type: 'main',
        twinks: twinks,
        groupId: twinks.length > 0 ? groupId++ : -1
      });
    });

    return result;
  }

  /* ===== COLLAPSE HANDLERS ===== */

  initCollapseHandlers() {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.twink-toggle')) return;
      this.collapseAllGroups();
    });
  }

  collapseAllGroups() {
    if (this.openGroupId === null) return;

    document.querySelectorAll('.twink-row').forEach(r => {
      r.classList.remove('twink-row-visible');
    });
    document.querySelectorAll('.twink-toggle').forEach(t => {
      t.classList.remove('twink-toggle-open');
    });

    this.openGroupId = null;
  }

  toggleGroup(groupId) {
    const wasOpen = this.openGroupId === groupId;

    this.collapseAllGroups();

    if (wasOpen) return;

    document.querySelectorAll(`.twink-row[data-group="${groupId}"]`)
        .forEach(r => {
          r.classList.add('twink-row-visible');
        });

    const toggle =
        document.querySelector(`.twink-toggle[data-group="${groupId}"]`);
    if (toggle) toggle.classList.add('twink-toggle-open');

    this.openGroupId = groupId;
  }

  /* ===== THEME ===== */

  initThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    const icon = toggle.querySelector('i');

    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      document.body.classList.toggle('light-theme');
      const isDark = document.body.classList.contains('dark-theme');
      icon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      icon.className = 'fas fa-sun';
    }
  }

  /* ===== SEARCH ===== */

  initSearch() {
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearch');
    const counter = document.getElementById('searchCounter');
    const maxLen = 50;

    const updateClearState = () => {
      const hasText = searchInput.value.trim().length > 0;
      clearBtn.style.opacity = hasText ? '1' : '0.3';
      clearBtn.style.pointerEvents = hasText ? 'auto' : 'none';
    };

    searchInput.addEventListener('input', (e) => {
      if (e.target.value.length > maxLen) {
        e.target.value = e.target.value.slice(0, maxLen);
      }
      if (counter) counter.textContent = `${e.target.value.length}/${maxLen}`;
      this.search(e.target.value);
      updateClearState();
    });

    clearBtn.addEventListener('click', () => {
      if (searchInput.value.trim().length === 0) return;
      searchInput.value = '';
      if (counter) counter.textContent = `0/${maxLen}`;
      this.search('');
      searchInput.blur();
      updateClearState();
    });

    updateClearState();
  }

  /* ===== SORT CONTROLS ===== */

  initSortControls() {
    const sortToggle = document.getElementById('sortToggle');
    const sortModal = document.getElementById('sortModal');
    const closeSortModal = document.getElementById('closeSortModal');
    const applySortBtn = document.getElementById('applySortBtn');
    const resetSortBtn = document.getElementById('resetSortBtn');

    const openModal = () => {
      if (!sortModal) return;
      sortModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      const h = document.getElementById('hackFilter');
      const d = document.getElementById('descFilter');
      const a = document.getElementById('alphaSort');
      const e = document.getElementById('exactSteamId');
      const c = document.getElementById('countryFilter');
      if (h) h.value = this.sortFilters.hack || '';
      if (d) d.value = this.sortFilters.description || '';
      if (a) a.value = this.sortFilters.alpha || '';
      if (e) e.checked = this.exactSteamIdMatch;
      if (c) c.value = this.sortFilters.country || '';
    };

    const closeModalFn = () => {
      if (!sortModal) return;
      sortModal.classList.remove('active');
      document.body.style.overflow = '';
    };

    sortToggle && sortToggle.addEventListener('click', openModal);
    closeSortModal && closeSortModal.addEventListener('click', closeModalFn);
    sortModal && sortModal.addEventListener('click', (e) => {
      if (e.target === sortModal) closeModalFn();
    });

    applySortBtn && applySortBtn.addEventListener('click', () => {
      this.sortFilters.hack =
          (document.getElementById('hackFilter') || {}).value || '';
      this.sortFilters.description =
          (document.getElementById('descFilter') || {}).value || '';
      this.sortFilters.alpha =
          (document.getElementById('alphaSort') || {}).value || '';
      this.sortFilters.country =
          (document.getElementById('countryFilter') || {}).value || '';
      this.exactSteamIdMatch =
          (document.getElementById('exactSteamId') || {}).checked || false;
      this.applySorting();
      closeModalFn();
    });

    resetSortBtn && resetSortBtn.addEventListener('click', () => {
      ['hackFilter', 'descFilter', 'alphaSort', 'countryFilter'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });
      const ex = document.getElementById('exactSteamId');
      if (ex) ex.checked = false;
      this.sortFilters = {hack: '', description: '', alpha: '', country: ''};
      this.exactSteamIdMatch = false;
      this.applySorting();
    });
  }

  initResetSortTable() {
    const resetBtn = document.getElementById('resetSortTable');
    if (!resetBtn) return;
    resetBtn.addEventListener('click', () => {
      this.sortFilters = {hack: '', description: '', alpha: '', country: ''};
      this.exactSteamIdMatch = false;
      this.applySorting();
      resetBtn.blur();
    });
  }

  /* ===== STATS MODAL ===== */

  initStatsModal() {
    const statsToggle = document.getElementById('statsToggle');
    const statsModal = document.getElementById('statsModal');
    const closeStatsModal = document.getElementById('closeStatsModal');

    const open = () => {
      if (!statsModal) return;
      statsModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      this.generateStatistics();
    };
    const close = () => {
      if (!statsModal) return;
      statsModal.classList.remove('active');
      document.body.style.overflow = '';
    };

    statsToggle && statsToggle.addEventListener('click', open);
    closeStatsModal && closeStatsModal.addEventListener('click', close);
    statsModal && statsModal.addEventListener('click', (e) => {
      if (e.target === statsModal) close();
    });
  }

  generateStatistics() {
    const statsBody = document.getElementById('statsModalBody');
    if (!statsBody) return;

    const mainPlayers = this.players.filter(p => !this.isTwink(p));
    const twinkCount = this.players.filter(p => this.isTwink(p)).length;
    const totalPlayers = mainPlayers.length;

    const isNoCheat = (p) =>
        !p.hacks || p.hacks.trim() === '' || p.hacks === '—';
    const cheaters = mainPlayers.filter(p => !isNoCheat(p));
    const nonCheaters = mainPlayers.filter(isNoCheat);
    const cheatersCount = cheaters.length;
    const nonCheatersCount = nonCheaters.length;
    const cheatersPercent = totalPlayers > 0 ?
        ((cheatersCount / totalPlayers) * 100).toFixed(1) :
        '0.0';
    const nonCheatersPercent = totalPlayers > 0 ?
        ((nonCheatersCount / totalPlayers) * 100).toFixed(1) :
        '0.0';

    const countryStats = {};
    let noCountryCount = 0;
    mainPlayers.forEach(p => {
      const c = (p['country residence'] || '').toString().trim();
      if (c && c !== '—') {
        countryStats[c] = (countryStats[c] || 0) + 1;
      } else {
        noCountryCount++;
      }
    });
    const sortedCountries =
        Object.entries(countryStats).sort((a, b) => b[1] - a[1]);

    const cheaterCountryStats = {};
    let cheaterNoCountryCount = 0;
    cheaters.forEach(p => {
      const c = (p['country residence'] || '').toString().trim();
      if (c && c !== '—') {
        cheaterCountryStats[c] = (cheaterCountryStats[c] || 0) + 1;
      } else {
        cheaterNoCountryCount++;
      }
    });
    const sortedCheaterCountries =
        Object.entries(cheaterCountryStats).sort((a, b) => b[1] - a[1]);

    const hackStats = {};
    cheaters.forEach(p => {
      const hacks = (p.hacks || '').trim();
      if (hacks && hacks !== '—') {
        hacks.split(',').map(h => h.trim()).filter(Boolean).forEach(hack => {
          if (!hackStats[hack])
            hackStats[hack] = {total: 0, countries: {}, noCountry: 0};
          hackStats[hack].total++;
          const c = (p['country residence'] || '').toString().trim();
          if (c && c !== '—') {
            hackStats[hack].countries[c] =
                (hackStats[hack].countries[c] || 0) + 1;
          } else {
            hackStats[hack].noCountry++;
          }
        });
      }
    });
    const sortedHacks =
        Object.entries(hackStats).sort((a, b) => b[1].total - a[1].total);

    let html =
        `<section class="stats-section"><h3><i class="fas fa-user-secret"></i> Читеры по странам</h3><div class="stats-list">`;
    sortedCheaterCountries.forEach(([c, n]) => {
      html += `<div class="stat-item"><span class="stat-label">${c} ${
          COUNTRY_TOOLTIPS[c] || '?'}</span><span class="stat-value">${n} (${
          (n / cheatersCount * 100).toFixed(1)}%)</span></div>`;
    });
    if (cheaterNoCountryCount > 0)
      html +=
          `<div class="stat-item"><span class="stat-label">❓ Без страны</span><span class="stat-value">${
              cheaterNoCountryCount} (${
              (cheaterNoCountryCount / cheatersCount * 100)
                  .toFixed(1)}%)</span></div>`;
    html += `</div></section>`;

    html +=
        `<section class="stats-section"><h3><i class="fas fa-flag"></i> Все игроки по странам</h3><div class="stats-list">`;
    sortedCountries.forEach(([c, n]) => {
      html += `<div class="stat-item"><span class="stat-label">${c} ${
          COUNTRY_TOOLTIPS[c] || '?'}</span><span class="stat-value">${n} (${
          (n / totalPlayers * 100).toFixed(1)}%)</span></div>`;
    });
    if (noCountryCount > 0)
      html +=
          `<div class="stat-item"><span class="stat-label">❓ Без страны</span><span class="stat-value">${
              noCountryCount} (${
              (noCountryCount / totalPlayers * 100).toFixed(1)}%)</span></div>`;
    html += `</div></section>`;

    html +=
        `<section class="stats-section"><h3><i class="fas fa-bug"></i> По читам и функциям</h3><div class="stats-list">`;
    sortedHacks.forEach(([hack, data]) => {
      html +=
          `<div class="stat-item-hack"><div class="hack-header"><span class="stat-label-hack">${
              this.escapeHtml(
                  hack)}</span><span class="stat-value-hack">${data.total} (${
              (data.total / totalPlayers * 100).toFixed(1)}%)</span></div>`;
      const sc = Object.entries(data.countries).sort((a, b) => b[1] - a[1]);
      if (sc.length > 0 || data.noCountry > 0) {
        html += `<div class="hack-countries">`;
        sc.forEach(([c, n]) => {
          html +=
              `<div class="hack-country-item"><span class="hack-country-label">${
                  c} ${
                  COUNTRY_TOOLTIPS[c] ||
                  '?'}</span><span class="hack-country-value">${n} (${
                  (n / data.total * 100).toFixed(1)}%)</span></div>`;
        });
        if (data.noCountry > 0)
          html +=
              `<div class="hack-country-item"><span class="hack-country-label">❓ Без страны</span><span class="hack-country-value">${
                  data.noCountry} (${
                  (data.noCountry / data.total * 100)
                      .toFixed(1)}%)</span></div>`;
        html += `</div>`;
      }
      html += `</div>`;
    });
    html += `</div></section>`;

    html +=
        `<section class="stats-section"><h3><i class="fas fa-chart-pie"></i> Читеры vs Не читеры</h3><div class="stats-list">
      <div class="stat-item stat-item-highlight"><span class="stat-label"><i class="fas fa-user-secret"></i> Читеры</span><span class="stat-value stat-value-danger">${
            cheatersCount} (${cheatersPercent}%)</span></div>
      <div class="stat-item stat-item-highlight"><span class="stat-label"><i class="fas fa-user-check"></i> Не читеры</span><span class="stat-value stat-value-success">${
            nonCheatersCount} (${nonCheatersPercent}%)</span></div>
      <div class="stat-item stat-item-highlight"><span class="stat-label"><i class="fas fa-users"></i> Всего игроков</span><span class="stat-value stat-value-primary">${
            totalPlayers} (100%)</span></div>
      <div class="stat-item stat-item-highlight"><span class="stat-label"><i class="fas fa-clone"></i> Твинки (не учтены)</span><span class="stat-value">${
            twinkCount}</span></div>
    </div></section>`;

    statsBody.innerHTML = html;
  }

  /* ===== STEAM ID CONVERSION ===== */

  steamId64ToSteamId(steamId64) {
    if (!steamId64) return '';
    try {
      const BASE = 76561197960265728n;
      const id = BigInt(steamId64);
      if (id < BASE) return '';
      const accountId = id - BASE;
      const Y = accountId % 2n;
      const Z = (accountId - Y) / 2n;
      return `STEAM_0:${Y.toString()}:${Z.toString()}`;
    } catch {
      return '';
    }
  }

  steamIdToSteamId64(steamId) {
    if (!steamId || steamId === '—') return '';
    const match = steamId.match(/^STEAM_(\d+):(\d+):(\d+)$/i);
    if (!match) return '';
    const [, , Y, Z] = match.map(Number);
    return (76561197960265728n + BigInt(Z) * 2n + BigInt(Y)).toString();
  }

  /* ===== SEARCH & SORT ===== */

  search(query) {
    let q = query.trim();
    const profileMatch =
        q.toLowerCase().match(/steamcommunity\.com\/profiles\/(\d{17})/);
    if (profileMatch) q = profileMatch[1];
    if (/^\d{17}$/.test(q)) {
      const sid = this.steamId64ToSteamId(q);
      if (sid) q = sid.toLowerCase();
    } else {
      q = q.toLowerCase();
    }
    this.currentQuery = (query || '').trim();

    if (!q) {
      this.filteredPlayers = [...this.players];
    } else {
      this.filteredPlayers = this.players.filter(p => {
        const nick = (p.nickname ?? '').toLowerCase();
        const sid = (p.steamID ?? '').toLowerCase();
        const hacks = (p.hacks ?? '').toLowerCase();
        const desc = (p.description ?? '').toLowerCase();
        const sidMatch = this.exactSteamIdMatch ? sid === q : sid.includes(q);
        return nick.includes(q) || hacks.includes(q) || desc.includes(q) ||
            sidMatch;
      });
    }

    this.applySorting();
  }

  applySorting() {
    let q = this.currentQuery;
    if (q) {
      const pm =
          q.toLowerCase().match(/steamcommunity\.com\/profiles\/(\d{17})/);
      if (pm) q = pm[1];
      if (/^\d{17}$/.test(q)) {
        const sid = this.steamId64ToSteamId(q);
        if (sid) q = sid.toLowerCase();
      } else {
        q = q.toLowerCase();
      }
    }

    let result;
    if (!q) {
      result = [...this.players];
    } else {
      result = this.players.filter(p => {
        const nick = (p.nickname ?? '').toLowerCase();
        const sid = (p.steamID ?? '').toLowerCase();
        const hacks = (p.hacks ?? '').toLowerCase();
        const desc = (p.description ?? '').toLowerCase();
        const sidMatch = this.exactSteamIdMatch ? sid === q : sid.includes(q);
        return nick.includes(q) || hacks.includes(q) || desc.includes(q) ||
            sidMatch;
      });
    }

    const isNoCheat = (p) =>
        !p.hacks || p.hacks.trim() === '' || p.hacks === '—';

    if (this.sortFilters.hack === 'none-only') {
      result = result.filter(isNoCheat);
    } else if (this.sortFilters.hack === 'none-first') {
      result =
          [...result.filter(isNoCheat), ...result.filter(p => !isNoCheat(p))];
    } else if (
        this.sortFilters.hack && !this.sortFilters.hack.startsWith('none')) {
      const target = this.sortFilters.hack.toUpperCase();
      result =
          result.filter(p => (p.hacks || '').toUpperCase().includes(target));
    }

    const hasDesc = (p) =>
        p.description && p.description.trim() !== '' && p.description !== '—';
    if (this.sortFilters.description === 'none-only')
      result = result.filter(p => !hasDesc(p));
    else if (this.sortFilters.description === 'none-first')
      result = [...result.filter(p => !hasDesc(p)), ...result.filter(hasDesc)];
    else if (this.sortFilters.description === 'present-only')
      result = result.filter(hasDesc);
    else if (this.sortFilters.description === 'present-first')
      result = [...result.filter(hasDesc), ...result.filter(p => !hasDesc(p))];

    if (this.sortFilters.country) {
      result = result.filter(
          p => (p['country residence'] || '').toString().trim() ===
              this.sortFilters.country);
    }

    if (this.sortFilters.alpha === 'asc') {
      result.sort(
          (a, b) => (a.nickname || '')
                        .toLowerCase()
                        .localeCompare((b.nickname || '').toLowerCase(), 'ru'));
    } else if (this.sortFilters.alpha === 'desc') {
      result.sort(
          (a, b) => (b.nickname || '')
                        .toLowerCase()
                        .localeCompare((a.nickname || '').toLowerCase(), 'ru'));
    }

    result.sort((a, b) => {
      const ea = (a.nickname || '').trim() === '';
      const eb = (b.nickname || '').trim() === '';
      if (ea && !eb) return 1;
      if (!ea && eb) return -1;
      return 0;
    });

    this.filteredPlayers = result;
    this.openGroupId = null;
    this.renderTable();
    this.updateStats();
  }

  /* ===== RENDER ===== */

  renderTable() {
    const tbody = document.getElementById('playersTableBody');
    tbody.innerHTML = '';

    if (this.filteredPlayers.length === 0) {
      tbody.innerHTML =
          '<tr><td colspan="5" class="no-results">Ничего не найдено 😔</td></tr>';
      return;
    }

    const groups = this.buildGroups(this.filteredPlayers);
    const fragment = document.createDocumentFragment();

    groups.forEach(entry => {
      const mainRow = this.createPlayerRow(entry.player, false);

      if (entry.twinks.length > 0) {
        const nickTd = mainRow.querySelector('td.nickname');
        if (nickTd) {
          const btn = document.createElement('button');
          btn.className = 'twink-toggle';
          btn.setAttribute('data-group', entry.groupId);
          btn.title = `Показать ${entry.twinks.length} твинк${
              this.twinkSuffix(entry.twinks.length)}`;
          btn.innerHTML =
              `<i class="fas fa-chevron-right"></i><span class="twink-count">${
                  entry.twinks.length}</span>`;
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleGroup(entry.groupId);
          });
          nickTd.insertBefore(btn, nickTd.firstChild);
        }
      }

      fragment.appendChild(mainRow);

      entry.twinks.forEach(twink => {
        const twinkRow = this.createPlayerRow(twink, true);
        twinkRow.classList.add('twink-row');
        twinkRow.setAttribute('data-group', entry.groupId);
        fragment.appendChild(twinkRow);
      });
    });

    tbody.appendChild(fragment);
  }

  twinkSuffix(n) {
    const l2 = n % 100;
    const l1 = n % 10;
    if (l2 >= 11 && l2 <= 19) return 'ов';
    if (l1 === 1) return '';
    if (l1 >= 2 && l1 <= 4) return 'а';
    return 'ов';
  }

  getOrDash(value) {
    const v = (value ?? '').toString().trim();
    return v.length > 0 ? v : '—';
  }

  createPlayerRow(player, isTwinkStyled) {
    const row = document.createElement('tr');
    if (isTwinkStyled) row.classList.add('twink-styled');

    let hacksText = player.hacks || '';
    if (hacksText && hacksText !== '—' && hacksText.trim() !== '') {
      const arr = hacksText.split(',').map(h => h.trim()).filter(Boolean);
      arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase(), 'ru'));
      hacksText = arr.join(', ');
    }

    const rawSid = (player.steamID ?? '').toString().trim();
    const hasSid = rawSid.length > 0;
    const sid64 = hasSid ? this.steamIdToSteamId64(rawSid) : '';
    const profileUrl =
        sid64 ? `http://steamcommunity.com/profiles/${sid64}` : '';

    const sidHtml = hasSid ?
        `
      <td class="steamid steamid-filled">
        <span class="steamid-text">${this.escapeHtml(rawSid)}</span>
        ${
            profileUrl ?
                `<div class="steam-profile-btn-container"><a href="${
                    profileUrl}" target="_blank" rel="noopener noreferrer" class="steam-profile-btn" title="Открыть профиль Steam"><i class="fab fa-steam"></i><span>Профиль</span></a></div>` :
                ''}
      </td>` :
        `<td class="steamid steamid-empty"><span class="steamid-value">—</span></td>`;

    const hasProofs = player.proofs && player.proofs.trim() !== '';
    const hacksHtml = `
      <td class="hacks-text"><div class="hacks-content">
        <span class="hacks-value">${
        this.escapeHtml(this.getOrDash(hacksText))}</span>
        ${
        hasProofs ?
            `<div class="proof-btn-container"><a href="${
                this.escapeHtml(
                    player
                        .proofs)}" target="_blank" rel="noopener noreferrer" class="proof-btn" title="Доказательство"><i class="fas fa-file-alt"></i><span>Доказательство</span></a></div>` :
            ''}
      </div></td>`;

    const countryRaw = (player['country residence'] ?? '').toString().trim();
    const countryTitle = COUNTRY_TOOLTIPS[countryRaw] || '';

    row.innerHTML = `
      <td class="nickname">${
        this.escapeHtml(this.getOrDash(player.nickname))}</td>
      ${sidHtml}
      ${hacksHtml}
      <td class="description">${
        this.escapeHtml(this.getOrDash(player.description))}</td>
      <td class="country" ${
        countryTitle ? `title="${this.escapeHtml(countryTitle)}"` :
                       ''}>${this.escapeHtml(this.getOrDash(countryRaw))}</td>
    `;

    return row;
  }

  updateStats() {
    const total = this.filteredPlayers.length;
    const twinks = this.filteredPlayers.filter(p => this.isTwink(p)).length;
    const main = total - twinks;

    document.getElementById('playersCount').textContent = main;

    const twinksEl = document.getElementById('twinksCount');
    if (twinksEl) {
      if (twinks > 0) {
        twinksEl.textContent = `(${twinks} твинк${this.twinkSuffix(twinks)})`;
        twinksEl.style.display = '';
      } else {
        twinksEl.textContent = '';
        twinksEl.style.display = 'none';
      }
    }
  }

  escapeHtml(text) {
    const d = document.createElement('div');
    d.textContent = text;
    return d.innerHTML;
  }
}

/* ===== GLOBAL INIT ===== */

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.onbeforeunload = () => window.scrollTo(0, 0);
window.addEventListener('load', () => {
  const s = document.getElementById('searchInput');
  if (s) s.value = '';
});

let dbInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  dbInstance = new PlayersDatabase();

  const sourceBtn = document.querySelector('.source-button');
  if (sourceBtn) sourceBtn.addEventListener('click', () => sourceBtn.blur());

  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  }
});

const faqToggle = document.getElementById('faqToggle');
const faqModal = document.getElementById('faqModal');
const closeModal = document.getElementById('closeModal');

faqToggle && faqToggle.addEventListener('click', () => {
  faqModal.classList.add('active');
  document.body.style.overflow = 'hidden';
});
closeModal && closeModal.addEventListener('click', () => {
  faqModal.classList.remove('active');
  document.body.style.overflow = '';
});
faqModal && faqModal.addEventListener('click', (e) => {
  if (e.target === faqModal) {
    faqModal.classList.remove('active');
    document.body.style.overflow = '';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    [faqModal, document.getElementById('statsModal'),
     document.getElementById('sortModal')]
        .forEach(m => {
          if (m && m.classList.contains('active')) {
            m.classList.remove('active');
            document.body.style.overflow = '';
          }
        });
    if (dbInstance) dbInstance.collapseAllGroups();
  }
});