package com.rusakov.back.security;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;

import static com.rusakov.back.Const.BASE_API;

@Component
public class IndexHtmlFilter extends GenericFilterBean {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws ServletException {
        try {
            HttpServletRequest req = (HttpServletRequest) request;
            String url = req.getRequestURI();
            if (url != null && !url.equals("")) {
                if (url.contains("/error")
                        || url.contains("/index.html")
                        || url.contains("/logout")
                        || url.contains(BASE_API)
                        || url.contains("/sockets")
                        || url.contains("/static")
                        || url.contains("/assets")) {
                    chain.doFilter(request, response);
                } else {
                    RequestDispatcher dispatcher = request.getRequestDispatcher("/index.html");
                    dispatcher.forward(request, response);
                }
            } else {
                chain.doFilter(request, response);
            }
        } catch (Exception e) {
            throw new ServletException(e);
        }
    }

}
