export function TeamImage({
  className = '',
  priority = false
}: {
  className?: string;
  priority?: boolean;
}) {
  return <figure className={'team-image ' + className}><img src="/assets/owners-group-edited-v1.png" alt="Edited group portrait of the three SLLHQ owners with the man in the center and both women at the sides" loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : undefined} width={1536} height={1024} /></figure>;
}
