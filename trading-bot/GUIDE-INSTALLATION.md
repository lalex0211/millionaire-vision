# 🥇 GOLD SNIPER 15M — Guide complet

Bot de trading pour **l'OR (XAUUSD / GOLD)** sur TradingView, en **15 minutes**, qui prend les **achats ET les ventes** tout seul, avec une gestion du risque de trader professionnel.

---

## ⚠️ À lire avant tout (l'honnêteté d'abord)

Aucun bot au monde ne gagne à tous les coups — même les meilleurs traders avec 10 ans d'expérience perdent des trades. Ce qui rend un trader profitable sur la durée, ce n'est pas de "voir l'avenir", c'est :

1. **Risquer peu par trade** (1 % du capital, jamais plus)
2. **Gagner plus quand on gagne que ce qu'on perd quand on perd** (ratio 2:1)
3. **Suivre le plan sans émotion** — c'est exactement ce que fait ce bot

Avec un taux de réussite de seulement 40 %, un ratio 2:1 est déjà profitable. C'est ça, le vrai secret.

**Teste TOUJOURS en compte démo pendant au moins 1 mois avant de mettre de l'argent réel.**

---

## 📥 Étape 1 — Installer le script sur TradingView

1. Ouvre [TradingView](https://www.tradingview.com) et connecte-toi
2. Ouvre le graphique **XAUUSD** (ou **GOLD**, ou **GC1!** pour les futures)
3. Mets le graphique en **15 minutes** (bouton en haut, choisis "15m")
4. En bas de l'écran, clique sur **« Éditeur Pine »**
5. Efface tout ce qu'il y a dedans
6. Copie-colle **tout le contenu** du fichier `gold-sniper-15m.pine`
7. Clique sur **« Ajouter au graphique »**

✅ Tu dois voir : les EMA colorées, les flèches ACHAT/VENTE, les lignes de Stop Loss (rouge) et Take Profit (verte), et le tableau de bord en haut à droite.

---

## 🧠 Étape 2 — Comprendre ce que fait le bot

| Élément | Ce qu'il fait |
|---|---|
| **EMA 200 (15m) + EMA 200 (1H)** | Le bot ne trade QUE dans le sens de la tendance. Achat si le prix est au-dessus, vente si en dessous. Double confirmation = moins de faux signaux. |
| **Croisement EMA 9/21** | Le déclencheur d'entrée, dans le sens de la tendance uniquement. |
| **RSI 14** | Vérifie que le mouvement a de la force, mais refuse d'acheter en surachat (piège classique des débutants). |
| **ADX > 20** | Refuse de trader quand le marché dort (le range tue les stratégies de tendance). |
| **Sessions Londres + New York (07h00–20h30 UTC)** | L'or ne bouge vraiment que pendant ces sessions. La nuit asiatique = pièges. |
| **Stop Loss = 1,5 × ATR** | Le stop s'adapte à la volatilité du moment, pas un chiffre au hasard. |
| **Take Profit = 2 × le risque** | Chaque gain vaut 2 pertes. |
| **Break-Even à +1R** | Dès que le trade gagne l'équivalent du risque, le stop remonte à l'entrée : le trade ne peut plus perdre. |
| **Trailing stop ATR** | Si l'or part fort, le bot suit le mouvement et sécurise les gains. |
| **Max 3 trades / jour** | Anti-overtrading — la discipline des pros. |
| **Coupe-circuit à -3 % / jour** | Journée rouge ? Le bot s'arrête. On revient demain. Règle n°1 des prop firms. |

---

## ⚙️ Étape 3 — Réglages recommandés

Les réglages par défaut sont déjà calibrés pour l'or en 15m. Si tu veux ajuster (roue dentée ⚙️ sur l'indicateur) :

| Profil | Risque/trade | Max trades/jour | Ratio TP |
|---|---|---|---|
| **Prudent (recommandé pour commencer)** | 0,5 % | 2 | 2.0 |
| **Standard** | 1 % | 3 | 2.0 |
| **Agressif (compte démo seulement)** | 2 % | 4 | 2.5 |

**Ne dépasse jamais 2 % de risque par trade.** C'est la ligne rouge de tous les traders qui durent.

---

