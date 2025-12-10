const COUNTRY_TOOLTIPS = {
  '🇦🇱': 'Албания',
  '🇧🇾': 'Беларусь',
  '🇩🇪': 'Германия',
  '🇩🇰': 'Дания',
  '🇬🇧': 'Великобритания',
  '🇬🇪': 'Грузия',
  '🇰🇿': 'Казахстан',
  '🇱🇹': 'Литва',
  '🇷🇺': 'Россия',
  '🇹🇷': 'Турция',
  '🇺🇦': 'Украина',
  '🇺🇸': 'США',
  '🇺🇿': 'Узбекистан',
  '🇦🇿': 'Азербайджан',
  '🇮🇱': 'Израиль',
  '🇪🇸': 'Испания',
  '🇷🇸': 'Сербия'
};


class PlayersDatabase {
  constructor() {
    this.sortFilters = {hack: '', description: '', alpha: '', country: ''};
    this.exactSteamIdMatch = true;
    this.currentQuery = '';


    this.waitForDatabase()
        .then(() => {
          this.players = DATABASE_JSON.players;
          this.filteredPlayers = [...this.players];
          this.init();
        })
        .catch(err => {
          console.error('Ошибка загрузки database.js:', err);
          document.getElementById('playersTableBody').innerHTML =
              '<tr><td colspan="5" style="text-align: center; padding: 50px; color: var(--danger);">Ошибка загрузки database.js</td></tr>';
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
    this.renderTable();
    this.updateStats();
    this.initThemeToggle();
    this.initSearch();
    this.initSortControls();
    this.initResetSortTable();
    this.initStatsModal();
    this.applySorting();
  }


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


  initSearch() {
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearch');


    const counter = document.getElementById('searchCounter');
    const maxLen = 50;


    const updateClearState = () => {
      if (searchInput.value.trim().length > 0) {
        clearBtn.style.opacity = '1';
        clearBtn.style.pointerEvents = 'auto';
      } else {
        clearBtn.style.opacity = '0.3';
        clearBtn.style.pointerEvents = 'none';
      }
    };


    searchInput.addEventListener('input', (e) => {
      if (e.target.value.length > maxLen) {
        e.target.value = e.target.value.slice(0, maxLen);
      }


      const len = e.target.value.length;
      if (counter) {
        counter.textContent = `${len}/${maxLen}`;
      }


      searchInput.classList.add('searching');
      this.search(e.target.value);
      updateClearState();
    });


    clearBtn.addEventListener('click', () => {
      if (searchInput.value.trim().length === 0) return;


      searchInput.value = '';
      if (counter) counter.textContent = `0/${maxLen}`;


      this.search('');
      searchInput.classList.remove('searching');
      searchInput.blur();
      updateClearState();
    });


    updateClearState();
  }


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


      const hackSelect = document.getElementById('hackFilter');
      const descSelect = document.getElementById('descFilter');
      const alphaSelect = document.getElementById('alphaSort');
      const exactCheckbox = document.getElementById('exactSteamId');
      const countrySelect = document.getElementById('countryFilter');


      if (hackSelect) hackSelect.value = this.sortFilters.hack || '';
      if (descSelect) descSelect.value = this.sortFilters.description || '';
      if (alphaSelect) alphaSelect.value = this.sortFilters.alpha || '';
      if (exactCheckbox) exactCheckbox.checked = this.exactSteamIdMatch;
      if (countrySelect) countrySelect.value = this.sortFilters.country || '';
    };


    const closeModalFn = () => {
      if (!sortModal) return;
      sortModal.classList.remove('active');
      document.body.style.overflow = '';
    };


    sortToggle && sortToggle.addEventListener('click', openModal);
    closeSortModal && closeSortModal.addEventListener('click', closeModalFn);


    sortModal && sortModal.addEventListener('click', (e) => {
      if (e.target === sortModal) {
        closeModalFn();
      }
    });


    applySortBtn && applySortBtn.addEventListener('click', () => {
      const hackSelect = document.getElementById('hackFilter');
      const descSelect = document.getElementById('descFilter');
      const alphaSelect = document.getElementById('alphaSort');
      const countrySelect = document.getElementById('countryFilter');
      const exactCheckbox = document.getElementById('exactSteamId');


      this.sortFilters.hack = hackSelect ? hackSelect.value : '';
      this.sortFilters.description = descSelect ? descSelect.value : '';
      this.sortFilters.alpha = alphaSelect ? alphaSelect.value : '';
      this.sortFilters.country = countrySelect ? countrySelect.value : '';
      this.exactSteamIdMatch = exactCheckbox ? exactCheckbox.checked : true;


      this.applySorting();
      closeModalFn();
    });


    resetSortBtn && resetSortBtn.addEventListener('click', () => {
      const hackSelect = document.getElementById('hackFilter');
      const descSelect = document.getElementById('descFilter');
      const alphaSelect = document.getElementById('alphaSort');
      const countrySelect = document.getElementById('countryFilter');
      const exactCheckbox = document.getElementById('exactSteamId');


      if (hackSelect) hackSelect.value = '';
      if (descSelect) descSelect.value = '';
      if (alphaSelect) alphaSelect.value = '';
      if (countrySelect) countrySelect.value = '';
      if (exactCheckbox) exactCheckbox.checked = false;


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


  initStatsModal() {
    const statsToggle = document.getElementById('statsToggle');
    const statsModal = document.getElementById('statsModal');
    const closeStatsModal = document.getElementById('closeStatsModal');


    const openStatsModal = () => {
      if (!statsModal) return;
      statsModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      this.generateStatistics();
    };


    const closeStatsModalFn = () => {
      if (!statsModal) return;
      statsModal.classList.remove('active');
      document.body.style.overflow = '';
    };


    statsToggle && statsToggle.addEventListener('click', openStatsModal);
    closeStatsModal &&
        closeStatsModal.addEventListener('click', closeStatsModalFn);


    statsModal && statsModal.addEventListener('click', (e) => {
      if (e.target === statsModal) {
        closeStatsModalFn();
      }
    });
  }


  generateStatistics() {
    const statsBody = document.getElementById('statsModalBody');
    if (!statsBody) return;


    const totalPlayers = this.players.length;


    const isNoCheat = (p) =>
        !p.hacks || p.hacks.trim() === '' || p.hacks === '—';


    const cheaters = this.players.filter(p => !isNoCheat(p));
    const nonCheaters = this.players.filter(isNoCheat);


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

    this.players.forEach(player => {
      const country = (player['country residence'] || '').toString().trim();
      if (country && country !== '—') {
        if (!countryStats[country]) {
          countryStats[country] = 0;
        }
        countryStats[country]++;
      } else {
        noCountryCount++;
      }
    });

    const sortedCountries =
        Object.entries(countryStats).sort((a, b) => b[1] - a[1]);


    const cheaterCountryStats = {};
    let cheaterNoCountryCount = 0;

    cheaters.forEach(player => {
      const country = (player['country residence'] || '').toString().trim();
      if (country && country !== '—') {
        if (!cheaterCountryStats[country]) {
          cheaterCountryStats[country] = 0;
        }
        cheaterCountryStats[country]++;
      } else {
        cheaterNoCountryCount++;
      }
    });

    const sortedCheaterCountries =
        Object.entries(cheaterCountryStats).sort((a, b) => b[1] - a[1]);


    const hackStats = {};
    cheaters.forEach(player => {
      const hacks = (player.hacks || '').trim();
      if (hacks && hacks !== '—') {
        const hacksList = hacks.split(',').map(h => h.trim());
        hacksList.forEach(hack => {
          if (hack) {
            if (!hackStats[hack]) {
              hackStats[hack] = {total: 0, countries: {}, noCountry: 0};
            }
            hackStats[hack].total++;


            const country =
                (player['country residence'] || '').toString().trim();
            if (country && country !== '—') {
              if (!hackStats[hack].countries[country]) {
                hackStats[hack].countries[country] = 0;
              }
              hackStats[hack].countries[country]++;
            } else {
              hackStats[hack].noCountry++;
            }
          }
        });
      }
    });


    const sortedHacks =
        Object.entries(hackStats).sort((a, b) => b[1].total - a[1].total);


    let html = `
      <section class="stats-section">
        <h3><i class="fas fa-user-secret"></i> Статистика читеров по странам</h3>
        <div class="stats-list">
    `;


    sortedCheaterCountries.forEach(([country, count]) => {
      const percent = cheatersCount > 0 ?
          ((count / cheatersCount) * 100).toFixed(1) :
          '0.0';
      const countryName = COUNTRY_TOOLTIPS[country] || 'Неизвестно';
      html += `
        <div class="stat-item">
          <span class="stat-label">${country} ${countryName}</span>
          <span class="stat-value">${count} (${percent}%)</span>
        </div>
      `;
    });

    if (cheaterNoCountryCount > 0) {
      const percent = cheatersCount > 0 ?
          ((cheaterNoCountryCount / cheatersCount) * 100).toFixed(1) :
          '0.0';
      html += `
        <div class="stat-item">
          <span class="stat-label">❓ Без страны</span>
          <span class="stat-value">${cheaterNoCountryCount} (${
          percent}%)</span>
        </div>
      `;
    }

    html += `
        </div>
      </section>


      <section class="stats-section">
        <h3><i class="fas fa-flag"></i> Статистика всех игроков по странам</h3>
        <div class="stats-list">
    `;


    sortedCountries.forEach(([country, count]) => {
      const percent =
          totalPlayers > 0 ? ((count / totalPlayers) * 100).toFixed(1) : '0.0';
      const countryName = COUNTRY_TOOLTIPS[country] || 'Неизвестно';
      html += `
        <div class="stat-item">
          <span class="stat-label">${country} ${countryName}</span>
          <span class="stat-value">${count} (${percent}%)</span>
        </div>
      `;
    });

    if (noCountryCount > 0) {
      const percent = totalPlayers > 0 ?
          ((noCountryCount / totalPlayers) * 100).toFixed(1) :
          '0.0';
      html += `
        <div class="stat-item">
          <span class="stat-label">❓ Без страны</span>
          <span class="stat-value">${noCountryCount} (${percent}%)</span>
        </div>
      `;
    }


    html += `
        </div>
      </section>


      <section class="stats-section">
        <h3><i class="fas fa-bug"></i> Статистика по читам и функциям</h3>
        <div class="stats-list">
    `;


    sortedHacks.forEach(([hack, data]) => {
      const percent = totalPlayers > 0 ?
          ((data.total / totalPlayers) * 100).toFixed(1) :
          '0.0';


      html += `
        <div class="stat-item-hack">
          <div class="hack-header">
            <span class="stat-label-hack">${this.escapeHtml(hack)}</span>
            <span class="stat-value-hack">${data.total} (${
          percent}% от всех игроков)</span>
          </div>
      `;


      const sortedHackCountries =
          Object.entries(data.countries).sort((a, b) => b[1] - a[1]);


      if (sortedHackCountries.length > 0 || data.noCountry > 0) {
        html += `<div class="hack-countries">`;

        sortedHackCountries.forEach(([country, count]) => {
          const countryPercent =
              data.total > 0 ? ((count / data.total) * 100).toFixed(1) : '0.0';
          const countryName = COUNTRY_TOOLTIPS[country] || 'Неизвестно';
          html += `
            <div class="hack-country-item">
              <span class="hack-country-label">${country} ${countryName}</span>
              <span class="hack-country-value">${count} (${
              countryPercent}% от чита)</span>
            </div>
          `;
        });

        if (data.noCountry > 0) {
          const countryPercent = data.total > 0 ?
              ((data.noCountry / data.total) * 100).toFixed(1) :
              '0.0';
          html += `
            <div class="hack-country-item">
              <span class="hack-country-label">❓ Без страны</span>
              <span class="hack-country-value">${data.noCountry} (${
              countryPercent}% от чита)</span>
            </div>
          `;
        }

        html += `</div>`;
      }


      html += `</div>`;
    });


    html += `
        </div>
      </section>


      <section class="stats-section">
        <h3><i class="fas fa-chart-pie"></i> Читеры vs Не читеры</h3>
        <div class="stats-list">
          <div class="stat-item stat-item-highlight">
            <span class="stat-label"><i class="fas fa-user-secret"></i> Читеры</span>
            <span class="stat-value stat-value-danger">${cheatersCount} (${
        cheatersPercent}%)</span>
          </div>
          <div class="stat-item stat-item-highlight">
            <span class="stat-label"><i class="fas fa-user-check"></i> Не читеры</span>
            <span class="stat-value stat-value-success">${nonCheatersCount} (${
        nonCheatersPercent}%)</span>
          </div>
          <div class="stat-item stat-item-highlight">
            <span class="stat-label"><i class="fas fa-users"></i> Всего игроков</span>
            <span class="stat-value stat-value-primary">${
        totalPlayers} (100%)</span>
          </div>
        </div>
      </section>
    `;

    statsBody.innerHTML = html;
  }


  steamId64ToSteamId(steamId64) {
    if (!steamId64) return '';


    try {
      const BASE = 76561197960265728n;
      const id = BigInt(steamId64);
      if (id < BASE) return '';


      const accountId = id - BASE;
      const Y = accountId % 2n;
      const Z = (accountId - Y) / 2n;


      const X = 0n;


      return `STEAM_${X}:${Y.toString()}:${Z.toString()}`;
    } catch {
      return '';
    }
  }


  search(query) {
    let q = query.trim();


    const profileMatch =
        q.toLowerCase().match(/steamcommunity\.com\/profiles\/(\d{17})/);
    if (profileMatch) {
      q = profileMatch[1];
    }


    if (/^\d{17}$/.test(q)) {
      const steamId = this.steamId64ToSteamId(q);
      if (steamId) {
        q = steamId.toLowerCase();
      }
    } else {
      q = q.toLowerCase();
    }


    if (!q) {
      this.filteredPlayers = [...this.players];
    } else {
      this.filteredPlayers = this.players.filter(player => {
        const nickname = (player.nickname ?? '').toLowerCase();
        const steamID = (player.steamID ?? '').toLowerCase();
        const hacks = (player.hacks ?? '').toLowerCase();
        const description = (player.description ?? '').toLowerCase();


        const nicknameMatch = nickname.includes(q);
        const hacksMatch = hacks.includes(q);
        const descriptionMatch = description.includes(q);


        const steamIdMatch =
            this.exactSteamIdMatch ? steamID === q : steamID.includes(q);


        return nicknameMatch || hacksMatch || descriptionMatch || steamIdMatch;
      });
    }


    this.currentQuery = (query || '').trim();
    this.applySorting();
  }


  applySorting() {
    let q = this.currentQuery;


    if (q) {
      const profileMatch =
          q.toLowerCase().match(/steamcommunity\.com\/profiles\/(\d{17})/);
      if (profileMatch) {
        q = profileMatch[1];
      }


      if (/^\d{17}$/.test(q)) {
        const steamId = this.steamId64ToSteamId(q);
        if (steamId) {
          q = steamId.toLowerCase();
        }
      } else {
        q = q.toLowerCase();
      }
    }


    let base;
    if (!q) {
      base = [...this.players];
    } else {
      base = this.players.filter(player => {
        const nickname = (player.nickname ?? '').toLowerCase();
        const steamID = (player.steamID ?? '').toLowerCase();
        const hacks = (player.hacks ?? '').toLowerCase();
        const description = (player.description ?? '').toLowerCase();


        const nicknameMatch = nickname.includes(q);
        const hacksMatch = hacks.includes(q);
        const descriptionMatch = description.includes(q);


        const steamIdMatch =
            this.exactSteamIdMatch ? steamID === q : steamID.includes(q);


        return nicknameMatch || hacksMatch || descriptionMatch || steamIdMatch;
      });
    }


    let result = base;


    const isNoCheat = (p) =>
        !p.hacks || p.hacks.trim() === '' || p.hacks === '—';


    if (this.sortFilters.hack === 'none-only') {
      result = result.filter(isNoCheat);
    } else if (this.sortFilters.hack === 'none-first') {
      const noCheat = result.filter(isNoCheat);
      const withCheat = result.filter(p => !isNoCheat(p));
      result = [...noCheat, ...withCheat];
    } else if (
        this.sortFilters.hack && !this.sortFilters.hack.startsWith('none')) {
      const target = this.sortFilters.hack.toUpperCase();
      result = result.filter(p => {
        const hacks = (p.hacks || '').toUpperCase();
        return hacks.includes(target);
      });
    }


    const hasDescription = (p) =>
        p.description && p.description.trim() !== '' && p.description !== '—';


    if (this.sortFilters.description === 'none-only') {
      result = result.filter(p => !hasDescription(p));
    } else if (this.sortFilters.description === 'none-first') {
      const noDesc = result.filter(p => !hasDescription(p));
      const withDesc = result.filter(hasDescription);
      result = [...noDesc, ...withDesc];
    } else if (this.sortFilters.description === 'present-only') {
      result = result.filter(hasDescription);
    } else if (this.sortFilters.description === 'present-first') {
      const withDesc = result.filter(hasDescription);
      const noDesc = result.filter(p => !hasDescription(p));
      result = [...withDesc, ...noDesc];
    }


    if (this.sortFilters.country) {
      const targetCountry = this.sortFilters.country;
      result = result.filter(p => {
        const country = (p['country residence'] || '').toString().trim();
        return country === targetCountry;
      });
    }


    if (this.sortFilters.alpha === 'asc') {
      result.sort((a, b) => {
        const nameA = (a.nickname || '').toLowerCase();
        const nameB = (b.nickname || '').toLowerCase();
        return nameA.localeCompare(nameB, 'ru');
      });
    } else if (this.sortFilters.alpha === 'desc') {
      result.sort((a, b) => {
        const nameA = (a.nickname || '').toLowerCase();
        const nameB = (b.nickname || '').toLowerCase();
        return nameB.localeCompare(nameA, 'ru');
      });
    }


    result.sort((a, b) => {
      const nicknameA = (a.nickname || '').toString().trim();
      const nicknameB = (b.nickname || '').toString().trim();


      const emptyA = nicknameA === '';
      const emptyB = nicknameB === '';


      if (emptyA && emptyB) return 0;
      if (!emptyA && !emptyB) return 0;
      if (emptyA) return 1;
      if (emptyB) return -1;


      return 0;
    });


    this.filteredPlayers = result;
    this.renderTable();
    this.updateStats();
  }


  renderTable() {
    const tbody = document.getElementById('playersTableBody');
    tbody.innerHTML = '';


    if (this.filteredPlayers.length === 0) {
      tbody.innerHTML =
          '<tr><td colspan="5" class="no-results">Ничего не найдено 😔</td></tr>';
      return;
    }


    this.filteredPlayers.forEach(player => {
      const row = this.createPlayerRow(player);
      tbody.appendChild(row);
    });
  }


  getOrDash(value) {
    const v = (value ?? '').toString().trim();
    return v.length > 0 ? v : '—';
  }


  steamIdToSteamId64(steamId) {
    if (!steamId || steamId === '—') return '';


    const match = steamId.match(/^STEAM_(\d+):(\d+):(\d+)$/i);
    if (!match) return '';


    const [, X, Y, Z] = match.map(Number);


    const BASE_STEAMID64 = 76561197960265728n;
    const accountId = (BigInt(Z) * 2n) + BigInt(Y);
    const steamId64 = BASE_STEAMID64 + accountId;


    return steamId64.toString();
  }


  createPlayerRow(player) {
    const row = document.createElement('tr');


    let hacksText = player.hacks || '';
    if (hacksText && hacksText !== '—' && hacksText.trim() !== '') {
      const hacksArray =
          hacksText.split(',').map(h => h.trim()).filter(h => h.length > 0);
      hacksArray.sort(
          (a, b) => a.toLowerCase().localeCompare(b.toLowerCase(), 'ru'));
      hacksText = hacksArray.join(', ');
    }


    const rawSteamId = (player.steamID ?? '').toString().trim();
    const hasSteamId = rawSteamId.length > 0;


    const steamIdDisplay = hasSteamId ? rawSteamId : '—';
    const steamId64 = hasSteamId ? this.steamIdToSteamId64(rawSteamId) : '';
    const steamProfileUrl =
        steamId64 ? `http://steamcommunity.com/profiles/${steamId64}` : '';


    const steamIdCellHtml = hasSteamId ? `
      <td class="steamid steamid-filled">
        <span class="steamid-text">${this.escapeHtml(steamIdDisplay)}</span>
        ${
                                             steamProfileUrl ? `
          <div class="steam-profile-btn-container">
            <a href="${steamProfileUrl}"
               target="_blank"
               rel="noopener noreferrer"
               class="steam-profile-btn"
               title="Открыть профиль Steam">
              <i class="fab fa-steam"></i>
              <span>Профиль</span>
            </a>
          </div>
        ` :
                                                               ''}
      </td>
    ` :
                                                               `
      <td class="steamid steamid-empty">
        <span class="steamid-value">—</span>
      </td>
    `;


    const hasProofs = player.proofs && player.proofs.trim() !== '';


    const hacksColumnHtml = `
      <td class="hacks-text">
        <div class="hacks-content">
          <span class="hacks-value">${
        this.escapeHtml(this.getOrDash(hacksText))}</span>
          ${
        hasProofs ? `
            <div class="proof-btn-container">
              <a href="${this.escapeHtml(player.proofs)}"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="proof-btn"
                 title="Открыть доказательство">
                <i class="fas fa-file-alt"></i>
                <span>Доказательство</span>
              </a>
            </div>
          ` :
                    ''}
        </div>
      </td>
    `;


    const countryRaw = (player['country residence'] ?? '').toString().trim();
    const countryValue = this.getOrDash(countryRaw);
    const countryTitle = COUNTRY_TOOLTIPS[countryRaw] && countryRaw !== '' ?
        COUNTRY_TOOLTIPS[countryRaw] :
        '';


    row.innerHTML = `
      <td class="nickname">${
        this.escapeHtml(this.getOrDash(player.nickname))}</td>
      ${steamIdCellHtml}
      ${hacksColumnHtml}
      <td class="description">${
        this.escapeHtml(this.getOrDash(player.description))}</td>
      <td class="country" ${
        countryTitle ? `title="${this.escapeHtml(countryTitle)}"` : ''}>
        ${this.escapeHtml(countryValue)}
      </td>
    `;


    return row;
  }


  updateStats() {
    document.getElementById('playersCount').textContent =
        this.filteredPlayers.length;
  }


  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}


if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}


window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};


window.addEventListener('load', () => {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.value = '';
  }
});


let dbInstance = null;


document.addEventListener('DOMContentLoaded', () => {
  dbInstance = new PlayersDatabase();


  const sourceBtn = document.querySelector('.source-button');
  if (sourceBtn) {
    sourceBtn.addEventListener('click', () => {
      sourceBtn.blur();
    });
  }


  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }


  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };
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
    if (faqModal && faqModal.classList.contains('active')) {
      faqModal.classList.remove('active');
      document.body.style.overflow = '';
    }
    const statsModal = document.getElementById('statsModal');
    if (statsModal && statsModal.classList.contains('active')) {
      statsModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
});