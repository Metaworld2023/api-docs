[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [UI](../modules/UI.md) / [UI](../modules/UI.UI.md) / UserWidgetPrefab

# Class: UserWidgetPrefab

[UI](../modules/UI.md).[UI](../modules/UI.UI.md).UserWidgetPrefab

**`Author`**

jie.wu

**`Description`**

ui 预制体

**`Network Status`**

usage:客户端

## Hierarchy

- [`UserWidget`](UI.UI.UserWidget.md)

  ↳ **`UserWidgetPrefab`**

## Table of contents

### Constructors

- [constructor](UI.UI.UserWidgetPrefab.md#constructor)

### Accessors

- [autoSizeEnable](UI.UI.UserWidgetPrefab.md#autosizeenable)
- [cachedGeometry](UI.UI.UserWidgetPrefab.md#cachedgeometry)
- [constraints](UI.UI.UserWidgetPrefab.md#constraints)
- [desiredSize](UI.UI.UserWidgetPrefab.md#desiredsize)
- [enable](UI.UI.UserWidgetPrefab.md#enable)
- [focusable](UI.UI.UserWidgetPrefab.md#focusable)
- [guid](UI.UI.UserWidgetPrefab.md#guid)
- [isHovered](UI.UI.UserWidgetPrefab.md#ishovered)
- [name](UI.UI.UserWidgetPrefab.md#name)
- [paintSpaceGeometry](UI.UI.UserWidgetPrefab.md#paintspacegeometry)
- [parent](UI.UI.UserWidgetPrefab.md#parent)
- [position](UI.UI.UserWidgetPrefab.md#position)
- [renderOpacity](UI.UI.UserWidgetPrefab.md#renderopacity)
- [renderScale](UI.UI.UserWidgetPrefab.md#renderscale)
- [renderShear](UI.UI.UserWidgetPrefab.md#rendershear)
- [renderTransformAngle](UI.UI.UserWidgetPrefab.md#rendertransformangle)
- [renderTransformPivot](UI.UI.UserWidgetPrefab.md#rendertransformpivot)
- [rootContent](UI.UI.UserWidgetPrefab.md#rootcontent)
- [size](UI.UI.UserWidgetPrefab.md#size)
- [slot](UI.UI.UserWidgetPrefab.md#slot)
- [tickSpaceGeometry](UI.UI.UserWidgetPrefab.md#tickspacegeometry)
- [transform](UI.UI.UserWidgetPrefab.md#transform)
- [visibility](UI.UI.UserWidgetPrefab.md#visibility)
- [visible](UI.UI.UserWidgetPrefab.md#visible)
- [zOrder](UI.UI.UserWidgetPrefab.md#zorder)

### Methods

- [addToViewport](UI.UI.UserWidgetPrefab.md#addtoviewport)
- [destroyObject](UI.UI.UserWidgetPrefab.md#destroyobject)
- [equal](UI.UI.UserWidgetPrefab.md#equal)
- [findChildByPath](UI.UI.UserWidgetPrefab.md#findchildbypath)
- [invalidateLayoutAndVolatility](UI.UI.UserWidgetPrefab.md#invalidatelayoutandvolatility)
- [removeRootContent](UI.UI.UserWidgetPrefab.md#removerootcontent)
- [newObject](UI.UI.UserWidgetPrefab.md#newobject)

## Constructors

### constructor

• **new UserWidgetPrefab**()

#### Inherited from

[UserWidget](UI.UI.UserWidget.md).[constructor](UI.UI.UserWidget.md#constructor)

## Accessors

### autoSizeEnable

• `get` **autoSizeEnable**(): `boolean`

**`Description`**

获取是否自动设置大小

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

是否自动设置大小

#### Inherited from

UserWidget.autoSizeEnable

#### Defined in

UI/index.d.ts:4987

• `set` **autoSizeEnable**(`autoSize`): `void`

**`Description`**

设置是否自动设置大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type      | Description            |
| :--------- | :-------- | :--------------------- |
| `autoSize` | `boolean` | usage:是否自动设置大小 |

#### Returns

`void`

#### Inherited from

UserWidget.autoSizeEnable

#### Defined in

UI/index.d.ts:4981

---

### cachedGeometry

• `get` **cachedGeometry**(): [`Geometry`](UI.UI.Geometry.md)

**`Description`**

获取上一次的 GetTickSpaceGeometry

**`Effect`**

只在客户端调用生效

#### Returns

[`Geometry`](UI.UI.Geometry.md)

返回上一次的 GetTickSpaceGeometry

#### Inherited from

UserWidget.cachedGeometry

#### Defined in

UI/index.d.ts:4897

---

### constraints

• `get` **constraints**(): `Readonly`<[`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)\>

**`Description`**

获取控件的布局

**`Effect`**

只在客户端调用生效

#### Returns

`Readonly`<[`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md)\>

控件的布局

#### Inherited from

UserWidget.constraints

#### Defined in

UI/index.d.ts:4939

• `set` **constraints**(`ininconstraints`): `void`

**`Description`**

设置控件的布局

**`Effect`**

只在客户端调用生效

#### Parameters

| Name              | Type                                                  | Description      |
| :---------------- | :---------------------------------------------------- | :--------------- |
| `ininconstraints` | [`UIConstraintAnchors`](UI.UI.UIConstraintAnchors.md) | usage:控件的布局 |

#### Returns

`void`

#### Inherited from

UserWidget.constraints

#### Defined in

UI/index.d.ts:4933

---

### desiredSize

• `get` **desiredSize**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取期望大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回期望大小

#### Inherited from

UserWidget.desiredSize

#### Defined in

UI/index.d.ts:4831

---

### enable

• `get` **enable**(): `boolean`

**`Description`**

是否可用

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

boolean

#### Inherited from

UserWidget.enable

#### Defined in

UI/index.d.ts:4807

• `set` **enable**(`isEnable`): `void`

**`Description`**

设置可用性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type      | Description          |
| :--------- | :-------- | :------------------- |
| `isEnable` | `boolean` | usage:可用性 boolean |

#### Returns

`void`

返回设置结果

#### Inherited from

UserWidget.enable

#### Defined in

UI/index.d.ts:4814

---

### focusable

• `get` **focusable**(): `boolean`

**`Description`**

获取是否响应键盘焦点事件

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

返回相应键盘的焦点事件

#### Inherited from

UserWidget.focusable

#### Defined in

UI/index.d.ts:4435

• `set` **focusable**(`isFocus`): `void`

**`Description`**

设置是否响应键盘焦点事件

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type      | Description    |
| :-------- | :-------- | :------------- |
| `isFocus` | `boolean` | usage:是否相应 |

#### Returns

`void`

#### Inherited from

UserWidget.focusable

#### Defined in

UI/index.d.ts:4429

---

### guid

• `get` **guid**(): `string`

**`Description`**

获取控件 GUID

**`Effect`**

只在客户端调用生效

#### Returns

`string`

控件 GUID

#### Inherited from

UserWidget.guid

#### Defined in

UI/index.d.ts:4915

---

### isHovered

• `get` **isHovered**(): `boolean`

**`Description`**

是否是 hovered

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

boolean

#### Inherited from

UserWidget.isHovered

#### Defined in

UI/index.d.ts:4820

---

### name

• `get` **name**(): `string`

**`Description`**

获取名字

**`Effect`**

只在客户端调用生效

#### Returns

`string`

返回名字

#### Inherited from

UserWidget.name

#### Defined in

UI/index.d.ts:4783

• `set` **name**(`name`): `void`

**`Description`**

设定名字

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | usage:名字  |

#### Returns

`void`

#### Inherited from

UserWidget.name

#### Defined in

UI/index.d.ts:4777

---

### paintSpaceGeometry

• `get` **paintSpaceGeometry**(): [`Geometry`](UI.UI.Geometry.md)

**`Description`**

获取最后一次用于渲染 Widget 的几何信息

**`Effect`**

只在客户端调用生效

#### Returns

[`Geometry`](UI.UI.Geometry.md)

返回最后一次用于渲染 Widget 的几何信息

#### Inherited from

UserWidget.paintSpaceGeometry

#### Defined in

UI/index.d.ts:4909

---

### parent

• `get` **parent**(): [`Widget`](UI.UI.Widget.md)

**`Description`**

获取父节点

**`Effect`**

只在客户端调用生效

#### Returns

[`Widget`](UI.UI.Widget.md)

返回父节点

#### Inherited from

UserWidget.parent

#### Defined in

UI/index.d.ts:4764

---

### position

• `get` **position**(): `Readonly`<[`Vector2`](Type.Type.Vector2.md)\>

**`Description`**

获取控件的位置

**`Effect`**

只在客户端调用生效

#### Returns

`Readonly`<[`Vector2`](Type.Type.Vector2.md)\>

控件的位置

#### Inherited from

UserWidget.position

#### Defined in

UI/index.d.ts:4951

• `set` **position**(`inFigmaPosition`): `void`

**`Description`**

设置控件的位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name              | Type                              | Description      |
| :---------------- | :-------------------------------- | :--------------- |
| `inFigmaPosition` | [`Vector2`](Type.Type.Vector2.md) | usage:控件的位置 |

#### Returns

`void`

#### Inherited from

UserWidget.position

#### Defined in

UI/index.d.ts:4945

---

### renderOpacity

• `get` **renderOpacity**(): `number`

**`Description`**

获取渲染透明度

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回渲染透明度

#### Inherited from

UserWidget.renderOpacity

#### Defined in

UI/index.d.ts:4891

• `set` **renderOpacity**(`InOpacity`): `void`

**`Description`**

设置渲染透明度 0 ~ 1

**`Effect`**

只在客户端调用生效

#### Parameters

| Name        | Type     | Description  |
| :---------- | :------- | :----------- |
| `InOpacity` | `number` | usage:透明度 |

#### Returns

`void`

#### Inherited from

UserWidget.renderOpacity

#### Defined in

UI/index.d.ts:4885

---

### renderScale

• `get` **renderScale**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取渲染缩放

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回渲染缩放

#### Inherited from

UserWidget.renderScale

#### Defined in

UI/index.d.ts:4879

• `set` **renderScale**(`scale`): `void`

**`Description`**

设置渲染缩放

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                              | Description    |
| :------ | :-------------------------------- | :------------- |
| `scale` | [`Vector2`](Type.Type.Vector2.md) | usage:渲染缩放 |

#### Returns

`void`

#### Inherited from

UserWidget.renderScale

#### Defined in

UI/index.d.ts:4873

---

### renderShear

• `get` **renderShear**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取渲染错切形变

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回渲染错切形变

#### Inherited from

UserWidget.renderShear

#### Defined in

UI/index.d.ts:4867

• `set` **renderShear**(`shear`): `void`

**`Description`**

设置渲染错切形变

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                              | Description        |
| :------ | :-------------------------------- | :----------------- |
| `shear` | [`Vector2`](Type.Type.Vector2.md) | usage:渲染错切形变 |

#### Returns

`void`

#### Inherited from

UserWidget.renderShear

#### Defined in

UI/index.d.ts:4861

---

### renderTransformAngle

• `get` **renderTransformAngle**(): `number`

**`Description`**

获取渲染的角度

**`Effect`**

只在客户端调用生效

#### Returns

`number`

返回渲染角度

#### Inherited from

UserWidget.renderTransformAngle

#### Defined in

UI/index.d.ts:4843

• `set` **renderTransformAngle**(`o`): `void`

**`Description`**

设置渲染的角度

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type     | Description    |
| :--- | :------- | :------------- |
| `o`  | `number` | usage:渲染角度 |

#### Returns

`void`

#### Inherited from

UserWidget.renderTransformAngle

#### Defined in

UI/index.d.ts:4837

---

### renderTransformPivot

• `get` **renderTransformPivot**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取渲染锚点

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

返回渲染锚点

#### Inherited from

UserWidget.renderTransformPivot

#### Defined in

UI/index.d.ts:4855

• `set` **renderTransformPivot**(`Pivot`): `void`

**`Description`**

设置渲染锚点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name    | Type                              | Description    |
| :------ | :-------------------------------- | :------------- |
| `Pivot` | [`Vector2`](Type.Type.Vector2.md) | usage:渲染锚点 |

#### Returns

`void`

#### Inherited from

UserWidget.renderTransformPivot

#### Defined in

UI/index.d.ts:4849

---

### rootContent

• `get` **rootContent**(): [`Canvas`](UI.UI.Canvas.md)

**`Description`**

获取根 Canvas

**`Effect`**

只在客户端调用生效

#### Returns

[`Canvas`](UI.UI.Canvas.md)

返回根 Canvas

#### Inherited from

UserWidget.rootContent

#### Defined in

UI/index.d.ts:4411

• `set` **rootContent**(`content`): `void`

**`Description`**

设置 UI 的根 Canvas

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                        | Description        |
| :-------- | :-------------------------- | :----------------- |
| `content` | [`Canvas`](UI.UI.Canvas.md) | usage:根 UI 的内容 |

#### Returns

`void`

#### Inherited from

UserWidget.rootContent

#### Defined in

UI/index.d.ts:4405

---

### size

• `get` **size**(): [`Vector2`](Type.Type.Vector2.md)

**`Description`**

获取大小

**`Effect`**

只在客户端调用生效

#### Returns

[`Vector2`](Type.Type.Vector2.md)

FVector2D

#### Inherited from

UserWidget.size

#### Defined in

UI/index.d.ts:4963

• `set` **size**(`inSize`): `void`

**`Description`**

设置控件的大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type                              | Description    |
| :------- | :-------------------------------- | :------------- |
| `inSize` | [`Vector2`](Type.Type.Vector2.md) | usage:输入大小 |

#### Returns

`void`

#### Inherited from

UserWidget.size

#### Defined in

UI/index.d.ts:4957

---

### slot

• `get` **slot**(): [`UISlot`](UI.UI.UISlot.md)

**`Deprecated`**

since:v0.20.0.0 reason:底层方案修改 replacement:直接使用控件获取设置相关信息

**`Description`**

获取插槽

**`Effect`**

只在客户端调用生效

#### Returns

[`UISlot`](UI.UI.UISlot.md)

返回插槽

#### Inherited from

UserWidget.slot

#### Defined in

UI/index.d.ts:4771

---

### tickSpaceGeometry

• `get` **tickSpaceGeometry**(): [`Geometry`](UI.UI.Geometry.md)

**`Description`**

获取最后一次用于驱动 Widget Tick 的几何信息

**`Effect`**

只在客户端调用生效

#### Returns

[`Geometry`](UI.UI.Geometry.md)

返回最后一次用于驱动 Widget Tick 的几何信息

#### Inherited from

UserWidget.tickSpaceGeometry

#### Defined in

UI/index.d.ts:4903

---

### transform

• `get` **transform**(): `Readonly`<[`UITransform`](UI.UI.UITransform.md)\>

**`Description`**

得到控件的大小和位置

**`Effect`**

只在客户端调用生效

#### Returns

`Readonly`<[`UITransform`](UI.UI.UITransform.md)\>

控件的大小和位置

#### Inherited from

UserWidget.transform

#### Defined in

UI/index.d.ts:4927

• `set` **transform**(`inTransform`): `void`

**`Description`**

设置控件的大小和位置

**`Effect`**

只在客户端调用生效

#### Parameters

| Name          | Type                                  | Description    |
| :------------ | :------------------------------------ | :------------- |
| `inTransform` | [`UITransform`](UI.UI.UITransform.md) | usage:大小位置 |

#### Returns

`void`

#### Inherited from

UserWidget.transform

#### Defined in

UI/index.d.ts:4921

---

### visibility

• `get` **visibility**(): [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md)

**`Description`**

获取可见性

**`Effect`**

只在客户端调用生效

#### Returns

[`SlateVisibility`](../enums/UI.UI.SlateVisibility.md)

返回可见性

#### Inherited from

UserWidget.visibility

#### Defined in

UI/index.d.ts:4795

• `set` **visibility**(`Visibility`): `void`

**`Description`**

设置可见性

**`Effect`**

只在客户端调用生效

#### Parameters

| Name         | Type                                                   | Description  |
| :----------- | :----------------------------------------------------- | :----------- |
| `Visibility` | [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) | usage:可见性 |

#### Returns

`void`

#### Inherited from

UserWidget.visibility

#### Defined in

UI/index.d.ts:4789

---

### visible

• `get` **visible**(): `boolean`

**`Description`**

是否可见

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

boolean

#### Inherited from

UserWidget.visible

#### Defined in

UI/index.d.ts:4801

---

### zOrder

• `get` **zOrder**(): `number`

**`Description`**

获取 zorder

**`Effect`**

只在客户端调用生效

#### Returns

`number`

zorder

#### Inherited from

UserWidget.zOrder

#### Defined in

UI/index.d.ts:4975

• `set` **zOrder**(`InZOrder`): `void`

**`Description`**

设置 zoder

**`Effect`**

只在客户端调用生效

#### Parameters

| Name       | Type     | Description          |
| :--------- | :------- | :------------------- |
| `InZOrder` | `number` | usage:值越大在越上层 |

#### Returns

`void`

#### Inherited from

UserWidget.zOrder

#### Defined in

UI/index.d.ts:4969

## Methods

### addToViewport

▸ **addToViewport**(`zOrder`): `void`

**`Description`**

添加到屏幕上

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type     | Description                |
| :------- | :------- | :------------------------- |
| `zOrder` | `number` | usage:添加到屏幕的层级关系 |

#### Returns

`void`

#### Inherited from

[UserWidget](UI.UI.UserWidget.md).[addToViewport](UI.UI.UserWidget.md#addtoviewport)

#### Defined in

UI/index.d.ts:4399

---

### destroyObject

▸ **destroyObject**(): `void`

**`Description`**

立刻移除并销毁 不可以在使用

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Inherited from

[UserWidget](UI.UI.UserWidget.md).[destroyObject](UI.UI.UserWidget.md#destroyobject)

#### Defined in

UI/index.d.ts:4751

---

### equal

▸ **equal**(`that`): `boolean`

**`Description`**

判断是不是同一个对象

**`Effect`**

只在客户端调用生效

#### Parameters

| Name   | Type                        | Description                  |
| :----- | :-------------------------- | :--------------------------- |
| `that` | [`Widget`](UI.UI.Widget.md) | usage:需要比较的另外一个对象 |

#### Returns

`boolean`

boolean

#### Inherited from

[UserWidget](UI.UI.UserWidget.md).[equal](UI.UI.UserWidget.md#equal)

#### Defined in

UI/index.d.ts:4758

---

### findChildByPath

▸ **findChildByPath**(`inPath`): [`Widget`](UI.UI.Widget.md)

**`Description`**

通过相对路径查找节点

**`Effect`**

只在客户端调用生效

#### Parameters

| Name     | Type     | Description |
| :------- | :------- | :---------- |
| `inPath` | `string` | usage:路径  |

#### Returns

[`Widget`](UI.UI.Widget.md)

返回查找节点结果

#### Inherited from

[UserWidget](UI.UI.UserWidget.md).[findChildByPath](UI.UI.UserWidget.md#findchildbypath)

#### Defined in

UI/index.d.ts:4423

---

### invalidateLayoutAndVolatility

▸ **invalidateLayoutAndVolatility**(): `void`

**`Description`**

立刻触发重新渲染的和排布计算

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Inherited from

[UserWidget](UI.UI.UserWidget.md).[invalidateLayoutAndVolatility](UI.UI.UserWidget.md#invalidatelayoutandvolatility)

#### Defined in

UI/index.d.ts:4825

---

### removeRootContent

▸ **removeRootContent**(): `void`

**`Description`**

移除根 Canvas,会销毁根 Canvas，无法再次使用

**`Effect`**

只在客户端调用生效

#### Returns

`void`

#### Inherited from

[UserWidget](UI.UI.UserWidget.md).[removeRootContent](UI.UI.UserWidget.md#removerootcontent)

#### Defined in

UI/index.d.ts:4416

---

### newObject

▸ `Static` **newObject**(`parent?`): [`UserWidget`](UI.UI.UserWidget.md)

**`Description`**

创建 UserWidget 控件

**`Effect`**

只在客户端调用生效

#### Parameters

| Name      | Type                        | Description                                |
| :-------- | :-------------------------- | :----------------------------------------- |
| `parent?` | [`Canvas`](UI.UI.Canvas.md) | usage:创建控件的外 Outer 对象 default:null |

#### Returns

[`UserWidget`](UI.UI.UserWidget.md)

返回创建的控件

#### Inherited from

[UserWidget](UI.UI.UserWidget.md).[newObject](UI.UI.UserWidget.md#newobject)

#### Defined in

UI/index.d.ts:4393
