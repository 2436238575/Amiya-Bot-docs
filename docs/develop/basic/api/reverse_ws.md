# OneBot 11 反向 WebSocket API

`ReverseWebSocketAPI` 是通用 OneBot 11 反向 WebSocket API 代理。OneBot 实现负责执行 action，AmiyaBot 只负责传输、事件分发和响应关联。

```python
from amiyabot.adapters.reverse_ws import ReverseWebSocketAPI

api: ReverseWebSocketAPI = bot.instance.api
response = await api.get_group_info(group_id=123456)
```

## 通用 action

```python
response = await api.call('set_group_reaction', {
    'group_id': 123456,
    'message_id': 789,
    'code': '128077',
})
```

请求会自动生成唯一 `echo`，并等待响应中的相同 `echo`。多个并发 action 会独立关联。任意合法 Python action 名还可以使用动态方法；隐藏 action 使用 `call()`。

## 流式 action

```python
async for frame in api.call_stream('download_file_stream', {'file': 'file-id'}):
    if frame.stream == 'stream-action':
        consume_chunk(frame.data)
```

`stream == 'stream-action'` 表示中间帧，最终帧结束迭代。每一帧都是 `ReverseWebSocketResponse`。

## 响应对象

响应对象提供 `.json`、`.status`、`.retcode`、`.data`、`.echo`、`.wording`、`.message` 和 `.stream` 属性，额外字段仍保留在 `.json` 中。

未连接、连接断开或调用超时时会抛出异常，不会让插件永久等待。
