FROM nginx:latest

# Copy Web App
COPY ./out /usr/share/nginx/html

# Copy Nginx Config
# COPY ./nginx.conf /etc/nginx/nginx.conf

# Expose Port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

