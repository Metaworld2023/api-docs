[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Network](../modules/Network.md) / [Network](../modules/Network.Network.md) / Response

# Interface: Response

[Network](../modules/Network.md).[Network](../modules/Network.Network.md).Response

**`Author`**

吴思

**`Description`**

HTTP 响应信息的对象

**`Network Status`**

usage:双端

## Table of contents

### Properties

- [headers](Network.Network.Response.md#headers)
- [ok](Network.Network.Response.md#ok)
- [status](Network.Network.Response.md#status)
- [type](Network.Network.Response.md#type)
- [url](Network.Network.Response.md#url)

### Methods

- [json](Network.Network.Response.md#json)
- [text](Network.Network.Response.md#text)

## Properties

### headers

• **headers**: `Map`<`string`, `string`\>

**`Description`**

响应头

#### Defined in

Network/index.d.ts:26

---

### ok

• **ok**: `boolean`

**`Description`**

是否成功（状态码是否为 200）

#### Defined in

Network/index.d.ts:32

---

### status

• **status**: `number`

**`Description`**

响应状态码

#### Defined in

Network/index.d.ts:34

---

### type

• **type**: `string`

**`Description`**

响应类型

#### Defined in

Network/index.d.ts:28

---

### url

• **url**: `string`

**`Description`**

响应 URL

#### Defined in

Network/index.d.ts:30

## Methods

### json

▸ **json**<`T`\>(): `Promise`<`T`\>

**`Description`**

数据返回 json

**`Effect`**

调用端生效

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Returns

`Promise`<`T`\>

数据返回 json

#### Defined in

Network/index.d.ts:46

---

### text

▸ **text**(): `Promise`<`string`\>

**`Description`**

数据返回文本

**`Effect`**

调用端生效

#### Returns

`Promise`<`string`\>

数据返回文本

#### Defined in

Network/index.d.ts:40
