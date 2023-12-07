---
title: 'Tìm hiểu về Docker Phần 1'
description: 'What a lovely page.'
image:
  src: '/assets/image.jpg'
  alt: 'An image showcasing My Page.'
  width: 400
  height: 300
head:
  meta:
    - name: 'keywords'
      content: 'nuxt, vue, content'
    - name: 'robots'
      content: 'index, follow'
    - name: 'author'
      content: 'NuxtLabs'
    - name: 'copyright'
      content: '© 2022 NuxtLabs'
    - name: 'og:title'
      content: 'This is an OpenGraph title'
toc: true      
publishedAt: 2023-12-07 13:15:00
---
# Tìm hiểu Docker Phần 1

## 1. Giới thiệu về Docker
### 1.1 Docker là gì ?
Docker là nền tảng cung cấp cho các công cụ, service để các developers, adminsystems có thể phát triển, thực thi, chạy các ứng dụng với containers. Hay nói một cách khác nó là một nền tảng để cung cấp cách để building, deploy và run các ứng dụng một cách dễ dàng trên nền tảng ảo hóa - "Build once, run anywhere". Hay nói một cách dễ hiểu như sau: Khi chúng ta muốn chạy app thì chúng ta phải thiết lập môi trường chạy cho nó. Thay vì chúng ta sẽ đi cài môi trường chạy cho nó thì chúng ta sẽ chạy docker.

### 1.2 Docker có 2 bản Community và Enterprise
- Docker Community (free). Docker Enterprise (trả phí)
- Windows server 2016+ có Docker Enterprise basic
- Docker Enterprise chủ yếu được sử dung với Linux
- Docker Enterprise cung cấp giao diện quản trị
- Dev và Sysadmins dùng bản Community để phát triển

### 1.3 Docker trên các nền tảng OS
| Window  | MasOS  | Liux |
| :------------ |:---------------:| -----:|
| Linux Containers và Windows Container (Windows Server 2016+ only) | Linux Containers | Linux Containers |
| Dùng VM để chạy Linux Containers | Dùng VM để chạy Linux Container | Chạy trực tiếp trên OS |
| Bộ lệnh tích hợp với Powershell native | Bộ lệnh tích hợp với Termial shell | Bộ lệnh tích hợp với bash shell |
| Nên sử dụng Windows 10 Pro/Ent để lab | Chạy tốt trên hầu hết phiên bản gần đây (Yosemite trở lên) | Ubutu 16.04 trở lên, Centos 7/8 |

## 2. Cài đặt Docker
### 2.1 Linux
- Sử dụng để test tiện lợi và nhanh
- [Hướng dẫn tại đây với Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

### 2.2 MacOS
- Sử dụng để test tiện lợi và nhanh
- Shell và cấu trúc folder tương tự với Linux
- Có giao diện đồ họa để quản trị
- [Hướng dẫn tại đây với MacOS](https://docs.docker.com/desktop/install/mac-install/)

### 2.3 Windows
- Sử dụng để test tiện lợi và nhanh
- Yêu cầu hệ thống: Microsoft Windows 10 Professional or Enterprise 64-bit, or Windows 10 Home 64-bit with WSL 2
- Có giao diện đồ họa để quản trị
- [Hướng dẫn tại đây với Windows](https://docs.docker.com/desktop/install/windows-install/)