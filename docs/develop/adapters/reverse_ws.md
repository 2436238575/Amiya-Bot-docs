# OneBot 11 通用反向 WebSocket

此适配器实现 OneBot 11 通用反向 WebSocket：OneBot 实现作为 WebSocket 客户端连接 AmiyaBot，AmiyaBot 负责监听端口、接收事件，并通过同一条 Universal/API 连接发送 action。

## 创建实例

| 参数名 | 类型 | 释义 |
| --- | --- | --- |
| `host` | `str` | AmiyaBot 监听地址，通常为 `0.0.0.0` |
| `ws_port` | `int` | AmiyaBot 监听的反向 WebSocket 端口 |
| `http_port` | `int` | 兼容账号配置字段，反向 WebSocket 不使用 |

```python
from amiyabot import AmiyaBot
from amiyabot.adapters.reverse_ws import reverse_ws

adapter = reverse_ws('0.0.0.0', 8080)
bot = AmiyaBot(appid='123456789', token='change-me', adapter=adapter)
```

适配器会校验连接请求中的 `X-Self-ID` 是否与 `appid` 相同，并支持 `Authorization: Bearer <token>` 或 `access_token` 查询参数鉴权。

## 连接角色

适配器支持 `X-Client-Role` 的 `API`、`Event`、`Universal`（大小写不敏感）。未提供角色时，根据路径 `/api`、`/event` 判断，否则按 `Universal` 处理。

- `Universal`：接收事件并发送 action。
- `API`：发送 action。
- `Event`：只接收事件；没有 API/Universal 连接时，Amiya 的 API 调用会立即抛出 `ConnectionError`。

## API 转发

`bot.instance.api` 继承 OneBot 11 标准 API。标准方法、`get()`、`post()` 和 `request()` 都通过反向 WebSocket 转发，不改变现有插件调用方式。

任意 action 均可通过 `call()` 调用，适配器不会在 Amiya 侧维护固定 action 清单：

```python
response = await bot.instance.api.call('get_status', {})
```

合法的 action 名也可以通过动态方法调用；带点号或不适合作为 Python 属性的 action 使用 `call()`。

## Demo 账号配置

账号适配器使用 `reverse_ws`，参数仍为 `host`、`ws_port`、`http_port`。其中反向 WebSocket 只使用 `host`、`ws_port`、`token` 和 `appid`。
