# Redis 缓存

AmiyaBot 提供了内置的 Redis 缓存客户端，支持 Redis 和内存缓存两种模式，可在插件中直接使用。

## 配置

在 `config/redis.yaml` 中配置 Redis 连接参数：

```yaml
host: '127.0.0.1'
port: 6379
password: ''
db: 0
expire: 600
```

## 使用

### 引入

```python
from core.lib.redis import redis_client
```

### 设置缓存

```python
await redis_client.set('key', 'value', expire=60)
```

- `key` - 缓存键名（字符串）
- `value` - 缓存值（字符串）
- `expire` - 过期时间（秒），不传则使用配置文件中的默认值

### 获取缓存

```python
value = await redis_client.get('key')
# 返回字符串，不存在返回 None
```

### 删除缓存

```python
await redis_client.delete('key')
```

### 检查键是否存在

```python
exists = await redis_client.exists('key')
# 返回 bool
```

## 自动降级

如果 Redis 不可用（连接失败、网络中断、未安装 `redis` 包），系统会自动降级为**内存缓存**，所有操作仍然可用，缓存数据存储在进程内存中，会在进程重启后丢失。

## 自动重连

Redis 连接因网络原因中断后，后台会每 30 秒自动尝试重连。重连成功前，操作自动使用内存缓存，不会丢失数据或报错。

## 配置项说明

| 配置项 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `host` | string | `127.0.0.1` | Redis 地址 |
| `port` | int | `6379` | Redis 端口 |
| `password` | string | `""` | Redis 密码 |
| `db` | int | `0` | Redis 数据库编号 |
| `expire` | int | `600` | 默认缓存过期时间（秒） |