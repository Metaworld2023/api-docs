[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / SubStance

# Class: SubStance

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).SubStance

**`Author`**

yuchen.ren

**`Description`**

二级姿态

**`Network Status`**

usage:双端

**`Example`**

使用示例: 在角色初始化完成后, 可以执行下面的代码, 让所有客户端的角色全身播放一个持枪的姿态

```
this.stanceProxy = this.character.loadStance("49096", true);
// 修改姿态的混合模式为全身
this.stanceProxy.blendMode = Gameplay.StanceBlendMode.WholeBody;
// 播放这个姿态
this.stanceProxy.play();
//当你想停止它时, 可以执行下面的代码
this.stanceProxy.stop();
```

## Hierarchy

- [`Stance`](Gameplay.Gameplay.Stance.md)

  ↳ **`SubStance`**

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.SubStance.md#constructor)

### Accessors

- [blendMode](Gameplay.Gameplay.SubStance.md#blendmode)

### Methods

- [play](Gameplay.Gameplay.SubStance.md#play)
- [playInternal](Gameplay.Gameplay.SubStance.md#playinternal)
- [stop](Gameplay.Gameplay.SubStance.md#stop)
- [stopInternal](Gameplay.Gameplay.SubStance.md#stopinternal)

## Constructors

### constructor

• **new SubStance**(`character`, `sync`)

**`Description`**

构造函数

**`Effect`**

双端函数

#### Parameters

| Name        | Type                                                  | Description        |
| :---------- | :---------------------------------------------------- | :----------------- |
| `character` | [`CharacterBase`](Gameplay.Gameplay.CharacterBase.md) | usage:角色         |
| `sync`      | `boolean`                                             | usage:是否自动同步 |

#### Inherited from

[Stance](Gameplay.Gameplay.Stance.md).[constructor](Gameplay.Gameplay.Stance.md#constructor)

#### Defined in

Gameplay/index.d.ts:1617

## Accessors

### blendMode

• `get` **blendMode**(): [`StanceBlendMode`](../enums/Gameplay.Gameplay.StanceBlendMode.md)

**`Description`**

姿态的混合模式

**`Precautions`**

可以理解为姿态的播放位置(上半身, 下半身, 全身), 无法对正常播放的姿态进行修改
如果这个姿态是通过预制姿态资源 GUID 创建的, 那么它的默认值为 StanceBlendMode.None(临时 预计 021 删除这个值), 它会按照资源上的 blendMode 参数指定混合模式;
如果是通过动画资源 GUID 创建的, 那么它的默认值为 StanceBlendMode.WholeBody.
不应该把动画资源 GUID 创建的姿态的混合模式置为 StanceBlendMode.None(临时 预计 021 删除这个值), 因为动画资源没有 blendMode 参数. 虽然不会报错, 但它确实会创建出一个姿态, 而且看不到任何表现.

**`Example`**

```
stanceProxy.blendMode = Gameplay.StanceBlendMode.BlendLower;
```

#### Returns

[`StanceBlendMode`](../enums/Gameplay.Gameplay.StanceBlendMode.md)

#### Defined in

Gameplay/index.d.ts:1677

• `set` **blendMode**(`newBlendMode`): `void`

**`Description`**

姿态的混合模式

#### Parameters

| Name           | Type                                                               |
| :------------- | :----------------------------------------------------------------- |
| `newBlendMode` | [`StanceBlendMode`](../enums/Gameplay.Gameplay.StanceBlendMode.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:1681

## Methods

### play

▸ **play**(): `boolean`

**`Description`**

播放这个姿态对象, 并返回执行结果

**`Effect`**

可选同步

**`Precautions`**

这个操作是否会自动同步多端, 取决于调用 Character.loadStance()时传入的 sync 参数.
返回的执行结果, 在不自动同步时多数情况下可靠;
在自动同步时完全不可靠, 总是会返回 true, 因为无法判断其他端的执行情况

#### Returns

`boolean`

是否执行成功

#### Inherited from

[Stance](Gameplay.Gameplay.Stance.md).[play](Gameplay.Gameplay.Stance.md#play)

#### Defined in

Gameplay/index.d.ts:1626

---

### playInternal

▸ `Protected` **playInternal**(): `boolean`

**`Description`**

播放姿态的内部实现

**`Effect`**

调用端生效

#### Returns

`boolean`

是否执行成功

#### Inherited from

[Stance](Gameplay.Gameplay.Stance.md).[playInternal](Gameplay.Gameplay.Stance.md#playinternal)

#### Defined in

Gameplay/index.d.ts:1632

---

### stop

▸ **stop**(): `boolean`

**`Description`**

停止这个姿态对象, 并返回执行结果

**`Effect`**

可选同步

**`Precautions`**

这个操作是否会自动同步多端, 取决于调用 Character.loadStance()时传入的 sync 参数.
返回的执行结果, 在不自动同步时多数情况下可靠;
在自动同步时完全不可靠, 总是会返回 true, 因为无法判断其他端的执行情况

#### Returns

`boolean`

是否执行成功

#### Inherited from

[Stance](Gameplay.Gameplay.Stance.md).[stop](Gameplay.Gameplay.Stance.md#stop)

#### Defined in

Gameplay/index.d.ts:1641

---

### stopInternal

▸ **stopInternal**(): `boolean`

**`Description`**

停止姿态的内部实现

**`Effect`**

调用端生效

#### Returns

`boolean`

是否执行成功

#### Inherited from

[Stance](Gameplay.Gameplay.Stance.md).[stopInternal](Gameplay.Gameplay.Stance.md#stopinternal)

#### Defined in

Gameplay/index.d.ts:1647
