import React, {
  ReactElement,
  useState,
  useEffect,
  memo,
  Component
} from 'react';
import { Blurhash } from 'react-blurhash';

interface ImageLoadProps {
  placeholder: string;
  regular: string;
  alt: string;
}

function ImageLoad({
  alt,
  regular,
  placeholder
}: ImageLoadProps): ReactElement {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const regularImage = new Image();
    regularImage.src = regular;
    regularImage.onload = () => {
      setLoading(false);
    };
  }, [regular]);

  return (
    <ErrorBoundary alt={alt} src={regular}>
      <Blurhash
        hash={placeholder}
        width={'100%'}
        height={'100%'}
        resolutionX={600}
        resolutionY={600}
        punch={1}
        style={{
          display: loading ? '' : 'none',
          transition: 'opacity 0.5s'
        }}
      />
      <img
        src={regular}
        alt={alt}
        style={{
          display: loading ? 'none' : '',
          transition: 'opacity 0.5s'
        }}
      />
    </ErrorBoundary>
  );
}

export default memo(ImageLoad);

class ErrorBoundary extends Component<
  { src: string; alt: string },
  { hasError: boolean }
> {
  constructor(props: { src: string; alt: string }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: unknown): void {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <img src={this.props.src} alt={this.props.alt} />;
    } else {
      return this.props.children;
    }
  }
}
