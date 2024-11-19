export interface NavigationProps {
    onConsultationClick: () => void;
    currentPage: string;
    onNavigate: (page: string) => void;
  }