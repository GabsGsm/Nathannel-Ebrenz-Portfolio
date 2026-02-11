import { useState, useEffect, useRef, useCallback } from "react";

interface UsePaginationOptions<T> {
  data: T[];
  itemsPerPage?: number;
  initialDelay?: number;
  loadDelay?: number;
}

interface UsePaginationReturn<T> {
  displayedItems: T[];
  isLoading: boolean;
  hasMore: boolean;
  loadMore: () => void;
  reset: () => void;
  totalCount: number;
  displayedCount: number;
  observerRef: React.RefObject<HTMLDivElement | null>;
}

/**
 * Hook customizado para paginação com scroll infinito
 * 
 * @param data - Array completo de dados
 * @param itemsPerPage - Quantidade de items por página (padrão: 9)
 * @param initialDelay - Delay para carregar primeira página (padrão: 0)
 * @param loadDelay - Delay ao carregar mais items (padrão: 500ms)
 */
export function useInfiniteScroll<T>({
  data,
  itemsPerPage = 9,
  initialDelay = 0,
  loadDelay = 500,
}: UsePaginationOptions<T>): UsePaginationReturn<T> {
  const [displayedItems, setDisplayedItems] = useState<T[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  
  const observerRef = useRef<HTMLDivElement>(null);
  const isInitialLoad = useRef(true);

  // Função para carregar mais items
  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    const delay = isInitialLoad.current ? initialDelay : loadDelay;

    setTimeout(() => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      
      // Skip/Take pattern
      const newItems = data.slice(startIndex, endIndex);
      
      if (newItems.length > 0) {
        setDisplayedItems(prev => [...prev, ...newItems]);
        setCurrentPage(prev => prev + 1);
      }
      
      // Verifica se acabaram os items
      if (endIndex >= data.length) {
        setHasMore(false);
      }
      
      setIsLoading(false);
      isInitialLoad.current = false;
    }, delay);
  }, [currentPage, isLoading, hasMore, data, itemsPerPage, initialDelay, loadDelay]);

  // Reset para estado inicial
  const reset = useCallback(() => {
    setDisplayedItems([]);
    setCurrentPage(1);
    setIsLoading(false);
    setHasMore(true);
    isInitialLoad.current = true;
  }, []);

  // Carrega primeira página
  useEffect(() => {
    if (isInitialLoad.current) {
      setHasMore(true);
      loadMore();
    }
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = observerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasMore, isLoading, loadMore]);

  return {
    displayedItems,
    isLoading,
    hasMore,
    loadMore,
    reset,
    totalCount: data.length,
    displayedCount: displayedItems.length,
    observerRef,
  };
}