const SpeakLine = ({ className }: { color?: string; className?: string }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.1114 7.47086C13.6883 4.19643 10.8896 1.66675 7.50001 1.66675C3.81811 1.66675 0.833344 4.65151 0.833344 8.33341C0.833344 9.91041 1.3809 11.3595 2.29626 12.501C2.9696 13.3407 3.33362 14.2711 3.33355 15.2552L3.33334 18.3334H10.8333L10.8342 15.8334H12.5C13.4205 15.8334 14.1667 15.0872 14.1667 14.1667V11.7259L15.7994 11.0265C16.0854 10.904 16.1103 10.614 15.9868 10.4198L14.1114 7.47086ZM2.50001 8.33341C2.50001 5.57199 4.73858 3.33341 7.50001 3.33341C10.0203 3.33341 12.1388 5.20959 12.4584 7.6844L12.506 8.05226L13.7914 10.0735L12.5 10.6267V14.1667H9.16809L9.16726 16.6667H5.00012L5.00022 15.2553C5.00031 13.8894 4.50805 12.5951 3.59649 11.4583C2.89016 10.5775 2.50001 9.4875 2.50001 8.33341ZM17.6279 15.0854L16.2411 14.1608C17.0363 12.9702 17.5 11.5393 17.5 10.0002C17.5 8.46091 17.0363 7.03 16.2411 5.83943L17.6279 4.91484C18.6 6.36996 19.1667 8.11886 19.1667 10.0002C19.1667 11.8814 18.6 13.6302 17.6279 15.0854Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SpeakLine;
