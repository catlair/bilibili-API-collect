import{_ as t,o as s,c as n,e as a}from"./app-2c7ecf0f.js";const e={},d=a(`<h1 id="充电留言" tabindex="-1"><a class="header-anchor" href="#充电留言" aria-hidden="true">#</a> 充电留言</h1><h2 id="发送充电留言" tabindex="-1"><a class="header-anchor" href="#发送充电留言" aria-hidden="true">#</a> 发送充电留言</h2><blockquote><p>https://api.bilibili.com/x/ugcpay/trade/elec/message</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>order_id</td><td>str</td><td>留言token</td><td>必要</td><td></td></tr><tr><td>message</td><td>str</td><td>留言内容</td><td>必要</td><td></td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功 <br>-101：账号未登录<br>-111：csrf校验失败<br>-400：请求错误<br>88203：不能重复留言</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>为留言token为<code>BPRG5CEC3VUPOOANA540</code>的充电操作，添加了内容为<code>支持一下大佬</code>的留言</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/ugcpay/trade/elec/message&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;order_id=BPRG5CEC3VUPOOANA540&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;message=支持一下大佬&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="查询我收到的充电留言" tabindex="-1"><a class="header-anchor" href="#查询我收到的充电留言" aria-hidden="true">#</a> 查询我收到的充电留言</h2><blockquote><p>https://member.bilibili.com/x/web/elec/remark/list</p></blockquote><p><em>请求方式:GET</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>begin</td><td>str</td><td>起始日期</td><td></td><td>默认2016-01-01</td></tr><tr><td>end</td><td>str</td><td>结束日期</td><td></td><td>默认2050-01-01</td></tr><tr><td>pn</td><td>str</td><td>页数</td><td></td><td></td></tr><tr><td>ps</td><td>str</td><td>分页大小</td><td></td><td>取值范围[1,12]</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录</td></tr><tr><td>msg</td><td>str</td><td>0</td><td></td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>page</td><td>obj</td><td>分页信息</td><td></td></tr><tr><td>list</td><td>array</td><td>信息本体</td><td></td></tr></tbody></table><p><code>page</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>current</td><td>num</td><td>当前页数</td><td></td></tr><tr><td>size</td><td>num</td><td>当前分页大小</td><td></td></tr><tr><td>total</td><td>num</td><td>记录总数</td><td></td></tr></tbody></table><p><code>list</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>num</td><td></td><td></td></tr><tr><td>bvid</td><td>str</td><td></td><td></td></tr><tr><td>id</td><td>num</td><td>留言记录id</td><td></td></tr><tr><td>mid</td><td>num</td><td></td><td></td></tr><tr><td>reply_mid</td><td>num</td><td>0</td><td></td></tr><tr><td>elec_num</td><td>num</td><td>0</td><td></td></tr><tr><td>state</td><td>num</td><td>UP是否已经回复这条留言</td><td>0：未回复<br>1：已回复</td></tr><tr><td>msg</td><td>str</td><td>留言信息</td><td></td></tr><tr><td>aname</td><td>str</td><td>空</td><td></td></tr><tr><td>uname</td><td>str</td><td>空</td><td></td></tr><tr><td>avator</td><td>str</td><td>空</td><td></td></tr><tr><td>reply_name</td><td>str</td><td>空</td><td></td></tr><tr><td>reply_avator</td><td>str</td><td>空</td><td></td></tr><tr><td>reply_msg</td><td>str</td><td>空</td><td></td></tr><tr><td>ctime</td><td>num</td><td>留言时间</td><td>毫秒级时间戳</td></tr><tr><td>reply_time</td><td>num</td><td>0</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-X</span> GET <span class="token string">&#39;https://member.bilibili.com/x/web/elec/remark/list?begin=2016-01-01&amp;end=2050-01-01&amp;pn=1&amp;ps=10&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-H</span> <span class="token string">&#39;Cookie: SESSDATA=xxx;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">6715018</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;reply_mid&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;elec_num&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;加油&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;aname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;avator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;reply_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;reply_avator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;reply_msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1650665119000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;reply_time&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pager&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;current&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">448</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="查询充电留言详情" tabindex="-1"><a class="header-anchor" href="#查询充电留言详情" aria-hidden="true">#</a> 查询充电留言详情</h2><blockquote><p>https://member.bilibili.com/x/web/elec/remark/detail</p></blockquote><p>认证方式：Cookie（SESSDATA）</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>num</td><td>留言id</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>0</td><td></td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>num</td><td></td><td></td></tr><tr><td>bvid</td><td>str</td><td></td><td></td></tr><tr><td>id</td><td>num</td><td>留言id</td><td></td></tr><tr><td>mid</td><td>num</td><td>留言者uid（充电用户）</td><td></td></tr><tr><td>reply_mid</td><td>num</td><td>UP主uid</td><td></td></tr><tr><td>elec_num</td><td>num</td><td>0</td><td></td></tr><tr><td>state</td><td>num</td><td>UP是否已经回复这条留言</td><td>0：未回复<br>1：已回复</td></tr><tr><td>msg</td><td>str</td><td>留言内容</td><td></td></tr><tr><td>aname</td><td>str</td><td>空</td><td></td></tr><tr><td>uname</td><td>str</td><td>留言者用户名</td><td></td></tr><tr><td>avator</td><td>str</td><td>留言者头像</td><td></td></tr><tr><td>reply_name</td><td>str</td><td>UP主用户名</td><td></td></tr><tr><td>reply_avator</td><td>str</td><td>UP主头像</td><td></td></tr><tr><td>reply_msg</td><td>str</td><td>回复内容</td><td></td></tr><tr><td>ctime</td><td>num</td><td>留言时间</td><td>毫秒级时间戳</td></tr><tr><td>reply_time</td><td>num</td><td>回复时间</td><td>毫秒级时间戳</td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-X</span> GET <span class="token string">&#39;https://member.bilibili.com/x/web/elec/remark/detail?id=6507563&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-H</span> <span class="token string">&#39;cookie: SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;aid&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;bvid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">6507563</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">19978396</span><span class="token punctuation">,</span>
    <span class="token property">&quot;reply_mid&quot;</span><span class="token operator">:</span> <span class="token number">2062760</span><span class="token punctuation">,</span>
    <span class="token property">&quot;elec_num&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;感谢搬运&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;aname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;uname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HANSOOOOOL&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;avator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i1.hdslb.com/bfs/face/5c22af0261b8b3f9a54b6e0038e35430e9ed9cfd.jpg&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;reply_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;一把近战都不给六花&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;reply_avator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i2.hdslb.com/bfs/face/1804b716084908d4992bdd35827d0c2d7222fe97.jpg&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;reply_msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;(￣3￣)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1646726966000</span><span class="token punctuation">,</span>
    <span class="token property">&quot;reply_time&quot;</span><span class="token operator">:</span> <span class="token number">1646811946000</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="回复充电留言" tabindex="-1"><a class="header-anchor" href="#回复充电留言" aria-hidden="true">#</a> 回复充电留言</h2><blockquote><p>https://member.bilibili.com/x/web/elec/remark/reply</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>csrf</td><td>str</td><td>csrf</td><td>必要</td><td></td></tr><tr><td>id</td><td>num</td><td>留言id</td><td>必要</td><td></td></tr><tr><td>msg</td><td>str</td><td>回复信息</td><td></td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>-111：csrf 校验失败<br>-400：请求错误20004：充电服务异常<br></td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td></td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-X</span> POST <span class="token string">&#39;https://member.bilibili.com/x/web/elec/remark/reply&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-H</span> <span class="token string">&#39;cookie: SESSDATA=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-H</span> <span class="token string">&#39;Content-Type: application/x-www-form-urlencoded&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;id=6258929&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;msg=(￣3￣)&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,57),p=[d];function o(r,l){return s(),n("div",null,p)}const i=t(e,[["render",o],["__file","charge_msg.html.vue"]]);export{i as default};
