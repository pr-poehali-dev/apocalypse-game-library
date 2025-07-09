import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [diceRoll, setDiceRoll] = useState<number | null>(null);
  const [character, setCharacter] = useState({
    // Основная информация
    name: "",
    organization: "",
    level: 10,

    // Параметры персонажа
    condition: 10,
    armor: 4,
    health: 100,
    fatigue: 0,
    maxWeight: 25,
    currentWeight: 0,
    usedExp: 4.0,

    // Характеристики
    stats: {
      strength: 2,
      dexterity: 2,
      constitution: 2,
      intelligence: 2,
      wisdom: 2,
      charisma: 2,
    },

    // Навыки
    skills: {
      bombardier: 0,
      computers: 0,
      dealer: 0,
      dexterity: 0,
      diplomat: 0,
      linerunner: 0,
      scout: 0,
      explosives: 0,
      acrobatics: 0,
      analysis: 0,
      athletics: 0,
      biotechnology: 0,
      gunsmith: 0,
      driving: 0,
      explosives2: 0,
      healing: 0,
      genetics: 0,
      cybernetics: 0,
      confusion: 0,
      knowledge: 0,
      cyberpunk: 0,
      electronics: 0,
    },

    // Комплектация оборудования
    equipment: {
      head: { name: "", weight: 0 },
      torso: { name: "", weight: 0 },
      rightHand: { name: "", weight: 0 },
      leftHand: { name: "", weight: 0 },
      rightLeg: { name: "", weight: 0 },
      leftLeg: { name: "", weight: 0 },
    },

    // Снаряжение быстрого доступа
    quickAccess: {
      energyWeapon: { name: "", count: 1, weight: 100 },
      moleculator: { name: "", count: 1, weight: 50 },
    },

    // Мутации/Импланты
    mutations: [],

    // Сторонние эффекты
    effects: [],

    // Склад
    warehouse: {
      moleculator: { description: "", weight: 3 },
      container: { description: "", weight: 0 },
    },

    // Репутация
    reputation: {
      faction: { simple: 0, medium: 0, forgotten: 0 },
      level: { simple: 0, medium: 0, forgotten: 0 },
      function: { simple: 0, medium: 0, forgotten: 0 },
    },

    // Компоненты
    components: {
      simple: { destroyed: 0, rare: 0 },
      medium: { destroyed: 0, rare: 0 },
    },

    // Транспорт
    transport: {
      simple: "",
      medium: "",
      forgotten: "",
    },

    // Артефакты
    artifacts: "",

    // Биография
    biography: {
      appearance: "",
      background: "",
    },

    // Черты характера и предыстория
    traits: "",
    backstory: "",

    // Повышение рассудка и воли
    sanityIncrease: "",
    willIncrease: "",
  });

  const rollDice = (sides: number) => {
    const result = Math.floor(Math.random() * sides) + 1;
    setDiceRoll(result);
  };

  const updateCharacter = (field: string, value: any) => {
    setCharacter((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateNestedCharacter = (
    section: string,
    field: string,
    value: any,
  ) => {
    setCharacter((prev) => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value,
      },
    }));
  };

  const diceTypes = [
    { sides: 4, color: "bg-apocalypse-red" },
    { sides: 6, color: "bg-apocalypse-orange" },
    { sides: 8, color: "bg-apocalypse-yellow" },
    { sides: 10, color: "bg-apocalypse-red" },
    { sides: 12, color: "bg-apocalypse-orange" },
    { sides: 20, color: "bg-apocalypse-yellow" },
    { sides: 100, color: "bg-apocalypse-red" },
  ];

  const libraryItems = [
    { title: "Лор", icon: "BookOpen", description: "История и мифология мира" },
    {
      title: "Правила",
      icon: "Shield",
      description: "Механики и системы игры",
    },
    { title: "Бестиарий", icon: "Skull", description: "Монстры и существа" },
    {
      title: "Организации",
      icon: "Users",
      description: "Фракции и группировки",
    },
    { title: "Галерея", icon: "Image", description: "Арты и концепты" },
    { title: "Музыка", icon: "Music", description: "Саундтрек и эмбиент" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/img/1779f1f6-c3d8-4434-9304-5b0845b6fd23.jpg')`,
        }}
      >
        <div className="absolute inset-0 apocalypse-gradient opacity-30"></div>

        {/* Navigation */}
        <nav className="relative z-10 flex justify-between items-center p-6">
          <div className="flex items-center space-x-2">
            <Icon name="Zap" size={32} className="text-apocalypse-yellow" />
            <h1 className="text-2xl font-bold font-['Oswald'] apocalypse-text-glow">
              EMBRACE
            </h1>
          </div>

          <div className="flex space-x-4">
            <Button
              variant="ghost"
              onClick={() => setActiveTab("home")}
              className="text-foreground hover:text-apocalypse-yellow"
            >
              Главная
            </Button>
            <Button
              variant="ghost"
              onClick={() => setActiveTab("library")}
              className="text-foreground hover:text-apocalypse-yellow"
            >
              Библиотека
            </Button>
            <Button
              variant="ghost"
              onClick={() => setActiveTab("characters")}
              className="text-foreground hover:text-apocalypse-yellow"
            >
              Персонажи
            </Button>
            <Button
              variant="ghost"
              onClick={() => setActiveTab("community")}
              className="text-foreground hover:text-apocalypse-yellow"
            >
              Сообщество
            </Button>
            <Button
              variant="ghost"
              onClick={() => setActiveTab("contacts")}
              className="text-foreground hover:text-apocalypse-yellow"
            >
              Контакты
            </Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-6xl font-bold font-['Oswald'] mb-6 apocalypse-text-glow">
            EMBRACE
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Добро пожаловать в постапокалиптический мир, где каждое решение
            может стать последним. Создавайте персонажей, изучайте лор и
            выживайте в мире после катастрофы.
          </p>
          <div className="flex space-x-4">
            <Button
              size="lg"
              className="bg-apocalypse-red hover:bg-apocalypse-red/80 apocalypse-glow"
              onClick={() => setActiveTab("characters")}
            >
              <Icon name="User" size={20} className="mr-2" />
              Создать персонажа
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-apocalypse-yellow text-apocalypse-yellow hover:bg-apocalypse-yellow hover:text-black"
              onClick={() => setActiveTab("library")}
            >
              <Icon name="BookOpen" size={20} className="mr-2" />
              Изучить мир
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        {activeTab === "home" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="apocalypse-glow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="Users"
                    size={24}
                    className="mr-2 text-apocalypse-red"
                  />
                  Сообщество
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Общайтесь с другими выжившими, делитесь историями и
                  стратегиями.
                </p>
              </CardContent>
            </Card>

            <Card className="apocalypse-glow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="BookOpen"
                    size={24}
                    className="mr-2 text-apocalypse-orange"
                  />
                  Библиотека
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Изучайте лор мира, правила игры и встречайте новых существ.
                </p>
              </CardContent>
            </Card>

            <Card className="apocalypse-glow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="User"
                    size={24}
                    className="mr-2 text-apocalypse-yellow"
                  />
                  Персонажи
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Создавайте и редактируйте своих персонажей для приключений.
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "library" && (
          <div className="mt-8">
            <h2 className="text-4xl font-bold font-['Oswald'] mb-6 text-center apocalypse-text-glow">
              Библиотека Мира
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {libraryItems.map((item, index) => (
                <Card
                  key={index}
                  className="apocalypse-glow hover:scale-105 transition-transform cursor-pointer"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon
                        name={item.icon as any}
                        size={24}
                        className="mr-2 text-apocalypse-red"
                      />
                      {item.title}
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Скоро будет доступно...
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "characters" && (
          <div className="mt-8">
            <h2 className="text-4xl font-bold font-['Oswald'] mb-6 text-center apocalypse-text-glow">
              Лист Персонажа EMBRACE
            </h2>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* Основная информация */}
              <Card className="apocalypse-glow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="User"
                      size={24}
                      className="mr-2 text-apocalypse-red"
                    />
                    Основная информация
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя/Номер персонажа</Label>
                      <Input
                        id="name"
                        value={character.name}
                        onChange={(e) =>
                          updateCharacter("name", e.target.value)
                        }
                        placeholder="Введите имя"
                      />
                    </div>
                    <div>
                      <Label htmlFor="organization">Организация</Label>
                      <Input
                        id="organization"
                        value={character.organization}
                        onChange={(e) =>
                          updateCharacter("organization", e.target.value)
                        }
                        placeholder="Организация"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <Label>Уровень развития</Label>
                      <Input
                        type="number"
                        value={character.level}
                        onChange={(e) =>
                          updateCharacter("level", parseInt(e.target.value))
                        }
                      />
                    </div>
                    <div>
                      <Label>Условие</Label>
                      <Input
                        type="number"
                        value={character.condition}
                        onChange={(e) =>
                          updateCharacter("condition", parseInt(e.target.value))
                        }
                      />
                    </div>
                    <div>
                      <Label>Броня</Label>
                      <Input
                        type="number"
                        value={character.armor}
                        onChange={(e) =>
                          updateCharacter("armor", parseInt(e.target.value))
                        }
                      />
                    </div>
                    <div>
                      <Label>Здоровье</Label>
                      <Input
                        type="number"
                        value={character.health}
                        onChange={(e) =>
                          updateCharacter("health", parseInt(e.target.value))
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <Label>Усталость</Label>
                      <Input
                        type="number"
                        value={character.fatigue}
                        onChange={(e) =>
                          updateCharacter("fatigue", parseInt(e.target.value))
                        }
                      />
                    </div>
                    <div>
                      <Label>Вес (макс/исп)</Label>
                      <div className="flex gap-2">
                        <Input
                          type="number"
                          value={character.maxWeight}
                          onChange={(e) =>
                            updateCharacter(
                              "maxWeight",
                              parseInt(e.target.value),
                            )
                          }
                        />
                        <Input
                          type="number"
                          value={character.currentWeight}
                          onChange={(e) =>
                            updateCharacter(
                              "currentWeight",
                              parseInt(e.target.value),
                            )
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <Label>Использованная экипировка</Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={character.usedExp}
                        onChange={(e) =>
                          updateCharacter("usedExp", parseFloat(e.target.value))
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Характеристики */}
              <Card className="apocalypse-glow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="Zap"
                      size={24}
                      className="mr-2 text-apocalypse-orange"
                    />
                    Характеристики
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Сила</Label>
                      <Input
                        type="number"
                        value={character.stats.strength}
                        onChange={(e) =>
                          updateNestedCharacter(
                            "stats",
                            "strength",
                            parseInt(e.target.value),
                          )
                        }
                      />
                    </div>
                    <div>
                      <Label>Реакция</Label>
                      <Input
                        type="number"
                        value={character.stats.dexterity}
                        onChange={(e) =>
                          updateNestedCharacter(
                            "stats",
                            "dexterity",
                            parseInt(e.target.value),
                          )
                        }
                      />
                    </div>
                    <div>
                      <Label>Телосложение</Label>
                      <Input
                        type="number"
                        value={character.stats.constitution}
                        onChange={(e) =>
                          updateNestedCharacter(
                            "stats",
                            "constitution",
                            parseInt(e.target.value),
                          )
                        }
                      />
                    </div>
                    <div>
                      <Label>Интеллект</Label>
                      <Input
                        type="number"
                        value={character.stats.intelligence}
                        onChange={(e) =>
                          updateNestedCharacter(
                            "stats",
                            "intelligence",
                            parseInt(e.target.value),
                          )
                        }
                      />
                    </div>
                    <div>
                      <Label>Мудрость</Label>
                      <Input
                        type="number"
                        value={character.stats.wisdom}
                        onChange={(e) =>
                          updateNestedCharacter(
                            "stats",
                            "wisdom",
                            parseInt(e.target.value),
                          )
                        }
                      />
                    </div>
                    <div>
                      <Label>Харизма</Label>
                      <Input
                        type="number"
                        value={character.stats.charisma}
                        onChange={(e) =>
                          updateNestedCharacter(
                            "stats",
                            "charisma",
                            parseInt(e.target.value),
                          )
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Навыки */}
              <Card className="apocalypse-glow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="Target"
                      size={24}
                      className="mr-2 text-apocalypse-yellow"
                    />
                    Навыки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {Object.entries(character.skills).map(([skill, value]) => (
                      <div
                        key={skill}
                        className="flex items-center justify-between"
                      >
                        <span className="capitalize">{skill}</span>
                        <Input
                          type="number"
                          value={value}
                          onChange={(e) =>
                            updateNestedCharacter(
                              "skills",
                              skill,
                              parseInt(e.target.value),
                            )
                          }
                          className="w-16 h-8"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Оборудование */}
              <Card className="apocalypse-glow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="Shield"
                      size={24}
                      className="mr-2 text-apocalypse-red"
                    />
                    Комплектация оборудования
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(character.equipment).map(([slot, item]) => (
                      <div key={slot} className="flex items-center gap-2">
                        <Label className="w-20 text-sm">{slot}</Label>
                        <Input
                          value={item.name}
                          onChange={(e) =>
                            updateNestedCharacter("equipment", slot, {
                              ...item,
                              name: e.target.value,
                            })
                          }
                          placeholder="Название"
                          className="flex-1"
                        />
                        <Input
                          type="number"
                          value={item.weight}
                          onChange={(e) =>
                            updateNestedCharacter("equipment", slot, {
                              ...item,
                              weight: parseInt(e.target.value),
                            })
                          }
                          placeholder="Вес"
                          className="w-16"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Система кубов */}
              <Card className="apocalypse-glow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="Dice6"
                      size={24}
                      className="mr-2 text-apocalypse-orange"
                    />
                    Система кубов
                  </CardTitle>
                  <CardDescription>Бросайте кубы для проверок</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {diceTypes.map((dice) => (
                      <Button
                        key={dice.sides}
                        variant="outline"
                        size="sm"
                        className={`${dice.color} text-white hover:opacity-80`}
                        onClick={() => rollDice(dice.sides)}
                      >
                        d{dice.sides}
                      </Button>
                    ))}
                  </div>

                  {diceRoll && (
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold text-apocalypse-yellow mb-2">
                        {diceRoll}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Результат броска
                      </p>
                    </div>
                  )}

                  <div className="space-y-2">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Icon name="Download" size={16} className="mr-2" />
                        Скачать лист
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Icon name="Save" size={16} className="mr-2" />
                        Сохранить
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Биография */}
              <Card className="apocalypse-glow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="FileText"
                      size={24}
                      className="mr-2 text-apocalypse-yellow"
                    />
                    Биография
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Внешность</Label>
                    <Textarea
                      value={character.biography.appearance}
                      onChange={(e) =>
                        updateNestedCharacter(
                          "biography",
                          "appearance",
                          e.target.value,
                        )
                      }
                      placeholder="Опишите внешность персонажа..."
                      className="min-h-[80px]"
                    />
                  </div>
                  <div>
                    <Label>Изображение</Label>
                    <Textarea
                      value={character.biography.background}
                      onChange={(e) =>
                        updateNestedCharacter(
                          "biography",
                          "background",
                          e.target.value,
                        )
                      }
                      placeholder="Предыстория персонажа..."
                      className="min-h-[80px]"
                    />
                  </div>
                  <div>
                    <Label>Черты характера</Label>
                    <Textarea
                      value={character.traits}
                      onChange={(e) =>
                        updateCharacter("traits", e.target.value)
                      }
                      placeholder="Черты характера..."
                      className="min-h-[60px]"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "community" && (
          <div className="mt-8">
            <h2 className="text-4xl font-bold font-['Oswald'] mb-6 text-center apocalypse-text-glow">
              Сообщество Выживших
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="apocalypse-glow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="MessageCircle"
                      size={24}
                      className="mr-2 text-apocalypse-red"
                    />
                    Форумы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Обсуждайте стратегии, делитесь историями и находите
                    союзников.
                  </p>
                  <Button className="mt-4" variant="outline">
                    Перейти к форумам
                  </Button>
                </CardContent>
              </Card>

              <Card className="apocalypse-glow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="Users"
                      size={24}
                      className="mr-2 text-apocalypse-orange"
                    />
                    Чаты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Общайтесь в реальном времени с другими игроками.</p>
                  <Button className="mt-4" variant="outline">
                    Открыть чат
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "contacts" && (
          <div className="mt-8">
            <h2 className="text-4xl font-bold font-['Oswald'] mb-6 text-center apocalypse-text-glow">
              Контакты
            </h2>
            <Card className="apocalypse-glow max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Связаться с нами</CardTitle>
                <CardDescription>
                  Есть вопросы? Хотите присоединиться к разработке?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={20} className="text-apocalypse-red" />
                  <span>contact@embrace-game.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon
                    name="MessageCircle"
                    size={20}
                    className="text-apocalypse-orange"
                  />
                  <span>Discord: Embrace Community</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon
                    name="Github"
                    size={20}
                    className="text-apocalypse-yellow"
                  />
                  <span>GitHub: embrace-tabletop</span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
