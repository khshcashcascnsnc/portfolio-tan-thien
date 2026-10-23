export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
  span: 'wide' | 'tall' | 'normal';
}

export const projects: Project[] = [
  {
    id: 'aurora-poster',
    title: 'Aurora — Typography Poster',
    category: 'Poster Design',
    year: '2026',
    description: 'Poster nghệ thuật khai thác sự tương phản giữa typography lớn và khoảng trắng, tạo chiều sâu thị giác mạnh mẽ.',
    image: 'https://colorme.vn/s3img/files/e4fHUjwlbbhZayIcdVYwju7TYn6gVyfDuuKarFdY.jpg',
    tags: ['Typography', 'Poster', 'Photoshop'],
    span: 'wide',
  },
  {
    id: 'maison-brand',
    title: 'Maison Lumé — Brand Identity',
    category: 'Brand Identity',
    year: '2026',
    description: 'Hệ thống nhận diện thương hiệu hoàn chỉnh cho một thương hiệu mỹ phẩm cao cấp, từ logo đến ứng dụng trên bao bì.',
    image: 'https://colorme.vn/s3img/files/lmqCRrfenqnXo0yTjBbDBXex8GghfDpPOcXs5J7d.jpg',
    tags: ['Branding', 'Packaging', 'Illustrator'],
    span: 'tall',
  },
  {
    id: 'bloom-poster',
    title: 'Bloom — Visual Poster',
    category: 'Poster Design',
    year: '2026',
    description: 'Poster kết hợp hình ảnh và typography điêu khắc, tạo nên một bố cục ấn tượng với nhịp điệu động.',
    image: 'https://colorme.vn/s3img/files/TbXxSxmYxOSqXPLWlXnfDCohj9oQjgi8CuGeehgU.jpg',
    tags: ['Typography', 'Poster', 'Illustrator'],
    span: 'normal',
  },
  {
    id: 'solstice',
    title: 'Solstice — Event Poster',
    category: 'Poster Design',
    year: '2026',
    description: 'Poster sự kiện với xử lý màu sắc đậm đà và bố cục phi đối xứng, tạo cảm giác chuyển động liên tục.',
    image: 'https://colorme.vn/s3img/files/8mc6moiXTh3fTcaLAl1kmuA8pFXfbOhoAb51SJL5.jpg',
    tags: ['Poster', 'Photoshop', 'Color'],
    span: 'normal',
  },
  {
    id: 'echo-typography',
    title: 'Echo — Typography Study',
    category: 'Typography',
    year: '2026',
    description: 'Thí nghiệm typography với chữ dựng hình, khám phá cách sắp xếp chữ tạo ra nhịp điệu và cảm xúc.',
    image: 'https://colorme.vn/s3img/files/Hn8CE5lvyI4LzuYsSepIz8K4528EQr37Y70h1mcM.jpg',
    tags: ['Typography', 'Print'],
    span: 'wide',
  },
  {
    id: 'nordic-brand',
    title: 'Nordic Bloom — Identity System',
    category: 'Brand Identity',
    year: '2026',
    description: 'Hệ thống thương hiệu đầy đủ với guideline chi tiết, từ logo, bảng màu đến ứng dụng trên ấn phẩm.',
    image: 'https://colorme.vn/s3img/files/JRauiQwis3KLIxQLsgeRONtMHvAJX2afRv76KVby.jpg',
    tags: ['Branding', 'Logo', 'Illustrator'],
    span: 'normal',
  },
  {
    id: 'lacquer-flow',
    title: 'Lacquer Flow — Digital Painting',
    category: 'Digital Painting',
    year: '2026',
    description: 'Tác phẩm digital painting lấy cảm hứng từ nghệ thuật sơn mài truyền thống Việt Nam, kết hợp kỹ thuật số hiện đại.',
    image: 'https://colorme.vn/s3img/files/dUFzBJ9YdNMts6J45VPOFH7UUfTdKStxblNPBWgs.jpg',
    tags: ['Digital Painting', 'Illustration'],
    span: 'tall',
  },
  {
    id: 'heritage-painting',
    title: 'Heritage — Digital Painting',
    category: 'Digital Painting',
    year: '2026',
    description: 'Tác phẩm kỹ thuật số pha trộn giữa văn hoá Việt và thẩm mỹ đương đại, tập trung vào ánh sáng và kết cấu.',
    image: 'https://colorme.vn/s3img/files/SwztkZxva5B1B2NtD9NFJXwFg2WABOdQwPvbmoUu.jpg',
    tags: ['Digital Painting', 'Illustration', 'Photoshop'],
    span: 'normal',
  },
  {
    id: 'petal-painting',
    title: 'Petal — Digital Painting',
    category: 'Digital Painting',
    year: '2026',
    description: 'Tác phẩm digital painting nhẹ nhàng, tập trung vào ánh sáng và kết cấu của cánh hoa.',
    image: 'https://colorme.vn/s3img/files/jMA4dzf5lkBjKRKCdX9RG8s2xvVPqClLNWnWVcwj.jpg',
    tags: ['Digital Painting', 'Illustration'],
    span: 'normal',
  },
  {
    id: 'world-tour-poster',
    title: 'World Tour 2026 — Concert Poster',
    category: 'Poster Design',
    year: '2026',
    description: 'Poster concert với typography mạnh, bố cục táo bạo và hiệu ứng ánh sáng tạo cảm giác hoành tráng.',
    image: 'https://colorme.vn/s3img/files/TyZeEB2gI2QaBjxH8mmXXXPdE6t2wDreDVbOB4rl.jpg',
    tags: ['Poster', 'Typography', 'Photoshop'],
    span: 'wide',
  },
  {
    id: 'rhythm-typography',
    title: 'Rhythm — Typography Experiment',
    category: 'Typography',
    year: '2026',
    description: 'Khám phá cách sắp xếp chữ tạo ra nhịp điệu, biến chữ thành hình ảnh mang tính biểu cảm.',
    image: 'https://colorme.vn/s3img/files/1bZbxKPR2i5hrYWXqV9OensPbiJyGI8dyPBJTd2S.jpg',
    tags: ['Typography', 'Print'],
    span: 'normal',
  },
  {
    id: 'verde-poster',
    title: 'Verde — Art Poster',
    category: 'Poster Design',
    year: '2026',
    description: 'Poster nghệ thuật với màu sắc rực rỡ và bố cục sáng tạo, thể hiện phong cách thiết kế cá nhân.',
    image: 'https://colorme.vn/s3img/files/BndyrG3pCk3sM777V1oDxHDVRlW9cKDR0teUfkK8.jpg',
    tags: ['Poster', 'Illustration', 'Photoshop'],
    span: 'normal',
  },
];

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Thiết kế ấn phẩm truyền thông, poster, brochure và banner với bố cục sắc sảo và màu sắc chuyên nghiệp.',
    icon: 'Palette',
    features: ['Poster Design', 'Brochure', 'Banner', 'Print Layout'],
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    description: 'Xây dựng hệ thống nhận diện thương hiệu từ logo, màu sắc, font chữ đến guideline hoàn chỉnh.',
    icon: 'Box',
    features: ['Logo Design', 'Brand Guidelines', 'Visual System', 'Color & Typography'],
  },
  {
    id: 'digital-painting',
    title: 'Digital Painting',
    description: 'Sáng tác nghệ thuật số, illustration nhân vật và phong cảnh với kỹ thuật vẽ chuyên sâu.',
    icon: 'Brush',
    features: ['Character Art', 'Concept Art', 'Illustration', 'Matte Painting'],
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Thiết kế giao diện người dùng và trải nghiệm cho ứng dụng, website với tư duy sản phẩm hiện đại.',
    icon: 'MonitorSmartphone',
    features: ['Wireframe', 'Prototyping', 'Design System', 'Web & Mobile UI'],
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Minh Trần',
    role: 'Marketing Director',
    company: 'Lumé Skincare',
    quote: 'Bộ nhận diện thương phẩm mà bạn thiết kế đã thay đổi hoàn toàn cách khách hàng nhìn thương hiệu. Doanh thu tăng gấp đôi chỉ sau ba tháng ra mắt. Mỗi chi tiết đều cảm thấy có chủ đích.',
    avatar: 'https://images.pexels.com/photos/8100072/pexels-photo-8100072.jpeg?auto=compress&cs=tinysrgb&h=350&w=350',
  },
  {
    id: 't2',
    name: 'Khánh Lê',
    role: 'Founder',
    company: 'Nordic Bloom',
    quote: 'Làm việc với bạn là một trải nghiệm tuyệt vời. Bạn không chỉ thiết kế đẹp mà còn hiểu rõ chiến lược thương hiệu. Hệ thống bạn bàn giao giúp cả team áp dụng được ngay mà vẫn giữ chất.',
    avatar: 'https://images.pexels.com/photos/39283772/pexels-photo-39283772.jpeg?auto=compress&cs=tinysrgb&h=350&w=350',
  },
  {
    id: 't3',
    name: 'Hà Vũ',
    role: 'Creative Lead',
    company: 'Studio Castellano',
    quote: 'Hiếm có designer nào hiểu cả nghệ thuật lẫn thương mại như bạn. Bạn giao một hệ thống mà cả team mình dùng được, mà vẫn đẹp ở mọi điểm chạm. Chắc chắn sẽ hợp tác tiếp.',
    avatar: 'https://images.pexels.com/photos/8659831/pexels-photo-8659831.jpeg?auto=compress&cs=tinysrgb&h=350&w=350',
  },
];

export const skills = [
  'Branding', 'Packaging', 'Typography', 'Illustration',
  'Art Direction', 'Editorial', 'Print', 'Social Media',
  'Logo Design', 'Digital Painting', 'Poster Design', 'UI/UX',
];

export const stats = [
  { value: '8+', label: 'Năm kinh nghiệm' },
  { value: '120+', label: 'Dự án hoàn thành' },
  { value: '45+', label: 'Khách hàng hài lòng' },
  { value: '12', label: 'Giải thưởng thiết kế' },
];

export const clientLogos = [
  'Lumé', 'Nordic Bloom', 'Studio Castellano', 'Verde',
  'Atelier 9', 'Kraft House', 'Roast & Co.', 'Aurora',
];
