---
title: 'Tìm hiểu về Docker Phần 2'
description: 'Docker là nền tảng cung cấp cho các công cụ, service để các developers, adminsystems có thể phát triển, thực thi, chạy các ứng dụng với containers'
image:
  src: '/assets/image.jpg'
  alt: 'An image showcasing My Page.'
  width: 400
  height: 300
head:
  meta:
    - name: 'keywords'
      content: 'docker, tìm hiểu về Docker'
    - name: 'robots'
      content: 'index, follow'
    - name: 'author'
      content: 'Quyvl'
    - name: 'copyright'
      content: '© 2023 Quyvl'
    - name: 'og:title'
      content: 'Tìm hiểu về docker'
toc: true      
publishedAt: 2023-12-07 13:15:00
---
# Tìm hiểu Docker Phần 2

## 1. Các câu lệnh Docker
### 1.1 Kiểm tra version docker
- Kiểm tra nhanh version của docker
```
  docker -v
```
- Kiểm tra nhanh chi tiết hơn
```
  docker version
```

### 1.2 Kiểm tra trạng thái docker
- Kiểm tra số lượng và trạng thái container và images hiện có
```
  docker info
```

### 1.3 Cú pháp chung của docker
```
  docker <command> <action-command> [option]
```

### 1.4 Cách tạo và chạy một container
- Option1: Kèm theo tiến trình chạy trong terminal
```
  docker container run -p 8080:80 nginx
```

- Option2: Không kèm theo tiến trình chạy trong terminal
```
  docker container run -p 8080:80 --detach nginx
```

### 1.5 Hiển thị danh sach container
- Hiển thị danh sách container đang hoạt động
```
  docker container ls
```

- Hiển thị danh sách container đang hoạt động và không hoạt động
```
  docker container ls -a
```

- Hiển thị danh sách container trên nhiều node
```
  docker ps
```

### 1.6 Dừng tiến trình docker container
- Theo tên container
```
  docker container stop [name_container]
```

- Theo id container
```
  docker container stop [container_id]
```

### 1.7 Kiểm tra tất các tiến trình của một container
- Theo tên container
```
  docker container top [name_container]
```

### 1.8 Kiểm tra runtime log của một container
- Theo tên container
```
  docker container logs [name_container]
```

### 1.9 Remove container 
- Theo tên container đang stop
```
  docker container rm [name_container]
```

- Theo tên container đang run
```
  docker container rm -f [name_container]
```

## 2. Container và Virtual Machine khác gì nhau?
| Virtualization | Containerization |
|-|-|
| Nó giúp chạy nhiều hệ điều hành trên phần cứng của một server vật lý | Nó giúp triển khai nhiều ứng dụng trên cùng hệ điều hành trên một máy ảo hoặc server |
| Hypervisors cung cấp các máy ảo tổng thể cho hệ điều hành khách | Container đảm bảo cung cấp môi trường/không gian người dùng biệt lập để chạy các ứng dụng. Mọi thay đổi được thực hiện trong container không phản ánh trên server hoặc các container khác của cùng server |
| Các máy ảo này tạo thành một phần trừu tượng của lớp phần cứng hệ thống, điều này có nghĩa là mỗi máy ảo trên host hoạt động giống như một máy vật lý | Container tạo thành sự trừu tượng của lớp ứng dụng có nghĩa là mỗi container tạo thành một ứng dụng khác nhau |

## 3. Image và Container khác gì nhau?
| Image | Containerization |
|-|-|
| Image là ứng dựng | Container là process khi chạy ứng dụng đó |
- Có thể có nhiều container chạy từ cùng một image
- Image được lưu trên một kho chung gọi là registry

## 4. Giải thích lệnh tạo docker
```
  docker container run --name Webserver1 –p 8080:80 –d nginx
```
- Kiểm tra xem image nginx có sẵn trên host chưa
- Nếu chưa có thì pull từ Docker Hub về
- Tạo container tên Webserver1 dựa trên image nginx
- Cấp địa chỉ IP cho container
- Mở port 8080 trên host và NAT vào port 80 của container
- Chạy container với các lệnh được định nghĩa trong image

## 5. Cách giám sát một container
Kiểm tra trong container chạy những gì?
- docker container top - process list
- docker container inspect – xem file cấu hình của container
- docker container stats – performance
