# OneBot 11 API

OneBot 11 API 通过 `bot.instance.api` 调用。当前实现支持 HTTP API 和通用反向 WebSocket；反向 WebSocket 适配器请参阅 [Reverse WebSocket API](./reverse_ws.md)。

```python
from amiyabot.adapters.onebot.v11.api import OneBot11API

api: OneBot11API = bot.instance.api
response = await api.get_group_info(group_id=123456)
```

## 通用方法

这三个方法直接调用 OneBot action。`url` 可以写成 `/get_status` 或 `get_status`。

| 方法 | 参数 | 说明 |
| --- | --- | --- |
| `get(url, params=None, **kwargs)` | `url: str`、`params: dict \| None` | GET 请求 |
| `post(url, data=None, **kwargs)` | `url: str`、`data: dict \| None` | POST 请求 |
| `request(url, method, **kwargs)` | `url: str`、`method: str` | 使用指定 HTTP 方法 |

```python
response = await api.post('/send_msg', {
    'message_type': 'group',
    'group_id': 123456,
    'message': '你好',
})
```

## 消息

| 方法 | 参数 |
| --- | --- |
| `send_private_msg(user_id, message, auto_escape=False)` | 私聊发消息 |
| `send_group_msg(group_id, message, auto_escape=False)` | 群聊发消息 |
| `send_msg(message_type, user_id, group_id, message, auto_escape=False)` | 按消息类型发送；不适用的 `user_id`/`group_id` 可按服务端要求省略 |
| `delete_msg(message_id)` | 撤回消息 |
| `get_msg(message_id)` | 获取消息详情 |
| `get_forward_msg(msg_id)` | 获取合并转发消息 |
| `send_like(user_id, times)` | 给好友点赞 |

`message` 可以是字符串、消息段数组或单个消息段对象，具体格式参阅 [OneBot 11 消息标准](/onebot-11/message/README.md)。

## 群管理

| 方法 | 参数 |
| --- | --- |
| `set_group_kick(group_id, user_id, reject_add_request=False)` | 踢出群成员 |
| `set_group_ban(group_id, user_id, duration)` | 禁言群成员，`duration` 单位为秒 |
| `set_group_whole_ban(group_id, enable=True)` | 设置全员禁言 |
| `set_group_admin(group_id, user_id, enable=True)` | 设置或取消管理员 |
| `set_group_card(group_id, user_id, card='')` | 设置群名片 |
| `set_group_name(group_id, group_name)` | 设置群名称 |
| `set_group_leave(group_id, is_dismiss=False)` | 退出群；群主可用 `is_dismiss` 解散 |

## 请求处理

| 方法 | 参数 |
| --- | --- |
| `set_friend_add_request(flag, approve=True, remark='')` | 处理好友请求 |
| `set_group_add_request(flag, sub_type, approve=True, reason='')` | 处理加群或群邀请请求 |

## 信息查询

| 方法 | 参数 |
| --- | --- |
| `get_login_info()` | 获取登录账号信息 |
| `get_stranger_info(user_id, no_cache=False)` | 获取陌生人信息 |
| `get_friend_list()` | 获取好友列表 |
| `get_group_info(group_id, no_cache=False)` | 获取群信息 |
| `get_group_list()` | 获取群列表 |
| `get_group_member_info(group_id, user_id, no_cache=False)` | 获取群成员信息 |
| `get_group_member_list(group_id)` | 获取群成员列表 |
| `get_group_honor_info(group_id, info_type)` | 获取群荣誉信息 |
| `get_cookies(domain)` | 获取 Cookies |
| `get_csrf_token()` | 获取 CSRF Token |
| `get_credentials(domain)` | 获取 QQ 接口凭证 |
| `get_record(file, out_format)` | 获取语音文件 |
| `get_image(file)` | 获取图片信息 |
| `can_send_image()` | 检查图片发送能力 |
| `can_send_record()` | 检查语音发送能力 |

## 状态和系统

| 方法 | 参数 |
| --- | --- |
| `get_status()` | 获取运行状态 |
| `get_version_info()` | 获取 OneBot 实现版本 |
| `set_restart(delay=0)` | 重启 OneBot 实现 |
| `clean_cache()` | 清理缓存 |

## 返回值

返回对象由 AmiyaBot 的 HTTP 请求模块提供，常用属性为 `.json`。OneBot JSON 响应包含 `status`、`retcode` 和 `data`：

```python
response = await api.get_status()
payload = response.json

if payload['status'] == 'ok' and payload['retcode'] == 0:
    print(payload['data'])
```

不同 OneBot 实现可能提供额外 action 或返回字段。跨平台插件应优先使用上面的标准方法，并通过 `bot.instance.api` 的具体类型处理平台差异。
