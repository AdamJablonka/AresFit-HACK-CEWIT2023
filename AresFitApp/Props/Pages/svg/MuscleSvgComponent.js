import * as React from "react"
import { useState } from 'react'
import Svg, { Path, G } from "react-native-svg"
import { TouchableOpacity, View, Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

const MuscleSvgComponent = ({navigation}, props) => { 
  const [isRed, setIsRed] = useState(true)
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  
  const pressHandler = () => {
    console.log("WORKED")
    setIsRed(!isRed)
  }
  return (
      <Svg
        width={368}
        height={665}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {/* Useless \/\/\/\/ */}
        <Path
          d="M0 0v354.557h.236c.386-2.614 1.962-5.084 3.302-7.313 2.923-4.862 6.572-9.262 9.434-14.154 1.243-2.126 1.626-6.393 3.778-7.596 5.454-3.05 12.238-2.472 17.691-5.584 1.772-1.012 4.246-2.72 4.955-4.749.343-.981-.565-1.561-1.395-1.033-1.176.748-2.032 2.187-3.088 3.112-1.616 1.415-3.651 2.333-5.662 3.031-4.88 1.694-10.14 2.236-14.861 4.4-4.697 2.151-8.625 5.84-12.739 8.891.5-2.805 2.89-5.421 4.66-7.549 4.307-5.178 9.124-10.748 14.684-14.617 4.355-3.031 8.912-4.93 11.087-10.153 3.619 2.442 7.295 4.815 10.851 7.346 1.196.852 3.287 1.736 4.004 3.055.957 1.76.007 5.32.007 7.292 0 7.751-2.347 15.362-2.36 23.118a553.43 553.43 0 0 1-.232 15.333c-.028.97-.019 4.723-1.652 4.501-1.593-.217-1.789-3.786-1.987-4.972-.88-5.242-.63-11.031-2.498-16.042-1.963 1.003-2.714 4.197-3.49 6.134-2.152 5.359-4.207 10.773-6.581 16.041-.722 1.602-2.002 5.942-3.884 6.487-.874.255-1.296-.892-1.452-1.533-.42-1.722-.166-3.697.074-5.426.653-4.711 2.137-9.389 3.544-13.918.827-2.661 2.06-5.442 2.118-8.256-2.076 1.533-3.467 4.435-4.818 6.605-2.717 4.362-5.443 8.714-8.315 12.974-1.59 2.359-3.33 5.346-5.975 6.605-1.166-3.198.127-6.414 1.255-9.436 1.725-4.626 4.093-9.063 6.355-13.446 1.259-2.439 2.835-4.848 3.477-7.549-2.049.871-3.52 3.088-4.966 4.718-3.136 3.532-6.085 7.271-9.424 10.616-1.535 1.538-3.711 4.796-6.133 4.482V665h111.579v-.236l-6.369-1.651c4.229-5.556 10.605-9.273 13.944-15.57 2.704-5.1 2.569-11.375 2.569-16.984 0-3.685-.092-7.433-.572-11.088-.097-.74.057-3.757-1.452-3.146-1.064.431-.412 2.571-.356 3.382.239 3.485-.075 7.2.357 10.616.626 4.947.042 12.054-2.3 16.513-2.177 4.147-6.131 7.626-9.595 10.684-1.427 1.257-2.82 3.833-4.549 4.602-1.147.51-3.345-.8-4.415-1.227-4.029-1.611-9.853-3.859-11.708-8.162-.818-1.896.392-3.861 1.41-5.425 2.472-3.801 5.488-7.231 8.205-10.852 6.112-8.145 11.943-16.921 13.788-27.128.639-3.536.365-6.839.336-10.38 3.742.078 7.62.967 11.323 1.515.986.146 3.147.044 3.768.946.644.936.242 3.05.242 4.144 0 3.631.236 7.228.236 10.852 0 12.844.754 25.116-4.346 37.272-1.566 3.732-4.144 9.825-8.392 11.087V665H368V355.264c-1.911.368-3.522-1.002-4.954-2.125-3.413-2.675-6.176-6.03-9.436-8.863-.974-.844-3.788-4.133-5.319-3.317-1.328.71 1.097 5.284 1.498 6.285 2.08 5.199 4.319 10.323 6.279 15.569.406 1.08 2.074 4.529.939 5.494-1.495 1.269-4.597-3.149-5.282-4.079-3.404-4.647-5.991-9.806-9.131-14.625-.656-1.008-2.456-4.329-4.006-3.836-1.361.432.241 4.801.496 5.723 1.361 4.892 3.062 9.698 4.293 14.626.245.979 1.47 4.326.25 4.949-1.743.892-4.352-4.272-4.935-5.421-2.67-5.249-4.991-10.637-7.322-16.041-.491-1.137-1.616-4.987-3.013-5.209-1.17-.184-1.158 3.093-1.167 3.793-.04 3.522.528 7.11.196 10.616-.069.712.002 2.991-.949 3.154-.927.158-1.505-1.583-1.774-2.211-1.094-2.533-1.818-5.338-2.455-8.02-2.277-9.597-2.803-18.964-2.803-28.78 0-2 .045-3.963-.554-5.897-.264-.852-.932-1.937-.29-2.753.799-1.019 2.368-1.729 3.439-2.437 2.593-1.708 5.202-3.39 7.785-5.112 1.014-.675 2.738-2.354 4.01-2.338 1.472.019 3.906 3.05 5.19 3.911 4.996 3.352 10.407 5.737 15.097 9.58 3.465 2.843 6.65 5.976 9.655 9.292.616.682 2.708 2.616 2.277 3.678-.319.783-1.774.054-2.26-.142-2.35-.957-4.591-2.198-6.841-3.361-2.621-1.352-5.079-3.173-8.021-3.758-5.291-1.052-10.54-.33-15.569-2.845-2.491-1.246-3.451-3.456-5.515-4.985-.578-.427-1.357-.186-1.437.576-.217 2.09 2.857 4.293 4.357 5.22 3.56 2.194 8.148 3.093 12.267 3.478 1.783.165 4.789-.295 6.369.495 3.06 1.529 2.991 5.423 4.647 8.014 2.859 4.475 6.303 8.636 9.37 12.974 1.614 2.281 3.602 4.836 4.383 7.549H368V0H184v.236c11.671.001 22.798 7.242 26.638 18.4 2.016 5.86 1.906 12.289 1.906 18.4 0 3.136 1.438 5.847.734 8.964-.867 3.84-2.601 7.87-4.879 11.087-1.173 1.654-3.029 2.6-3.899 4.483-1.253 2.708-1.616 5.576-2 8.492-.146 1.105.165 2.524-.343 3.539-.82 1.638-3.031 3.009-4.475 4.072-4.491 3.31-9.843 6.23-15.569 6.303-5.906.074-11.613-3.26-16.277-6.535-1.494-1.049-3.866-2.41-4.711-4.077-1.497-2.949-.861-6.991-2.397-10.143-.906-1.86-2.709-2.778-3.814-4.482-2.115-3.259-3.479-7.312-4.311-11.087-.403-1.828-.989-4.283-.437-6.13.275-.92 1.184-1.129 1.598-1.925.592-1.14.518-2.949.605-4.212.343-5.008-.49-9.901.646-14.862C155.676 8.911 165.758.244 177.867.236L172.913 0H0Z"
          fill="#fff"
        />
        <Path
          d="M202.636 89.406c-4.331 7.809-8.949 15.834-11.323 24.533 2.399-.568 4.629-1.605 7.077-2.061 8.959-1.67 18.508-1.949 27.6-1.949v-.236c-7.49-1.937-16.869-3.241-20.919-10.851-1.597-3.002-1.157-6.474-2.435-9.436ZM160.41 90.114c-1.163 3.037-2.093 6-3.95 8.728-3.969 5.83-9.671 8.382-15.629 11.559v.236c9.958 0 19.203.924 28.779 3.538l-5.561-15.57-3.639-8.492ZM119.364 152.155c.97 7.675-.314 15.222-.472 22.882 6.05-1.44 11.594 2.544 16.749 4.954l-8.773-13.21-4.961-8.964-2.543-5.662ZM243.446 155.222c-2.354 8.624-7.398 15.68-12.031 23.118 4.46-.767 8.254-3.522 12.975-2.359l-.941-14.154-.003-6.605ZM130.215 290.156c.002 2.821.751 5.482 1.112 8.257 1.064 8.195 2.542 15.866 4.823 23.828 3.269 11.42 5.804 22.981 9.798 34.203 2.935 8.247 7.023 16.652 8.801 25.241h.236c4.109-10.016 8.099-19.891 11.445-30.195.965-2.97 1.882-5.968 2.774-8.964.368-1.234 1.13-2.951 1.008-4.246-.125-1.321-1.461-2.704-2.174-3.775-1.957-2.934-3.975-5.829-5.982-8.728-6.01-8.679-12.7-16.721-19.77-24.534-3.349-3.701-7.596-8.766-12.071-11.087ZM231.18 290.628l-1.888 1.179c0 1.569-2.491 1.18-3.538 1.18v2.359c-3.363 1.566-6.366 5.423-8.964 8.02-7.225 7.224-13.459 15.044-19.377 23.354-1.893 2.659-3.619 5.459-5.298 8.257-.546.908-1.672 2.18-1.542 3.303.164 1.422 1.462 2.977 2.097 4.246 1.819 3.637 3.7 7.249 5.59 10.851 4.256 8.113 7.625 17.11 10.745 25.713h.236c1.257-5.433 3.529-10.714 5.184-16.041 3.314-10.663 6.551-21.323 9.542-32.082 1.663-5.983 3.887-12.425 4.382-18.636h1.179c.889-4.787 1.703-9.552 2.163-14.39.255-2.675.813-4.848-.511-7.313ZM32.082 301.243c-2.213 5.289-7.2 7.358-11.559 10.481-5.188 3.718-9.631 8.703-13.7 13.581-2.034 2.437-4.42 5.096-5.172 8.257 4.544-2.841 8.255-6.891 13.21-9.127 4.886-2.204 10.357-2.583 15.334-4.511 2.048-.792 4.037-1.878 5.652-3.387.81-.758 1.386-2.01 2.35-2.572.705-.41 1.392.203 1.227.965-.432 2.005-3.329 4.02-4.983 4.978-5.443 3.154-12.116 2.769-17.688 5.581-2.142 1.083-2.524 5.544-3.794 7.601-3.075 4.982-6.813 9.54-9.723 14.626-1.55 2.708-2.998 5.31-3 8.492 2.87-.519 5.04-3.616 6.88-5.662 4.297-4.772 8.287-10.724 13.407-14.625-.266 2.604-2.067 5.038-3.241 7.312-2.46 4.763-4.98 9.585-6.827 14.626-.598 1.633-2.708 6.605-1.08 8.103.628.578 1.473-.148 1.939-.58 1.446-1.34 2.517-3.093 3.648-4.692 4.698-6.641 8.233-14.38 13.582-20.523.348 2.224-.934 4.73-1.552 6.841-1.399 4.777-2.89 9.492-3.828 14.39-.536 2.802-.95 5.869.426 8.492 2.597-.901 3.724-5.013 4.772-7.313 3.298-7.235 5.521-14.977 9.382-21.938h.236c2.363 4.623 1.921 10.747 2.734 15.805.214 1.335.287 4.774 1.775 5.383 1.68.691 1.811-3.541 1.85-4.44.24-5.461.244-11.059.246-16.513.002-6.867 1.512-13.925 2.163-20.759.207-2.177 1.054-6.723-.047-8.688-.808-1.441-3.135-2.444-4.475-3.343-3.363-2.252-6.608-4.871-10.144-6.841ZM317.99 314.454c.618 2.165 1.394 4.088 1.611 6.369.34 3.546-.342 7.086-.186 10.615.285 6.521 1.226 12.973 2.668 19.344.651 2.878 1.415 5.721 2.436 8.493.458 1.243.831 2.646 2.199 3.066 1.661-5.911-.979-12.611 1.179-18.4 2.154 1.59 3.088 4.69 4.11 7.077 1.974 4.614 3.965 9.191 6.211 13.682 1.172 2.343 2.779 6.278 5.72 6.605 0-6.633-3.052-13.262-4.852-19.579-.238-.838-2.036-6.072-.304-6.023 1.597.045 3.128 2.98 3.899 4.136 3.031 4.548 5.489 9.464 8.672 13.918.87 1.219 3.519 5.423 5.454 4.564 1.382-.611-.654-5.241-1.001-6.216-1.908-5.357-4.335-10.525-6.442-15.805-.406-1.017-2.305-4.399-1.102-5.239 1.423-.993 4.485 2.491 5.348 3.352 3.02 3.005 6.077 6.18 9.436 8.806 1.43 1.118 3.079 2.347 4.954 1.809-.59-2.816-2.361-5.194-3.932-7.548-3.169-4.751-6.837-9.156-9.986-13.918-1.531-2.319-1.672-6.299-4.286-7.743-1.392-.769-4.046-.427-5.622-.535-2.83-.196-5.774-.755-8.492-1.564-2.97-.885-5.645-2.246-7.763-4.548-.654-.713-2.062-2.218-1.284-3.253.491-.654 1.104-.319 1.51.205 1.982 2.545 3.723 4.192 6.829 5.352 5.195 1.942 10.941.807 16.041 2.737 4.921 1.863 9.67 6.742 15.098 6.99-.316-2.904-3.487-5.374-5.426-7.313-5.914-5.914-12.238-9.823-19.343-14.06-1.855-1.106-3.541-2.382-5.19-3.772-.632-.533-1.47-1.644-2.359-1.675-1.349-.047-3.395 1.956-4.482 2.68-3.718 2.472-7.424 5.22-11.323 7.391ZM129.272 423.675c0 3.442.034 6.825-1.025 10.144-.418 1.311-2.331 4.159-1.974 5.425.355 1.26 1.921 2.548 2.744 3.539 1.906 2.293 3.686 4.692 5.475 7.077 4.453 5.94 8.531 12.158 12.545 18.4 1.698 2.642 3.195 6.457 5.589 8.492 1.709-2.512 3.376-5.057 4.209-8.02 1.568-5.574.843-11.453 2.16-16.985-12.49.536-19.493-9.728-25.14-19.58-1.538-2.682-2.621-6.123-4.583-8.492ZM250.287 425.09l-11.422 12.975-4.383 6.369c8.639 2.494 5.912 15.251 4.211 21.467-.451 1.644-1.13 3.265-1.38 4.954l12.266.236v-33.734l.484-8.256.224-4.011ZM230.944 426.506c-3.539 5.782-6.785 11.8-10.882 17.221-2.383 3.151-5.273 6.197-9.17 7.367-2.615.785-5.166.297-7.784-.055.317 4.013 1.211 8.061 1.868 12.031.889 5.376 1.343 11.557 6.152 15.098 3.942-9.148 10.06-17.919 15.569-26.185a624.066 624.066 0 0 1 5.11-7.549c.663-.965 1.925-2.142 2.176-3.302.247-1.147-.882-2.883-1.18-4.011-.868-3.286-.584-7.577-1.859-10.615ZM115.826 431.224l-2.831 42.698 5.19-.944c-.152-7.334-.514-14.758 1.451-21.939 1.024-3.741 2.689-7.218 6.805-8.02l-3.738-4.718-6.877-7.077Z"
          fill="#BEBCBC"
        />
        <Path
          d="M120.308 472.742c4.73.373 9.25 1.151 13.682 2.925 1.072.43 4.047 2.347 5.097 1.626 2.16-1.487 1.847-6.823 1.575-9.033-.937-7.629-4.224-12.581-8.765-18.636-.91-1.213-1.813-2.876-3.137-3.675-4.24-2.562-6.554 3.382-7.223 6.506-.604 2.821-.756 5.647-1.129 8.492-.503 3.826-.1 7.938-.1 11.795ZM233.089 446.399c-1.502.576-2.777 3.584-3.639 4.876-2.328 3.492-4.525 7.058-6.751 10.616-1.053 1.682-2.68 3.677-3.032 5.661-.398 2.248-.402 4.688.442 6.841.34.871.982 2.114 2.107 1.923 2.923-.495 6.041-3.029 8.963-3.965 1.081-.345 2.819-.416 3.582-1.331.806-.969 1.017-2.529 1.377-3.704.901-2.929 1.604-5.925 2.017-8.964.427-3.121.705-7.523-1.406-10.139-.71-.882-2.404-2.295-3.66-1.814ZM142.246 464.722c.705 5.454.466 8.976-1.415 14.154l8.492 5.189 1.72-5.189-2.503-4.483-6.294-9.671ZM217.026 471.327l-3.14 5.897-1.048 2.595 1.829 2.359h.236l4.953-4.246v-.236l-2.83-6.369ZM236.605 588.569c1.465-1.687 2.369-3.914 3.362-5.898 2.731-5.466 4.791-11.295 6.279-17.22 3.331-13.258 3.694-26.324 4.287-39.867.353-8.082.698-16.2.698-24.298 0-3.833.519-7.728.41-11.559-.089-3.133-1.08-6.296-1.333-9.436-.106-1.319.175-6.247-1.04-6.905-1.771-.962-4.815-.644-6.765-.644-7.033 0-13.843 2.043-19.816 5.763-1.673 1.04-6.189 3.466-6.487 5.582-.24 1.71.683 4.099.805 5.876.223 3.258-.848 7.511.186 10.615.633 1.897 2.287 3.716 3.325 5.426 1.996 3.286 3.707 6.702 5.415 10.144 3.27 6.586 5.704 13.847 7.399 20.995 2.042 8.615 3.419 17.789 3.03 26.656-.227 5.166-1.716 10.453-1.766 15.57-.026 2.623 1.254 6.664 2.011 9.2Z"
          fill="#BEBCBC"
        />
        <Path
          d="M249.815 474.629v1.416h.236l-.236-1.416ZM117.949 474.865v.236h1.179l-1.179-.236Z"
          fill="#BEBCBC"
        />
        <Path
          d="M112.759 476.045c-.169 3.937-1.061 7.987-2.036 11.795-.49 1.915-1.397 3.911-1.493 5.897-.351 7.226.373 14.718.689 21.939.684 15.623 1.976 31.327 5.057 46.708 1.537 7.669 3.452 15.496 6.675 22.646 1.123 2.494 2.408 5.775 4.554 7.549.03-3.6 1.643-7.079 1.645-10.616.002-6.772-1.713-13.696-1.877-20.523-.296-12.245 2.15-25.123 6.466-36.564 2.228-5.909 5.002-11.573 8.25-16.985 1.713-2.854 5.038-5.897 6.134-8.964.475-1.333.29-3.079.477-4.482.269-2.019 1.755-6.119 1.152-7.999-.264-.819-1.301-1.343-1.96-1.81a59.697 59.697 0 0 0-5.897-3.692c-9.1-4.951-17.631-7.006-27.836-4.899ZM253.826 498.219c0 21.689-.132 44.363-5.162 65.58-1.528 6.447-3.567 12.897-6.459 18.872-1.514 3.133-4.607 6.61-5.477 9.908-.503 1.908.113 4.819.113 6.841l15.333-2.359c1.225-9.681 3.711-19.16 5.322-28.78 2.586-15.418 3.652-31.157 1.793-46.708-.686-5.725-1.748-11.436-3.34-16.984-.59-2.055-.979-4.551-2.123-6.37Z"
          fill="#BEBCBC"
        />
        <Path
          d="M106.862 500.106c-2.594 11.314-4.75 22.019-4.237 33.734.585 13.359 2.759 26.654 4.808 39.867 1.174 7.565 3.045 15.454 3.203 23.118l15.333 2.123c0-3.944-2.341-5.864-4.172-9.2-2.343-4.267-4.052-8.806-5.494-13.446-4.703-15.135-6.685-31.431-7.769-47.18-.471-6.836-.892-13.68-1.191-20.523-.102-2.326.857-6.535-.481-8.493ZM110.872 598.948c1.776 14.053-5.921 26.492-14.006 37.272-2.715 3.619-5.79 7.042-8.24 10.852-1.138 1.769-2.243 3.8-1.355 5.897 1.77 4.178 7.673 6.273 11.57 7.832 1.604.642 3.654 1.916 5.19.625 4.882-4.097 11.562-9.964 13.935-16.006 1.816-4.623 1.634-10.221 1.634-15.097 0-3.569-.301-7.065-.463-10.616-.04-.884-.562-3.012.516-3.441 1.454-.583 1.571 1.927 1.601 2.734.135 3.703.705 7.372.705 11.087 0 6.105.016 13.026-3.318 18.4-3.533 5.695-9.625 9.224-13.431 14.626 2.63.545 5.773 2.17 8.493 1.559 1.924-.434 3.584-2.382 4.668-3.918 2.715-3.845 4.487-8.476 5.78-12.975 4.317-15.024 1.818-31.313 1.818-46.708l-15.097-2.123ZM236.841 601.543c0 10.852-.472 21.696-.472 32.554 0 5.497-.541 11.373.798 16.749 1.439 5.787 6.329 12.734 12.648 13.84 1.753.307 3.494-.28 5.19-.63-2.533-3.444-6.317-5.84-8.83-9.436-4.088-5.852-4.144-13.653-4.144-20.523 0-3.699.196-7.402.45-11.087.052-.743.012-3.701 1.6-2.81.884.496.561 2.444.542 3.282-.082 3.3-.233 6.593-.233 9.908 0 9.57.394 17.817 7.548 25.005 1.345 1.352 3.614 4.439 5.662 4.609 2.911.239 7.669-2.967 10.144-4.34 2.807-1.557 8.164-4.034 9.148-7.346.476-1.609-.616-3.34-1.305-4.718-1.878-3.756-4.135-7.334-6.428-10.851-7.207-11.057-17.221-22.852-17.221-36.565l-15.097 2.359Z"
          fill="#BEBCBC"
        />
        <Path d="M110.872 605.789v1.18h.236l-.236-1.18Z" fill="#BEBCBC" />
        {/* USELESS ^^^^ */}
        <G onPress={() => navigation.navigate('WorkoutInfo')}
            onPressIn={handleFocus} onPressOut={handleBlur}>
          <Path
            id="CHEST"
            d="M188.246 122.432c11.096 0 21.963.385 33.026-.668 3.233-.308 6.473.023 9.672-.748-.747-2.191-1.928-4.251-2.864-6.369-.339-.768-.648-2.063-1.475-2.452-2.337-1.1-6.59.092-9.108.093-2.211.001-4.403.3-6.605.451-7.742.53-21.137-.379-22.646 9.693ZM134.697 112.76l-3.302 9.436c9.707 1.808 19.15 2.831 29.015 2.831 4.222 0 8.615.359 12.739-.708-.666-2.045-1.184-5.377-2.694-6.955-2.446-2.557-6.959-3.205-10.281-3.661-8.385-1.151-17.019-.943-25.477-.943ZM187.538 123.847c-2.049 6.058-5.124 12.328-6.259 18.636-1.185 6.581-.11 14.302-.11 20.995l9.436 2.487 21.231 2.446 16.277.728 7.313-.235c2.401-5.766 5.17-11.267 7.154-17.221.609-1.826 2.135-4.66 1.855-6.605-.196-1.361-1.588-2.86-2.305-4.01-1.692-2.718-3.3-5.474-4.883-8.257-1.37-2.408-2.578-4.905-3.944-7.313-.405-.712-.812-2.057-1.702-2.274-2.28-.557-5.611.454-7.974.577-8.287.431-16.432.99-24.765.99-3.502 0-8.091.493-11.324-.944ZM130.451 124.319c-1.47 5.107-4.731 10.379-7.537 14.862-1.007 1.609-3.633 4.412-3.427 6.369.604 5.742 4.251 12.195 6.902 17.22.731 1.386 1.921 4.69 3.404 5.352 1.922.858 6.128-.234 8.207-.377 6.227-.426 12.637-.889 18.872-.963 5.455-.065 11.135-.422 16.513-1.358 1.466-.255 4.483-.495 5.419-1.83.472-.674.242-1.932.242-2.711v-6.605c0-3.942.571-8.379-.077-12.267-.895-5.373-3.68-10.554-5.113-15.805-8.474 1.937-18.997 1.615-27.6.401-5.154-.727-10.6-2.274-15.805-2.288ZM181.169 165.601v4.482c5.621.46 11.896 3.256 16.749 5.998 2.144 1.211 4.307 3.393 6.605 4.18 1.527.524 3.359.542 4.954.773 5.057.732 12.709 1.844 17.435-.703 2.621-1.412 6.204-6.734 7.098-9.54-4.558 1.123-9.98.213-14.625.009-9.479-.414-18.927-1.13-28.308-2.706-3.366-.566-6.57-1.925-9.908-2.493ZM131.159 170.319c.937 2.472 4.032 7.399 6.378 8.69 1.449.796 3.57.892 5.181 1.16 4.789.798 10.182 1.266 14.861-.357 2.984-1.036 5.582-3.591 8.493-4.938a91.98 91.98 0 0 1 8.964-3.612c.992-.338 3.121-.718 3.768-1.58.599-.799.242-2.653.242-3.609-2.74.342-5.44 1.473-8.256 1.82-6.626.816-13.391 1.006-20.052 1.462-6.319.432-13.411-.504-19.579.964Z"
            fill={isFocused ? 'red' : '#979797'}
          />
        </G>
        <Path
          id="SHOULDERS"
          d="M234.01 122.432c2.166 5.58 5.041 10.67 8.115 15.805.715 1.192 1.814 4.691 3.251 5.082 1.309.354 4.916-2.919 6.091-3.655 5.135-3.221 11.191-6.345 16.748-8.74-.74-4.938-4.347-6.246-8.492-7.627-7.506-2.502-18.103-3.447-25.713-.865ZM268.923 132.575c-5.334 3.276-11.229 5.473-16.513 8.804-1.302.82-4.609 2.205-5.116 3.74-.246.744.561 1.552.972 2.082a129.288 129.288 0 0 0 4.243 5.19c5.844 6.801 12.987 13.997 20.896 18.4 0-9.336.13-18.605-1.474-27.836-.59-3.395-.755-7.587-3.008-10.38Z m230 111.58 1.887 6.841h.236v-.471h.236l.944 2.595c9.2-2.715 20.381-1.77 29.251 1.651-1.064-2.232-4.527-3.63-6.605-4.817-7.721-4.414-17.216-5.424-25.949-5.799ZM94.595 131.632c8.403 3.621 16.307 8.542 23.826 13.682l1.736-3.303.316-2.662 2.901-5.358c1.296.23 2.095-1.041 2.76-2.024 1.754-2.593 1.55-5.951 2.666-8.828-7.611-2.581-18.207-1.637-25.713.865-4.145 1.382-7.752 2.69-8.492 7.628ZM93.651 133.283c-2.246 4.025-2.456 7.9-3.097 12.503-1.194 8.565-1.149 17.076-1.149 25.713 4.365-2.43 7.91-6.049 11.795-9.119 1.921-1.518 3.94-1.349 5.598-3.601.758-1.029.83-2.284 1.514-3.321 1.277-1.938 3.088-3.61 4.541-5.426 1.231-1.538 2.034-3.042 4.152-3.067-3.855-4.766-11.142-7.368-16.513-9.969-2.328-1.127-4.476-2.693-6.84-3.713Z M101.908 121.252c-1.465.017-2.34.446-2.831 1.887 10.048-2.42 20.101-5.054 30.431-1.887l3.302-8.964c-8.237.354-16.474 1.481-24.061 4.818-1.684.741-6.574 2.432-6.841 4.146Z"
          fill="#979797"
        />
        <Path
          id="BICEPS"
          d="M246.513 147.909c-1.012 3.418-.562 7.326-.717 10.851-.279 6.361.233 12.764.913 19.108.266 2.477.287 5.364 1.049 7.745.42 1.313 1.628 2.494 2.192 3.814 1.392 3.253 2.272 6.747 3.236 10.144 1.149 4.044 2.086 8.17 3.027 12.267.333 1.451.38 3.92 1.326 5.097 1.7 2.116 6.381 3.488 8.789 4.759 4.128 2.178 8.337 4.288 12.267 6.82 2.052 1.322 3.916 3.331 6.133 4.319 0-4.178 1.229-8.383 2.697-12.267.655-1.744 2.481-4.249 2.302-6.134-.616-6.547-1.845-14.508-4.6-20.523-1.925-4.204-4.796-7.781-7.037-11.795-.927-1.664-1.729-3.38-2.326-5.19-.288-.876-.349-2.187-.929-2.916-.89-1.118-3.036-1.729-4.261-2.462a59.225 59.225 0 0 1-8.02-5.773c-6.251-5.33-10.434-12.057-16.041-17.864ZM116.769 148.145c-4.82 7.715-12.375 14.242-19.343 19.951-2.553 2.092-6.456 3.844-8.536 6.356-1.272 1.535-2.035 3.814-3.07 5.539-4.777 7.962-7.718 15.94-9.675 25.005-.605 2.802-2.27 6.614-2.14 9.436.099 2.157 1.737 4.724 2.326 6.841.956 3.442 1.072 6.875 1.515 10.38 2.189-.521 4.417-.508 6.605-1.186 5.018-1.554 9.53-4.322 13.918-7.143 2.054-1.32 4.896-2.601 6.484-4.486 1.003-1.19 1.208-3.408 1.637-4.877 1.062-3.635 2.162-7.259 3.36-10.852 1.216-3.649 3.055-7.185 4.139-10.851 2.788-9.431 3.488-20.425 3.488-30.195 0-4.132.916-10.057-.708-13.918Z"
          fill="#979797"
        />
        <Path
          id="forearms"
          d="M72.42 216.791c-1.784 3.588-5.012 6.566-7.501 9.672-3.587 4.477-6.776 9.402-9.174 14.626-3.217 7.006-3.63 14.142-5.535 21.467-1.638 6.294-4.56 12.139-7.454 17.928-2.266 4.532-4.811 8.917-7.077 13.446-.672 1.343-2.52 3.612-2.361 5.169.12 1.177 3.564 3.307 4.652 3.562 1.445.337 3.417-3.253 4.167-4.248 3.618-4.803 7.21-9.623 10.547-14.626a291.723 291.723 0 0 0 13.912-23.118c4.25-7.858 8.187-16.461 8.911-25.477.444-5.524.448-13.725-3.087-18.401ZM291.097 216.791c-3.076 7.401-5.411 15.262-4.413 23.354.974 7.922 6.029 14.864 10.12 21.467a520.805 520.805 0 0 0 17.51 26.421c3.612 5.1 7.688 10.035 10.989 15.333l5.661-3.302c-3.486-6.627-5.574-13.81-8.303-20.759-2.3-5.853-5.294-11.411-7.096-17.457-1.635-5.487-2.447-11.106-4.428-16.513-2.81-7.662-7.348-14.517-12.55-20.759-2.236-2.684-4.619-5.762-7.49-7.785Z M257.836 219.622c.712 5.515 2.102 11.121 3.451 16.513 1.663 6.657 3.189 12.812 7.377 18.4 5.178 6.917 11.32 13.281 17.715 19.068 3.008 2.722 6.433 4.916 9.436 7.629 8.158 7.367 16.485 17.725 20.052 28.268l7.784-4.718c-1.257-3.793-5.206-7.632-7.577-10.852-4.817-6.548-9.381-13.288-13.889-20.051-5.221-7.829-11.003-16.046-14.624-24.769a41.253 41.253 0 0 1-2.538-8.729c-.281-1.62-.04-3.828-1.078-5.188-1.764-2.312-4.81-4.058-7.237-5.588-5.884-3.709-12.449-7.308-18.872-9.983ZM104.267 221.745c-7.382 5.674-17.124 11.622-26.657 12.031-.006 9.665-4.634 19.292-9.127 27.6-5.2 9.616-10.837 18.908-17.157 27.836-3.596 5.079-7.934 9.835-11.223 15.098l7.312 4.718c3.905-8.808 8.866-16.577 14.656-24.298 2.303-3.071 4.52-6.517 7.284-9.19 4.457-4.312 10.346-6.978 15.096-10.965 5.67-4.758 9.729-10.854 12.706-17.588 2.652-5.999 4.781-12.193 6.072-18.637.364-1.819 1.582-4.828 1.038-6.605Z"
          fill="#979797"
        />
        <Path
          id="ABS"
          d="M151.21 212.073c8.523-5.998 16.434-15.475 27.836-15.569v-24.298c-3.404.071-6.689 1.754-9.672 3.245-7.235 3.618-15.551 8.204-17.949 16.571-1.778 6.202-.215 13.655-.215 20.051Zm29.959-39.867v24.298c7.916 1.001 14.996 4.591 21.467 9.134 2.872 2.017 5.465 4.688 8.492 6.435 0-6.266 1.152-13.789-.714-19.815-2.887-9.331-12.7-15.155-21.46-18.086-2.477-.828-5.156-1.851-7.785-1.966ZM152.626 256.894c7.256 0 13.587-1.847 20.051-5.133 1.763-.896 5.151-2.295 6.127-4.088.73-1.345.242-3.907.242-5.404v-13.447c-6.807.005-13.909 3.3-20.287 5.426-1.482.494-5.771 1.148-6.463 2.659-.65 1.422.094 3.831.094 5.362 0 4.873.236 9.74.236 14.625Zm28.543-28.072v13.447c0 1.339-.496 3.939.243 5.097 1.053 1.652 5.076 2.704 6.834 3.461 7.403 3.192 14.781 5.36 22.882 5.36v-13.683c0-1.505.523-4.199-.142-5.562-.777-1.594-5.578-2.29-7.171-2.857-7.152-2.546-14.972-5.263-22.646-5.263ZM128.564 226.935c0 4.403-.471 8.81-.472 13.21 0 1.421-.593 3.376-.093 4.718.657 1.763 3.543 3.31 5.047 4.324 5.063 3.414 11.157 7.2 17.457 7.471-.296-3.743.96-9.006-.438-12.502-.834-2.083-3.153-3.947-4.753-5.447-4.598-4.311-10.784-9.517-16.748-11.774ZM213.251 255.951c5.733-1.484 10.873-3.572 15.805-6.922 1.336-.908 3.941-2.184 4.576-3.734.634-1.547.079-3.963.152-5.621.179-4.088.376-8.188.698-12.267-2.337.74-4.57 2.505-6.605 3.853-4.728 3.13-12.244 6.772-14.391 12.424-1.258 3.312-.235 8.728-.235 12.267ZM149.559 225.52c0-6.431-.248-12.934-.687-19.344-.185-2.707.449-5.879-.422-8.492-.646-1.938-2.398-3.782-3.576-5.426-3.054-4.262-5.629-7.73-10.177-10.474-3.469-2.093-7.078-3.916-11.087-4.67-1.226-.231-3.561-.614-4.615.249-.987.807-.884 3.331-1.046 4.515-.255 1.851-1.496 5.04-.801 6.82.676 1.734 2.65 3.449 3.58 5.211 1.709 3.237 3.935 6.215 5.618 9.436.739 1.414.661 3.426 1.643 4.669.842 1.064 2.501 1.746 3.642 2.453 2.257 1.4 4.466 2.898 6.605 4.474 4.227 3.114 7.321 7.349 11.323 10.579ZM213.251 226.463c4.032-3.487 7.462-7.216 12.031-10.131 2.272-1.449 4.53-2.919 6.841-4.306 1.029-.617 2.612-1.213 3.363-2.168.949-1.205.989-3.845 1.518-5.333 1.17-3.288 2.838-6.38 4.501-9.436 1.177-2.163 3.746-4.718 4.298-7.077.38-1.631-.446-4.013-.675-5.662-.156-1.119-.021-3.236-.877-4.074-1.277-1.25-4.034-.5-5.523-.141-5.099 1.228-9.801 3.105-13.278 7.046-2.507 2.843-5.272 5.576-7.953 8.256-1.193 1.194-3.005 2.486-3.767 4.011-1.062 2.123-.242 6.368-.243 8.728-.002 6.743-.236 13.525-.236 20.287ZM139.415 181.642l5.574 7.549 3.862 4.954c.912-4.7 3.334-7.683 5.898-11.559-4.824 1.149-10.59.283-15.334-.944ZM207.118 182.822c2.476 3.743 5.512 7.075 5.897 11.795l4.247-3.775 7.076-7.548c-5.667 1.353-11.547-.024-17.22-.472Z M181.169 198.627v20.288c0 1.645-.789 6.102.243 7.406.42.532 1.509.423 2.116.517 1.97.308 3.959.601 5.898 1.071 7.382 1.791 14.489 4.228 21.702 6.575v-13.446c0-1.736.464-4.261-.142-5.898-.835-2.254-4.617-4.323-6.463-5.761-6.596-5.14-14.679-10.573-23.354-10.752ZM152.154 234.248c9.114-2.109 17.524-6.6 26.892-7.785v-27.6c-7.893.022-15.608 5.586-21.467 10.333-1.764 1.43-5.186 3.525-5.991 5.708-.648 1.758.046 4.089.091 5.898.109 4.487.122 8.974.475 13.446ZM128.092 210.658c.002 2.99.471 5.975.472 8.964.001 1.301-.408 3.433.142 4.629.822 1.782 5.063 3.402 6.699 4.493 3.26 2.173 6.484 4.402 9.436 6.987 1.763 1.544 3.323 3.513 5.19 4.886 0-3.267.614-7.738-.401-10.851-.687-2.107-2.572-4.016-3.982-5.662-4.677-5.459-11.228-10.078-17.556-13.446ZM213.251 240.145c4.702-3.79 9.019-7.616 14.154-10.924 1.867-1.202 5.836-2.614 7.002-4.501.554-.896.256-2.21.351-3.211.281-2.957.666-5.991.668-8.964-2.526.92-4.838 2.703-7.077 4.165-3.687 2.407-7.466 4.754-10.616 7.867-1.568 1.551-3.598 3.507-4.316 5.661-.93 2.791-.166 6.968-.166 9.907Z"
          fill="#979797"
        />
        <Path
          id = "LOWER_ABS"
          d="M127.621 247.694c0 8.556-1.085 17.181-1.673 25.713-.189 2.753-1.584 7.53-.544 10.123.644 1.604 3.72 2.993 5.047 4.09 4.117 3.402 8.021 7.018 11.795 10.793 10.592 10.596 19.25 23.007 27.6 35.384h.236l-4.63-19.579-9.315-35.621-3.747-14.39-1.617-5.223-2.865-.724-6.37-1.944-13.917-8.622ZM233.303 248.402c-4.198 3.015-8.38 5.824-13.211 7.737-1.758.696-6.105.923-7.292 2.303-1.269 1.477-1.688 4.633-2.301 6.473-1.701 5.105-3.442 10.195-5.038 15.333-5.55 17.86-10.95 35.607-15.328 53.785h.236c7.6-12.415 16.444-24.231 27.128-34.184 4.064-3.786 8.294-7.45 12.739-10.785 1.628-1.22 5.113-2.704 6.117-4.456.403-.703-.125-1.762-.307-2.472a55.437 55.437 0 0 1-1.262-6.37c-.829-6.161-1.09-12.434-1.242-18.636-.063-2.55.747-6.376-.239-8.728ZM153.097 259.017l15.01 56.144 3.485 15.334 1.809 8.492 3.286 5.19c1.852-.491 3.282-.715 5.19-.314.885.184 2.111.805 2.839 0 3.034-3.352 2.938-7.582 3.633-11.717.736-4.376 2.078-8.695 3.235-12.974 3.777-13.961 8.148-27.747 12.548-41.519 1.994-6.237 5.332-12.87 6.289-19.343-6.908 0-13.672-1.876-20.052-4.435-2.396-.963-4.71-2.09-7.077-3.114-.829-.359-1.906-1.161-2.83-1.132-1.056.03-2.216 1.13-3.067 1.677-2.126 1.366-4.345 2.519-6.605 3.642-5.416 2.689-11.661 4.069-17.693 4.069Z"
          fill="#979797"
        />
        <Path
          id="ABDUCTORS"
          d="M124.79 286.146c-.197 9.525-5.731 18.666-9.469 27.128-3.428 7.759-5.477 16.565-6.266 25.006-.184 1.969 1.174 4.316 1.862 6.133 1.351 3.567 2.747 7.532 3.257 11.323h.236c.742-9.396 3.266-19.58 7.374-28.072 1.741-3.597 3.741-7.009 6.23-10.144 1.116-1.406 3.381-3.007 3.937-4.718.331-1.019-.21-2.51-.378-3.538-.432-2.645-.695-5.223-1.512-7.785-.958-3-1.532-6.077-1.901-9.2-.155-1.302.142-3.022-.545-4.204-.544-.931-1.856-1.561-2.825-1.929ZM248.872 352.905h.236c.488-3.635 1.767-7.402 2.993-10.851.628-1.76 1.831-3.782 1.928-5.662.242-4.8-1.77-10.523-3.067-15.097-2.402-8.471-5.615-16.69-9.101-24.77-1.408-3.264-2.555-6.819-4.312-9.907-1.123.41-2.868 1.198-3.532 2.245-.599.942-.423 2.786-.623 3.888-.695 3.826-.892 7.702-1.443 11.559-.301 2.107-1.965 6.506-1.169 8.471.563 1.39 2.655 2.454 3.66 3.56 2.406 2.651 4.319 5.621 6.074 8.728 4.454 7.886 8.28 18.686 8.356 27.836Z"
          fill="#979797"
        />
        <Path
          id="ADDUCTORS"
          d="M171.733 340.403c-.332 3.807-2.197 7.928-3.38 11.559-2.364 7.251-4.798 14.411-7.709 21.467-1.383 3.352-4.229 7.529-4.73 11.087-.43 3.045 1.839 7.598 2.509 10.615 2.042 9.193 5.356 19.11 5.762 28.544h.236c1.542-11.941 2.967-24.265 5.214-36.09.36-1.894 1.267-3.659 1.562-5.664.852-5.782.705-11.632 1.544-17.457.612-4.248 1.262-8.492 1.887-12.738.244-1.656 1.105-3.765.811-5.426-.332-1.868-2.411-4.546-3.706-5.897Zm17.221 0-2.604 5.189 1.707 7.313 3 16.985.964 10.616.471-.472h.236c.102 12.29 4.7 24.5 4.954 36.8h.472c1.151-8.547 4.757-17.214 7.177-25.477.821-2.805 2.704-6.28 2.764-9.2.023-1.104-.857-2.295-1.26-3.303-1.007-2.514-2.025-5.022-3.005-7.549-4.141-10.676-9.704-20.509-14.404-30.902h-.472Z"
          fill="#979797"
        />
        <Path
          id="QUADS"
          d="M230 315.161c-2.872 14.808-7.519 29.552-12.189 43.878-1.587 4.869-3.097 9.766-4.717 14.625-.77 2.31-2.206 5.105-2.317 7.549-.081 1.793 1.205 3.977 1.767 5.662a563.912 563.912 0 0 1 4.004 12.502c3.546 11.534 6.342 24.225 6.375 36.329h.236c16.808-27.362 29.025-57.758 22.505-90.349a69.262 69.262 0 0 0-8.587-22.175c-1.73-2.878-4.021-6.435-7.077-8.021ZM139.887 437.593c0-15.005 3.815-30.572 6.469-45.293.823-4.562 1.751-9.11 2.514-13.682.295-1.764 1.045-3.873.866-5.661-.165-1.654-1.109-3.397-1.665-4.954-1.322-3.701-2.693-7.386-4.01-11.087-2.925-8.217-5.243-16.608-7.576-25.006-1.449-5.211-3.244-10.872-3.675-16.277-2.605 1.215-4.632 4.685-6.085 7.077-4.042 6.653-6.802 14.079-8.351 21.703-5.002 24.616.283 47.873 9.612 70.77 2.21 5.425 4.763 10.672 7.583 15.805 1.184 2.156 2.404 5.022 4.318 6.605Z M254.533 341.11c-2.068 6.355-3.824 12.692-4.652 19.344-.504 4.074-.188 8.183-.578 12.267a111.711 111.711 0 0 1-3.597 19.344c-1.887 6.779-4.357 13.418-7.287 19.815-1.547 3.381-4.453 7.261-5.259 10.851-1.065 4.744.824 11.531 2.266 16.042 1.413-.718 2.285-2.322 3.255-3.539 1.798-2.255 3.685-4.428 5.572-6.605 2.114-2.437 5.603-4.791 7.181-7.558 1.83-3.209 2.403-8.2 3.305-11.786 3.68-14.647 3.144-31.285 1.722-46.236-.5-5.254-.67-10.545-1.18-15.805-.184-1.906-.005-4.367-.748-6.134ZM108.513 344.177c-1.576 6.617-1.128 14.222-1.425 20.995-.728 16.64-.114 33.408 4.458 49.539.877 3.093 1.908 6.131 2.858 9.2.394 1.271.464 2.864 1.152 4.01 1.224 2.041 3.551 3.746 5.223 5.426 1.275 1.281 2.348 2.998 4.011 3.774 2.612-6.282 3.255-13.63 1.472-20.287-1.199-4.477-3.383-8.799-4.853-13.21-3.215-9.644-5.731-19.377-6.932-29.488-.921-7.759-1.254-15.038-3.438-22.646-.675-2.352-1.162-5.258-2.526-7.313ZM151.21 377.439c-2.847 14.685-5.802 29.492-7.585 44.349-.69 5.744-2.263 12.144-1.838 17.928.131 1.777 1.874 3.286 3.055 4.482 3.349 3.388 7.896 6.789 12.972 5.787 1.903-.375 1.637-2.576 1.935-4.135.787-4.112 1.746-8.179 2.648-12.267 1.103-4.989-.119-9.42-.984-14.39-1.571-9.028-3.528-18.004-5.751-26.893-1.142-4.569-1.931-10.856-4.452-14.861ZM209.477 384.752c-2.187 9.452-5.747 18.673-8.229 28.072-.836 3.163-2.288 6.64-2.53 9.907-.278 3.735 1.186 8.094 1.731 11.795.533 3.621 1.102 7.24 1.696 10.852.18 1.094.102 3.187 1.234 3.744 5.303 2.606 11.346-2.451 14.522-6.103 1.056-1.213 2.69-2.817 2.873-4.482.41-3.72-.246-7.856-.643-11.559-1.037-9.686-3.205-19.221-6.002-28.544-1.223-4.074-2.099-10.269-4.652-13.682Z"
          fill="#979797"
        />
        <Path
          id="CALVES"
          d="M146.492 502.701c-11.057 15.44-16.852 33.519-18.143 52.37-.517 7.549.861 14.932.923 22.41h.236c4.047-12.439 11.418-23.788 14.996-36.328 2.115-7.41 1.988-15.713 1.988-23.354 0-3.456-.081-6.924.004-10.38.037-1.521.607-3.262-.004-4.718ZM217.026 504.353c0 11.125-1.28 22.703.574 33.733 1.266 7.53 5.635 14.834 8.789 21.703 2.243 4.888 3.822 10.818 6.678 15.333 1.557-5.22 1.187-11.618.952-16.984-.575-13.138-3.34-25.845-8.501-37.98-2.21-5.197-4.753-11.517-8.492-15.805Z"
          fill="#979797"
        />
      </Svg>
      

)}

export default MuscleSvgComponent