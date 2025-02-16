[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Service](../modules/Service.md) / [Service](../modules/Service.Service.md) / DebugService

# Class: DebugService

[Service](../modules/Service.md).[Service](../modules/Service.Service.md).DebugService

**`Author`**

xiangkun.sun

**`Instance`**

**`Description`**

debug 调试服务

**`Precautions`**

单例类，请使用 instance 获取对象

**`Network Status`**

usage: 双端

## Table of contents

### Constructors

- [constructor](Service.Service.DebugService.md#constructor)

### Methods

- [getHeapStatistics](Service.Service.DebugService.md#getheapstatistics)
- [getInstance](Service.Service.DebugService.md#getinstance)

## Constructors

### constructor

• **new DebugService**()

## Methods

### getHeapStatistics

▸ `Static` **getHeapStatistics**(): `HeapStatistics`

**`Description`**

获取当前项目所有 TS 脚本内存占用

**`Effect`**

调用端生效

#### Returns

`HeapStatistics`

HeapStatistics 内存数据

#### Defined in

Service/index.d.ts:764

---

### getInstance

▸ `Static` **getInstance**(): [`DebugService`](Service.Service.DebugService.md)

**`Description`**

获取 debug 调试服务全局实例

**`Effect`**

调用端生效

#### Returns

[`DebugService`](Service.Service.DebugService.md)

debug 调试服务全局实例

#### Defined in

Service/index.d.ts:758
