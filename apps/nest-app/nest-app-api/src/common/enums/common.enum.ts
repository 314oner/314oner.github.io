export enum UserType {
  /** Системный супер пользователь */
  SUPER_ADMIN = 0,
  /** Системный пользователь */
  ADMIN_USER = 1,
  /** Обычный пользователь */
  ORDINARY_USER = 2,
}

export enum Sex {
  man = 0,
  women = 1,
}

export enum StatusValue {
  FORBIDDEN = 0,
  NORMAL = 1,
}

export enum MenuType {
  /** Меню */
  MENU = 0,
  /** Меню страницы */
  TAB = 1,
  /** Кнопка */
  BUTTON = 2,
}
