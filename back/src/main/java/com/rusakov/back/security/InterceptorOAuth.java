package com.rusakov.back.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.user.OAuth2User;

@Configuration
public class InterceptorOAuth {

    @Bean
    public OAuth2UserService<OAuth2UserRequest, OAuth2User> oAuth2UserService(){
        DefaultOAuth2UserService delegate = new DefaultOAuth2UserService();
        return userRequest -> {
            OAuth2User oAuth2User = delegate.loadUser(userRequest);
            String name = oAuth2User.getAttribute("name");
            String email = oAuth2User.getAttribute("email");
            String login = oAuth2User.getAttribute("login");
            User user = new User(name, login, email);
            //TODO можно сохранить юзера на всякий
            return oAuth2User;
        };
    }
}
