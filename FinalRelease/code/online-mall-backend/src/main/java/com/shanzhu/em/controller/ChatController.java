package com.shanzhu.em.controller;

import com.shanzhu.em.common.R;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/chat")
@RequiredArgsConstructor
@Slf4j
public class ChatController {

    private final RestTemplate restTemplate = new RestTemplate();

    private final String API_URL = "https://open.bigmodel.cn/api/paas/v4/chat/completions";
    private final String API_KEY = "c985d32ff863a012bc2e255a7f233459.waeWLUDRYhdsHRrG"; // 请替换为你的实际API密钥

    @PostMapping
    public R<String> chat(@RequestBody Map<String, String> request) {
        String userMessage = request.get("message");
        String prompt = "你是电子商城的购物助手，用户会向你提问，你需要回答他们的问题。用户问：" + userMessage;

        // 构建请求体
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("model", "glm-4v");

        Map<String, Object> messageContent = new HashMap<>();
        messageContent.put("type", "text");
        messageContent.put("text", prompt);

        Map<String, Object> message = new HashMap<>();
        message.put("role", "user");
        message.put("content", Collections.singletonList(messageContent));

        requestBody.put("messages", Collections.singletonList(message));
        requestBody.put("do_sample", true);
        requestBody.put("temperature", 0.8);
        requestBody.put("top_p", 0.6);
        requestBody.put("max_tokens", 1024);
        requestBody.put("stream", false);

        // 设置请求头
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + API_KEY);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);

        try {
            // 发送请求
            ResponseEntity<Map> response = restTemplate.postForEntity(API_URL, entity, Map.class);


            if (response.getStatusCode() == HttpStatus.OK) {
                Map<String, Object> responseBody = response.getBody();
                log.info("Response Body: {}", responseBody);

                // 提取模型的响应内容
                List<Map<String, Object>> choices = (List<Map<String, Object>>) responseBody.get("choices");
                String modelResponse = (String) ((Map<String, Object>) choices.get(0).get("message")).get("content");

                return R.success(modelResponse);
            } else {
                return R.error(String.valueOf(response.getStatusCodeValue()), "请求失败，状态码: " + response.getStatusCode().toString());
            }
        } catch (HttpClientErrorException e) {
            return R.error("400", "客户端错误，请检查请求格式或参数");
        } catch (Exception e) {
            return R.error("500", "服务器错误，请稍后再试");
        }
    }
}