## 🧪 Étape 4 — Backtester (OBLIGATOIRE avant tout argent réel)

1. Avec le script sur le graphique, ouvre l'onglet **« Testeur de stratégie »** en bas
2. Regarde :
   - **Profit Factor** : au-dessus de 1,3 = bon
   - **Max Drawdown** : en dessous de 15 % = bon
   - **Nombre de trades** : au moins 100 pour que les stats veuillent dire quelque chose
3. Teste sur plusieurs périodes (2023, 2024, 2025) — pas seulement la meilleure

Si tu changes un réglage, re-backteste. Jamais de réglage "au feeling".

---

## 🔔 Étape 5 — Activer les alertes (le bot te prévient tout seul)

1. Clique sur l'**horloge ⏰** (Alertes) en haut à droite de TradingView
2. **Condition** : choisis `GOLD SNIPER 15M — XAUUSD`
3. Choisis **« Événements d'ordre »** (alerte à chaque ordre du bot : entrée, stop, take profit)
4. **Expiration** : "Open-ended" (sans fin) — nécessite un abonnement TradingView payant, sinon renouvelle l'alerte
5. **Notifications** : coche *Notification sur l'appli* + *E-mail*
6. Clique sur **Créer**

Tu recevras sur ton téléphone : `ACHAT`, `VENTE`, `SORTIE` avec les prix exacts.

---

## 🤖 Étape 6 — Automatisation complète (le bot place les ordres tout seul)

TradingView envoie les signaux via **Webhook** (URL dans l'alerte). Le message JSON est déjà intégré dans le script :

```json
{"bot":"GOLD_SNIPER_15M","action":"buy","symbol":"XAUUSD","price":2350.5,"sl":2338.2,"tp":2375.1,"risk_pct":1.0}
```

Options pour exécuter les ordres automatiquement chez ton courtier :

| Solution | Compatible avec | Difficulté |
|---|---|---|
| **PineConnector** | MetaTrader 4 / 5 (la plupart des brokers CFD or) | ⭐ Facile |
| **TradersPost** | Brokers US, crypto | ⭐ Facile |
| **Capitalise.ai** | Plusieurs brokers | ⭐ Facile |
| **3Commas / Alertatron** | Crypto surtout | ⭐⭐ |
| **Ton propre serveur (webhook → API broker)** | Tout | ⭐⭐⭐ Avancé |

**Marche à suivre (exemple PineConnector, le plus simple pour l'or) :**
1. Crée un compte sur PineConnector et installe leur EA sur ton MetaTrader
2. Dans l'alerte TradingView, coche **« Webhook URL »** et colle l'URL PineConnector
3. Adapte le message d'alerte au format demandé par PineConnector (leur doc explique tout)
4. Teste d'abord sur un **compte démo MT4/MT5** — vérifie que les ordres partent bien avec le bon Stop Loss et Take Profit

> 🔒 Le webhook nécessite un abonnement TradingView **Essential** ou plus.

---

## 📜 Les 10 règles du trader qui dure (à imprimer)

1. **Jamais plus de 1 % de risque par trade** — le bot le fait pour toi, ne l'augmente pas
2. **Le Stop Loss n'est JAMAIS déplacé plus loin** — jamais
3. Journée à -3 % → **terminé pour aujourd'hui** (le bot s'arrête tout seul)
4. Pas de trade pendant les grosses annonces (NFP, FOMC, CPI) → mets le bot en pause ces jours-là, l'or devient fou
5. **1 mois de démo minimum** avant l'argent réel
6. Commence petit en réel — la psychologie change tout, même avec un bot
7. Note tes résultats chaque semaine, compare au backtest
8. Ne touche pas aux réglages après 2 jours rouges — juge sur 100 trades, pas sur 5
9. L'argent que tu trades = argent que tu peux perdre sans que ça change ta vie
10. La régularité bat la performance. +5 %/mois régulier > +50 % un mois puis -60 %

---

## 📁 Fichiers

- `gold-sniper-15m.pine` — le code du bot (à coller dans TradingView)
- `GUIDE-INSTALLATION.md` — ce guide

Bon trading, et rappelle-toi : **le bot gère les trades, toi tu gères la discipline.** 🎯
