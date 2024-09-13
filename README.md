- node - v20.11.1
- xcode - 15.3 (15E204a)

---

- Слідував принципам Feature-Sliced Design - https://feature-sliced.design/

---

Cтек:

- `react-native-paper` - UI lib
- `redux-toolkit`
- `react-navigation`
- `axios`
- `react-native-chart-kit` - для побудови графіку
- `react-native-shimmer` - для скелотон лоадер

---

Основні моменти:

- [Типізація navigation screens](./src/shared/config/navigation/model/types.ts) - [Home screen](./src/screens/home/ui/home/home.tsx) (хоч тут це не використовувалось, але в реальних умовах, це корисно)
- компоненти які працюють зі стейтом і бізнес даними, можуть бути лише на верхніх рівнях - `features`, `screens` i `app`, все, що нижче (`entities`, `shared`) вміщають лише `dumb` компоненти і працюють лише пропсами, а не бізнес даними
- ui компоненти сторонніх бібліотек - обов`язково використовуються через власний адаптер в [shared layer](./src/shared/ui/kit/shimmer/shimmer.tsx)
